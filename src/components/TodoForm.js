import React, { useContext, useState } from 'react'
import { TodosContext } from '../context/TodosContext';


function TodoForm() {

    const { todos, setTodos, todoId, setTodoId} = useContext(TodosContext)

    const [todoInput, setTodoInput] = useState('');

    let handleInput = (event) => {
        setTodoInput(event.target.value);
    }

    let addTodo = (event) => {
        event.preventDefault();

        if (todoInput.trim().length === 0) {
            return;
        }

        let todo = {
            id: todoId + 1,
            title: todoInput,
            isComplete: false,
        }
        setTodos([...todos, todo]);
        setTodoId(todoId + 1);
        setTodoInput('');
    }

    return (
        <form action="#" onSubmit={addTodo}>
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