import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todo_slice";

export const store = configureStore({
    reducer: todoReducer,
});
