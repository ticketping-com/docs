import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

/**
 * Shared layout configurations
 *
 * you can customise layouts individually from:
 * Home Layout: app/(home)/layout.tsx
 * Docs Layout: app/docs/layout.tsx
 */
export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <>
          <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"><g clipPath="url(#a)"><path fill="#020202" d="M32 16a16 16 0 0 1 -16 16A16 16 0 0 1 0 16a16 16 0 0 1 32 0"/><path d="M13.982 11.406h6.601l-0.863 4.062H13.982z" fill="#fff"/><path d="M13.761 8.005h4.253l-3.746 16.037h-4.277z" fill="#fff"/><path fill="#4CB782" fillOpacity=".9" d="M24 20.954a3.313 3.313 0 0 1 -3.313 3.313 3.313 3.313 0 0 1 -3.313 -3.313 3.313 3.313 0 0 1 6.626 0"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h32v32H0z"/></clipPath></defs></svg>
          Ticketping Docs
        </>
      ),
    },
    // see https://fumadocs.dev/docs/ui/navigation/links
    links: [],
  };
}
