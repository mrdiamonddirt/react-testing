import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';
describe("appjs tests", () => {
test('renders h1 element', () => {
  render(<App />);
  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
});

test('renders h1 element contains', () => {
  render(<App />);
  const header = screen.getByText(/Hello/);
  expect(header).toBeInTheDocument();
});

test('do a thing', () => {
  render(<App />);
  const h1 = screen.getByRole("heading");
  fireEvent.click(h1)
  // const value = 
  // expect(value).toBeInTheDocument()
})
})
