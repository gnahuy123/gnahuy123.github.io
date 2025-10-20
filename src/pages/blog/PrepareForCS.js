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
                <figure>
                    <img src={cs50Img} alt="Figure 1: Prof. David Malan and his famous course CS50" className="page-image" />
                    <figcaption className="figure-caption">Figure 1: Prof. David Malan and his famous course CS50</figcaption>
                </figure>
                <p>
                    CS50 is a free, entry-level Computer Science course taught by Harvard professors. It introduces fundamental concepts and practical programming skills.
                </p>
                <p>
                    There are various versions available, but I recommend <strong>CS50x</strong> for Computer Science students as it focuses more on the core foundations you'll need.
                </p>

                <h3>Pros</h3>
                <ul>
                    <li>Gives you a good overview of what Computer Science is (great if you’re unsure if CS is for you)</li>
                    <li>Familiarizes you with programming syntax (in NUS, this is often covered in just one lecture!)</li>
                    <li>Covers fundamental concepts that overlap with NUS's CS1101S</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                    <li>You could instead read the <a href="https://sourceacademy.org/sicpjs/">CS1101S textbook</a> for more relevant material</li>
                    <li>Steep learning curve (see my personal experience below)</li>
                    <li>It's self-directed, so getting personalised help can be challenging</li>
                </ul>
                <p>
                    The learning curve was extremely steep for me. After months of NS, I experienced a sort of “brain rot,” and since coding was unlike anything I'd done before, it took a lot to grasp the basics.
                </p>
                <p>
                    In fact, understanding these foundational concepts has been the <strong>hardest</strong> part of my CS journey so far.
                </p>
                <p>Why was CS50 so hard for me? Let's compare it with a H2 Math question.</p>
                <pre>
                    <code>
                        Find the maximum point of f(x) = x^2 + 2x + 1
                        <br/><br/>
                        From what I remember, we just needed to follow the steps:
                        <br/>
                         - Differentiate f(x)
                        <br/>
                         - Solve f'(x) = 0
                        <br/>
                         - Use the first or second derivative test to check if it's a max/min
                    </code>
                </pre>
                <p>
                    As you can see, Math problems often follow a set of procedures. You just need to memorise and apply them to similar questions.
                </p>
                <p>Now compare this to a CS50 question:</p>
                <pre>
                    <code>
                        Create a function that takes an integer and prints a pyramid like this:
                        <br/>
                        For n = 4
                        <br/><br/>
                           #  #
                        <br/>
                          ##  ##
                        <br/>
                         ###  ###
                        <br/>
                        ####  ####
                    </code>
                </pre>
                <p>
                    In lectures, the professor only taught C syntax like loops and conditionals. I was completely lost when I saw this problem.
                </p>
                <p>
                    The key difference: CS problems don’t just test your content knowledge — they require <strong>problem-solving</strong>. There’s no spoon-feeding. You must break down the problem and figure it out step by step.
                </p>
                <p>
                    Through these two examples, I hope you see how Computer Science differs drastically from what we’re used to — both in <strong>content</strong> and in the <strong>way we think</strong>.
                </p>
                <p>
                    Since I struggled with CS50x initially, I pivoted to <strong>CS50p</strong> (Python version) before returning to CS50x. It helped build my confidence and gave me a real advantage in future NUS courses.
                </p>
            </section>

            <section>
                <h2>LeetCode</h2>
                <p>
                    LeetCode builds on your understanding of Data Structures and Algorithms, and further sharpens your problem-solving skills.
                </p>
                <p>
                    During CS50, I discovered that I enjoyed solving algorithmic challenges — they forced me to think critically and creatively.
                </p>
                <p>
                    So I spent the rest of my holidays grinding LeetCode, starting with the NeetCode roadmap.
                </p>
                <figure>
                    <img src={neetcodeImg} alt="Figure 2: NeetCode roadmap — structured practice for DSA" className="page-image" />
                    <figcaption className="figure-caption">Figure 2: NeetCode roadmap — structured practice for DSA</figcaption>
                </figure>

                <h3>Pros</h3>
                <ul>
                    <li>Sharpens problem-solving skills</li>
                    <li>Highly applicable to CS2040S</li>
                    <li>Helps you learn to <strong>design</strong> solutions, not just apply them</li>
                    <li>Crucial for technical interviews — it's never too early to start</li>
                    <li>(Most importantly) I enjoyed it</li>
                </ul>

                <h3>Cons</h3>
                <ul>
                    <li>Can be frustrating at times — takes a while to get the hang of</li>
                    <li>Requires focus, patience, and persistence</li>
                    <li>Not project-based, so it doesn't directly add to your portfolio</li>
                </ul>
                <p>
                    I highly recommend the NeetCode roadmap (see below) because it offers a structured path — starting with beginner-friendly problems and gradually introducing more advanced ones.
                </p>
                <p>
                    It helps build your programming intuition, which takes time to develop but lasts a lifetime.
                </p>
            </section>

            <section>
                <h2>Takeaways</h2>
                <p>
                    I could have spent my time working on personal projects or pre-reading course content, but I chose this path because I <strong>enjoyed</strong> it.
                </p>
                <p>
                    If there’s one piece of advice I could give about preparing before matriculation, it’s this:
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
