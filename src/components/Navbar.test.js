import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Navbar';

test('renders navbar with links', () => {
    render(
        <Router>
            <Navbar />
        </Router>
    );

    expect(screen.getByText(/Tan Yu Hang/i)).toBeInTheDocument();
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Blog/i)).toBeInTheDocument();
    expect(screen.getByText(/Projects/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Me/i)).toBeInTheDocument();
});