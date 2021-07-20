import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext';



function TodoFilters() {
    const { filter, setFilter} = useContext(TodosContext);

    let updateFilter = (filter) => {
        setFilter(filter);
    }

    return (
        <div>
            <button
                className={`button filter-button ${filter === 'all' ? 'filter-button-active' : ''}`}
                onClick={() => {
                    updateFilter('all')
                }}
            >
                All
            </button>
            <button
                className={`button filter-button ${filter === 'active' ? 'filter-button-active' : ''}`}
                onClick={() => {
                    updateFilter('active')
                }}>
                Active
            </button>
            <button
                className={`button filter-button ${filter === 'completed' ? 'filter-button-active' : ''}`}
                onClick={() => {
                    updateFilter('completed')
                }}
            >
                Completed
            </button>
        </div>
    )
}

export default TodoFilters
