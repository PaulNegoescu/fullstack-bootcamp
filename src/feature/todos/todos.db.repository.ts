import { pool } from '../../db/pool.ts';
import type { Todo } from './types';

export async function findAllTodos(): Promise<Todo[]> {
  const result = await pool.query(`
    SELECT id, title, completed, created_at, updated_at
    FROM todos 
    ORDER BY created_at DESC
  `);

  return result.rows;
}

export async function findTodoById(id: string): Promise<Todo | null> {
  const result = await pool.query(`
    SELECT id, title, completed, created_at, updated_at
    FROM todos 
    WHERE id = $1
  `, [id]);

  const row = result.rows[0];

  if(!row) {
    return null;
  }

  return row;
}

export async function createTodo({ title }: { title: string }) {
  const result = await pool.query(`
    INSERT INTO todos (id, title)
    VALUES (gen_random_uuid(), $1)
    RETURNING id, title, completed, created_at, updated_at
  `, [title]);
  
  return result.rows[0];
}

export async function updateTodo(
  id: string,
  { title, completed }: { title?: string; completed?: boolean },
): Promise<Todo | null> {
  const todo = await findTodoById(id);
 
  if (!todo) {
    return null;
  }

  const newTitle = title ?? todo.title;
  const newCompleted = completed ?? todo.completed;

  const result = await pool.query(
    `
      UPDATE todos
      SET title = $1,
          completed = $2,
          updated_at = now()
      WHERE id = $3
      RETURNING id, title, completed, created_at, updated_at
    `,
    [newTitle, newCompleted, id]
  )

  return result.rows[0];
}

export async function deleteTodo(id: string) {
  const result = await pool.query(`
      DELETE FROM todos 
      WHERE id = $1
    `, [id]);

  return Number(result.rowCount) > 0;
}
