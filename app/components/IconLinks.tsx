"use client";

type Props = {
  github?: string;
  linkedin?: string;
  resume?: string; // path in /public
};

export default function IconLinks({ github, linkedin, resume }: Props) {
  function Item({
    href,
    label,
    download,
    svg,
  }: {
    href: string;
    label: string;
    download?: boolean;
    svg: React.ReactNode;
  }) {
    const isExternal = href?.startsWith("http");
    return (
      <a
        className="icon-btn mr-3"
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        aria-label={label}
        download={download}
      >
        {svg}
      </a>
    );
  }

  return (
    <div className="flex items-center">
      {github && (
        <Item
          href={github}
          label="GitHub"
          svg={
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2C6.477 2 2 6.588 2 12.222c0 4.49 2.865 8.293 6.839 9.634.5.095.683-.223.683-.497 0-.245-.009-.895-.014-1.757-2.78.616-3.366-1.377-3.366-1.377-.455-1.178-1.11-1.49-1.11-1.49-.908-.637.07-.624.07-.624 1.004.072 1.532 1.057 1.532 1.057.892 1.57 2.341 1.117 2.91.854.091-.662.35-1.117.636-1.374-2.22-.259-4.555-1.14-4.555-5.073 0-1.12.389-2.034 1.028-2.753-.103-.26-.446-1.305.098-2.72 0 0 .84-.272 2.75 1.051A9.33 9.33 0 0 1 12 6.8a9.34 9.34 0 0 1 2.5.349c1.91-1.323 2.749-1.051 2.749-1.051.546 1.415.202 2.46.1 2.72.64.719 1.028 1.633 1.028 2.753 0 3.943-2.338 4.812-4.566 5.066.359.314.679.932.679 1.879 0 1.355-.012 2.448-.012 2.781 0 .276.18.597.688.496C19.138 20.51 22 16.708 22 12.222 22 6.588 17.523 2 12 2Z" />
            </svg>
          }
        />
      )}
      {linkedin && (
        <Item
          href={linkedin}
          label="LinkedIn"
          svg={
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8h5v16H0zM8 8h4.8v2.2h.07C13.66 8.9 15.5 8 17.7 8c5 0 5.9 3.3 5.9 7.6V24H19v-6.9c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.9-2.8 3.8V24H8V8z"/>
            </svg>
          }
        />
      )}
      {resume && (
        <Item
          href={resume}
          label="Download Resume"
          download
          svg={
            /* simple document icon to match the mock */
            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
              <path d="M13 2v6h6" />
              <path d="M8 14h8" />
              <path d="M8 18h8" />
            </svg>
          }
        />
      )}
    </div>
  );
}
