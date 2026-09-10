import { CareerCard } from "@/components/career-card";
import { careerOpenings, futureOpportunities } from "@/data/careers";

export default function CareersPage() {
  return (
    <main className="mx-auto max-w-[1400px] px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <p className="text-[10px] font-medium uppercase tracking-[0.22em] text-neutral-500">CAREERS</p>
        <h1 className="mt-4 text-5xl font-black uppercase tracking-[-0.08em] text-neutral-950 sm:text-6xl lg:text-[6rem]">
          BUILD
          <span className="block">SOMETHING</span>
          <span className="block">OMORO.</span>
        </h1>
      </div>

      <div className="mt-12 border border-neutral-300 bg-[#f7f5f1] p-6 sm:p-8">
        {careerOpenings.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {careerOpenings.map((opening) => (
              <CareerCard key={opening.id} opening={opening} />
            ))}
          </div>
        ) : (
          <div>
            <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-neutral-500">CURRENT STATUS</p>
            <h2 className="mt-4 text-4xl font-black uppercase tracking-[-0.06em] text-neutral-950">
              THERE ARE CURRENTLY
              <span className="block">NO OPEN POSITIONS.</span>
            </h2>
            <p className="mt-6 text-base leading-7 text-neutral-700">Future opportunities will be posted here.</p>
            <div className="mt-8 flex flex-wrap gap-2">
              {futureOpportunities.map((item) => (
                <span key={item} className="border border-neutral-300 px-3 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-neutral-700">
                  {item}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
