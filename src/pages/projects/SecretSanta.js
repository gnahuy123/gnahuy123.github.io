import React from 'react';
import '../Page.css';
import secretSantaImg from '../../assets/images/projects/secret-santa/secretSanta.png';
import secretSantaWalkthrough from '../../assets/images/projects/secret-santa/secret santa walk through.gif';

const SecretSanta = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Secret Santa Sparkle</h1>
            </header>
            <section>
                <div className="project-links">
                    <a href="https://gnahuy123.github.io/secret-santa-sparkle/" target="_blank" rel="noopener noreferrer" className="download-button">User Guide</a>
                    <a href="https://github.com/gnahuy123/secret-santa-sparkle" target="_blank" rel="noopener noreferrer" className="download-button">GitHub</a>
                    <a href="https://secret-santa-sparkle-three.vercel.app/" target="_blank" rel="noopener noreferrer" className="download-button">Live Demo</a>
                </div>

                <div className="project-content" style={{ marginTop: '2rem' }}>
                    <p>
                        A festive web application to organize Secret Santa events seamlessly.
                        Add clarity to your holiday exchanges with automated pairing and wishlists.
                    </p>
                    <p>
                        🎲 Randomized Algorithms: Fair and unbiased matching ensures no one gets themselves, every time.
                        🎉 Cool & Festive Reveals: Ditch the boring emails. Reveal matches with Slot Machines, Scratch Cards, or Confetti pops!
                        ⚡ Free & Lightweight: No sign-ups, no tracking icons, no heavy downloads. Just a URL.
                        📱 Native Share Compatible: Works seamlessly with your phone's native sharing sheet for WhatsApp, Telegram, or iMessage.
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
