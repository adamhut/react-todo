import { useState, createRef, useEffect } from 'react';

import NoTodos from './NoTodos';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
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

  let addTodo = (todoInput) => {


    let todo = {
      id: todoId + 1,
      title: todoInput,
      isComplete: false,
    }

    setTodos([...todos, todo]);
    setTodoId(todoId + 1);

  };

  let handleRemove = (id) => {
    // let newTodo =todos.filter(item => item.id !== id);
    setTodos(todos.filter(item => item.id !== id));
  };

  let todosFilter = (filter) => {
    if (filter === 'all') {
      return todos;
    }
    if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete );
    }

    if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }

  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <h2>Todo App</h2>
        <TodoForm
          addTodo={addTodo}

        ></TodoForm>
        {todos.length > 0 ? (
          <TodoList
            todos={todos}
            completeTodo={completeTodo}
            checkAll={checkAll}
            clearComplete={clearComplete}
            updateTodo={updateTodo}
            handleKeyPress={handleKeyPress}
            changeState={changeState}
            markAsEditing={markAsEditing}
            cancelEdit={cancelEdit}
            handleRemove={handleRemove}
            todosFilter={todosFilter}
          ></TodoList>
        ) : (
              <NoTodos />
        )}

      </div>
    </div>
  );
}

export default App;