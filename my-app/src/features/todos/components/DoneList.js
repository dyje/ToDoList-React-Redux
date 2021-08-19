import React from 'react'
import { doneitems } from '../reducers/ToDosSlice';
import TodoItem from './ToDoItem';
import {useSelector} from 'react-redux';
import {CarryOutOutlined} from '@ant-design/icons';


function DoneList() {


    const doneItems = useSelector(doneitems);
    return (
        <div className="main">
            <div>
                <h1>Items Done: <CarryOutOutlined /></h1>
                {
                doneItems.map((doneItem) => (
                    <TodoItem key={doneItem.id} itemId={doneItem.id}/>
                ))
                }
            </div>
        </div>
    )
}

export default DoneList