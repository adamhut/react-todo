import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../components/App';

import About from '../components/Pages/About';



test('renders About', () => {
  render(<About />);
  // screen.debug();
  const linkElement = screen.getByText(/This is the about page/i);
  expect(linkElement).toBeInTheDocument();
});


it('renders About Counter Component', () => {

  render(<About title="This is Counter" />);
  // screen.debug();
  const titleElement = screen.getByText(/This is Counter/i);
  expect(titleElement).toBeInTheDocument();


  const countElement = screen.getByText(/Count /i);
  expect(countElement).toBeInTheDocument();
});

it(' renders About Counter Component using selector', () => {

  const { container } = render(<About title="This is Counter" />);
  // screen.debug();
  // console.log(container.outerHTML)


  const titleElement = container.querySelector("#title");
  expect(titleElement.textContent).toContain('This is Counter');


  const countElement = container.querySelector("#count");;
  expect(countElement.textContent).toContain('Count :0');
});



it('increment the counter', () => {

  render(<About title="This is Counter" />);
  // screen.debug();
  const incrementElement = screen.getByRole('button', {
    name: /increase/i
  });

  expect(incrementElement).toBeInTheDocument();

  fireEvent.click(incrementElement)

  const countElement = screen.getByText(/Count :1/i);
  expect(countElement).toBeInTheDocument();

  userEvent.click(incrementElement)

  const count2Element = screen.getByText(/Count :2/i);
  expect(count2Element).toBeInTheDocument();


});


it('decrement the counter', () => {

  render(<About title="This is Counter" />);
  // screen.debug();
  const decrementElement = screen.getByRole('button', {
    name: /decrease/i
  });

  expect(decrementElement).toBeInTheDocument();

  fireEvent.click(decrementElement)

  const countElement = screen.getByText(/Count :-1/i);
  expect(countElement).toBeInTheDocument();

  userEvent.click(decrementElement)

  const count2Element = screen.getByText(/Count :-2/i);
  expect(count2Element).toBeInTheDocument();

});

