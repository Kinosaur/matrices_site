// Next.js + MDX + math (server component friendly: no MDX provider)
import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

// Configure MDX to also accept plain .md files (if desired for simpler content)
const withMDX = createMDX({
    extension: /\.(md|mdx)$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex]
        // Using default provider so that mdx-components.js can map elements.
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    // Allow MDX + MD + TS/TSX if added later.
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx']
};

export default withMDX(nextConfig);