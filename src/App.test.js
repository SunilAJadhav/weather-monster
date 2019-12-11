import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Weather Monster app', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Weather Monster/i);
  expect(linkElement).toBeInTheDocument();
});
