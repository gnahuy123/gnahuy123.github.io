import React from 'react';
import blogData from '../data/blogData';
import projectData from '../data/projectData';
import personData from "../data/personData";
import experienceData from "../data/experienceData";
import ClashGame from "../components/ClashCard/ClashGame";
import SlotMachine from "../components/games/SlotMachine";

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

    const data = {
        personData: personData,
        blogData: blogs,
        projectData: projects,
        experienceData: experienceData
    }

    return (
        <div>
            <ClashGame data={data} />
            <SlotMachine />
        </div>
    );
};

export default Home;
