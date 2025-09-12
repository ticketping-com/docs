import { createMDX } from 'fumadocs-mdx/next';
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'

const withMDX = createMDX();
const isDev = phase === PHASE_DEVELOPMENT_SERVER

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  assetPrefix: isDev ? undefined : 'https://docs.ticketping.com',
};

export default withMDX(config);
