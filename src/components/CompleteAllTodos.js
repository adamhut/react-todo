import React from 'react'
import PropTypes from 'prop-types';


CompleteAllTodos.prototypes = {
    checkAll: PropTypes.func.isRequired,
}

function CompleteAllTodos(props) {
    return (
        <div>
            <div className="button" onClick={props.checkAll}>Check All</div>
        </div>
    )
}

export default CompleteAllTodos;
