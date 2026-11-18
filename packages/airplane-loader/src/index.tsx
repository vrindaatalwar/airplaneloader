"use client";

import { useEffect, useRef, useState } from "react";

export type PlaneLoaderProps = {
  /** Screen-reader text announced while the loader is visible. */
  label?: string;
  /** Optional background clip. The default scene uses a clean, clouded sky. */
  src?: string;
  /** Optional still shown before the scene is ready to play. */
  poster?: string;
  /** Duration of one left-to-right pass, in milliseconds. */
  durationMs?: number;
  className?: string;
};

const skyArtwork = new URL("./assets/sky-background.jpg", import.meta.url).toString();
const airplaneArtwork = new URL("./assets/airplane.png", import.meta.url).toString();

/** A looping, accessible loading scene with an airplane moving left to right. */
export function PlaneLoader({
  label = "Loading",
  src,
  poster,
  durationMs = 5000,
  className = "",
}: PlaneLoaderProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [motionAllowed, setMotionAllowed] = useState(false);
  const animationStyle = { animationDuration: `${durationMs}ms` } satisfies React.CSSProperties;

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncPreference = () => {
      setMotionAllowed(!preference.matches);
      if (preference.matches) videoRef.current?.pause();
    };

    syncPreference();
    preference.addEventListener("change", syncPreference);
    return () => preference.removeEventListener("change", syncPreference);
  }, []);

  useEffect(() => {
    if (motionAllowed) void videoRef.current?.play().catch(() => undefined);
  }, [motionAllowed]);

  return (
    <div
      className={`relative isolate block aspect-[3/4] w-full max-w-[480px] overflow-hidden bg-[#88b8dc] ${className}`.trim()}
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">{label}</span>
      {src ? (
        <video
          ref={videoRef}
          className="absolute inset-0 z-0 block size-full object-cover"
          src={src}
          poster={poster}
          autoPlay={motionAllowed}
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          tabIndex={-1}
        />
      ) : (
        <img className="absolute inset-0 z-0 size-full object-cover" src={skyArtwork} alt="" aria-hidden="true" />
      )}
      <div className="absolute left-[10%] top-1/2 z-[2] h-[13%] w-[80%] -translate-y-1/2" aria-hidden="true">
        <div className="absolute left-0 top-1/2 z-0 h-[34%] min-h-[14px] w-full -translate-y-1/2 overflow-hidden rounded-full bg-white/30 shadow-[inset_0_0_0_2px_rgba(88,145,184,0.22),0_1px_8px_rgba(39,89,123,0.14)]">
          <span
            className="animate-plane-loader-progress absolute inset-0 z-0 origin-left rounded-none bg-white motion-reduce:animate-none"
            style={animationStyle}
          />
          <span className="pointer-events-none absolute inset-0 z-[2] rounded-full border-2 border-white" />
        </div>
        <img
          className="animate-plane-loader-flight absolute left-[-11%] top-1/2 z-[1] h-full w-[22%] min-w-0 max-w-[100px] -translate-y-1/2 rotate-90 object-contain drop-shadow-[0_2px_4px_rgba(31,61,84,0.42)] motion-reduce:animate-none"
          src={airplaneArtwork}
          alt=""
          style={animationStyle}
        />
      </div>
    </div>
  );
}
