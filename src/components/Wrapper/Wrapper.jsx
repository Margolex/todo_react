import React from 'react'
import './Wrapper.css'

export const Wrapper = ({ children }) => {
  return (
  <>
    <h1>ToDo List</h1>
    <div className={"box"}>{children}</div>
  </>
)
}
