import React, { useContext } from 'react'
import { TodosContext } from '../context/TodosContext';


function TodoClearCompleted() {

    const { todos, setTodos } = useContext(TodosContext);

    let clearComplete = (event) => {
        let temp = [...todos].filter(todo => {
            return todo.isComplete === false;
        });
        setTodos(temp);
    };

    return (
        <button className="button" onClick={clearComplete}>Clear completed</button>
    )
}

export default TodoClearCompleted;