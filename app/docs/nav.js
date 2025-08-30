// Central navigation structure for docs sidebar.
// Extend or reorder as you add more content.
export const docsNav = [
    {
        section: 'Intro',
        items: [
            { title: 'What is a Matrix?', href: '/docs/what-is-a-matrix' }
        ]
    },
    {
        section: 'Operations',
        items: [
            { title: 'Addition', href: '/docs/addition' },
            { title: 'Multiplication', href: '/docs/multiplication' },
            { title: 'Determinant', href: '/docs/determinant', disabled: true },
            { title: 'Inverse', href: '/docs/inverse', disabled: true }
        ]
    },
    {
        section: 'Calculator',
        items: [
            { title: 'Matrix Calculator', href: '/docs/calculator' }
        ]
    },
    {
        section: 'Advanced',
        items: [
            { title: 'Future Topics', href: '#', disabled: true }
        ]
    }
];
