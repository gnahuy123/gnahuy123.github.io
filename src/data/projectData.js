import NoteIt from '../pages/projects/NoteIt';
import TaskManager from '../pages/projects/TaskManager';

//Order by what you want to show first

const projectData = [
    {
        name: 'NoteIt',
        description: 'A full-stack academic support web application for NUS students to share notes and ask questions.',
        path: 'noteit',
        component: NoteIt,
        url: 'https://note-it-drab.vercel.app/',
        date: new Date('2024-01-01'), // Added date for sorting
    },
    {
        name: 'Task Manager Application',
        description: 'A comprehensive chat application that tracks tasks with a GUI using JavaFX.',
        path: 'task-manager',
        component: TaskManager,
        url: 'https://github.com/gnahuy123/ip',
        date: new Date('2023-12-01'), // Added date for sorting
    }
];

export default projectData;