import PrepareForCS from '../pages/blog/PrepareForCS';
import AboutTeaching from '../pages/blog/AboutTeaching';

// Only non-module blog posts remain here
// Module reviews have been moved to /modules
const blogData = [
    {
        path: 'about-teaching',
        title: 'About Teaching',
        component: AboutTeaching,
        date: new Date('2025-12-29'),
    },
    {
        path: 'prepare-for-cs',
        title: 'How to Prepare for CS in University',
        component: PrepareForCS,
        date: new Date('2024-12-14'),
    },
];

export default blogData;

