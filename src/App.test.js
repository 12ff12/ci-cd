
import { render, screen } from '@testing-library/react';
import App from './App';

test('fails intentionally because text is wrong', () => {
  render(<App />);
  const headingElement = screen.getByText(/this text does not exist/i);
  expect(headingElement).toBeInTheDocument();
});


