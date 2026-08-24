import { useCallback, useEffect, useRef, useState } from "react";

type Props = {
  before: string;
  after: string;
  className?: string;
};

export default function BeforeAfterSlider({ before, after, className = "" }: Props) {
  const [pos, setPos] = useState(50);
  const [dragging, setDragging] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, p)));
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => update(e.clientX);
    const touch = (e: TouchEvent) => update(e.touches[0].clientX);
    const up = () => setDragging(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    window.addEventListener("touchmove", touch);
    window.addEventListener("touchend", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("touchmove", touch);
      window.removeEventListener("touchend", up);
    };
  }, [dragging, update]);

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-2xl bg-emerald-950/5 ${className}`}
      onMouseDown={(e) => {
        setDragging(true);
        update(e.clientX);
      }}
      onTouchStart={(e) => {
        setDragging(true);
        update(e.touches[0].clientX);
      }}
    >
      <img
        src={after}
        alt="After treatment"
        draggable={false}
        className="block h-full w-full object-cover"
      />
      <img
        src={before}
        alt="Before treatment"
        draggable={false}
        className="absolute inset-0 h-full w-full object-cover"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-50">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-900">
        After
      </span>

      <div
        className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_12px_rgba(0,0,0,.35)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-emerald-900 shadow-lg ring-2 ring-emerald-900/10">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6 3 12l6 6M15 6l6 6-6 6" />
          </svg>
        </div>
      </div>
    </div>
  );
}
