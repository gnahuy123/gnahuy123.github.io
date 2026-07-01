import React from 'react';
import '../Page.css';

const CS2106 = () => {
    return (
        <div className="page">
            <header className="page-header">
                <h1>CS2106 Introduction to Operating Systems</h1>
            </header>

            <section>
                <p><em>Year 2 Semester 2</em></p>
                <p><strong>Workload: 5/10</strong> | <strong>Difficulty: 6/10</strong> | <strong>Enjoyment: 3/10</strong></p>
                <p>I actually believe that this module is way more relevant to engineers than expected. As the OS is one of the biggest pieces of software written, there are a lot of SWE principles learnt.</p>
                <p>As someone quite skeptical and scared of low-level implementations, this course has made me more CS-ish. Learning about processes vs threads, race conditions, and file systems was definitely important for SWE interviews.</p>
                <p>My main gripe was with the finals. For the calculation questions, I spent most of the entire finals week preparing for them but just could not seem to get the hang of them. In the end, I got desperate, memorised the questions and answers, overfitted, and missed out on 10+ marks in the finals.</p>
                <p>However, learning these concepts was indeed fun. My favourite was the synchronisation part. Learning about different abstract theoretical approaches, common problems, and design patterns was intellectually intriguing.</p>
            </section>
        </div>
    );
};

export default CS2106;
