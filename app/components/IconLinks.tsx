"use client";

type Props = {
  github: string;
  linkedin: string;
  resume: string; // /public/James_Williams_Resume.pdf
};

export default function IconLinks({ github, linkedin, resume }: Props) {
  function Chip({ children, href, label, download }: { children: React.ReactNode; href: string; label: string; download?: boolean }) {
    return (
      <a
        href={href}
        aria-label={label}
        title={label}
        download={download}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noreferrer" : undefined}
        className="icon-btn"
      >
        {children}
      </a>
    );
  }

  return (
    <div className="flex items-center gap-3">
      {/* GitHub */}
      <Chip href={github} label="GitHub">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77 5.44 5.44 0 0 0 3.5 8.5c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 15.13V19"/>
        </svg>
      </Chip>

      {/* LinkedIn */}
      <Chip href={linkedin} label="LinkedIn">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
          <rect x="2" y="9" width="4" height="12"/>
          <circle cx="4" cy="4" r="2"/>
        </svg>
      </Chip>

      {/* Resume (document icon like the mock) */}
      <Chip href={resume} label="Download resume" download>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(var(--accent))" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <path d="M14 2v6h6"/>
          <path d="M12 11v6"/>
          <path d="M9 14l3 3 3-3"/>
        </svg>
      </Chip>
    </div>
  );
}
