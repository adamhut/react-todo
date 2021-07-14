import React from 'react'
import PropTypes from 'prop-types';

TodoFilters.prototypes = {
    updateFilter: PropTypes.func.isRequired,
    filter:PropTypes.string.isRequired,
}


function TodoFilters(props) {

    return (
        <div>
            <button
                className={`button filter-button ${props.filter === 'all' ? 'filter-button-active' : ''}`}
                onClick={() => { props.updateFilter('all') }}
            >
                All
            </button>
            <button
                className={`button filter-button ${props.filter === 'active' ? 'filter-button-active' : ''}`}
                onClick={() => { props.updateFilter('active') }}>
                Active
            </button>
            <button
                className={`button filter-button ${props.filter === 'completed' ? 'filter-button-active' : ''}`}
                onClick={() => { props.updateFilter('completed') }}
            >
                Completed
            </button>
        </div>
    )
}

export default TodoFilters
