import './App.css';
import TodoGroup from './features/todos/components/ToDoGroup';
import TodoList from './features/todos/components/ToDoList';
import DoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notFound/NotFoundPage';
import {Button} from 'antd';
import {useEffect} from 'react';
import {AddToDos} from './features/todos/reducers/ToDosSlice';
import { getTodos } from './features/apis/todos';
import { useDispatch } from 'react-redux';

import {Route, Link, BrowserRouter, Switch, HashRouter} from 'react-router-dom';
import React from 'react';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    document.title = "My To Do List";

    getTodos().then((response) => {
      dispatch(AddToDos(response.data));
  })
  }, []);

//   useEffect (() => {
//     getTodos().then((response) => {
//         dispatch(AddToDos(response.data));
//     })
// }, [])

  return (
    <React.Fragment>
        <header></header>
      <BrowserRouter>
        <ul className='top'>
          <Button type='primary' className='navToDo'><Link to="/">View ToDo List</Link></Button>
          <Button type='primary' className='navDone'><Link to="/done">View Done List</Link></Button>
        </ul>
        <Switch>
          <Route exact path= "/" component={TodoList}></Route>
          <Route exact path= "/done" component={DoneList}></Route>
          <Route exact path= "*" component={NotFoundPage}></Route>       
        </Switch>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
