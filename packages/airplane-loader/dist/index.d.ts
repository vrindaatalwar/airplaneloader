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
/** A looping, accessible loading scene with an airplane moving left to right. */
export declare function PlaneLoader({ label, src, poster, durationMs, className, }: PlaneLoaderProps): import("react").JSX.Element;
//# sourceMappingURL=index.d.ts.map