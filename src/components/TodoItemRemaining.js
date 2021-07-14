import React from 'react'
import PropTypes from 'prop-types';

TodoItemRemaining.prototypes = {
    todosCount: PropTypes.func.isRequired,
}

function TodoItemRemaining(props) {


    let todosCount = () => {
        return props.todos.filter((todo) => {
            return todo.isComplete === false
        }).length;
    }

    return (
        <span>{todosCount()} items remaining</span>
    )
}

export default TodoItemRemaining;