import { useState, createRef, useEffect } from 'react';

import '../reset.css';
import '../App.css';

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Finish React Series',
      isComplete: true,
      isEditing: false,
    },
    {
      id: 2,
      title: 'Go Grocery',
      isComplete: false,
      isEditing: false,
    },
    {
      id: 3,
      title: 'Take Over World',
      isComplete: false,
      isEditing: false,
    }
  ]);

  const [todoId, setTodoId] = useState();

  useEffect(() => {
    let currentMaxId = 0
    todos.forEach((todo) => {
      currentMaxId = currentMaxId < todo.id ? todo.id : currentMaxId;
    });
    setTodoId(currentMaxId);
    return;
  }, []);

  const [todoInput, setTodoInput] = useState('');

  let handleInput = (event) => {
    setTodoInput(event.target.value);
  }

  let todosCount = () => {
    return todos.filter((todo) => {
      return todo.isComplete === false
    }).length;
  }

  let checkAll = (event) => {
    let temp = [...todos].map(todo => {
      todo.isComplete = true;
      return todo;
    });
    setTodos(temp);
  };

  let clearComplete = (event) => {
    let temp = [...todos].filter(todo => {
      return todo.isComplete === false;
    });
    setTodos(temp);
  };

  let completeTodo = (id) => {
    const updatedTodo = todos.map(todo => {
      //  console.log(event.target);
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  let updateTodo = (event,id) => {
    console.log(event.target.value, id);

    const updatedTodo = todos.map(todo => {

      if (todo.id === id) {
        if (event.target.value.trim().length === 0) {
          todo.isEditing = false;
          return todo;
        }
        todo.title = event.target.value;
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodo);
  }

  let handleKeyPress = (event, todoId) => {
    if (event.key === 'Enter') {
      updateTodo(event, todoId);
    }
  }

  let changeState = (event) => {
    let temp = [...todos];
    temp = temp.map(todo => {
      //  console.log(event.target);
      if (todo.id == event.target.value) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    setTodos(temp);
  };

  let markAsEditing = (id) => {
    const updatedTodo = todos.map(todo => {

      if (todo.id === id) {
        todo.isEditing = true;
      } else {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

  let cancelEdit = (id) => {
    const updatedTodo = todos.map(todo => {

      if (todo.id === id) {
        todo.isEditing = false;
      }
      return todo;
    });
    setTodos(updatedTodo);
  };

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
  };

  let handleRemove = (id) => {
    // let newTodo =todos.filter(item => item.id !== id);
    setTodos(todos.filter(item => item.id !== id));
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
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

        <ul className="todo-list">
          {
            todos.map((todo, index) => {
              return (
                <li className="todo-item-container" key={index}>
                  <div className="todo-item ">
                    <label htmlFor={`todo${index}`} className="flex items-center cursor-pointer w-full">
                      <input
                        type="checkbox"
                        id={`todo${index}`}
                        onChange={() =>  completeTodo(todo.id) }
                        checked={todo.isComplete}
                        value={todo.id}
                      />

                      {!todo.isEditing && (
                          <span
                            onDoubleClick={() => { markAsEditing(todo.id) }}
                            className={`todo-item-label transition-all duration-500 ease-in-out
                          ${todo.isComplete ? 'line-through' : ''}`}
                          >
                            {todo.title}
                          </span>
                        )}
                      {todo.isEditing && (
                        <input
                          type="text"
                          className="todo-item-input flex-1"
                          onBlur={(event) => { updateTodo(event, todo.id) }}
                          // onChange={(event) => { updateTodo(event, todo.id) }}
                          onKeyDown={(event) => {
                            if (event.key === 'Enter')
                            {
                              updateTodo(event,todo.id)
                            } else if (event.key == 'Escape') {
                              cancelEdit( todo.id)
                            }
                            // console
                          }}
                          defaultValue={todo.title}
                          autoFocus
                        />
                      )}
                    </label>
                  </div>
                  <button className="x-button" onClick={() => handleRemove(todo.id)}>
                    <svg
                      className="x-button-icon"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </li>
              )
            })
          }
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button" onClick={checkAll}>Check All</div>
          </div>

          <span>{todosCount()} items remaining</span>
        </div>

        <div className="other-buttons-container">
          <div>
            <button className="button filter-button filter-button-active">
              All
            </button>
            <button className="button filter-button">Active</button>
            <button className="button filter-button">Completed</button>
          </div>
          <div>
            <button className="button" onClick={clearComplete}>Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;