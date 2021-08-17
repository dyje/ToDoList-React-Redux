import React from 'react'
import ToDoForm from './ToDoForm'
import TodoForm from './ToDoForm'
import TodoGroup from './ToDoGroup'

function TodoList() {
    return (
        <div>
            
            <div>
                <h1>To Do List:</h1>
                <ToDoForm/>
            </div>
            <div>
                <TodoGroup/>
            </div>
        </div>
    )
}

export default TodoList