import { useState, useRef, useEffect } from 'react';

import NoTodos from './NoTodos';
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import '../reset.css';
import '../App.css';
import useLocalStorage from './../hooks/useLocalStorage';
import { TodosContext } from '../context/TodosContext';
import { CSSTransition, SwitchTransition } from 'react-transition-group';



function App() {

  // const [name, setName] = useState('');

  const [filter, setFilter] = useState('all');

  const [name, setName] = useLocalStorage('name', '');

  // const [todos, setTodos] = useLocalStorage('todos', []);
  // const [todoId, setTodoId] = useLocalStorage('IdForTodos', 1);

  const nameInputRef = useRef(null);

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



  let todosFilter = (filter) => {
    if (filter === 'all') {
      return todos;
    } else if (filter === 'active') {
      return todos.filter(todo => !todo.isComplete);
    } else if (filter === 'completed') {
      return todos.filter(todo => todo.isComplete);
    }

  }

  let handleNameInput = (event) => {
    setName(event.target.value);
    // localStorage.setItem('name', JSON.stringify(event.target.value));
  }

  return (
    <TodosContext.Provider value={{
      todos,
      setTodos,
      todoId,
      setTodoId,
      todosFilter,
      filter,
      setFilter
    }}>
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
          <CSSTransition
            in={name.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            <p className="name-label mt-6">hello, {name} </p>
          </CSSTransition>
        </div>

        <h2>Todo App</h2>
        <TodoForm></TodoForm>

        <SwitchTransition mode="out-in">
          <CSSTransition
            key={todos.length > 0}
            timeout={300}
            classNames="slide-vertical"
            unmountOnExit
          >
            {todos.length > 0 ? <TodoList /> : <NoTodos />}
          </CSSTransition>
        </SwitchTransition>



      </div>

    </TodosContext.Provider>
  );
}

export default App;