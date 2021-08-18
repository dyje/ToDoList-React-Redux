import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import { createTodo } from '../../apis/todos';
import {AddToDo} from "..//reducers/ToDosSlice";
import {Button} from 'antd';

function ToDoForm(){
    const [inputText, setText] = useState("");
    const dispatch = useDispatch(); 
    
    function handleInputTextChange(event){
        setText(event.target.value);
        //console.log(event.target.value);
    }

    function handleInputTextAdd(){
        createTodo(inputText).then((response)=> {
            dispatch(AddToDo(response.data));
        })
        //console.log("Input text to be added: ", inputText);
        setText("");
    }

    return (
        <div>
            <div>
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

