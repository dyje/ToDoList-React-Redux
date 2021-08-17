import {configureStore} from "@reduxjs/toolkit";
import todosReducer from "../features/todos/reducers/ToDosSlice";

const store = configureStore({
    reducer:{
        todoList: todosReducer
    }
});

export default store;