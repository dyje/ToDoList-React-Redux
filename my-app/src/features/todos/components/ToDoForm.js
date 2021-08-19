import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { createTodo } from '../../apis/todos';
import {AddToDo} from "..//reducers/ToDosSlice";
import {Button, message} from 'antd';
import "../styles/ToDoForm.css";

function ToDoForm(){
    const [inputText, setText] = useState("");
    const dispatch = useDispatch(); 
    
    function handleInputTextChange(event){
        setText(event.target.value);
    }

    function handleInputTextAdd(){
        if (inputText === ""){
            message.error("Please fill in To Do item.");
        }else{
            createTodo(inputText).then((response)=> {
                dispatch(AddToDo(response.data));
            })
            setText("");
            message.success("ToDo item added!");
        }
        
    }

    return (
        <div>
            <div className='input'>
            <input
                type = "text"
                placeholder = "Input new ToDo item"
                value = {inputText}
                onChange = {handleInputTextChange}
            ></input>
            <Button type="primary" onClick= {handleInputTextAdd}>ADD</Button>
            </div>
        </div>
    )
}

export default ToDoForm

