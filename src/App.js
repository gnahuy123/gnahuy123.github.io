import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

// Layouts
import MainLayout from './layouts/MainLayout';
import BlogLayout from './layouts/BlogLayout';

// Pages
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import PrepareForCS from './pages/blog/PrepareForCS';
import Y1S1 from './pages/blog/Y1S1';
import Y1S2 from './pages/blog/Y1S2';

function App() {
    return (
        <Router>
            <Routes>
                {/* Routes with the main layout (Navbar only) */}
                <Route element={<MainLayout />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/contact" element={<Contact />} />
                </Route>

                {/* Routes with the blog layout (Navbar and Sidebar) */}
                <Route path="/blog" element={<BlogLayout />}>
                    <Route index element={<Blog />} />
                    <Route path="prepare-for-cs" element={<PrepareForCS />} />
                    <Route path="y1s1-mod-review" element={<Y1S1 />} />
                    <Route path="y1s2-mod-review" element={<Y1S2 />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;
