import express, { type Request, type Response, type NextFunction } from 'express';
import { todosRouter } from './feature/todos/todos.routes.ts';
import { pool } from './db/pool.ts';

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

app.get('/health/db', async (_req, res, next) => {
  try {
    const result = await pool.query('SELECT now() AS current_time');

    res.json({
      status: 'ok',
      databaseTime: result.rows[0].current_time,
    });
  } catch (error) {
    next(error);
  }
});

app.use('/todos', todosRouter);

app.use((error: Error, _req: Request, res: Response, _next: NextFunction) => {
  console.error(error);

  res.status(500).json({
    message: 'Something went wrong',
  });
});
