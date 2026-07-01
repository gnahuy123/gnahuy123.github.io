import React from 'react';
import '../Page.css';

const CS2109S = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS2109S Introduction to AI and Machine Learning</h1>
            </header>

            <section>
                <p><em>Year 2 Semester 2</em></p>
                <p><strong>Workload: 7/10</strong> | <strong>Difficulty: 6/10</strong> | <strong>Enjoyment: 8/10</strong></p>
                <p>AI is the hot topic nowadays. The purpose of this module was supposedly to give a breadth-over-depth overview of topics in AI/ML, which I believe was effective.</p>
                <p>I enjoyed learning about the course, as it really allowed us to learn the concepts and gave us opportunities to think critically about why a certain engineering choice was chosen. The AI part seemed a bit like an IQ test, almost like an extension from CS2040S. Either you can spot the heuristic function or you cannot, but it was still fun.</p>
                <p>The machine learning part was relevant to modern LLM models, like transformer architectures and stuff. With the motivation to dive deep and learn about what makes the AI models we use daily work, I loved the intersection of engineering and maths used.</p>
                <p>The project required us to create a grid path-finding agent using CV. They allowed full AI usage, which initially was scary, but I ended up enjoying it. Using AI to speedily create iterations and test cases, then fast-fail them, taught me how to build with AI while also reinforcing the AI/ML concepts learnt in class.</p>
                <p>I believe that they did not dive deep into the math and instead glossed over it, but I did not mind it too much as I could either ask my tutor to give a mathematical understanding or ask an LLM for the proof.</p>
                <p>Otherwise, this module really piqued my interest in the field of AI/ML. I have been reading research papers and watching conferences about the latest advancements in this field, and my prerequisite knowledge from this module really helps.</p>
            </section>
        </div>
    );
};

export default CS2109S;
