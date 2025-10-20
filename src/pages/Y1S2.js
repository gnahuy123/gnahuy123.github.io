import React from 'react';
import passTestcaseImg from '../assets/images/CS2030s-passTestcase.jpg';
import perfImg from '../assets/images/CS2040s-perf.jpg';
import './Page.css';

const Y1S2 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Y1S2 Mod Review</h1>
            </header>

            <section>
                <h2>Context</h2>
                <p>I decided to overload heavily this semester as I had some SUs to spare. This led to me taking 32 MCs.</p>
                <ul>
                    <li>CS2030S: Programming Methodology II</li>
                    <li>CS2040S: Data Structures and Algorithms</li>
                    <li>MA1521: Calculus for Computing</li>
                    <li>IS1108: Digital Ethics and Data Privacy</li>
                    <li>ES2660: Communicating in the Information Age</li>
                    <li>CDE2501: Sustainable Cities</li>
                    <li>EG1311: Design and Make</li>
                    <li>MUA1192: Chamber Singers</li>
                    <li>CFG1003: Financial Wellbeing – Introduction</li>
                    <li>CFG1004: Financial Wellbeing – Art and Science of Investing</li>
                </ul>
            </section>

            <section>
                <h2>CS2030S Programming Methodology II</h2>
                <img src={passTestcaseImg} alt="Passing test cases in CS2030S" className="page-image" />
                <p>Builds on CS1101S, introducing more advanced Object-Oriented and Functional Programming concepts. I got an A.</p>

                <h3>Workload: 9/10</h3>
                <p>2 hours of (dry) lectures each week, followed by a quiz and a lab assignment that typically took me 1–2 days to complete.</p>

                <h3>Enjoyability: 7/10</h3>
                <p>For most assignments, I would start off stuck, staring blankly at the screen. But eventually, I’d have a eureka moment that helped me break through and start coding.</p>

                <h3>What I did that worked/didn't work:</h3>
                <ul>
                    <li><b>Worked:</b> Diligently learned how to use VIM.</li>
                    <li><b>Worked:</b> Tried my best not to use AI or copy code for assignments.</li>
                    <li><b>Worked:</b> Switched to reading the notes provided, which were very comprehensive.</li>
                </ul>
            </section>

            <section>
                <h2>CS2040S Data Structures and Algorithms</h2>
                <p>The infamous Data Structures and Algorithms module. I got an A-.</p>
                <img src={perfImg} alt="CS2040S grades distribution" className="page-image" />

                <h3>Workload: 8/10</h3>
                <p>3 hours of lectures per week, 1-hour recitation, and a 2-hour tutorial. I spent about double the lecture time reviewing proofs and internalizing concepts.</p>

                <h3>Enjoyability: 8/10</h3>
                <p>Intellectually challenging and stimulating. Lectures were heavy on proof techniques and theoretical understanding.</p>

                <h3>What I did that worked/didn't work:</h3>
                <ul>
                    <li><b>Worked:</b> Focused on understanding the underlying theory and asking "why".</li>
                    <li><b>Didn’t work:</b> Initially over-relied on prior LeetCode knowledge and underestimated the theoretical depth required.</li>
                </ul>
            </section>

            <section>
                <h2>MA1521 Calculus for Computing</h2>
                <p>Introductory calculus module meant for computing students. I got a B+.</p>

                <h3>Workload: 0.5/10</h3>
                <p>From a pure time-commitment perspective, the workload could be low if you’re not engaging with the content much like I did.</p>

                <h3>Enjoyability: 1/10</h3>
                <p>I found it hard to stay interested because the teaching style didn’t click with me.</p>

                <h3>What I did that worked/didn't work:</h3>
                <ul>
                    <li><b>Didn’t Work:</b> Only started studying the day before the final.</li>
                    <li><b>Didn’t Work:</b> Not going for tutorials.</li>
                </ul>
            </section>

        </div>
    );
};

export default Y1S2;
