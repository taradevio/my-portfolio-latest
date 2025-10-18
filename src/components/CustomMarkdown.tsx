import { TinaMarkdown } from "tinacms/dist/rich-text";

export function CustomMarkdown({ content }: { content: any }) {
  return (
    <TinaMarkdown
      content={content}
      components={{
        img: (props: any) => (
          <figure className="my-4">
            <div className="w-full lg:w-2xl lg:mx-auto">
              <img src={props.url} alt={props.alt} className="mx-auto" />
            </div>
            {props.caption && (
              <figcaption className="mt-2 text-sm text-gray-500 text-center">
                {props.caption}
              </figcaption>
            )}
          </figure>
        ),
        blockquote: (props: any) => (
          <blockquote className="border-l-4 border-gray-400 pl-4 italic text-gray-600 my-4">
            {props.children}
          </blockquote>
        ),
      }}
    />
  );
}
