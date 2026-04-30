import React from 'react';
import '../Page.css';
import { GitHubIcon } from '../../components/Icons';

const ScarlattSonatas = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Scarlatti Sonatas</h1>
            </header>
            <section>
                <div className="project-links">
                    <a href="https://github.com/gnahuy123/scarlatti_sonatas" target="_blank" rel="noopener noreferrer" className="project-link-btn">
                        <GitHubIcon width="20" height="20" />
                        GitHub
                    </a>
                </div>

                <div className="project-content">
                    <p>
                        A comprehensive corpus of 69 annotated keyboard sonatas by Baroque composer Domenico Scarlatti,
                        created within the DCML corpus initiative. The project includes a Sonata Theory analysis tool
                        that automatically segments musical expositions into functional zones and an interactive Streamlit dashboard.
                    </p>

                    <h3>Features</h3>
                    <ul>
                        <li>69 annotated sonatas drawn from Kirkpatrick's first 100 works, in MuseScore format</li>
                        <li>Five complementary data formats per piece — notes, measures, chords, harmonies, and metadata</li>
                        <li>Harmony annotations following the DCML standard</li>
                        <li>Sonata Theory analyser that detects Primary, Transition, Secondary, and Closing zones</li>
                        <li>Identifies key structural events such as Medial Caesura and Essential Expositional Closure</li>
                        <li>Interactive dashboard with timeline visualisation and batch processing</li>
                        <li>Frictionless datapackage format for straightforward data integration</li>
                    </ul>

                    <h3>Tech Stack</h3>
                    <div className="tech-stack">
                        {['Python', 'Streamlit', 'MuseScore', 'ms3', 'Frictionless Data'].map((tech, i) => (
                            <span key={i} className="tech-badge">{tech}</span>
                        ))}
                    </div>

                    <h3>Learning Points</h3>
                    <ul>
                        <li><strong>Music Corpus Research:</strong> Gained hands-on experience with annotated music datasets and the DCML annotation standard, bridging musicology and data science.</li>
                        <li><strong>Sonata Theory:</strong> Applied a formal analytical framework to identify functional structural zones and deformities in Baroque music computationally.</li>
                        <li><strong>Data Pipeline Design:</strong> Built an end-to-end pipeline from raw MuseScore files through TSV extraction to an interactive dashboard.</li>
                        <li><strong>Streamlit:</strong> Learned to rapidly prototype data-driven dashboards without frontend complexity, keeping the focus on analysis.</li>
                    </ul>

                    <div className="highlight">
                        <p>
                            Published as part of a peer-reviewed dataset: Hentschel, J., Rammos, Y., Neuwirth, M., &amp; Rohrmeier, M. (2025).
                            <em> Scientific Data</em>, 12(1), 685.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ScarlattSonatas;
