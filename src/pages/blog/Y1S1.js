import React from 'react';
import linkedlistImg from '../../assets/images/linkedlistCS50.png';
import ballsImg from '../../assets/images/balls.jpg';
import svdImg from '../../assets/images/svd.png';
import '../Page.css';

const Y1S1 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Y1S1 Mod Review</h1>
            </header>

            <section>
                <h2>Context</h2>
                <p>Disclaimer, my mod reviews do not cover content covered and I only cover reviews of certain mods. I will rather focus on what I did that works and what I did that doesnt. Also feel free to contact me about other mods!</p>
                <p>I was preallocated 4 mods this sem, which meant that I did not have much flexibility on what other mods to take. Since it was my first sem, I decided to opt for mods with lesser workload. (As shown below)</p>
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
                <p>Nothing much to say then your typical intro to programming course. If you have done a online intro course before, the content covered here is similar but not the same. Therefore, I managed to grasp onto concepts quickly</p>
                <figure>
                    <img src={linkedlistImg} alt="Figure__ linked list concept taught in CS50" className="page-image" />
                    <figcaption className="figure-caption">Figure: linked list concept taught in CS50</figcaption>
                </figure>

                <h3>Workload: 7/10</h3>
                <p>4 hours of Lectures a week 2 hours of tutorials and 1 hour of recitations. This coupled with the homework assignments lead to a module with highworkload. Sometimes the lectures would get too dry and I would watch them at 2x speed except for the more heavy lectures. Even though just by PURE workload this would easily be a 9-10, I deducted some points as it does not require as much critical and deep thinking as compared to my other mods. Therefore, it would take up alot of time but comparatively less brainpower</p>

                <h3>Enjoyability: 5/10</h3>
                <p>There are many student initiated projects such as the source academy game(educational game), a robotics component and many more creative missions that allow us to create art/music. Even though all these were made available and accessible to students, I only did the complusary ones as I did not enjoy them that much. For the complusary ones, they felt mundane and monotonus as we had to learn new libraries everyweek and i spent many hours debugging. However, this seemed to be the most enjoyable modules amongst my friends so your experience might differ from mine.</p>

                <h3>What I did that worked/didn't work</h3>
                <ul>
                    <li><b>Worked:</b> One of the componenets was that we had to do assignments to hit 24k EXP. My strategy was to finish all assignments on time/early in the first half of the sem so I could tone it done in the later half.</li>
                    <li><b>Didnt Work:</b> I spent alot of time debugging stupid mistakes. While it is important to be able to solve problems yourself, I couldve spent many hours if I had consulted a friend to help me with a bug.</li>
                </ul>
            </section>

            <section>
                <h2>CS1231S Discrete Mathematics</h2>
                <p>Discrete Mathematics, abit of stats/counting and abit of graph theory. I got A.</p>
                <p>My favourite mod this sem. Requires you to build a strong foundation with the concepts and then use critical thinking on top of that to tackle the questions.</p>
                <figure>
                    <img src={ballsImg} alt="Figure __ . Question that I spent 3 days trying to solve haha. Managed to solve it together with friends, core memory of mine" className="page-image" />
                    <figcaption className="figure-caption">Figure: Question that I spent 3 days trying to solve haha. Managed to solve it together with friends, core memory of mine</figcaption>
                </figure>

                <h3>Workload: 8/10</h3>
                <p>3 Hours of lectures. 2 Hours of tutorial. 10 - 11 questions on tutorial sheet that has to be prepared. First few questions of tutorial sheet can be completed by being familiar with definitions whilst the others require alot of brains. Usually I was only able to complete the first few questions even though I spent hours trying out the later questions. Given that i did not have olympaid background, I had to spend time to get used to the way of critical thinking to solve probelms.</p>

                <h3>Enjoyability: 8/10</h3>
                <p>Mainly comes from the satisfaction from solving a question after awhile. Furthermore, the critical thinking aspect challenged me and I also found it interesting which was why I decided to try very hard for this module. Sitting down with friends and tackling a problem together is also very fun.</p>

                <h3>What I did that worked/didnt work</h3>
                <ul>
                    <li><b>Worked:</b> Instead of just learning HOW it works learn WHY it works. One of the module objectives is Proving so knowing WHY a definition is true is important</li>
                    <li><b>Worked:</b> Spent time going back to tutorial sheet and trying it again. Since I usually was only able to do the first few questions, this ensured that I could tackle a similar question next time.</li>
                    <li><b>Didnt Work:</b> 8am tutorial LOL. I fit all my classes into one day and it was tough to stay awake. Instead of learning from my mistakes in class, I usually went home, used the answer sheet to learn instead</li>
                </ul>
            </section>

            <section>
                <h2>MA1522 Linear Algebra For Computing</h2>
                <p>Linear Algebra but more computationally heavy rather than proof/conceptual I got a A.</p>
                <p>Helps that I took CS1231S together as it already gave me an intro to proving and mathematics foundations. VERY self-directed module, with lectures being pre-recorded, quizzes and optional tutorials. </p>
                <figure>
                    <img src={svdImg} alt="Figure __ knowing & understanding how SVD works allowed to intuitively remember the SVD decomp formula" className="page-image" />
                    <figcaption className="figure-caption">Figure: knowing & understanding how SVD works allowed to intuitively remember the SVD decomp formula</figcaption>
                </figure>

                <h3>Workload: 6/10</h3>
                <p>Less then 1 hour of lectures a week but truly understanding them like any mathematics course takes time. Even though this module is more computationally heavy the prof proves theorems which I try to follow and understand which resulted me spending roughly 2-3 hours understanding. The quiz would take me 40mins to complete while the tutorial sheet preparation + marking will take me 1-2hours.</p>

                <h3>Enjoyability: 9/10</h3>
                <p>Professor has a telegram chat which you can freely ask questions, he will even reply you in wee hours 11pm! His enthusatism rubs off you and made me even more interested in the content. The self-directedness of the content means that you can slow down at times and ask questions or try the challenges set by the profs, creating a more personalised education.</p>

                <h3>What I did that worked/didnt work</h3>
                <ul>
                    <li><b>Worked:</b> I went to all tutorial classes. In the second half of the sem, there were less then 10 people in my class. My tutor taught me computational tricks and ways to interpret formulas which was very helpful</li>
                    <li><b>Worked:</b> Even though it is computationally heavy, it helps to be able to prove theorems. Understanding the concepts allowed me to know WHAT to compute (hope that makes sense)</li>
                </ul>
            </section>
        </div>
    );
};

export default Y1S1;
