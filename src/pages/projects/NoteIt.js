import React from 'react';
import '../Page.css';

const NoteIt = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>NoteIt</h1>
            </header>
            <section>
                <p>A full-stack academic support web application to centralise note-sharing and Q&A forums for NUS students, addressing challenges of fragmented resources and lack of academic support.</p>
                <a href="https://note-it-drab.vercel.app/" target="_blank" rel="noopener noreferrer" className="download-button">View Project</a>
            </section>
        </div>
    );
};

export default NoteIt;
