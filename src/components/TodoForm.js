import React, { useState } from 'react'
import PropTypes from 'prop-types';

TodoForm.prototypes = {
    addTodo: PropTypes.func.isRequired,
};

function TodoForm(props) {



    const [todoInput, setTodoInput] = useState('');

    let handleInput = (event) => {
        setTodoInput(event.target.value);
    }

    let handleSubmit = (event) => {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
            return;
        }

        props.addTodo(todoInput);
        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={ handleSubmit }>
            <input
                type="text"
                // ref={todoRef}
                value={todoInput}
                onChange={handleInput}
                className="todo-input"
                placeholder="What do you need to do?"
            />
        </form>
    )
}




export default TodoForm;