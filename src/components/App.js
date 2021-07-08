import { useState,createRef,useEffect } from 'react';

import '../reset.css';
import '../App.css';

function App() {
  const [todos, setTodos]  = useState([
    {
      id:1,
      title: 'Finish React Series',
      isComplete:true,
    },
    {
      id:2,
      title: 'Go Grocery',
      isComplete:false,
    },
    {
      id:3,
      title: 'Take Over World',
      isComplete:false,
    }
  ]);

  const [todoId, setTodoId]  = useState();

  useEffect(() => {
      let currentMaxId =0
      todos.forEach((todo)=>{
        currentMaxId = currentMaxId<todo.id ? todo.id :currentMaxId;
      });
      setTodoId(currentMaxId);
      return ;
  }, []);

  const [todoInput, setTodoInput] = useState('');

  let handleInput = (event)=>{
    setTodoInput(event.target.value);
  }

  let todosCount = ()=>{
    return todos.filter((todo)=>{
      return todo.isComplete===false
    }).length;
  }

  let checkAll = (event)=>{
    let temp = [...todos].map(todo=>{
      todo.isComplete = true;
      return todo;
    });
    setTodos(temp);
  };

  let changeState= (event)=>{
    let temp = [...todos];
    temp = temp.map(todo=>{
      //  console.log(event.target);
      if(todo.id == event.target.value)
      {
          todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    setTodos(temp);
  };

  let addTodo=(event)=>{
    event.preventDefault();

    if(todoInput.trim().length === 0)
    {
      return ;
    }

    let todo ={
      id: todoId+1,
      title: todoInput,
      isComplete:false,
    }

    setTodos( [...todos,todo]);
    setTodoId(todoId+1);
    setTodoInput('');
  };

  let handleRemove=(id)=>{
    let newTodo =todos.filter(item => item.id !== id);
    setTodos(newTodo);
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
             todos.map((todo,index) => {
                return (
                  <li className="todo-item-container" key={index}>
                    <div className="todo-item ">
                      <label htmlFor={`todo${index}`}>
                        <input
                          type="checkbox"
                          id={`todo${index}`}
                          onChange={changeState}
                          checked={todo.isComplete}
                          value={todo.id}
                        />
                        <span className={`todo-item-label transition-all duration-500 ease-in-out ${todo.isComplete ? 'line-through':''}` }>{todo.title}</span>
                      </label>
                    </div>
                    <button className="x-button" onClick={()=>handleRemove(todo.id)}>
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
            <button className="button">Clear completed</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;