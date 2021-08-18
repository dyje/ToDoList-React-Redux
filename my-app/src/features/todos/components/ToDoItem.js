import React from 'react'
// import {initialTodoList} from '../../../common/constants/constants';
// import {getTodoById} from '../../../common/utils/utils';
import {selectTodoById, ToggleToDo} from '../reducers/ToDosSlice';
import {useSelector, useDispatch} from 'react-redux';
import "../styles/items.css";

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    //const todo = getTodoById(initialTodoList, props.itemId);
    const dispatch = useDispatch();
    const doneStatus = todo.done ? "done" : "";

    function handleToggle(){
        dispatch(ToggleToDo(props.itemId));
    }

    function handleRemove(){

    }
    return (
        <div>
            <ul>
                <li onClick={handleToggle}><span className={doneStatus}>{todo.text}</span>
                <span onClick={handleRemove}>X</span>
                </li>
            </ul>
        </div>
    )
}

export default TodoItem