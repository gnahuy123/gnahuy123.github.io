import React from 'react';
import ClashCard from '../components/ClashCard';
import blogData from '../data/blogData';
import projectData from '../data/projectData';
import personData from "../data/personData";

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
            <ClashCard projects={projects} blogs={blogs} personData={personData} />
        </div>
    );
};

export default Home;
