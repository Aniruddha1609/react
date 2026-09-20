import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todo_slice";
import AddTodo from "./AddTodo";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    let [isUpdated, setIsUpdated] = useState(false);
    const [input, setInput] = useState("");
    let [todoId, setTodoId] = useState("");
    if (isUpdated) {
        return (
            <form
                className="space-x-3 mt-12"
                onSubmit={(e) => {
                    e.preventDefault();
                    dispatch(updateTodo({ id: todoId, text: input }));
                    setIsUpdated(false);
                    setTodoId("");
                    setInput("");
                }}
            >
                <input
                    type="text"
                    className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                    placeholder="Enter updated Todo..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />
                <button
                    type="submit"
                    className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                >
                    Update
                </button>
            </form>
        );
    } else {
        return (
            <>
                <AddTodo></AddTodo>
                <ul className="list-none">
                    {todos.map((todo) => (
                        <li
                            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded mx-8"
                            key={todo.id}
                        >
                            <div className="text-white">{todo.text}</div>
                            <div className="flex justify-end">
                                <button
                                    onClick={() =>
                                        dispatch(removeTodo(todo.id))}
                                    className="text-white mr-6 bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                                >
                                    Delete
                                </button>
                                <button
                                    onClick={() => {
                                        setIsUpdated(true);
                                        setTodoId(todo.id);
                                    }}
                                    className="text-white bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
                                >
                                    Edit
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </>
        );
    }
}

export default Todos;
