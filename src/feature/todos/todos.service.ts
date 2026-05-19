import { BadRequestError } from '../../errors.ts';
import {
  findAllTodos,
  findTodoById,
  createTodo as createTodoRepository,
  updateTodo as updateTodoRepository,
  deleteTodo as deleteTodoRepository
} from './todos.repository.ts';
import type { Todo } from './types.ts';

export async function getTodos() {
  return findAllTodos();
}

export async function getTodoById(id: string) {
  return findTodoById(id);
}

export async function createTodo(title: string) {
  const newTitle = validateTitle(title);

  return createTodoRepository({ title: newTitle });
}

export async function updateTodo(id: string, todo: Partial<Omit<Todo, 'id'>>) {
  const existingTodo = await findTodoById(id);

  if (!existingTodo) {
    return null;
  }

  const updatedTodo: Partial<Todo> = {};

  if (todo.title) {
    const checkedTitle = validateTitle(todo.title);
    if (checkedTitle) {
      updatedTodo.title = checkedTitle;
    }
  }

  if (typeof todo.completed === 'boolean') {
    updatedTodo.completed = todo.completed;
  }

  return updateTodoRepository(id, updatedTodo);
}

export async function deleteTodo(id: string) {
  return deleteTodoRepository(id);
}

function validateTitle(title: string) {
  const trimmed = title.trim();
  if (trimmed === '') {
    throw new BadRequestError('Title cannot be empty');
  }

  return trimmed;
}
