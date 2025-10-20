import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';

const mockItems = [
    { path: 'item1', title: 'Item 1' },
    { path: 'item2', name: 'Item 2' },
];

test('renders sidebar with title and items', () => {
    render(
        <Router>
            <Sidebar title="Test Sidebar" items={mockItems} basePath="/test" />
        </Router>
    );

    expect(screen.getByText(/Test Sidebar/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Item 2/i)).toBeInTheDocument();
});