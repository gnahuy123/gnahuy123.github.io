import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import { AppProvider } from './context/AppContext';

// Layouts
import MainLayout from './layouts/MainLayout';
import BlogLayout from './layouts/BlogLayout';
import ProjectsLayout from './layouts/ProjectsLayout';
import ModulesLayout from './layouts/ModulesLayout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Experience from './pages/Experience';
import Modules from './pages/Modules';
import FunZone from './pages/FunZone';

// Data
import blogData from './data/blogData';
import projectData from './data/projectData';

// Module pages
import CS1101S from './pages/modules/CS1101S';
import CS1231S from './pages/modules/CS1231S';
import MA1522 from './pages/modules/MA1522';
import CS2030S from './pages/modules/CS2030S';
import CS2040S from './pages/modules/CS2040S';
import MA1521 from './pages/modules/MA1521';
import CS2100 from './pages/modules/CS2100';
import CS2103T from './pages/modules/CS2103T';
import CS2102 from './pages/modules/CS2102';
import ST2334 from './pages/modules/ST2334';

function App() {
    return (
        <AppProvider>
            <Router>
                <Routes>
                    {/* Routes with the main layout (Navbar only) */}
                    <Route element={<MainLayout />}>
                        <Route path="/" element={<Home />} />
                        <Route path="/experience" element={<Experience />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/funzone" element={<FunZone />} />
                    </Route>

                    {/* Routes with the blog layout (Navbar and Sidebar) */}
                    <Route path="/blog" element={<BlogLayout />}>
                        <Route index element={<Blog />} />
                        {blogData.map((post, index) => (
                            <Route key={index} path={post.path} element={<post.component />} />
                        ))}
                    </Route>

                    {/* Routes with the modules layout (Navbar and Sidebar) */}
                    <Route path="/modules" element={<ModulesLayout />}>
                        <Route index element={<Modules />} />
                        <Route path="CS1101S" element={<CS1101S />} />
                        <Route path="CS1231S" element={<CS1231S />} />
                        <Route path="MA1522" element={<MA1522 />} />
                        <Route path="CS2030S" element={<CS2030S />} />
                        <Route path="CS2040S" element={<CS2040S />} />
                        <Route path="MA1521" element={<MA1521 />} />
                        <Route path="CS2100" element={<CS2100 />} />
                        <Route path="CS2103T" element={<CS2103T />} />
                        <Route path="CS2102" element={<CS2102 />} />
                        <Route path="ST2334" element={<ST2334 />} />
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