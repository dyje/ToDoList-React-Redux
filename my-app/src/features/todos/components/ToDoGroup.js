import React from 'react'
import TodoItem from './ToDoItem'
import {selectTodoIds } from '../reducers/ToDosSlice';
import {useSelector} from 'react-redux';

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            {
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id}/>
                ))
            }
        </div>
    )
}

export default TodoGroup