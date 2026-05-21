import { app } from './app.ts';
import { pool } from './db/pool.ts';

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, (error) => {
  if (!error) {
    console.log(`The server started on port ${PORT}: http://localhost:${PORT}`);
    return;
  }

  console.error(error.message);
});

function shutdown(signal: 'SIGINT' | 'SIGTERM') {
  console.log(`Received ${signal}. Closing server.`);

  server.close(async () => {
    await pool.end();  

    console.log('Database pool closed.');
    
    process.exit(0);
  });
}

process.on('SIGINT', shutdown);
process.on('SIGTERM', shutdown);
