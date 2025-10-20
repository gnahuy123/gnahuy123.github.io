import { render, screen } from '@testing-library/react';
import ClashCard from './ClashCard';

const mockPersonData = {
    name: 'John Doe',
    description: 'A software developer.',
};

const mockProjects = [
    { name: 'Project 1', description: 'Description 1', url: '#' },
];

const mockBlogs = [
    { title: 'Blog 1', date: new Date(), url: '#' },
];

test('renders ClashCard with person data and toggles between projects and blogs', () => {
    render(<ClashCard personData={mockPersonData} projects={mockProjects} blogs={mockBlogs} />);

    expect(screen.getByText(/John Doe/i)).toBeInTheDocument();
    expect(screen.getByText(/A software developer/i)).toBeInTheDocument();

    // Initially, it should show blogs
    expect(screen.getByText(/Blog 1/i)).toBeInTheDocument();

    // Switch to projects
    screen.getByText(/Projects/i).click();
    expect(screen.getByText(/Project 1/i)).toBeInTheDocument();
});