import React from 'react';
import ClashCard from '../components/ClashCard';
import blogData from '../blogData';
import projectData from '../projectData';

const Home = () => {
    const blogs = blogData.map(post => ({
        title: post.title,
        url: `/blog/${post.path}`,
        date: post.date
    }));

    const projects = projectData.map(project => ({
        name: project.name,
        description: project.description,
        url: project.url
    }));

    return (
        <div>
            <ClashCard projects={projects} blogs={blogs} />
        </div>
    );
};

export default Home;
