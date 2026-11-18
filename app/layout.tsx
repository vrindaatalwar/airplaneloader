import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Airplane Loader — Component Preview",
  description: "Live preview and install instructions for the reusable airplane loading component.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
