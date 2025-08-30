// Global MDX component mappings.
// This file enables custom React components and styling for MDX content
// per the Next.js App Router + @next/mdx convention.
// Extend this gradually (avoid over-styling early).

import Image from 'next/image';

// Example: custom heading styles could use utility classes.
// Keep minimal; let global CSS + Tailwind handle baseline typography.
const components = {
    // h1: (props) => <h1 className="mt-0 text-3xl font-semibold" {...props} />,
    img: (props) => (
        <Image
            sizes="100vw"
            style={{ width: '100%', height: 'auto' }}
            alt={props.alt || ''}
            {...props}
        />
    ),
    // Inline code already styled globally; leave code/pre default for now.
};

export function useMDXComponents(overrides) {
    return { ...components, ...overrides };
}
