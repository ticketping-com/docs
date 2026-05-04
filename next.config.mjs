import { createMDX } from 'fumadocs-mdx/next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
export default (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER;

  return withMDX({
    reactStrictMode: true,
    assetPrefix: isDev ? undefined : 'https://docs.ticketping.com',
  });
};
