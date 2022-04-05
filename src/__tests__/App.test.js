import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

import About from '../components/Pages/About';

beforeEach(() => {
  // render(<App />);
})

test('renders learn react link', () => {
  render(<App />);
  // screen.debug();
  const linkElement = screen.getByText(/What is your name/i);
  expect(linkElement).toBeInTheDocument();
});




it('show the to do title correctlly', () => {
  render(<App />);
  // screen.debug();
  const titleElement = screen.getByText(/Todo App/i);
  expect(titleElement).toBeInTheDocument();
});



it('shows the default todo', () => {
  render(<App />);
  // screen.debug();
  const titleElement = screen.getByText(/Todo App/i);
  expect(titleElement).toBeInTheDocument();
});


it('can add todos', async () => {
  render(<App />);

  const todoInput = screen.getByPlaceholderText(/What do you need to do\?/i)

  userEvent.type(todoInput, 'Todo App');

  userEvent.click(todoInput)

  // const newItem = await screen.getByText(/New Too/);
  const newItem = await screen.findByText('Todo App')

  expect(newItem).toBeInTheDocument();

});


it('show th line through complete todo ', async () => {
  render(<App />);

  const todoOne = await screen.findByText(/Finish React Series/i);
  const todoTwo = await screen.findByText(/Go Grocery/i);

  expect(todoOne).toHaveClass('line-through')
  expect(todoOne.previousElementSibling).toBeChecked()
  expect(todoTwo).not.toHaveClass('line-through')

});


it('can complete a todo ', async () => {
  render(<App />);

  const todoTwo = await screen.findByText(/Go Grocery/i);

  userEvent.click(todoTwo.previousElementSibling);

  expect(todoTwo).toHaveClass('line-through')
  expect(todoTwo.previousElementSibling).toBeChecked()

});

it('can incomplete a todo', async () => {
  render(<App />);

  const todoOne = await screen.findByText(/Finish React Series/i);

  userEvent.click(todoOne.previousElementSibling);

  expect(todoOne).not.toHaveClass('line-through')
  expect(todoOne.previousElementSibling).not.toBeChecked()

});


it('can put  a todo to edit mode', async () => {
  render(<App />);

  const todoOne = await screen.findByText(/Finish React Series/i);

  userEvent.dblClick(todoOne)

  expect(todoOne).not.toBeVisible()
  expect(todoOne).not.toBeInTheDocument()

  const todoOneEditInput = await screen.getByDisplayValue(/Finish React Series/i);

  expect(todoOneEditInput).toBeInTheDocument();

});

it('can put  a todo to edit mode and commit a change by pressing enter', async () => {
  render(<App />);

  const todoOne = await screen.findByText(/Finish React Series/i);

  userEvent.dblClick(todoOne)

  expect(todoOne).not.toBeVisible()
  expect(todoOne).not.toBeInTheDocument()

  const todoOneEditInput = await screen.getByDisplayValue(/Finish React Series/i);

  expect(todoOneEditInput).toBeInTheDocument();

  userEvent.type(todoOneEditInput, ' today{enter}')

  expect(todoOneEditInput).not.toBeInTheDocument();

  const updateTodoOne = await screen.findByText(/Finish React Series today/i);

  expect(updateTodoOne).toBeInTheDocument();

});

it('can delete a todo ', async () => {
  render(<App />);

  const todoOne = await screen.findByText(/Finish React Series/i);
  expect(todoOne).toBeInTheDocument();

  const todoOneDeleteButton = todoOne.parentElement.nextElementSibling;

  // userEvent.dblClick(todoOne.parentElement.nextElementSibling)

  expect(todoOneDeleteButton).toBeInTheDocument();

  userEvent.click(todoOneDeleteButton);

  // expect(todoOne).not.toBeInTheDocument();
});

it('show correct remaining todo ', async () => {

  render(<App />);

  const itemsRemaining = screen.getByText(/2 items remaining/i);

  // userEvent.dblClick(todoOne.parentElement.nextElementSibling)

  expect(itemsRemaining).toBeInTheDocument();

  const todoTwo = await screen.findByText(/Go Grocery/i);

  userEvent.click(todoTwo.previousElementSibling);

  const updateItemsRemaining = await screen.getByText(/1 items remaining/i);

  expect(updateItemsRemaining).toBeInTheDocument();

});


it('can check all todos', async () => {

  render(<App />);

  const checkAllTodos = screen.getByText('Check All');
  expect(checkAllTodos).toBeInTheDocument();

  userEvent.click(checkAllTodos)

  const updateItemsRemaining = await screen.getByText(/0 items remaining/i);

  expect(updateItemsRemaining).toBeInTheDocument();


})