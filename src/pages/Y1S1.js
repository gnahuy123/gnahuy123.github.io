import React from 'react';
import linkedlistImg from '../assets/images/linkedlistCS50.png';
import ballsImg from '../assets/images/balls.jpg';
import svdImg from '../assets/images/svd.png';
import './Page.css';

const Y1S1 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Y1S1 Mod Review</h1>
            </header>

            <section>
                <h2>Context</h2>
                <p>Disclaimer, my mod reviews do not cover content covered and I only cover reviews of certain mods. I will rather focus on what I did that works and what I did that doesnt. Also feel free to contact me about other mods!</p>
                <ul>
                    <li>CS1101S Programing Methodology (Preallocated)</li>
                    <li>CS1231S Discrete Strucutres (Preallocated)</li>
                    <li>MA1522 Linear Algebra for Computing (Preallocated)</li>
                    <li>GEA1000 Qualitative Reasoning with data (Preallocated)</li>
                    <li>GES1015 Western Music in Singapore Context</li>
                </ul>
            </section>

            <section>
                <h2>CS1101S Programming Methodology</h2>
                <p>This is the Intro to Programming course for all Computer Science students. I got a A+.</p>
                <img src={linkedlistImg} alt="Linked List Concept" className="page-image" />

                <h3>Workload: 7/10</h3>
                <p>4 hours of Lectures a week 2 hours of tutorials and 1 hour of recitations. This coupled with the homework assignments lead to a module with highworkload...</p>

                <h3>Enjoyability: 5/10</h3>
                <p>There are many student initiated projects such as the source academy game(educational game), a robotics component and many more creative missions that allow us to create art/music...</p>

                <h3>What I did that worked/didn't work</h3>
                <ul>
                    <li><b>Worked:</b> My strategy was to finish all assignments on time/early in the first half of the sem so I could tone it done in the later half.</li>
                    <li><b>Didn't Work:</b> I spent alot of time debugging stupid mistakes. While it is important to be able to solve problems yourself, I could've saved many hours if I had consulted a friend.</li>
                </ul>
            </section>

            <section>
                <h2>CS1231S Discrete Mathematics</h2>
                <p>Discrete Mathematics, a bit of stats/counting and a bit of graph theory. I got an A.</p>
                <img src={ballsImg} alt="Math problem with red and blue balls" className="page-image" />

                <h3>Workload: 8/10</h3>
                <p>3 Hours of lectures. 2 Hours of tutorial. 10 - 11 questions on tutorial sheet that has to be prepared...</p>

                <h3>Enjoyability: 8/10</h3>
                <p>Mainly comes from the satisfaction from solving a question after awhile. Sitting down with friends and tackling a problem together is also very fun.</p>
            </section>

            {/* ... Add the rest of the content for MA1522 ... */}

        </div>
    );
};

export default Y1S1;