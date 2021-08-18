import React from 'react'
// import {initialTodoList} from '../../../common/constants/constants';
// import {getTodoById} from '../../../common/utils/utils';
import {selectTodoById, ToggleToDo, RemoveToDo} from '../reducers/ToDosSlice';
import {useSelector, useDispatch} from 'react-redux';
import "../styles/ToDoItem.css";
import {Button} from 'antd';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    //const todo = getTodoById(initialTodoList, props.itemId);
    const dispatch = useDispatch();
    const doneStatus = todo.done ? "done" : "";

    function handleToggle(){
        dispatch(ToggleToDo(props.itemId));
    }

    function handleRemove(event){
        dispatch(RemoveToDo(props.itemId));
        event.stopPropagation();
    }
    return (
        <div>
            <ul className={doneStatus} 
                onClick={handleToggle}>
                <li>{todo.text}
                <Button type='danger' className='removeBtn' onClick={handleRemove}>X
                    {/* <span >X</span> */}
                    </Button>
                </li>
            </ul>
        </div>
    )
}

export default TodoItem