import React, {useState} from 'react';

function ToDoForm(){
    const [inputText, setText] = useState("");

    function handleInputTextChange(event){
        setText(event.target.value);
        console.log(event.target.value);
    }

    function handleInputTextAdd(){
        console.log("Input text to be added: ", inputText);
    }

    return (
        <div>
            <input
                type = "text"
                placeholder = "Input a new ToDo item"
                value = {inputText}
                onChange = {handleInputTextChange}
            ></input>
            <button
                onClick= {handleInputTextAdd}
            >Add</button>
        </div>
    )
}

export default ToDoForm