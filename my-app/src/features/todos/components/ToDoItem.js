import React from 'react'
// import {initialTodoList} from '../../../common/constants/constants';
// import {getTodoById} from '../../../common/utils/utils';
import {selectTodoById, ToggleTodo} from '../reducers/ToDosSlice';
import {useSelector, useDispatch} from 'react-redux';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    //const todo = getTodoById(initialTodoList, props.itemId);
    const dispatch = useDispatch();


    return (
        <div>
            <ul>
                <li>{todo.text}
                <span
                    ></span>
                </li>
            </ul>
        </div>
    )
}

export default TodoItem