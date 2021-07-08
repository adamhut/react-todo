import React, { Component } from 'react';

export default class AppClass extends Component {
    constructor(props){
        super(props);
        this.state = {
          todos: [
            {
              id: 1,
              title: 'Finish React Series',
              isComplete: true,
            },
            {
              id: 2,
              title: 'Go Grocery',
              isComplete: false,
            },
            {
              id: 3,
              title: 'Take Over World',
              isComplete: false,
            },
          ],
        };
    }



  render() {



    return (
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <form action="#" onSubmit={addTodo}>
            <input
              type="text"
              ref={todoRef}
              className="todo-input"
              placeholder="What do you need to do?"
            />
          </form>

          <ul className="todo-list">
            {this.state.todos.map((todo, index) => {
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
                      <span
                        className={`todo-item-label transition-all duration-500 ease-in-out ${
                          todo.isComplete ? 'line-through' : ''
                        }`}
                      >
                        {todo.title}
                      </span>
                    </label>
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
              );
            })}
          </ul>

          <div className="check-all-container">
            <div>
              <div className="button" onClick={checkAll}>
                Check All
              </div>
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
}
