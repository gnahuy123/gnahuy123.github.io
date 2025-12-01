import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context/AppContext';
import ClashBackground from './components/ClashCard/ClashBackground';

// Layouts
import MainLayout from './layouts/MainLayout';
import BlogLayout from './layouts/BlogLayout';
import ProjectsLayout from './layouts/ProjectsLayout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Experience from './pages/Experience'; // Import the new page
import blogData from './data/blogData';
import projectData from './data/projectData';

function App() {
    return (
        <AppProvider>
            {/* Global Background placed here so it persists across all routes */}
            <ClashBackground />

            <Router>
                <Routes>
                    {/* Routes with the main layout (Navbar only) */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} /> {/* New Route */}
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
        </AppProvider>
    );
}

export default App;