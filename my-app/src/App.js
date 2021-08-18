import './App.css';
import TodoGroup from './features/todos/components/ToDoGroup';
import TodoList from './features/todos/components/ToDoList';
import DoneList from './features/todos/components/DoneList';
import NotFoundPage from './features/notFound/NotFoundPage';

import {Route, Link, BrowserRouter, Switch, HashRouter} from 'react-router-dom';
import React from 'react';

function App() {
  return (
    <React.Fragment>
        <header></header>
      <BrowserRouter>
        <ul>
          <Link to="/">go to the todo list page</Link>
          <Link to="/done">go to the done list page</Link>
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
