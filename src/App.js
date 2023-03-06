import React, { useState } from "react";
import { DeleteBlock } from "./components/DeleteBlock/DeleteBlock";
import { Form } from "./components/Form/Form";
import { Wrapper } from "./components/Wrapper/Wrapper";

let savedTodos = JSON.parse(localStorage.getItem("todos")) ?? [];

function App() {
  const [todo, setTodo] = useState(savedTodos);
  const [value, setValue] = useState("");

// function saveToLS() {
//   localStorage.setItem("todos", JSON.stringify(todo));
// }

  function addTask() {
    
    if (value.length) {
      
      let newArr = [...todo,
        {
          id: new Date().toISOString(),
          text: value,
          isDone: false,
        },
      ];
      setTodo(newArr);
      setValue("");
       localStorage.setItem("todos", JSON.stringify(newArr));
    }
  }

  const deleteTask = (id) => {
    setTodo(todo.filter((el) => el.id !== id));
    localStorage.setItem("todos", JSON.stringify(todo));
  };



  const deleteSelected = () => {
    setTodo(todo.filter((el) => el.isDone === false));
    localStorage.setItem("todos", JSON.stringify(todo));
  };

  const doneTask = (id) => {
    setTodo(
      todo.map((el) => {
        if (el.id === id) {
          el.isDone = !el.isDone;
          return el;
        } else {
          return el;
        }
      })
    );
    localStorage.setItem("todos", JSON.stringify(todo));
  };

  const deleteAll = () => {
    setTodo([]);
    localStorage.setItem("todos", JSON.stringify(todo));
  };

  return (
    <Wrapper>
      <Form
        addTask={addTask}
        setValue={setValue}
        value={value}
        todo={todo}
        deleteTask={deleteTask}
        doneTask={doneTask}
      />
      <DeleteBlock
        todo={todo}
        deleteSelected={deleteSelected}
        deleteAll={deleteAll}
      />
    </Wrapper>
  );
}

export default App;
