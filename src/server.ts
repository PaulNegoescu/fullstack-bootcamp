import { app } from './app.ts';

const PORT = process.env.PORT || 3000;

app.listen(PORT, (error) => {
  if (!error) {
    console.log(`The server started on port ${PORT}: http://localhost:${PORT}`);
    return;
  }

  console.error(error.message);
});
