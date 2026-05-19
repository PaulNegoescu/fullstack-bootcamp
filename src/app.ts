import express, { type Request, type Response, type NextFunction } from 'express';
import { todosRouter } from './feature/todos/todos.routes.ts';

export const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('Hello from Express 2!');
});

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
  });
});

app.use('/todos', todosRouter);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);

  res.status(500).json({
    message: 'Something went wrong',
  });
});
