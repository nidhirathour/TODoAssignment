import React from 'react'
import './CSS files/TodoLogics.css'
import InputTodo from './InputTodo'
import TodosList from './TodosList'

const TodoLogics = () => {
  return (
    <div className='logicContainer'>
        <InputTodo/>
        <TodosList/>
    </div>
  )
}

export default TodoLogics