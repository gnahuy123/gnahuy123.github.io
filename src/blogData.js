import PrepareForCS from './pages/blog/PrepareForCS';
import Y1S1 from './pages/blog/Y1S1';
import Y1S2 from './pages/blog/Y1S2';

const blogData = [
    {
        path: 'prepare-for-cs',
        title: 'How to Prepare for CS in University',
        component: PrepareForCS,
        date:  new Date('2024-12-14'),

    },
    {
        path: 'y1s1-mod-review',
        title: 'Y1S1 Module Review',
        component: Y1S1,
        date:  new Date('2025-02-24'),
    },
    {
        path: 'y1s2-mod-review',
        title: 'Y1S2 Module Review',
        component: Y1S2,
        date: new Date('2025-06-29'),
    },
];

export default blogData;
