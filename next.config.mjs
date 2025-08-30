// Next.js + MDX + math (server component friendly: no MDX provider)
import createMDX from '@next/mdx';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

const withMDX = createMDX({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [remarkMath],
        rehypePlugins: [rehypeKatex],
        // Critical: do NOT inject @mdx-js/react provider (prevents createContext usage on server)
        providerImportSource: undefined
    }
});

/** @type {import('next').NextConfig} */
const nextConfig = {
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
};

export default withMDX(nextConfig);