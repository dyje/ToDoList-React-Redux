import React from 'react'
import { getTodos } from '../../apis/todos'
import ToDoForm from './ToDoForm'
import TodoGroup from './ToDoGroup'
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { AddToDo, selectTodos } from '../reducers/ToDosSlice';
import {AddToDos} from '../reducers/ToDosSlice';
import '../styles/ToDoList.css';
import {BarsOutlined} from '@ant-design/icons';

function TodoList() {

    const dispatch = useDispatch();
    useEffect (() => {
        getTodos().then((response) => {
            //console.log("response.data:", response)
            dispatch(AddToDos(response.data));
        })
    }, [])

    return (
        <body>
        <div className="main">
            <div>
                <h1>To Do List: <BarsOutlined /></h1>
                <ToDoForm/>
            </div>
            <div>
                <TodoGroup/>
            </div>
        </div>
        </body>
    )
}

export default TodoList