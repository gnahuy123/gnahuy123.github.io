import NoteIt from '../pages/projects/NoteIt';
import LiftSim from '../pages/projects/LiftSim';
import SecretSanta from '../pages/projects/SecretSanta';
import ScarlattSonatas from '../pages/projects/ScarlattSonatas';
import ConversationAnalysis from '../pages/projects/ConversationAnalysis';

//Order by what you want to show first
const projectData = [
    {
        name: 'Secret Santa Sparkle',
        description: 'A festive web application to organize Secret Santa events with automated pairing, wishlists, and festive reveal mechanics.',
        path: 'secret-santa',
        component: SecretSanta,
        url: 'https://secret-santa-sparkle-three.vercel.app/',
        github: 'https://github.com/gnahuy123/secret-santa-sparkle',
        techStack: ['React', 'Supabase'],
        date: new Date('2025-12-25'),
    },
    {
        name: 'Chat Universe',
        description: 'Transforms Telegram chat exports into an analysed, searchable archive with AI-powered summaries and semantic search.',
        path: 'conversation-analysis',
        component: ConversationAnalysis,
        github: 'https://github.com/gnahuy123/Conversation-Analysis',
        techStack: ['Python', 'Streamlit', 'Google Gemini', 'ChromaDB', 'SQLite'],
        date: new Date('2025-08-01'),
    },
    {
        name: 'Scarlatti Sonatas',
        description: 'A corpus of 69 annotated Baroque keyboard sonatas with a Sonata Theory analyser and interactive Streamlit dashboard.',
        path: 'scarlatti-sonatas',
        component: ScarlattSonatas,
        github: 'https://github.com/gnahuy123/scarlatti_sonatas',
        techStack: ['Python', 'Streamlit', 'MuseScore', 'ms3'],
        date: new Date('2025-01-01'),
    },
    {
        name: 'NoteIt',
        description: 'A full-stack academic support web application for NUS students to share notes and ask questions.',
        path: 'noteit',
        component: NoteIt,
        url: 'https://note-it-drab.vercel.app/',
        techStack: ['React', 'Node.js', 'PostgreSQL'],
        date: new Date('2024-01-01'),
    },
    {
        name: 'Lift Simulation',
        description: 'View and compare the performance of different lift scheduling algorithms through an interactive simulation.',
        path: 'lift-simulation',
        component: LiftSim,
        url: 'https://liftsim.onrender.com/',
        github: 'https://github.com/gnahuy123/liftSim',
        techStack: ['JavaScript', 'Node.js'],
        date: new Date('2024-01-12'),
    },
];

export default projectData;
