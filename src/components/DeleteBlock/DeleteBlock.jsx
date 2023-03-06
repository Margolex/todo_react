import React from 'react'
import s from "./DeleteBlock.module.css";

export const DeleteBlock = ({ todo, deleteSelected, deleteAll }) => {
  return (
    <div className={s.box_delete}>
      <button className={s.delete_completed} onClick={() => deleteSelected()}>
        Удалить завершенные
      </button>
      <button className={s.delete_all} onClick={() => deleteAll()}>
        Удалить все
      </button>
    </div>
  );
};
