import defaultMdxComponents from "fumadocs-ui/mdx";
import { Callout } from "fumadocs-ui/components/callout";
import {
  CodeBlock,
  CodeBlockTabs,
  CodeBlockTabsList,
  CodeBlockTabsTrigger,
  Pre,
} from "fumadocs-ui/components/codeblock";
import type { MDXComponents } from "mdx/types";
import type { ComponentProps } from "react";

// Pill
function Pill({ children }: ComponentProps<"span">) {
  return (
    <span className="inline-flex items-center rounded-[0.3em] leading-[1.3] border border-fd-primary/40 bg-fd-primary/5 px-[0.25em] py-[0.1em] font-mono text-[0.875em] text-fd-primary">
      {children}
    </span>
  );
}

// Callout
function CustomCallout({
  type = "info",
  className,
  ...props
}: ComponentProps<typeof Callout>) {
  return (
    <Callout
      type={type}
      className={[
        "rounded-md",
        "border-(--callout-color)/30",
        "shadow-none",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

// Code block tabs
function CustomCodeBlockTabs({
  className,
  ...props
}: ComponentProps<typeof CodeBlockTabs>) {
  return (
    <CodeBlockTabs
      className={[
        "rounded-md",
        "overflow-hidden",
        "bg-fd-codeblocktab-bg",
        "border-fd-border",
        "shadow-sm",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

function CustomCodeBlockTabsList({
  className,
  ...props
}: ComponentProps<typeof CodeBlockTabsList>) {
  return (
    <div className="fd-tabs-wrapper">
      <CodeBlockTabsList
        className={[
          "bg-fd-muted rounded-t-md",
          "items-center",
          "gap-0.5 h-[40px]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    </div>
  );
}

function CustomCodeBlockTabsTrigger({
  className,
  ...props
}: ComponentProps<typeof CodeBlockTabsTrigger>) {
  return (
    <CodeBlockTabsTrigger
      className={[
        "rounded-[5px] px-2.5 py-1 text-xs font-medium",
        "text-fd-muted-foreground",
        "transition-colors duration-150",
        "hover:text-fd-foreground hover:bg-fd-border/60",
        "data-[state=active]:bg-fd-primary/12 data-[state=active]:text-fd-primary",
        "[&>div:first-child]:hidden",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      {...props}
    />
  );
}

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    pre: ({ children, className, ...props }) => (
      <CodeBlock
        {...props}
        className={[
          "rounded-md",
          "border-fd-border",
          "shadow-sm",
          "bg-(--color-fd-codeblock-bg)",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <Pre>{children}</Pre>
      </CodeBlock>
    ),
    Pill,
    Callout: CustomCallout,
    CodeBlockTabs: CustomCodeBlockTabs,
    CodeBlockTabsList: CustomCodeBlockTabsList,
    CodeBlockTabsTrigger: CustomCodeBlockTabsTrigger,
    ...components,
  };
}
