import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the correct heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/sonar approvedd/i);
  expect(headingElement).toBeInTheDocument();
});
