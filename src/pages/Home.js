import React from 'react';
import ClashCard from '../components/ClashCard';

const Home = () => {
    // Projects data from resume
    const projects = [
        { name: 'NoteIt', description: 'A full-stack academic support web application for NUS students to share notes and ask questions.', url: 'https://note-it-drab.vercel.app/' },
        { name: 'Task Manager Application', description: 'A comprehensive chat application that tracks tasks with a GUI using JavaFX.', url: 'https://github.com/gnahuy123/ip' }
    ];

    // Blogs data from the project structure
    const blogs = [
        { title: 'How to Prepare for CS in University', url: '/blog/prepare-for-cs' },
        { title: 'Y1S1 Module Review', url: '/blog/y1s1-mod-review' },
        { title: 'Y1S2 Module Review', url: '/blog/y1s2-mod-review' }
    ];

    return (
        <div>
            <ClashCard projects={projects} blogs={blogs} />
        </div>
    );
};

export default Home;
