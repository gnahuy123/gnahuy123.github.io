import React from 'react';
import './Page.css';
import resume from '../assets/files/Yu_Hang_Resume.pdf';
import personData from '../data/personData.js';

const Contact = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Contact Me</h1>
            </header>
            <section>
                <p>If you'd like to get in touch, you can reach me through the following channels:</p>
                <ul>
                    <li><strong>Email:</strong> <a href={personData.email}>{personData.email}</a></li>
                    <li><strong>LinkedIn:</strong> <a href={personData.linkedin} target="_blank" rel="noopener noreferrer">{personData.linkedin}</a></li>
                    <li><strong>GitHub:</strong> <a href={personData.github} target="_blank" rel="noopener noreferrer">{personData.github}</a></li>
                </ul>
                <a href={resume} download="Tan_Yu_Hang_Resume.pdf" className="download-button" style={{marginTop: '2rem', display: 'inline-block'}}>
                    Download My Resume
                </a>
            </section>
        </div>
    );
};

export default Contact;
