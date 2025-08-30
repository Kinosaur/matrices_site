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
        <header className="border-b mb-6">
          <nav className="flex items-center gap-3 px-6 py-3 text-sm">
            <a href="/" className="font-semibold text-accent">Home</a>
            <a href="/docs/what-is-matrix" className="text-accent hover:underline">What is a Matrix?</a>
            <a href="/docs/addition" className="text-accent hover:underline">Addition</a>
            <a href="/docs/multiplication" className="text-accent hover:underline">Multiplication</a>
            <a href="/docs/determinant" className="text-accent hover:underline">Determinant</a>
            <a href="/docs/inverse" className="text-accent hover:underline">Inverse</a>
          </nav>
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