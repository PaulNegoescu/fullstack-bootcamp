import { Router } from 'express';
import { createTodo, deleteTodos, getTodoById, getTodos, updateTodos } from './todos.controller.ts';

export const todosRouter = Router();

todosRouter.get('/', getTodos);
todosRouter.get('/:id', getTodoById);
todosRouter.post('/', createTodo);
todosRouter.patch('/:id', updateTodos);
todosRouter.delete('/:id', deleteTodos);
