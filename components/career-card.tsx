import type { CareerOpening } from "@/data/careers";

export function CareerCard({ opening }: { opening: CareerOpening }) {
  return (
    <article className="border border-neutral-300 bg-[#f8f7f4] p-5 sm:p-6">
      <div className="mb-4 flex items-center justify-between text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">
        <span>{opening.category}</span>
        <span>{opening.status}</span>
      </div>
      <h3 className="text-2xl font-black uppercase tracking-[-0.06em] text-neutral-950">{opening.title}</h3>
      <p className="mt-4 text-sm uppercase tracking-[0.14em] text-neutral-600">{opening.location} / {opening.type}</p>
      <p className="mt-5 text-base leading-7 text-neutral-700">{opening.description}</p>
    </article>
  );
}
