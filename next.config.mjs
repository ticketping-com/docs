import { createMDX } from 'fumadocs-mdx/next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  
  return {
    reactStrictMode: true,
    assetPrefix: isDev ? '/docs/' : 'https://docs.ticketping.com/docs/',
  };
};

export default withMDX(config);
