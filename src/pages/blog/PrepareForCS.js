import React from 'react';
import cs50Img from '../../assets/images/CS50.jpg';
import neetcodeImg from '../../assets/images/neetcode.png';
import '../Page.css';

const PrepareForCS = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>How to Prepare for CS in University</h1>
            </header>

            <section>
                <h2>Preface</h2>
                <p>
                    I completed my Junior College education in 2021 and enlisted in the Singapore Armed Forces for National Service. While some of my peers revised or taught tuition to stay mentally active, I found the rigours of being a soldier left me with little energy or motivation to continue my studies.
                </p>
                <p>
                    Fearing I would fall behind in this notoriously tough course, I began preparing in November 2023, about 8 months before matriculation.
                </p>
                <ul>
                    <li>I come from a Junior College background (Subject combination: PCMe – AAA/C)</li>
                    <li>My favourite subject in JC was H2 Maths</li>
                    <li>I had no formal coding experience</li>
                    <li>I started coding only 1 year before matriculation</li>
                </ul>
            </section>

            <section>
                <h2>CS50 Harvard</h2>
                <img src={cs50Img} alt="Professor David Malan teaching CS50" className="page-image" />
                <p>
                    CS50 is a free, entry-level Computer Science course taught by Harvard professors. It introduces fundamental concepts and practical programming skills. I recommend <strong>CS50x</strong> for Computer Science students as it focuses more on the core foundations you'll need.
                </p>

                <h3>Pros</h3>
                <ul>
                    <li>Gives you a good overview of what Computer Science is.</li>
                    <li>Familiarizes you with programming syntax.</li>
                    <li>Covers fundamental concepts that overlap with NUS's CS1101S.</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                    <li>You could instead read the <a href="https://sourceacademy.org/sicpjs/">CS1101S textbook</a> for more relevant material.</li>
                    <li>Steep learning curve.</li>
                    <li>It's self-directed, so getting personalised help can be challenging.</li>
                </ul>
            </section>

            <section>
                <h2>LeetCode</h2>
                <p>
                    LeetCode builds on your understanding of Data Structures and Algorithms, and further sharpens your problem-solving skills. I spent the rest of my holidays grinding LeetCode, starting with the NeetCode roadmap.
                </p>
                <img src={neetcodeImg} alt="NeetCode roadmap for data structures and algorithms" className="page-image" />

                <h3>Pros</h3>
                <ul>
                    <li>Sharpens problem-solving skills.</li>
                    <li>Highly applicable to CS2040S.</li>
                    <li>Crucial for technical interviews — it's never too early to start.</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                    <li>Can be frustrating at times.</li>
                    <li>Requires focus, patience, and persistence.</li>
                    <li>Not project-based, so it doesn't directly add to your portfolio.</li>
                </ul>
            </section>

            <section>
                <h2>Takeaways</h2>
                <p>
                    I could have spent my time working on personal projects or pre-reading course content, but I chose this path because I <strong>enjoyed</strong> it. If there’s one piece of advice I could give about preparing before matriculation, it’s this:
                </p>
                <p className="highlight">
                    <strong>Do what you enjoy.</strong>
                </p>
                <p>
                    University will be stressful — especially during the transition — and you want to start your journey energized, not burned out.
                </p>
            </section>
        </div>
    );
};

export default PrepareForCS;