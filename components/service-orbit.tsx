"use client";

import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { Service } from "@/data/services";

function ServiceIllustration({ service }: { service: Service }) {
  const base = "relative h-10 w-10 overflow-hidden rounded-[18px] border border-black/10 bg-black/95";

  switch (service.illustration) {
    case "browser":
      return (
        <div className={base}>
          <div className="absolute inset-x-2 top-2 h-5 rounded-md border border-white/20 bg-white/5" />
          <div className="absolute inset-x-3 bottom-2 h-2 rounded-full bg-white/80" />
          <div className="absolute left-3 top-3 h-1.5 w-1.5 rounded-full bg-white" />
          <div className="absolute right-3 top-3 h-1.5 w-5 rounded-full bg-white/60" />
        </div>
      );
    case "store":
      return (
        <div className={base}>
          <div className="absolute inset-x-3 bottom-2 top-2 rounded-md border border-white/20" />
          <div className="absolute left-3 right-3 top-4 h-2 rounded-full bg-white/80" />
          <div className="absolute left-5 right-5 bottom-3 h-2 rounded-full bg-white/60" />
          <div className="absolute left-1/2 top-2 h-5 w-5 -translate-x-1/2 rounded-full border border-white/50" />
        </div>
      );
    case "ai":
      return (
        <div className={base}>
          <div className="absolute left-1/2 top-1/2 h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/50" />
          <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white" />
          <div className="absolute left-2 top-2 h-2 w-2 rounded-full bg-white/80" />
          <div className="absolute right-2 bottom-2 h-2 w-2 rounded-full bg-white/80" />
        </div>
      );
    case "building":
      return (
        <div className={base}>
          <div className="absolute inset-x-2 bottom-2 top-2 grid grid-cols-3 gap-1">
            {new Array(6).fill(0).map((_, index) => (
              <div key={index} className="rounded-sm border border-white/20 bg-white/10" />
            ))}
          </div>
        </div>
      );
    case "typography":
      return (
        <div className={base}>
          <div className="absolute left-2 top-2 text-[10px] font-black tracking-[-0.12em] text-white">A</div>
          <div className="absolute left-5 top-5 text-[10px] font-black tracking-[-0.12em] text-white">B</div>
          <div className="absolute right-2 top-2 text-[10px] font-black tracking-[-0.12em] text-white">C</div>
          <div className="absolute inset-x-3 bottom-3 h-px bg-white/50" />
        </div>
      );
    case "refresh":
      return (
        <div className={base}>
          <div className="absolute inset-2 rounded-full border border-white/60" />
          <div className="absolute left-1/2 top-1/2 h-5 w-5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/60" />
          <div className="absolute left-2 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-white" />
        </div>
      );
    case "interface":
      return (
        <div className={base}>
          <div className="absolute inset-2 grid grid-cols-2 gap-1">
            <div className="rounded-sm bg-white/90" />
            <div className="rounded-sm bg-white/30" />
            <div className="rounded-sm bg-white/30" />
            <div className="rounded-sm bg-white/90" />
          </div>
        </div>
      );
    case "code":
      return (
        <div className={base}>
          <div className="absolute left-2 top-2 text-[10px] font-black tracking-[-0.18em] text-white">&lt;/&gt;</div>
          <div className="absolute bottom-3 left-3 right-3 h-px bg-white/60" />
          <div className="absolute bottom-5 left-4 right-4 h-px bg-white/40" />
        </div>
      );
    case "globe":
      return (
        <div className={base}>
          <div className="absolute inset-2 rounded-full border border-white/60" />
          <div className="absolute left-1/2 top-2 h-5 w-px -translate-x-1/2 bg-white/60" />
          <div className="absolute left-2 top-1/2 h-px w-5 -translate-y-1/2 bg-white/60" />
          <div className="absolute right-2 top-1/2 h-px w-5 -translate-y-1/2 bg-white/60" />
        </div>
      );
    case "app":
      return (
        <div className={base}>
          <div className="absolute inset-x-2 top-2 h-4 rounded-sm border border-white/30 bg-white/10" />
          <div className="absolute inset-x-2 bottom-2 top-7 grid grid-cols-2 gap-1">
            <div className="rounded-sm bg-white/80" />
            <div className="rounded-sm bg-white/30" />
            <div className="rounded-sm bg-white/30" />
            <div className="rounded-sm bg-white/80" />
          </div>
        </div>
      );
    default:
      return null;
  }
}

