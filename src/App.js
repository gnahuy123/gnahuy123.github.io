import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout';
import BlogLayout from './layouts/BlogLayout';
import ProjectsLayout from './layouts/ProjectsLayout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import blogData from './data/blogData';
import projectData from './data/projectData';

function App() {
    return (
        <Router>
            <Routes>
                {/* Routes with the main layout (Navbar only) */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Routes with the blog layout (Navbar and Sidebar) */}
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index element={<Blog />} />
                    {blogData.map((post, index) => (
                        <Route key={index} path={post.path} element={<post.component />} />
                    ))}
                </Route>

                {/* Routes with the projects layout (Navbar and Sidebar) */}
                <Route path="/projects" element={<ProjectsLayout />}>
                    <Route index element={<Projects />} />
                    {projectData.map((project, index) => (
                        <Route key={index} path={project.path} element={<project.component />} />
                    ))}
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
