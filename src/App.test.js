import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio experience section', () => {
  render(<App />);
  const heading = screen.getByText(/building products that scale/i);
  expect(heading).toBeInTheDocument();
});
