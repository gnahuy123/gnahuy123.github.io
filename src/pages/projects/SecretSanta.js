import React from 'react';
import '../Page.css';
import secretSantaImg from '../../assets/images/projects/secret-santa/secretSanta.png';
import secretSantaWalkthrough from '../../assets/images/projects/secret-santa/secret santa walk through.gif';
import { BookIcon, GitHubIcon, RocketIcon } from '../../components/Icons';

const SecretSanta = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Secret Santa Sparkle</h1>
            </header>
            <section>
                <div className="project-links">
                    <a href="https://gnahuy123.github.io/secret-santa-sparkle/" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <BookIcon width="20" height="20" />
                        User Guide
                    </a>
                    <a href="https://github.com/gnahuy123/secret-santa-sparkle" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <GitHubIcon width="20" height="20" />
                        GitHub
                    </a>
                    <a href="https://secret-santa-sparkle-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <RocketIcon width="20" height="20" />
                        Live Demo
                    </a>
                </div>

                <div className="project-content" style={{ marginTop: '2rem' }}>
                    <p>
                        A festive web application to organize Secret Santa events seamlessly.
                        Add clarity to your holiday exchanges with automated pairing and wishlists.
                    </p>
                    <p>
                        🎲 Randomized Algorithms: Fair and unbiased matching ensures no one gets themselves, every time.<br></br>
                        🎉 Cool & Festive Reveals: Ditch the boring emails. Reveal matches with Slot Machines, Scratch Cards, or Confetti pops!<br></br>
                        ⚡ Free & Lightweight: No sign-ups, no tracking icons, no heavy downloads. Just a URL.<br></br>
                        📱 Native Share Compatible: Works seamlessly with your phone's native sharing sheet for WhatsApp, Telegram, or iMessage.<br></br>
                    </p>
                    <p>
                        Built with React and Supabase.
                    </p>

                    <div className="image-container" style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <img
                            src={secretSantaImg}
                            alt="Secret Santa Sparkle Interface"
                            style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        />
                    </div>

                    <h3>Walkthrough</h3>
                    <div className="image-container" style={{ margin: '2rem 0', textAlign: 'center' }}>
                        <img
                            src={secretSantaWalkthrough}
                            alt="Secret Santa Walkthrough"
                            style={{ maxWidth: '100%', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SecretSanta;
