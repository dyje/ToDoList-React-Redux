import React, {useState} from 'react'
import {selectTodoById, UpdateTodo, RemoveToDo} from '../reducers/ToDosSlice';
import {useSelector, useDispatch} from 'react-redux';
import "../styles/ToDoItem.css";
import {Button, Modal} from 'antd';
import { deleteTodo, updateTodo } from '../../apis/todos';
import {EditOutlined} from '@ant-design/icons';

function TodoItem(props) {
    const todo = useSelector(state => selectTodoById(state, props.itemId))
    const dispatch = useDispatch();
    const doneStatus = todo.done ? "done" : "";
    const [inputTodo, setTodo] = useState("");

    function handleToggle(){
        updateTodo(props.itemId, {id: todo.id, text: todo.text, done: !todo.done}).then((response) => {
        dispatch(UpdateTodo({id:props.itemId, updateTodo: response.data}));
    });
    }

    function handleRemove(event){
        deleteTodo(props.itemId).then((response) => {
            dispatch(RemoveToDo(response.data));
        })
        event.stopPropagation();
    }
    return (
        <div>
            <table>
                <ul className={doneStatus} 
                    onClick={handleToggle}>
                        <div className='list'> 
                            <span>
                            {todo.text}
                            <Button type='' className='editBtn' style={{ "background-color": "#fa8c16", borderColor: "#fa8c16"}} onClick={handleUpdate}><EditOutlined/></Button>
                            <Button type='danger' className='removeBtn' onClick={handleRemove}>X </Button> 
                            </span>
                        </div>
                </ul>
            </table>
        </div>
    )
}

export default TodoItem