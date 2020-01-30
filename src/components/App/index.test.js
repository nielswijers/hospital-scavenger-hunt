import { render } from '@testing-library/react';
import { App } from './';
import React from 'react';

it('renders the app', () => {
  const { getByText } = render(<App />);
  expect(getByText(/hospital scavenger hunt/i)).toBeDefined();
});
