import React, {useState} from 'react';
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
    const [isModalVisible, setIsModalVisible] = useState(false);

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

    function handleTodoChange (event){
        setTodo(event.target.value);
    }

    const showModal = (event) =>{
        setIsModalVisible(true);
        event.stopPropagation();
    }
    
    const handleCancel = (event) => {
        setIsModalVisible(false);
    }

    const handleConfirm = (event) => {
        if (inputTodo == ''){
            setIsModalVisible(false);
        }else{
            updateTodo(props.itemId, {text: inputTodo}).then((response) => {
            dispatch(UpdateTodo({id:props.itemId, updateTodo: response.data}));
        });
        event.stopPropagation();
    }
}
    return (
        <div>
            <table>
                <ul className={doneStatus} 
                    onClick={handleToggle}>
                        <div className='list'> 
                            <span>
                            {todo.text}
                            </span>
                            <span><Button className='editBtn' onClick={showModal} style={{ "background-color": "#fa8c16", borderColor: "#fa8c16"}}><EditOutlined/></Button></span>
                            <span>
                            <Button type='danger' className='removeBtn' onClick={handleRemove}>X </Button> 
                            </span>
                        </div>
                </ul>
                <Modal title="Edit" visible={isModalVisible} onCancel={handleCancel} onOk={handleConfirm}>
                    <input
                    type = "text"
                    placeholder = {todo.text}
                    value = {inputTodo}
                    onChange = {handleTodoChange}></input>
                </Modal>
            </table>
        </div>
    )
}

export default TodoItem