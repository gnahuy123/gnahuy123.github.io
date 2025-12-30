import React from 'react';
import ballsImg from '../../assets/images/modules/balls.jpg';
import '../Page.css';

const CS1231S = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS1231S Discrete Structures</h1>
            </header>

            <section>
                <p><strong>Grade: A</strong> | <em>Year 1 Semester 1</em></p>
                <p>Discrete Mathematics, a bit of stats/counting and a bit of graph theory.</p>
                <p>My favourite mod this sem. Requires you to build a strong foundation with the concepts and then use critical thinking on top of that to tackle the questions.</p>

                <figure>
                    <img src={ballsImg} alt="Question that I spent 3 days trying to solve" className="page-image" />
                    <figcaption className="figure-caption">Question that I spent 3 days trying to solve. Managed to solve it together with friends, core memory of mine.</figcaption>
                </figure>
            </section>

            <section>
                <h2>Workload: 8/10</h2>
                <p>3 Hours of lectures. 2 Hours of tutorial. 10-11 questions on tutorial sheet that has to be prepared. First few questions of tutorial sheet can be completed by being familiar with definitions whilst the others require a lot of brains. Usually I was only able to complete the first few questions even though I spent hours trying out the later questions. Given that I did not have olympiad background, I had to spend time to get used to the way of critical thinking to solve problems.</p>
            </section>

            <section>
                <h2>Enjoyability: 8/10</h2>
                <p>Mainly comes from the satisfaction from solving a question after a while. Furthermore, the critical thinking aspect challenged me and I also found it interesting which was why I decided to try very hard for this module. Sitting down with friends and tackling a problem together is also very fun.</p>
            </section>

            <section>
                <h2>What Worked / Didn't Work</h2>
                <ul>
                    <li><strong>Worked:</strong> Instead of just learning HOW it works, learn WHY it works. One of the module objectives is Proving so knowing WHY a definition is true is important.</li>
                    <li><strong>Worked:</strong> Spent time going back to tutorial sheet and trying it again. Since I usually was only able to do the first few questions, this ensured that I could tackle a similar question next time.</li>
                    <li><strong>Didn't Work:</strong> 8am tutorial LOL. I fit all my classes into one day and it was tough to stay awake. Instead of learning from my mistakes in class, I usually went home, used the answer sheet to learn instead.</li>
                </ul>
            </section>
        </div>
    );
};

export default CS1231S;
