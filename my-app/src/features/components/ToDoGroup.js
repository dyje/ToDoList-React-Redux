import React from 'react'
import TodoItem from './ToDoItem'
import {initialTodoList} from '../../common/constants/constants';
import {getAllTodoIds} from '../../common/utils/utils';

function TodoGroup() {
    return (
        <div>
            List of To Do:
            {
                getAllTodoIds(initialTodoList).map((id) => (
                    <TodoItem key={id} itemId={id}/>
                    ))
            }
        </div>
    )
}

export default TodoGroup