export function ServiceOrbit({ services }: { services: Service[] }) {
  const prefersReducedMotion = useReducedMotion();
  const [rotation, setRotation] = useState(0);
  const dragStartRef = useRef<{ x: number; rotation: number } | null>(null);
  const radius = 180;
  const step = 360 / services.length;

  const activeIndex = useMemo(() => {
    const bestIndex = services.reduce((best, _, index) => {
      const itemAngle = ((rotation + index * step + 180) % 360) - 180;
      const bestAngle = ((rotation + best * step + 180) % 360) - 180;
      return Math.abs(itemAngle) < Math.abs(bestAngle) ? index : best;
    }, 0);

    return bestIndex;
  }, [rotation, services, step]);

  const activeService = services[activeIndex] ?? services[0];

  const handleArrow = useCallback(
    (direction: 1 | -1) => {
      setRotation((prev) => prev + direction * (step * 0.75));
    },
    [step],
  );

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleArrow(1);
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handleArrow(-1);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [handleArrow]);

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    dragStartRef.current = { x: event.clientX, rotation };
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragStartRef.current) return;
    const delta = event.clientX - dragStartRef.current.x;
    setRotation(dragStartRef.current.rotation + delta * 0.65);
  };

  const handlePointerUp = () => {
    dragStartRef.current = null;
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    event.preventDefault();
    setRotation((prev) => prev + event.deltaY * 0.18);
  };

  const orbitItems = useMemo(
    () =>
      services.map((service, index) => {
        const angle = rotation + index * step;
        const isActive = activeIndex === index;
        return {
          service,
          angle,
          isActive,
        };
      }),
    [activeIndex, rotation, services, step],
  );

  const snapRotation = (targetIndex: number) => {
    const targetAngle = -(targetIndex * step);
    setRotation((prev) => {
      const current = ((prev % 360) + 360) % 360;
      const normalizedTarget = ((targetAngle % 360) + 360) % 360;
      const next = current > 180 ? current - 360 : current;
      const target = normalizedTarget > 180 ? normalizedTarget - 360 : normalizedTarget;
      return prev + (target - next) * 0.28;
    });
  };

  return (
    <div className="relative flex items-center justify-center">
      <div
        className="relative h-[360px] w-[360px] select-none sm:h-[460px] sm:w-[460px]"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
        onWheel={handleWheel}
        role="application"
        aria-label="Interactive service carousel"
      >
        <div className="absolute inset-0 rounded-full border border-black/10 bg-white/20 backdrop-blur-[1px]" />
        <div className="absolute inset-[18%] rounded-full border border-black/10" />

        {orbitItems.map(({ service, angle, isActive }, index) => {
          const transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`;
          return (
            <button
              key={service.slug}
              type="button"
              aria-label={`Select ${service.name}`}
              onClick={() => snapRotation(index)}
              className="absolute left-1/2 top-1/2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/60 focus-visible:ring-offset-2"
              style={{ transform }}
            >
              <motion.div
                animate={
                  prefersReducedMotion
                    ? { scale: isActive ? 1.12 : 0.92, opacity: isActive ? 1 : 0.55 }
                    : {
                        scale: isActive ? 1.15 : 0.92,
                        opacity: isActive ? 1 : 0.55,
                        filter: isActive ? "saturate(1.15)" : "saturate(0.8)",
                      }
                }
                transition={{ type: "spring", stiffness: 160, damping: 18, mass: 0.9 }}
                className={[
                  "flex h-16 w-16 items-center justify-center rounded-[22px] border shadow-[0_10px_30px_rgba(0,0,0,0.1)] transition-colors sm:h-20 sm:w-20",
                  isActive ? "border-black bg-black text-white" : "border-black/10 bg-white/80 text-black/80",
                ].join(" ")}
              >
                <ServiceIllustration service={service} />
              </motion.div>
              <span
                className={[
                  "mt-2 block text-center text-[9px] font-medium uppercase tracking-[0.18em]",
                  isActive ? "text-black" : "text-black/45",
                ].join(" ")}
              >
                {service.shortName}
              </span>
            </button>
          );
        })}

        <motion.div
          className="absolute left-1/2 top-1/2 flex h-[188px] w-[188px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-black/10 bg-[#f7f4ef] shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]"
          animate={prefersReducedMotion ? { scale: 1 } : { scale: activeService ? 1.02 : 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="text-center">
            <div className="text-[10px] font-medium uppercase tracking-[0.28em] text-black/45">SERVICE</div>
            <div className="mt-3 text-[20px] font-black uppercase tracking-[-0.08em] text-black sm:text-[24px]">
              {activeService.shortName}
            </div>
          </div>
        </motion.div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-1/2 z-10 flex -translate-y-1/2 justify-between px-6 sm:px-8">
        <button
          type="button"
          aria-label="Previous service"
          onClick={() => handleArrow(-1)}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-lg text-black shadow-sm transition hover:bg-black hover:text-white"
        >
          ←
        </button>
        <button
          type="button"
          aria-label="Next service"
          onClick={() => handleArrow(1)}
          className="pointer-events-auto flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-lg text-black shadow-sm transition hover:bg-black hover:text-white"
        >
          →
        </button>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeService.slug}
          initial={prefersReducedMotion ? false : { opacity: 0, y: 14, filter: "blur(8px)" }}
          animate={prefersReducedMotion ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: -12, filter: "blur(8px)" }}
          transition={{ duration: 0.42, ease: "easeOut" }}
          className="absolute inset-x-0 bottom-[-12px] mx-auto w-full max-w-[420px] px-4 sm:px-0"
        >
          <div className="rounded-[28px] border border-black/10 bg-[#f8f7f3]/90 p-4 shadow-[0_20px_50px_rgba(0,0,0,0.08)] backdrop-blur-sm">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-[9px] font-medium uppercase tracking-[0.26em] text-black/50">{activeService.category}</div>
                <div className="mt-2 text-[22px] font-black uppercase tracking-[-0.08em] text-black sm:text-[28px]">
                  {activeService.name}
                </div>
              </div>
              <Link
                href={`/services/${activeService.slug}`}
                className="inline-flex items-center rounded-full border border-black bg-black px-3 py-2 text-[10px] font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white hover:text-black"
              >
                VIEW SERVICE →
              </Link>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
