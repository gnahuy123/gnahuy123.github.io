import React from 'react';
import linkedlistImg from '../../assets/images/blog/linkedlistCS50.png';
import '../Page.css';

const CS1101S = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS1101S Programming Methodology</h1>
            </header>

            <section>
                <p><strong>Grade: A+</strong> | <em>Year 1 Semester 1</em></p>
                <p>This is the Intro to Programming course for all Computer Science students.</p>
                <p>Nothing much to say then your typical intro to programming course. If you have done an online intro course before, the content covered here is similar but not the same. Therefore, I managed to grasp onto concepts quickly.</p>

                <figure>
                    <img src={linkedlistImg} alt="Linked list concept taught in CS50" className="page-image" />
                    <figcaption className="figure-caption">Figure: linked list concept taught in CS50</figcaption>
                </figure>
            </section>

            <section>
                <h2>Workload: 7/10</h2>
                <p>4 hours of Lectures a week, 2 hours of tutorials and 1 hour of recitations. This coupled with the homework assignments lead to a module with high workload. Sometimes the lectures would get too dry and I would watch them at 2x speed except for the more heavy lectures. Even though just by PURE workload this would easily be a 9-10, I deducted some points as it does not require as much critical and deep thinking as compared to my other mods. Therefore, it would take up a lot of time but comparatively less brainpower.</p>
            </section>

            <section>
                <h2>Enjoyability: 5/10</h2>
                <p>There are many student initiated projects such as the source academy game (educational game), a robotics component and many more creative missions that allow us to create art/music. Even though all these were made available and accessible to students, I only did the compulsory ones as I did not enjoy them that much. For the compulsory ones, they felt mundane and monotonous as we had to learn new libraries every week and I spent many hours debugging. However, this seemed to be the most enjoyable module amongst my friends so your experience might differ from mine.</p>
            </section>

            <section>
                <h2>What Worked / Didn't Work</h2>
                <ul>
                    <li><strong>Worked:</strong> One of the components was that we had to do assignments to hit 24k EXP. My strategy was to finish all assignments on time/early in the first half of the sem so I could tone it down in the later half.</li>
                    <li><strong>Didn't Work:</strong> I spent a lot of time debugging stupid mistakes. While it is important to be able to solve problems yourself, I could've saved many hours if I had consulted a friend to help me with a bug.</li>
                </ul>
            </section>
        </div>
    );
};

export default CS1101S;
