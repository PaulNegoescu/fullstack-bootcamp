import { FaTrashAlt } from "react-icons/fa";
import type { Todo } from './types';

type Props = {
  todo: Todo;
  onDeleteTodo: (todo: Todo) => void;
};

export function TodoItem({ todo, onDeleteTodo }: Props) {
  function handleCompleteTodo(todo: Todo) {
    void fetch(`/api/todos/${todo.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ completed: !todo.completed }),
      headers: {
        'Content-Type': 'application/json',
      },
    });    
    todo.completed = !todo.completed;
  }

  async function handleDeleteTodo(todo: Todo) {
    await fetch(`/api/todos/${todo.id}`, {
      method: 'DELETE',
    });

    onDeleteTodo(todo);
  }

  return (
    <li>
      <label>
        <input
          type="checkbox"
          defaultChecked={todo.completed}
          onChange={() => handleCompleteTodo(todo)}
        />{' '}
        {todo.title}
      </label>{' '}
      <button type="button" onClick={() => handleDeleteTodo(todo)}><FaTrashAlt /></button>
    </li>
  );
}
