import React, { useContext, useState } from 'react'
import TodoItemRemaining from './TodoItemRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import TodoFilters from './TodoFilters';
import useToggle from '../hooks/useToggle';
import { TodosContext } from '../context/TodosContext';


function TodoList() {

    const {todos, setTodos,todosFilter, filter, setFilter} = useContext(TodosContext);

    const [isFeaturesOneVisible, setFeaturesOneVisible] = useToggle(true);
    const [isFeaturesTwoVisible, setFeaturesTwoVisible] = useToggle(false);

    let markAsEditing = (id) => {
        const updatedTodo = todos.map(todo => {

            if (todo.id === id) {
                todo.isEditing = true;
            } else {
                todo.isEditing = false;
            }
            return todo;
        });
        setTodos(updatedTodo);
    };

    let cancelEdit = (id) => {
        const updatedTodo = todos.map(todo => {

            if (todo.id === id) {
                todo.isEditing = false;
            }
            return todo;
        });
        setTodos(updatedTodo);
    };


    let completeTodo = (id) => {
        const updatedTodo = todos.map(todo => {
            //  console.log(event.target);
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodo);
    };


    let handleRemove = (id) => {
        // let newTodo =todos.filter(item => item.id !== id);
        setTodos(todos.filter(item => item.id !== id));
    };

    let updateTodo = (event, id) => {
        console.log(event.target.value, id);

        const updatedTodo = todos.map(todo => {

            if (todo.id === id) {
                if (event.target.value.trim().length === 0) {
                    todo.isEditing = false;
                    return todo;
                }
                todo.title = event.target.value;
                todo.isEditing = false;
            }
            return todo;
        });
        setTodos(updatedTodo);
    }

    let handleKeyPress = (event, todoId) => {
        if (event.key === 'Enter') {
            updateTodo(event, todoId);
        }
    }

    return (
        <>
            <ul className="todo-list">
                {
                    todosFilter(filter).map((todo, index) => {
                        return (
                            <li className="todo-item-container" key={index}>
                                <div className="todo-item flex items-center cursor-pointer w-full">

                                        <input
                                            type="checkbox"
                                            id={`todo${index}`}
                                            onChange={() => completeTodo(todo.id) }
                                            checked={todo.isComplete}
                                            value={todo.id}
                                        />

                                        {!todo.isEditing && (
                                            <span
                                                onDoubleClick={() => { markAsEditing(todo.id) }}
                                                className={`todo-item-label transition-all duration-500 ease-in-out
                              ${todo.isComplete ? 'line-through' : ''}`}
                                            >
                                                {todo.title}
                                            </span>
                                        )}
                                        {todo.isEditing && (
                                            <input
                                                type="text"
                                                className="todo-item-input flex-1"
                                                onBlur={(event) => { updateTodo(event, todo.id) }}
                                                // onChange={(event) => { updateTodo(event, todo.id) }}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter') {
                                                        updateTodo(event, todo.id)
                                                    } else if (event.key === 'Escape') {
                                                        cancelEdit(todo.id)
                                                    }
                                                    // console
                                                }}
                                                defaultValue={todo.title}
                                                autoFocus
                                            />
                                        )}

                                </div>
                                <button className="x-button" onClick={() => handleRemove(todo.id)}>
                                    <svg
                                        className="x-button-icon"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                </button>
                            </li>
                        )
                    })
                }
            </ul>

            <div className="toggles-container my-10 space-x-3">
                <button className="button" onClick={setFeaturesOneVisible}>Features One Toggle</button>

                <button className="button" onClick={setFeaturesTwoVisible}>Features Two Toggle</button>
            </div>


            {
                isFeaturesOneVisible &&
                <div className="check-all-container">
                    <CompleteAllTodos/>
                    {/* <div className="button" onClick={props.checkAll}>Check All</div> */}
                    <TodoItemRemaining/>
                    {/* <span>{todosCount()} items remaining</span> */}
                </div>
            }

            {
                isFeaturesTwoVisible &&
                <div className="other-buttons-container">
                    <TodoFilters />
                    <div>
                        <TodoClearCompleted/>
                        {/* <button className="button" onClick={props.clearComplete}>Clear completed</button> */}
                    </div>
                </div>

            }

        </>
    )
}



export default TodoList;
