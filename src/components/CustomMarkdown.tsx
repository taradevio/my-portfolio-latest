import { TinaMarkdown } from "tinacms/dist/rich-text";

export function CustomMarkdown({ content }: { content: any }) {
  return (
    <TinaMarkdown
      content={content}
      components={{
        h1: (props: any) => (
          <h1 className="text-[32px] font-bold leading-tight mb-5 mt-10 text-[var(--text-primary)]">
            {props.children}
          </h1>
        ),
        h2: (props: any) => (
          <h2 className="text-[24px] font-bold leading-tight mb-5 mt-10 text-[var(--text-primary)]">
            {props.children}
          </h2>
        ),
        h3: (props: any) => (
          <h3 className="text-[20px] font-bold leading-snug mb-3 mt-8 text-[var(--text-primary)]">
            {props.children}
          </h3>
        ),
        p: (props: any) => (
          <p className="text-[18px] leading-8 mb-6 font-[Georgia,serif] text-[var(--text-primary)]">
            {props.children}
          </p>
        ),
        a: (props: any) => (
          <a
            href={props.url}
            className="text-[var(--twitter-blue)] hover:underline decoration-[var(--twitter-blue)] decoration-1"
          >
            {props.children}
          </a>
        ),
        ul: (props: any) => (
          <ul className="list-disc pl-6 mb-6 space-y-2 text-[18px] text-[var(--text-primary)] font-[Georgia,serif] leading-8">
            {props.children}
          </ul>
        ),
        ol: (props: any) => (
          <ol className="list-decimal pl-6 mb-6 space-y-2 text-[18px] text-[var(--text-primary)] font-[Georgia,serif] leading-8">
            {props.children}
          </ol>
        ),
        li: (props: any) => <li className="pl-2">{props.children}</li>,
        blockquote: (props: any) => (
          <blockquote className="border-l-[4px] border-[var(--twitter-blue)] pl-6 italic my-8 text-[20px] text-[var(--text-secondary)] font-[Georgia,serif] leading-relaxed">
            "{props.children}"
          </blockquote>
        ),
        code: (props: any) => (
          <code className="bg-[var(--bg-secondary)] px-1.5 py-0.5 rounded text-sm font-mono text-[var(--text-primary)]">
            {props.children}
          </code>
        ),
        img: (props: any) => (
          <figure className="my-10">
            <div className="w-full rounded-xl overflow-hidden border border-[var(--border-color)]">
              <img src={props.url} alt={props.alt} className="w-full block" />
            </div>
            {props.caption && (
              <figcaption className="mt-3 text-sm text-[var(--text-secondary)] text-center">
                {props.caption}
              </figcaption>
            )}
          </figure>
        ),
      }}
    />
  );
}
