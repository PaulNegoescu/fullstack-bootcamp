import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Todo } from './types';
import { readFile, writeFile } from 'node:fs/promises';

const _filename = fileURLToPath(import.meta.url);
const _dirname = dirname(_filename);
const TODO_FILE_PATH = join(_dirname, 'data', 'todos.json');

async function readTodosFromFile(): Promise<Todo[]> {
  const fileContent = await readFile(TODO_FILE_PATH, 'utf8');

  return JSON.parse(fileContent);
}

async function writeTodosToFile(
  todos: { title: string; completed: boolean; id: string }[],
) {
  const json = JSON.stringify(todos, null, 2);

  await writeFile(TODO_FILE_PATH, json);
}

export async function findAllTodos() {
  return readTodosFromFile();
}

export async function findTodoById(id: string) {
  const todos = await readTodosFromFile();

  return todos.find((todo) => todo.id === id) ?? null;
}

export async function createTodo({ title }: { title: string }) {
  const todos = await readTodosFromFile();
  const newTodo = {
    id: crypto.randomUUID(),
    title: title,
    completed: false,
  };

  todos.push(newTodo);

  await writeTodosToFile(todos);

  return newTodo;
}

export async function updateTodo(
  id: string,
  { title, completed }: { title?: string; completed?: boolean },
) {
  const todos = await readTodosFromFile();
  const todo = todos.find((todo) => todo.id === id);
  

  if (!todo) {
    return null;
  }

  todo.title = title ?? todo.title;
  todo.completed = completed ?? todo.completed;

  await writeTodosToFile(todos);

  return todo;
}

export async function deleteTodo(id: string) {
  const todos = await readTodosFromFile();
  const filteredTodos = todos.filter((todo) => todo.id !== id);

  if(filteredTodos.length === todos.length) {
    return false;
  }

  await writeTodosToFile(filteredTodos);

  return true;
}
