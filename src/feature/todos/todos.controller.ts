import {type Request, type Response, type NextFunction} from 'express';
import {
  getTodos as getTodosService,
  getTodoById as getTodoByIdService,
  createTodo as createTodoService,
  updateTodo as updateTodoService,
  deleteTodo as deleteTodoService,
} from './todos.service.ts';

export async function getTodos(_req: Request, res: Response, next: NextFunction) {
  try {
    const todos = await getTodosService();
    res.json(todos);
  } catch (error) {
    next(error);
  }
}

export async function getTodoById(req: Request<{id: string}>, res: Response, next: NextFunction) {
  try {
    const todo = await getTodoByIdService(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: 'Todo not found',
      });
    }

    res.json(todo);
  } catch (error) {
    next(error);
  }
}

export async function createTodo(req: Request, res: Response, next: NextFunction) {
  try {
    const newTodo = await createTodoService(req.body.title);

    res.status(201).json(newTodo);
  } catch (error) {
    next(error);
  }
}

export async function updateTodos(req: Request<{id: string}>, res: Response, next: NextFunction) {
  try {
    const updatedTodo = await updateTodoService(req.params.id, {
      title: req.body.title as string,
      completed: req.body.completed as boolean,
    });

    if (!updatedTodo) {
      return res.status(404).json({
        message: 'Todo not found',
      });
    }

    res.json(updatedTodo);
  } catch (error) {
    next(error);
  }
}
export async function deleteTodos(req: Request<{id: string}>, res: Response, next: NextFunction) {
  try {
    const deletedTodo = await deleteTodoService(req.params.id);

    if (!deletedTodo) {
      return res.status(404).json({
        message: 'Todo not found',
      });
    }

    res.status(204).json({});
  } catch (error) {
    next(error);
  }
}
