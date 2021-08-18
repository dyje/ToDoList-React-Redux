import React from 'react'
import { doneitems } from '../reducers/ToDosSlice';
import TodoItem from './ToDoItem';
import {useSelector} from 'react-redux';


function DoneList() {


    const doneItems = useSelector(doneitems);
    return (
        <div>
            {
                // getAllTodoIds(initialTodoList).map((id) => (
                //     <TodoItem key={id} itemId={id}/>
                //     ))
                doneItems.map((doneItem) => (
                    <TodoItem key={doneItem.id} itemId={doneItem.id}/>
                ))
            }
        </div>
    )
}

export default DoneList