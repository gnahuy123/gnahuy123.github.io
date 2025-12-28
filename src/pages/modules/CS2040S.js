import React from 'react';
import perfImg from '../../assets/images/CS2040s-perf.jpg';
import '../Page.css';

const CS2040S = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS2040S Data Structures and Algorithms</h1>
            </header>

            <section>
                <p><strong>Grade: A-</strong> | <em>Year 1 Semester 2</em></p>
                <p>The infamous Data Structures and Algorithms module.</p>
            </section>

            <section>
                <h2>Story Time</h2>
                <p>I entered this module feeling confident, as I had done a lot of LeetCode prep before university. From LeetCode, I learned to recognize patterns and apply certain data structures to solve problems. However, CS2040S emphasized theoretical proofs, proving algorithm correctness and time complexity rather than just application. The midterm format was also different from past years, which threw me off. I ended up scoring below the 25th percentile for the midterms.</p>
                <p>But I locked in after that. I began focusing on understanding the <em>why</em> behind the proofs, not just the <em>how</em>. I spent more time practicing writing out algorithms and explaining them clearly, which helped in conveying my thoughts during exams. Consultations with Eldrick also helped me gain clarity and confidence. I estimate I scored around the top 10% for the finals (assuming a normal distribution).</p>

                <figure>
                    <img src={perfImg} alt="CS2040S grades" className="page-image" />
                    <figcaption className="figure-caption">CS2040S grades</figcaption>
                </figure>
            </section>

            <section>
                <h2>Workload: 8/10</h2>
                <p>3 hours of lectures per week, 1-hour recitation, and a 2-hour tutorial. Recitations and tutorials required preparing answers for worksheet questions in advance. There were also programming assignments that took me about 3 hours on average. I spent about double the lecture time reviewing proofs and internalizing concepts.</p>
            </section>

            <section>
                <h2>Enjoyability: 8/10</h2>
                <p>Intellectually challenging and stimulating. Lectures were heavy on proof techniques and theoretical understanding. Tutorials and recitations showed elegant problem-solving tricks. The programming assignments provided useful hands-on experience and solidified the abstract concepts.</p>
            </section>

            <section>
                <h2>What Worked / Didn't Work</h2>
                <ul>
                    <li><strong>Worked:</strong> Focused on understanding the underlying theory and asking "why" each concept or proof works, instead of just memorizing how to solve problems.</li>
                    <li><strong>Didn't Work:</strong> Initially over-relied on prior LeetCode knowledge and underestimated the theoretical depth required, which caused me to struggle during midterms.</li>
                </ul>
            </section>
        </div>
    );
};

export default CS2040S;
