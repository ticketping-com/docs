import { createMDX } from 'fumadocs-mdx/next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants.js'

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = (phase) => {
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  
  return {
    output: 'export',
    reactStrictMode: true,
    assetPrefix: isDev ? undefined : 'https://docs.ticketping.com',
  };
};

export default withMDX(config);
