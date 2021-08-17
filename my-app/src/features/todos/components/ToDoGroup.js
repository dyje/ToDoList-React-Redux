import React from 'react'
import TodoItem from './ToDoItem'
import {initialTodoList} from '../../../common/constants/constants';
import {getAllTodoIds} from '../../../common/utils/utils';
import {selectTodoIds } from '../reducers/ToDosSlice';
import {useSelector} from 'react-redux';

function TodoGroup() {
    const todoIds = useSelector(selectTodoIds);
    return (
        <div>
            {
                // getAllTodoIds(initialTodoList).map((id) => (
                //     <TodoItem key={id} itemId={id}/>
                //     ))
                todoIds.map((id) => (
                    <TodoItem key={id} itemId={id}/>
                ))
            }
        </div>
    )
}

export default TodoGroup