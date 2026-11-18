import { PlaneLoader } from "@airplane-loader/react";

export default function Home() {
  return (
    <main className="playground">
      <header className="playground__header">
        <span className="playground__name">AIRPLANE LOADER</span>
        <span className="playground__status"><i /> LIVE COMPONENT PREVIEW</span>
      </header>
      <section className="playground__stage" aria-label="Airplane loading component preview">
        <PlaneLoader className="playground-loader" label="Loading your next destination" />
      </section>
      <footer className="playground__install">
        <span className="install-label">INSTALL</span>
        <code>npm install @airplane-loader/react</code>
        <span className="install-divider" />
        <code>pnpm add @airplane-loader/react</code>
        <span className="install-npx">or <code>npx @airplane-loader/react init</code></span>
      </footer>
    </main>
  );
}
