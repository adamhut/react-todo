import React, { Component } from 'react';

export default class AppClass extends Component {
  todoRef = React.createRef();
  constructor(props) {
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
      todoId: 1,
    };
  }
  componentDidMount() {
    let currentMaxId = 0;
    this.state.todos.forEach((todo) => {
      currentMaxId = currentMaxId < todo.id ? todo.id : currentMaxId;
    });
    this.setState({ todoId: currentMaxId });
  }

  addTodo = (event) => {
    event.preventDefault();
    console.log(this.todoRef.current.value);
    let nextId = this.state.todoId + 1;

    const todo = {
      id: nextId,
      title: this.todoRef.current.value,
      isComplete: false,
    };

    this.setState({ todos: [...this.state.todos, todo] });

    this.setState({ todoId: nextId });

    event.currentTarget.reset();
  };
  changeState = (event) => {
    let temp = [...this.state.todos];
    temp = temp.map((todo) => {
      //  console.log(event.target);
      if (todo.id === event.target.value) {
        todo.isComplete = !todo.isComplete;
      }

      return todo;
    });
    this.setState({ todos: temp });
  };
  handleDelete = (id) => {
    console.log(id);
    let todos = [...this.state.todos].filter((item) => item.id !=== id);
    this.setState({ todos });
  };
  checkAll = () => {
    let todos = [...this.state.todos].map((item) => {
      item.isComplete = true;
      return item;
    });
    this.setState({ todos });
  };
  clearComplete = () => {
    let todos = [...this.state.todos].filter(
      (todo) => todo.isComplete === false
    );
    this.setState({ todos });
  };
  todosCount = () => {
    return this.state.todos.filter((todo) => todo.isComplete === false).length;
  };
  render() {
    return (
      <div className="todo-app-container">
        <div className="todo-app">
          <h2>Todo App</h2>
          <form action="#" onSubmit={this.addTodo}>
            <input
              type="text"
              ref={this.todoRef}
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
                        onChange={this.changeState}
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
                  <button
                    className="x-button"
                    onClick={() => this.handleDelete(todo.id)}
                  >
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
              <div className="button" onClick={this.checkAll}>
                Check All
              </div>
            </div>

            <span>{this.todosCount()} items remaining</span>
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
              <button className="button" onClick={this.clearComplete}>
                Clear completed
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
