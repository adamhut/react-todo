import { useState, useRef, useEffect } from 'react';

import NoTodos from './NoTodos';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import '../reset.css';
import '../App.css';
import useLocalStorage from './../hooks/useLocalStorage';

function App() {

  // const [name, setName] = useState('');
  const [name, setName] = useLocalStorage('name','');

  const [todos, setTodos] = useLocalStorage('todos', []);

  const nameInputRef = useRef(null);
  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     title: 'Finish React Series',
  //     isComplete: true,
  //     isEditing: false,
  //   },
  //   {
  //     id: 2,
  //     title: 'Go Grocery',
  //     isComplete: false,
  //     isEditing: false,
  //   },
  //   {
  //     id: 3,
  //     title: 'Take Over World',
  //     isComplete: false,
  //     isEditing: false,
  //   }
  // ]);

  // const [todoId, setTodoId] = useState();\

   const [todoId, setTodoId] = useLocalStorage('IdForTodos',1);

  useEffect(() => {
    // let currentMaxId = 0
    // todos.forEach((todo) => {
    //   currentMaxId = currentMaxId < todo.id ? todo.id : currentMaxId;
    // });
    // setTodoId(currentMaxId);

  }, []);

  useEffect(() => {
    nameInputRef.current.focus();
    // setName(JSON.parse(localStorage.getItem('name')) ?? '');

    return function () {
      // console.log('cleaning up , This is equal to "componentWillUnmount" ')
    };
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

  let handleNameInput = (event) => {
    setName(event.target.value);
    // localStorage.setItem('name', JSON.stringify(event.target.value));
  }

  return (
    <div className="todo-app-container">
      <div className="todo-app">
        <div className="name-container">
          <h2> What is your name</h2>
          {/* <button className="py-2 px-4 rounded-md t bg-blue-200 hover:bg-blue-300 shadow transition-colors duration-300"
            onClick={() => nameInputRef.current.focus()
              // console.log(nameInputRef.current.value); nameInputRef.focus();
            }>Get Ref </button> */}
          <form action="#">
            <input type="text"
              className="todo-input"
              value={name}
              ref={nameInputRef}
              onChange={handleNameInput}
              placeholder="what is your name" />
          </form>

          {name && <p className="name-label mt-6">hello, {name} </p> }

        </div>

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