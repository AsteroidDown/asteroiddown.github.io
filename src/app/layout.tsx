import { Theme } from "@locus-ui/components";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const viewport: Viewport = {
  themeColor: "#111317",
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://asteroiddown.github.io"),
  title: "Jasper Stahmer | Full Stack Software Engineer",
  description:
    "Full stack software engineer building thoughtful applications with React, Next.js, TypeScript, and AI. Explore my experience, projects, and background in physics and astronomy.",
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  openGraph: {
    title: "Jasper Stahmer | Full Stack Software Engineer",
    description:
      "Thoughtful interfaces. Connected systems. Practical software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <Theme
          appearance="dark"
          className="min-h-screen bg-[rgb(var(--bg-1))] text-[rgb(var(--text))]"
          colors={{
            primary: "#ffac77",
            secondary: "#8bbfff",
            tertiary: "#c5a0fb",
            background1: "#111317",
            background2: "#191b22",
            text: "#f0f1f5",
            textLight: "#a5aab6",
            border1: "#2c3039",
          }}
          radius="md"
          spacing="md"
        >
          {children}
        </Theme>
      </body>
    </html>
  );
}
