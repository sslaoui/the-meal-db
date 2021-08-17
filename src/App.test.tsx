import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header title', () => {
    render(<App />);
    const headerTitleElement = screen.getByText(/The meal db/i);
    expect(headerTitleElement).toBeInTheDocument();
});
