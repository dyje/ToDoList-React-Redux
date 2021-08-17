import React from 'react'
import TodoForm from './ToDoForm'
import TodoGroup from './ToDoGroup'

function TodoList() {
    return (
        <div>
            <h1>To Do List:</h1>
            <TodoGroup />
            <TodoForm/>
        </div>
    )
}

export default TodoList