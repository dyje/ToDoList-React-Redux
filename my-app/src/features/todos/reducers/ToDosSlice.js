import { createSlice, createEntityAdapter } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [1],
    entities: {
        1: {
            id: "1",
            text: "To Do: Add input",
            done: false,
        },
    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {},
    reducers: {
        AddToDo(state, action){
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
        }
    }
});

export default todosSlice.reducer;

export const { selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const {AddToDo} = todosSlice.actions;