import NoteIt from '../pages/projects/NoteIt';

import LiftSim from '../pages/projects/LiftSim';
import SecretSanta from '../pages/projects/SecretSanta';
//Order by what you want to show first

const projectData = [
    {
        name: 'Secret Santa Sparkle',
        description: 'A festive web application to organize Secret Santa events with automated pairing and wishlists.',
        path: 'secret-santa',
        component: SecretSanta,
        url: 'https://secret-santa-sparkle-three.vercel.app/',
        date: new Date('2024-12-25'),
    },
    {
        name: 'NoteIt',
        description: 'A full-stack academic support web application for NUS students to share notes and ask questions.',
        path: 'noteit',
        component: NoteIt,
        url: 'https://note-it-drab.vercel.app/',
        date: new Date('2024-01-01'), // Added date for sorting
    },

    {
        name: 'Lift Simulation',
        description: 'View and compare the performance of different lift algorithms.',
        path: 'lift-simulation',
        component: LiftSim,
        url: 'https://liftsim.onrender.com/',
        date: new Date('2024-01-12'), // Added date for sorting
    },

];

export default projectData;