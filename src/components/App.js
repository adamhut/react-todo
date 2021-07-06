import { useState } from 'react';

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

  let changeState= (id)=>{
    console.log(id);
  };

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <form action="#">
          <input
            type="text"
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
                      <input type="checkbox" checked={todo.isComplete} onChange={changeState(todo.id)} />
                      <span className={`todo-item-label  ${todo.isComplete ? 'line-through':''}` }>{todo.title}</span>
                      {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
                    </div>
                    <button className="x-button">
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


          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">Finish React Series</span>
              {/* <input type="text" className="todo-item-input" value="Finish React Series" /> */}
            </div>
            <button className="x-button">
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
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label line-through">
                Go to Grocery
              </span>
              {/* <input type="text" className="todo-item-input" value="Go to Grocery" /> */}
            </div>
            <button className="x-button">
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
          <li className="todo-item-container">
            <div className="todo-item">
              <input type="checkbox" />
              <span className="todo-item-label">Do other thing</span>
              {/* <input type="text" className="todo-item-input" value="Do other thing /> */}
            </div>
            <button className="x-button">
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
        </ul>

        <div className="check-all-container">
          <div>
            <div className="button">Check All</div>
          </div>

          <span>3 items remaining</span>
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