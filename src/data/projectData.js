import NoteIt from '../pages/projects/NoteIt';
import TaskManager from '../pages/projects/TaskManager';
import LiftSim from '../pages/projects/LiftSim';
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
    },
    {
        name: 'Lift Simulation',
        description: 'Have you ever wondered why lifts are so slow? This is a simulation of different lift algorithms and comparisons of their performance.',
        path: 'lift-simulation',
        component: LiftSim,
        url: 'https://github.com/gnahuy123/liftSim',
        date: new Date('2023-12-01'), // Added date for sorting
    },
];

export default projectData;