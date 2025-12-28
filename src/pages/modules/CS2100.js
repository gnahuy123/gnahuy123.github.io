import React from 'react';
import '../Page.css';

const CS2100 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS2100 Computer Organisation</h1>
            </header>

            <section>
                <p><strong>Grade: A-</strong> | <em>Year 2 Semester 1</em></p>
                <p>This module taught me how a computer works — quite drastically different from all the CS modules I've taken. Instead of going deep into a particular concept and studying it for a few weeks, we would touch on a topic each week and move on. Honestly no qualms about it as I didn't find myself yearning for more depth. I do see this information being useful though — at least as a "computer scientist", now I know how a computer works.</p>
            </section>

            <section>
                <h2>Workload: 8/10</h2>
                <p>The workload is no joke. Would not suggest taking CS2030S, CS2040S and CS2100 together (I didn't). Otherwise 5 hours of lecture videos and 2 hours of tutorial/lab barring preparation is quite a lot of content to take in. I found myself learning a topic, trying the tutorial questions but not having enough time to mark/revise the tutorials. Therefore, my revision took more time as I didn't learn the content that well.</p>
            </section>

            <section>
                <h2>Enjoyability: 6/10</h2>
                <p>Content-wise I did not really enjoy it that much, especially with the sheer amount of content thrown at you. I've always rather enjoyed learning more "mathy" subjects. However, my TA Song Kai made this subject much more enjoyable by being passionate and available for questions. As a TA that semester, I observed his lessons to see how to make mine more engaging/insightful.</p>
            </section>

            <section>
                <h2>What Worked</h2>
                <ul>
                    <li>Was about 1 week ahead before midterms. During midterm week, I missed a week but I was still on pace.</li>
                </ul>
            </section>

            <section>
                <h2>What Didn't Work</h2>
                <ul>
                    <li>During midterm week, I was 2 weeks behind lectures. It took a lot of effort to climb back to 1 week behind.</li>
                    <li>Did not review tutorial questions. Tutorial questions consist of exam-style questions. You might feel like you understand the concepts after watching lectures, but if you're not able to apply this knowledge, you will not score during the exam.</li>
                    <li>Did labs with external assistance. I had this thought that reading/writing MIPS code is not that important as I wouldn't be writing assembly as a future SWE 😭. This came back to bite me as I didn't truly learn from those labs. Moral of the story: professors who have taught for decades know better what knowledge is beneficial for you.</li>
                </ul>
            </section>
        </div>
    );
};

export default CS2100;
