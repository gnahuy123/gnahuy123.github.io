import React from 'react';
import passTestcaseImg from '../../assets/images/CS2030s-passTestcase.jpg';
import perfImg from '../../assets/images/CS2040s-perf.jpg';
import '../Page.css';

const Y1S2 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>Y1S2 Mod Review</h1>
            </header>

            <section>
                <h2>Context</h2>
                <p>I decided to overload heavily this semester as I had some SUs to spare. This led to me taking 32 MCs.</p>
                <ul>
                    <li>CS2030S: Programming Methodology II</li>
                    <li>CS2040S: Data Structures and Algorithms</li>
                    <li>MA1521: Calculus for Computing</li>
                    <li>IS1108: Digital Ethics and Data Privacy</li>
                    <li>ES2660: Communicating in the Information Age</li>
                    <li>CDE2501: Sustainable Cities</li>
                    <li>EG1311: Design and Make</li>
                    <li>MUA1192: Chamber Singers</li>
                    <li>CFG1003: Financial Wellbeing – Introduction</li>
                    <li>CFG1004: Financial Wellbeing – Art and Science of Investing</li>
                </ul>
            </section>

            <section>
                <h2>CS2030S Programming Methodology II</h2>
                <figure>
                    <img src={passTestcaseImg} alt="Figure 1. Happy Me after finishing exercise3" className="page-image" />
                    <figcaption className="figure-caption">Figure 1. Happy Me after finishing exercise3</figcaption>
                </figure>
                <p>Builds on CS1101S, introducing more advanced Object-Oriented and Functional Programming concepts. I got an A.</p>

                <h3>Workload: 9/10</h3>
                <p>2 hours of (dry) lectures each week, followed by a quiz and a lab assignment that typically took me 1–2 days to complete.
                    The labs had multiple parts and required passing all test cases while maintaining clean and efficient code structure.
                    I often spent a lot of time—up to 12 hours—on a single assignment. Toward the later assignments, even after several days of effort, I sometimes couldn't complete them and had to resort to AI help.
                    On the bright side, the effort put into these assignments helped solidify my understanding, so by the time I revised for finals, I was already familiar with most of the concepts.</p>

                <h3>Enjoyability: 7/10</h3>
                <p>For most assignments, I would start off stuck, staring blankly at the screen. But eventually, I’d have a eureka moment that helped me break through and start coding.
                    Solving the problems and passing all test cases was very satisfying. That said, some questions were overly difficult and frustrating, especially after hours of effort, which lowered my overall enjoyment.</p>

                <h3>What I did that worked/didn't work:</h3>
                <ul>
                    <li><b>Worked:</b> Diligently learned how to use VIM. During the first 2 weeks before tutorials started, I had more time and practiced using VIM, which helped me code faster during practicals.</li>
                    <li><b>Worked:</b> Tried my best not to use AI or copy code for assignments. This gave me more confidence for practicals and reinforced my understanding of OOP and functional programming.</li>
                    <li><b>Worked:</b> Initially tried watching the lectures, but they were quite dry. Eventually, I switched to reading the notes provided, which were very comprehensive and allowed me to go at my own pace.</li>
                </ul>
            </section>

            <section>
                <h2>CS2040S Data Structures and Algorithms</h2>
                <p>The infamous Data Structures and Algorithms module. I got an A-.</p>

                <h3>Story Time</h3>
                <p>
                    I entered this module feeling confident, as I had done a lot of LeetCode prep before university. From LeetCode, I learned to recognize patterns and apply certain data structures to solve problems.
                    However, CS2040S emphasized theoretical proofs, proving algorithm correctness and time complexity rather than just application.
                    The midterm format was also different from past years, which threw me off. I ended up scoring below the 25th percentile for the midterms.
                </p>
                <p>
                    But I locked in after that. I began focusing on understanding the <i>why</i> behind the proofs, not just the <i>how</i>. I spent more time practicing writing out algorithms and explaining them clearly,
                    which helped in conveying my thoughts during exams. Consultations with Eldrick also helped me gain clarity and confidence. I estimate I scored around the top 10% for the finals (assuming a normal distribution).
                </p>
                <figure>
                    <img src={perfImg} alt="Figure 2. CS2040S grades" className="page-image" />
                    <figcaption className="figure-caption">Figure 2. CS2040S grades</figcaption>
                </figure>

                <h3>Workload: 8/10</h3>
                <p>3 hours of lectures per week, 1-hour recitation, and a 2-hour tutorial. Recitations and tutorials required preparing answers for worksheet questions in advance.
                    There were also programming assignments that took me about 3 hours on average. I spent about double the lecture time reviewing proofs and internalizing concepts.</p>

                <h3>Enjoyability: 8/10</h3>
                <p>Intellectually challenging and stimulating. Lectures were heavy on proof techniques and theoretical understanding. Tutorials and recitations showed elegant problem-solving tricks.
                    The programming assignments provided useful hands-on experience and solidified the abstract concepts.</p>

                <h3>What I did that worked/didn't work:</h3>
                <ul>
                    <li><b>Worked:</b> Focused on understanding the underlying theory and asking "why" each concept or proof works, instead of just memorizing how to solve problems.</li>
                    <li><b>Didn’t work:</b> Initially over-relied on prior LeetCode knowledge and underestimated the theoretical depth required, which caused me to struggle during midterms.</li>
                </ul>
            </section>

            <section>
                <h2>MA1521 Calculus for Computing</h2>
                <p>Introductory calculus module meant for computing students. I got a B+.</p>
                <p>
                    To be honest, I wasn’t very invested in this module. I only started studying one day before the exam and rushed through the examples to prep.
                    First 5 chapters were roughly taught in H2 maths and I therefore banked on that knowledge to pass and then SU.
                    I didn’t attend lectures or tutorials, which definitely hurt my understanding. In the final exam, I only managed to attempt 3 out of 10 questions.
                </p>
                <p>
                    While I’m generally quite interested in math mods, I found it hard to enjoy this one because it relied heavily on computation and offered barely any mathematical intuition.
                    The lectures were dry and uninspiring, and by Week 3, I had pretty much given up on trying to keep up with the content.
                </p>

                <h3>Workload: 0.5/10</h3>
                <p>
                    From a pure time-commitment perspective, the workload could be low if you’re not engaging with the content much like I did.
                    There were lectures and tutorials, but since I skipped most of them, my weekly time spent was basically zero until the final week.
                </p>

                <h3>Enjoyability: 1/10</h3>
                <p>
                    I found it hard to stay interested because the teaching style didn’t click with me. If the professor had been more engaging or enthusiastic, I might have given the module a proper try.
                    Friends of mine who later took MA2001 (major in DSA) mentioned that it was more rigorous and focused on proofs, which made it more enjoyable than the largely computational approach here.
                </p>

                <h3>What I did that worked/didn't work:</h3>
                <ul>
                    <li><b>Didn’t Work:</b> Only started studying the day before the final and skipped most of the semester’s learning obviously not ideal. Definitely wouldn’t recommend this approach.</li>
                    <li><b>Didn’t Work:</b> Not going for tutorials.</li>
                </ul>
            </section>
        </div>
    );
};

export default Y1S2;

