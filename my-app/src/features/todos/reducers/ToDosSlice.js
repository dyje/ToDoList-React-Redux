import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
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
    reducers: {
        AddToDo(state, action){
            todosAdapter.addOne(state, {
                id: uuid(),
                text: action.payload,
                done: false,
            });
        },
        ToggleToDo(state, action){
            todosAdapter.updateOne(state, {
                id: action.payload,
                changes: {
                  done: !state.entities[action.payload].done
                }
              })
        }
    }
});

export default todosSlice.reducer;

export const {selectAll:selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const {AddToDo, ToggleToDo} = todosSlice.actions;

export const doneitems = createSelector (selectTodos, todos => todos.filter((todo) => todo.done));