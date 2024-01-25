import { v4 as uuid } from "uuid";

function Todo() {
  const todos = [
    {
      task: "mow the yard",
      id: uuid(),
    },
    {
      task: "Work on Odin Project",
      id: uuid(),
    },
    {
      task: "feed the dog",
      id: uuid(),
    },
  ];

  return (
    <div>
      <h1>Todo list</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>{todo.task}</li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
