import React from 'react'
import { Task } from '../Task/Task';
import s from './Form.module.css'

export const Form = ({ addTask, setValue, todo, value, deleteTask, doneTask }) => {
  return (
    <>
      <div className={s.container}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addTask();
          }}
        >
          <input
            type="text"
            className={s.input_task}
            placeholder="add task"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <button className={s.add}>Добавить</button>
        </form>
      </div>
      <ul className={`${s.list} ${!todo.length ? s.list_block : null}`}>
        {todo.map((el) => (
          <Task
            value={el.text}
            key={el.id}
            id={el.id}
            deleteTask={deleteTask}
            doneTask={doneTask}
            isDone={el.isDone}
          />
        ))}
      </ul>
    </>
  );
};
