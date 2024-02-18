import { render, screen } from '@testing-library/react';
import App from './App';

test('renders App', () => {
  render(<App />);
  const linkElement = screen.getByText('Welcome to Infomon');
  expect(linkElement).toBeInTheDocument();
});
