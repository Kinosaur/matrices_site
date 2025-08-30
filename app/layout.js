import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "katex/dist/katex.min.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Matrix Basics",
  description: "Concise procedural explanations of core matrix operations."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <header className="border-b mb-6 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/50">
          <div className="flex items-center justify-between px-6 py-3 text-sm">
            <div className="flex items-center gap-3">
              {/* Placeholder for search input */}
              {/* <input type="search" placeholder="Search" className="hidden md:block text-sm border rounded px-2 py-1 w-48" /> */}
              {/* Placeholder for future theme toggle */}
              {/* <button className="text-xs text-accent">Theme</button> */}
            </div>
          </div>
        </header>
        <main className="px-6 prose max-w-none">
          {children}
        </main>
        <footer className="mt-12 border-t px-6 py-4 text-xs muted">
          Matrix Basics — draft.
        </footer>
      </body>
    </html>
  );
}