"use client";

const projects = [
  { title: "Global Outage Dashboard", blurb: "Realtime visibility for 700+ offices with alert overlays.", href: "/projects" },
  { title: "InvestEd — AI Investing Hub", blurb: "HYSA finder and grounded answers for beginners.", href: "/projects" },
  { title: "MOVE — Pose Trainer", blurb: "Form checks at ~60 FPS with low latency.", href: "/projects" },
];

export default function FeaturedProjects(){
  return (
    <section className="container pb-24">
      <h2 className="h2 mb-4">Featured Projects</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {projects.map((p)=>(
          <a key={p.title} href={p.href} className="card block p-4 transition hover:-translate-y-0.5">
            <div className="mb-3 h-40 w-full rounded-2xl border border-surface bg-[rgba(0,0,0,0.03)]" />
            <div className="text-base font-semibold">{p.title}</div>
            <p className="mt-1 text-sm text-muted">{p.blurb}</p>
          </a>
        ))}
      </div>
    </section>
  );
}
