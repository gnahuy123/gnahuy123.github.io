import React from 'react';
import '../Page.css';

const MA1521 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>MA1521 Calculus for Computing</h1>
            </header>

            <section>
                <p><strong>Grade: B+</strong> | <em>Year 1 Semester 2</em></p>
                <p>Introductory calculus module meant for computing students.</p>
                <p>To be honest, I wasn't very invested in this module. I only started studying one day before the exam and rushed through the examples to prep. First 5 chapters were roughly taught in H2 maths and I therefore banked on that knowledge to pass and then SU. I didn't attend lectures or tutorials, which definitely hurt my understanding. In the final exam, I only managed to attempt 3 out of 10 questions.</p>
                <p>While I'm generally quite interested in math mods, I found it hard to enjoy this one because it relied heavily on computation and offered barely any mathematical intuition. The lectures were dry and uninspiring, and by Week 3, I had pretty much given up on trying to keep up with the content.</p>
            </section>

            <section>
                <h2>Workload: 0.5/10</h2>
                <p>From a pure time-commitment perspective, the workload could be low if you're not engaging with the content much like I did. There were lectures and tutorials, but since I skipped most of them, my weekly time spent was basically zero until the final week.</p>
            </section>

            <section>
                <h2>Enjoyability: 1/10</h2>
                <p>I found it hard to stay interested because the teaching style didn't click with me. If the professor had been more engaging or enthusiastic, I might have given the module a proper try. Friends of mine who later took MA2001 (major in DSA) mentioned that it was more rigorous and focused on proofs, which made it more enjoyable than the largely computational approach here.</p>
            </section>

            <section>
                <h2>What Worked / Didn't Work</h2>
                <ul>
                    <li><strong>Didn't Work:</strong> Only started studying the day before the final and skipped most of the semester's learning — obviously not ideal. Definitely wouldn't recommend this approach.</li>
                    <li><strong>Didn't Work:</strong> Not going for tutorials.</li>
                </ul>
            </section>
        </div>
    );
};

export default MA1521;
