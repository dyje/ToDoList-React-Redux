import { createSlice, createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import {v4 as uuid} from "uuid";

const todosAdapter = createEntityAdapter();
const initialState = todosAdapter.getInitialState({
    ids: [],
    entities: {
        
    },
});

const todosSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        AddToDo(state, action){
            todosAdapter.addOne(state, action.payload);
        },
        ToggleToDo(state, action){
            todosAdapter.updateOne(state, {
                id: action.payload,
                changes: {
                  done: !state.entities[action.payload].done
                }
              })
        },
        RemoveToDo(state,action){
            todosAdapter.removeOne(state, action.payload);
        },
        AddToDos(state, action){
            todosAdapter.addMany(state, action.payload);
        }
    }
});

export default todosSlice.reducer;

export const {selectAll:selectTodos, selectIds: selectTodoIds, selectById: selectTodoById} = todosAdapter.getSelectors((state) => state.todoList);
export const {AddToDo, ToggleToDo, RemoveToDo, AddToDos} = todosSlice.actions;

export const doneitems = createSelector (selectTodos, todos => todos.filter((todo) => todo.done));