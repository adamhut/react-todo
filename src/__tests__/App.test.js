import { render, screen } from '@testing-library/react';
import App from '../components/App';

import About from '../components/Pages/About';

test('renders learn react link', () => {
  render(<App />);
  // screen.debug();
  const linkElement = screen.getByText(/What is your name/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders About', () => {
  render(<About />);
  // screen.debug();
  const linkElement = screen.getByText(/This is the about page/i);
  expect(linkElement).toBeInTheDocument();
});
