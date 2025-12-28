import React from 'react';
import svdImg from '../../assets/images/svd.png';
import '../Page.css';

const MA1522 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>MA1522 Linear Algebra for Computing</h1>
            </header>

            <section>
                <p><strong>Grade: A</strong> | <em>Year 1 Semester 1</em></p>
                <p>Linear Algebra but more computationally heavy rather than proof/conceptual.</p>
                <p>Helps that I took CS1231S together as it already gave me an intro to proving and mathematics foundations. VERY self-directed module, with lectures being pre-recorded, quizzes and optional tutorials.</p>

                <figure>
                    <img src={svdImg} alt="SVD decomposition formula" className="page-image" />
                    <figcaption className="figure-caption">Knowing &amp; understanding how SVD works allowed me to intuitively remember the SVD decomp formula.</figcaption>
                </figure>
            </section>

            <section>
                <h2>Workload: 6/10</h2>
                <p>Less than 1 hour of lectures a week but truly understanding them like any mathematics course takes time. Even though this module is more computationally heavy the prof proves theorems which I try to follow and understand which resulted me spending roughly 2-3 hours understanding. The quiz would take me 40mins to complete while the tutorial sheet preparation + marking will take me 1-2 hours.</p>
            </section>

            <section>
                <h2>Enjoyability: 9/10</h2>
                <p>Professor has a telegram chat which you can freely ask questions, he will even reply you in wee hours 11pm! His enthusiasm rubs off you and made me even more interested in the content. The self-directedness of the content means that you can slow down at times and ask questions or try the challenges set by the profs, creating a more personalized education.</p>
            </section>

            <section>
                <h2>What Worked / Didn't Work</h2>
                <ul>
                    <li><strong>Worked:</strong> I went to all tutorial classes. In the second half of the sem, there were less than 10 people in my class. My tutor taught me computational tricks and ways to interpret formulas which was very helpful.</li>
                    <li><strong>Worked:</strong> Even though it is computationally heavy, it helps to be able to prove theorems. Understanding the concepts allowed me to know WHAT to compute.</li>
                </ul>
            </section>
        </div>
    );
};

export default MA1522;
