import React from 'react'
import PropTypes from 'prop-types';

TodoClearCompleted.prototypes = {
    clearComplete: PropTypes.func.isRequired,
}

function TodoClearCompleted(props) {


    return (
        <button className="button" onClick={props.clearComplete}>Clear completed</button>
    )
}

export default TodoClearCompleted;