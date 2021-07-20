import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext';

function CompleteAllTodos() {

    const { todos, setTodos } = useContext(TodosContext);

    let checkAll = (event) => {
        let temp = [...todos].map(todo => {
            todo.isComplete = true;
            return todo;
        });
        setTodos(temp);
    };

    let uncheckAll = (event) => {
        let temp = [...todos].map(todo => {
            todo.isComplete = false;
            return todo;
        });
        setTodos(temp);
    };

    return (
        <div className="flex items-center space-x-2 ">
            <div className="button" onClick={checkAll}>
                Check All
            </div>
            <div className="button" onClick={uncheckAll}>
                Uncheck All
            </div>
        </div>
    )
}

export default CompleteAllTodos;
