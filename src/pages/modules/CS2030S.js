import React from 'react';
import passTestcaseImg from '../../assets/images/modules/CS2030s-passTestcase.jpg';
import '../Page.css';

const CS2030S = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS2030S Programming Methodology II</h1>
            </header>

            <section>
                <p><strong>Grade: A</strong> | <em>Year 1 Semester 2</em></p>
                <p>Builds on CS1101S, introducing more advanced Object-Oriented and Functional Programming concepts.</p>

                <figure>
                    <img src={passTestcaseImg} alt="Happy Me after finishing exercise3" className="page-image" />
                    <figcaption className="figure-caption">Happy Me after finishing exercise 3</figcaption>
                </figure>
            </section>

            <section>
                <h2>Workload: 9/10</h2>
                <p>2 hours of (dry) lectures each week, followed by a quiz and a lab assignment that typically took me 1–2 days to complete. The labs had multiple parts and required passing all test cases while maintaining clean and efficient code structure. I often spent a lot of time—up to 12 hours—on a single assignment. Toward the later assignments, even after several days of effort, I sometimes couldn't complete them and had to resort to AI help. On the bright side, the effort put into these assignments helped solidify my understanding, so by the time I revised for finals, I was already familiar with most of the concepts.</p>
            </section>

            <section>
                <h2>Enjoyability: 7/10</h2>
                <p>For most assignments, I would start off stuck, staring blankly at the screen. But eventually, I'd have a eureka moment that helped me break through and start coding. Solving the problems and passing all test cases was very satisfying. That said, some questions were overly difficult and frustrating, especially after hours of effort, which lowered my overall enjoyment.</p>
            </section>

            <section>
                <h2>What Worked / Didn't Work</h2>
                <ul>
                    <li><strong>Worked:</strong> Diligently learned how to use VIM. During the first 2 weeks before tutorials started, I had more time and practiced using VIM, which helped me code faster during practicals.</li>
                    <li><strong>Worked:</strong> Tried my best not to use AI or copy code for assignments. This gave me more confidence for practicals and reinforced my understanding of OOP and functional programming.</li>
                    <li><strong>Worked:</strong> Initially tried watching the lectures, but they were quite dry. Eventually, I switched to reading the notes provided, which were very comprehensive and allowed me to go at my own pace.</li>
                </ul>
            </section>
        </div>
    );
};

export default CS2030S;
