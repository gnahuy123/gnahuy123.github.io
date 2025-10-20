import React from 'react';
import './Page.css';
import resume from '../assets/files/Yu_Hang_Resume.pdf';

const Contact = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Contact Me</h1>
            </header>
            <section>
                <p>If you'd like to get in touch, you can reach me through the following channels:</p>
                <ul>
                    <li><strong>Email:</strong> <a href="mailto:tanyuhang2000@gmail.com">tanyuhang2000@gmail.com</a></li>
                    <li><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/tan-yu-hang-350189363/" target="_blank" rel="noopener noreferrer">linkedin.com/in/tan-yu-hang</a></li>
                    <li><strong>GitHub:</strong> <a href="https://github.com/gnahuy123" target="_blank" rel="noopener noreferrer">github.com/gnahuy123</a></li>
                </ul>
                <a href={resume} download="Tan_Yu_Hang_Resume.pdf" className="download-button" style={{marginTop: '2rem', display: 'inline-block'}}>
                    Download My Resume
                </a>
            </section>
        </div>
    );
};

export default Contact;
