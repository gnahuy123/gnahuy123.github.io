import React from 'react';
import '../Page.css';

const CS2102 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS2102 Database Systems</h1>
            </header>

            <section>
                <p><strong>Grade: B+</strong> | <em>Year 2 Semester 1</em></p>
                <p>1st half: SQL syntax. 2nd half: functional dependencies and normalisation.</p>
                <p>My reason for taking this is because I wanted a relatively low workload CS module and I wanted to do something "mathy" (i.e. has CS1231S as prereq 😭).</p>
                <p>Content is definitely useful — helped me as relational databases are an essential skill that a lot of employers look for.</p>
            </section>

            <section>
                <h2>Enjoyability: 9/10</h2>
                <p>The syllabus was more problem-solving/mathy in nature. SQL queries required practice before getting intuition. Functional dependencies content-wise were similar to CS1231S where we learnt definitions and were required to understand them before applying in exam questions.</p>
                <p>Content was also very relevant to real-world context where we learnt how to query data and also build databases around the structure and characteristics of the data.</p>
            </section>

            <section>
                <h2>Workload: 5/10</h2>
                <p>Again it's a matter of learning things well. 2 hours of lectures — I spent about 3 hours pausing and understanding the content, supplementing with LeetCode SQL and ChatGPT for understanding.</p>
                <p>Tutorials-wise I did not have the best tutor, but luckily a full-time TA recorded tutorial videos which I used profusely. If I had a better tutor, who knows, maybe I would've spent less time reviewing these tutorial questions myself.</p>
            </section>

            <section>
                <h2>What Worked</h2>
                <ul>
                    <li>Lecture on Tuesday and tutorial on Thursday — do watch the lecture on time.</li>
                    <li>Practice, practice, practice. SQL queries and FDs require practice to be good.</li>
                    <li>Some questions can be in "IQ test" style. Personally when practicing I didn't manage to solve them, so I instead worked backwards and asked myself why it worked that way. This way, I built my intuition on those questions and understood the content better.</li>
                </ul>
            </section>

            <section>
                <h2>What Didn't Work</h2>
                <ul>
                    <li>About the 2nd part of the syllabus: PLEASE follow the algorithm learnt in class. I did not and tried to use my own algorithm. It worked for all my tutorials and practice but when it came to the exam, it suddenly did not work, resulting in a loss of 10 marks 😭.</li>
                    <li>Maybe get a better tutor hahaha. Other tutor classes with professors or full-time TAs had discussions in their class which I would have loved to be a part of.</li>
                </ul>
            </section>
        </div>
    );
};

export default CS2102;
