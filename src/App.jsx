import { useState } from "react";
import Form from "./composants/Form/Form";
import Todo from "./composants/Todo/Todo";
import "./App.css";

function App({ tasks }) {
  const [task, setTask] = useState(tasks);

  const taskList = task?.map((task) => (
    <Todo id={task.id} text={task.text} key={task.id} deleteTask={deleteTask} />
  ));

  function addTask(text) {
    if (!text) return;
    const newTask = { id: `todo-${taskList.length + 1}`, text };
    setTask([...task, newTask]);
  }

  function deleteTask(id) {
    const remainingTasks = task.filter((tsk) => tsk.id != id);
    setTask(remainingTasks);
  }

  return (
    <div>
      <h1>La To-do List</h1>
      <Form addTask={addTask} />
      <ul>{taskList}</ul>
    </div>
  );
}

export default App;
