import React, { useMemo, useContext }from 'react'
import { TodosContext } from '../context/TodosContext';


function TodoItemRemaining() {

    const { todos } = useContext(TodosContext);

    let todosCount = () => {
        return todos.filter((todo) => {
            return todo.isComplete === false
        }).length;
    }
    const remaining = useMemo(todosCount, [todos])

    return (
        <span>{ remaining } items remaining</span>
    )
}

export default TodoItemRemaining;