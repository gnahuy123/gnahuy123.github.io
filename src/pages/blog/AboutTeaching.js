import React from 'react';
import '../Page.css';

const AboutTeaching = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>About Teaching</h1>
            </header>

            <section>
                <p><em>Teaching a singular class of 6 doesn't make me an expert on education, but these are my reflections and takeaways.</em></p>
            </section>

            <section>
                <h2>Context</h2>
                <p>I taught CS1101S in AY25/26 Semester 1.</p>
            </section>

            <section>
                <h2>How I Got the Role</h2>
                <p>Firstly, I got A+ for the module, then filled in a Google form and went for an interview. The interview went half bad, but I showed enthusiasm and passion for not only Computer Science but also Teaching. When I got the offer, I was very happy.</p>
            </section>

            <section>
                <h2>Motivating Factor Before Starting</h2>
                <p>Honestly, my main motivating factor was that I could finally have a relevant experience point on my resume. Before we started teaching, there was also an orientation day where the professors briefed us and gave us an overview of the semester.</p>
                <p>Then, I came up with a goal/mission for my class:</p>
                <div className="highlight">
                    <p><strong>To allow students to learn interactively, to further improve understanding and to prepare themselves for mods with more classroom involvement.</strong></p>
                </div>
                <p>CS1101S has 4 hours of lecture, 1 hour of recitation, 3 hours of assignments — and these 2 hours of tutorial (which I am teaching) is the best time for interactive teaching. Classes are designed to have less than 8 students and also have studio sheets meant for students to explain their thought process.</p>
                <p>The <strong>self-explanation effect</strong> states that by verbalising and explaining a concept that you know, you gain a stronger understanding of that concept. Therefore, I thought it was important to let students explain their thought processes in class.</p>
                <p>Furthermore, CS1101S tutorials may be the only class with less than 8 students per class. Computer science students have this "introvert/quiet" stereotype. I wanted to give students a platform to start participating in class before moving onto larger class sizes.</p>
            </section>

            <section>
                <h2>Problems & Solutions</h2>

                <h3>Problem 1: My Students Were Smarter Than Average</h3>
                <p>During their introductions, some mentioned that they had scholarships with the Digital Force, up to eight years of programming experience, and one was even a competitive programmer. Even those without much experience were picking up skills at a rapid pace, as shown by their exam results.</p>
                <p>Sometimes, my students came up with suggestions that were better than mine or corrected me when I made a mistake. In the earlier lessons, I felt intimidated and sometimes needed time to evaluate their suggestions on the spot.</p>

                <h3>Solution 1: Letting Students Lead the Thinking</h3>
                <p>I allowed students to answer questions posed by other students and encouraged them to explain their thought processes. Since the lessons required them to work on exercises, getting them to explain their solutions together with their reasoning helped them solidify their understanding. This also gave other students, as well as myself, a chance to learn new approaches.</p>
                <p>Over time, I realised that my role shifted from a teacher to a <strong>sounding board for their ideas</strong>. I provided them with a launchpad for their problem-solving approaches, encouraged them when necessary, and allowed other students to chime in. My mindset changed from "Why is my student better than me?" to "How can we improve our approach to this problem together?"</p>

                <h3>Problem 2: Feeling Intimidated When Students Challenged My Answers</h3>
                <p>When students corrected me or suggested alternative solutions, I sometimes felt pressured and unsure how to respond immediately. This made me hesitant at times and affected my confidence during lessons.</p>

                <h3>Solution 2: Reframing as Learning Opportunities</h3>
                <p>Instead of seeing these situations as a threat, I started treating them as opportunities for discussion. By opening the floor for students to explain and evaluate ideas together, the focus shifted away from me having to be "right" all the time and towards collective learning. This made the classroom environment more collaborative.</p>

                <h3>Problem 3: Not Being Adequately Prepared</h3>
                <p>I realised that knowing something does not equate to being able to explain it well. There were lessons where I found myself stuttering or explaining solutions half-heartedly because I was not adequately prepared.</p>

                <h3>Solution 3: Improving Lesson Preparation</h3>
                <p>To ensure I was better prepared, I made sure to prepare all lesson materials myself. This helped me fully understand the content I was teaching and allowed me to follow my own thought process in real time during lessons. I also tried to integrate interactive elements that suited my teaching style.</p>
            </section>

            <section>
                <h2>Notable Lessons</h2>

                <h3>Lesson 1</h3>
                <p>10 mins for introductions around the table, 10 mins for admin details, 10 mins for going through a very easy problem sheet. After the lesson, the students asked how much I was getting paid and if my job was that easy. I brushed it off as my efforts would seem more prominent in future lessons.</p>

                <h3>Lesson 4</h3>
                <p>This was the first sheet that I did not solve myself as a student and possibly the hardest sheet of the module. I enjoyed it the most as I managed to explain the intuition of my approach to solve the problem. Not knowing how to solve the problem was also beneficial — I knew the "key" that I missed out on as a student, which allowed them to make this leap in understanding. After all, I believe that in programming, problem solving comes first while code is just a way to convey that solution.</p>

                <h3>Lesson 6</h3>
                <p>This lesson required students to draw environment model diagrams. I made it interactive by pairing students up and making them draw the diagrams. Each of us got up from our seats, drew on different boards, and we crowded around each board to discuss what each answer got correct/wrong. This lesson embodied the "learn by doing" spirit of tutorials.</p>

                <h3>Lesson 8</h3>
                <p>This tutorial was leading up to the practical exam. One thing I struggled with during mine was that I had no trouble working on the practices, but the stress during the exam made me panic and freeze.</p>
                <p>Therefore, I created a "mini contest" with some stakes to add stress and recreate a competition vibe. To be honest, I wanted to organise something like this as I watched a competitive programming competition, but I do believe it also matched the objectives of the lesson.</p>

                <h3>Lesson 10</h3>
                <p>We finished a very short studio sheet and I treated my students to dinner as I got paid too much and also to bribe them for a better teaching feedback score 😄</p>
            </section>

            <section>
                <h2>Takeaways</h2>

                <h3>Definition of Teaching Has Changed</h3>
                <p>With the Age of AI, teaching is no longer just about providing information, as knowledge is abundant and accessible on the web and LLMs. I believe that how we provide value is through <strong>guiding students' thought processes</strong> and <strong>personalising their learning experience</strong>.</p>

                <h3>Confidence is Key</h3>
                <p>Confidence, when paired with ability, beats just ability. Confidence is mostly cultivated by good performance, and good performance is usually determined by how you do amongst your peers. It is unfortunately impossible for everyone to do well amongst their peers, so how do you cultivate confidence in all your students?</p>
                <p>I don't know, but I tried my best to mitigate this by watching my tone in class (especially when pointing out mistakes) and observing students' body language. Personally, this is something I hope to work on too, as confidence during teaching trickles down to students.</p>

                <h3>Teaching is a 2-Way Learning Process</h3>
                <p>While it is expected that students learn during lessons, I have learnt plentiful from my students — from their bright ideas to soft skills. In a field like CS where novel solutions to problems are celebrated, lessons formatted like these are a great environment for both students and teachers to learn.</p>
            </section>

            <section>
                <h2>Future</h2>
                <p>My views on teaching definitely changed — from just being a bullet point on my resume to a valuable experience.</p>
                <p>Will I TA again? Probably for CS1101S, but maybe not for higher-level modules. Whilst immensely rewarding, I feel like teaching is not really something that aligns with my future career goals. Other modules would require me to re-learn content and create new material, whilst for CS1101S I already have those covered.</p>
            </section>
        </div>
    );
};

export default AboutTeaching;
