import React, { useState } from 'react'
import PropTypes from 'prop-types';
import TodoItemRemaining from './TodoItemRemaining';
import TodoClearCompleted from './TodoClearCompleted';
import CompleteAllTodos from './CompleteAllTodos';
import TodoFilters from './TodoFilters';

TodoList.prototypes = {
    todos: PropTypes.object,
    todoFilter:PropTypes.func,
    completeTodo: PropTypes.func,
    markAsEditing: PropTypes.func,
    updateTodo: PropTypes.func,
    cancelEdit: PropTypes.func,
    handleRemove: PropTypes.func,
    clearComplete: PropTypes.func,
    todosFilter:PropTypes.func,
};

function TodoList(props) {

    const [filter, setFilter] = useState('all');

    let updateFilter = (filter) => {

        setFilter(filter);
    }

    return (
        <>
            <ul className="todo-list">
                {
                    props.todosFilter(filter).map((todo, index) => {
                        return (
                            <li className="todo-item-container" key={index}>
                                <div className="todo-item flex items-center cursor-pointer w-full">

                                        <input
                                            type="checkbox"
                                            id={`todo${index}`}
                                            onChange={() => props.completeTodo(todo.id) }
                                            checked={todo.isComplete}
                                            value={todo.id}
                                        />

                                        {!todo.isEditing && (
                                            <span
                                                onDoubleClick={() => { props.markAsEditing(todo.id) }}
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
                                                onBlur={(event) => { props.updateTodo(event, todo.id) }}
                                                // onChange={(event) => { updateTodo(event, todo.id) }}
                                                onKeyDown={(event) => {
                                                    if (event.key === 'Enter') {
                                                        props.updateTodo(event, todo.id)
                                                    } else if (event.key === 'Escape') {
                                                        props.cancelEdit(todo.id)
                                                    }
                                                    // console
                                                }}
                                                defaultValue={todo.title}
                                                autoFocus
                                            />
                                        )}

                                </div>
                                <button className="x-button" onClick={() => props.handleRemove(todo.id)}>
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

            <div className="check-all-container">

                    <CompleteAllTodos checkAll={props.checkAll}/>
                    {/* <div className="button" onClick={props.checkAll}>Check All</div> */}

                <TodoItemRemaining todos={props.todos}/>
                {/* <span>{todosCount()} items remaining</span> */}

            </div>

            <div className="other-buttons-container">
                <TodoFilters
                    updateFilter={updateFilter}
                    filter={filter}
                    setFilter={setFilter}
                />
                <div>
                    <TodoClearCompleted clearComplete={props.clearComplete}/>
                    {/* <button className="button" onClick={props.clearComplete}>Clear completed</button> */}
                </div>
            </div>
        </>
    )
}



export default TodoList;
