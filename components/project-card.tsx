import Link from "next/link";
import type { Project } from "@/data/projects";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group border border-neutral-300 bg-[#f8f7f4] p-5 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] sm:p-6">
      <div className="mb-8 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">
        <span>{project.business}</span>
        <span>{project.year}</span>
      </div>

      <div className="mb-8 h-52 bg-neutral-200/70" aria-hidden="true" />

      <div className="space-y-5">
        <h3 className="text-3xl font-black uppercase tracking-[-0.06em] text-neutral-950">{project.title}</h3>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">{project.category}</p>
        <p className="max-w-md text-base leading-7 text-neutral-700">{project.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="border border-neutral-300 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-neutral-600">
              {tag}
            </span>
          ))}
        </div>
      </div>

      {project.href ? (
        <div className="mt-8">
          <Link href={project.href} className="inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-900">
            VIEW ↗
          </Link>
        </div>
      ) : null}
    </article>
  );
}
