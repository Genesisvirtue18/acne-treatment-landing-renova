import { useState } from "react";

type Props = {
  before: string;
  after: string;
  className?: string;
  beforeObjectPosition?: string;
  afterObjectPosition?: string;
  hideEyes?: boolean;
};

export default function BeforeAfterSlider({
  before,
  after,
  className = "",
  beforeObjectPosition = "center center",
  afterObjectPosition = "center center",
  hideEyes = true,
}: Props) {
  const [mobileFlipped, setMobileFlipped] = useState(false);

  return (
    <div className={`relative select-none overflow-hidden rounded-2xl bg-emerald-950/5 ${className}`}>
      <div className="hidden h-full w-full md:block [perspective:1600px]">
        <div className="group relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          <div className="absolute inset-0 [backface-visibility:hidden]">
            <img
              src={before}
              alt="Before treatment"
              draggable={false}
              className="block h-full w-full object-cover"
              style={{ objectPosition: beforeObjectPosition }}
            />
            {hideEyes && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-[32%] h-[12%] bg-black"
              />
            )}
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-50">
              Before
            </span>
            <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-900">
              Hover to reveal after
            </span>
          </div>

          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
            <img
              src={after}
              alt="After treatment"
              draggable={false}
              className="block h-full w-full object-cover"
              style={{ objectPosition: afterObjectPosition }}
            />
            {hideEyes && (
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-0 right-0 top-[32%] h-[12%] bg-black"
              />
            )}
            <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-50">
              After
            </span>
          </div>
        </div>
      </div>

      <div className="relative h-full w-full md:hidden">
        <button
          type="button"
          onClick={() => setMobileFlipped((v) => !v)}
          className="group relative block h-full w-full overflow-hidden text-left"
          aria-label={mobileFlipped ? "Show before image" : "Show after image"}
        >
          <div
            className={`relative h-full w-full transition-transform duration-700 [transform-style:preserve-3d] ${
              mobileFlipped ? "[transform:rotateY(180deg)]" : ""
            }`}
          >
            <div className="absolute inset-0 [backface-visibility:hidden]">
              <img
                src={before}
                alt="Before treatment"
                draggable={false}
                className="block h-full w-full object-cover"
                style={{ objectPosition: beforeObjectPosition }}
              />
              {hideEyes && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 right-0 top-[32%] h-[12%] bg-black"
                />
              )}
              <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-50">
                Before
              </span>
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-900">
                Tap to reveal after
              </span>
            </div>

            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
              <img
                src={after}
                alt="After treatment"
                draggable={false}
                className="block h-full w-full object-cover"
                style={{ objectPosition: afterObjectPosition }}
              />
              {hideEyes && (
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute left-0 right-0 top-[32%] h-[12%] bg-black"
                />
              )}
              <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-emerald-950/80 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-50">
                After
              </span>
              <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-white/85 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-emerald-900">
                Tap to go back
              </span>
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}
