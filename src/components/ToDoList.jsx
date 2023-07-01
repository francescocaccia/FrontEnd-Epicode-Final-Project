import React, { useState } from "react";
import { Button } from "react-bootstrap";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleClick = () => {
    if (newTask.length === 0) {
      alert("Inserire il nome del task");
    } else {
      addTask();
      setNewTask("");
    }
  };

  const addTask = () => {
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const handleComplete = index => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks[index] = `✓ ${updatedTasks[index]}`;
      return updatedTasks;
    });
  };

  const handleDelete = index => {
    setTasks(prevTasks => {
      const updatedTasks = [...prevTasks];
      updatedTasks.splice(index, 1);
      return updatedTasks;
    });
  };

  return (
    <div className="container">
      <div id="newTask">
        <input
          type="text"
          placeholder="Aggiungi un task qui"
          value={newTask}
          onChange={event => setNewTask(event.target.value)}
        />
        <Button id="addButton" onClick={handleClick}>
          Crea
        </Button>
      </div>
      <div id="tasks">
        {tasks.map((task, index) => (
          <div key={index} className="task">
            <span
              id="taskname"
              className={task.startsWith("✓") ? "completed" : ""}
              onClick={() => handleComplete(index)}
            >
              {task}
            </span>
            <Button className="delete" onClick={() => handleDelete(index)}>
              <i className="far fa-trash-alt"></i>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
