import { Geist, Geist_Mono, Audiowide } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const audiowide = Audiowide({
  weight: ['400'],
  variable: "--font-audiowide",
  subsets: ["latin"],
});

export const metadata = {
  title: "Luke Charlesworth | Portfolio",
  description: "Personal portfolio of Luke Charlesworth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${audiowide.variable} antialiased bg-gray-50 min-h-screen flex flex-col text-gray-900`}
      >
        <header>
          <Navbar />
        </header>
        <main className="flex-1 container mx-auto px-4 py-8">
          {children}
        </main>
        <footer className="py-6 text-center text-sm flex justify-center items-center gap-6">
          <a 
            href="/assets/resume.pdf" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-light text-[#8B5CF6] hover:text-[#7C3AED] transition-colors uppercase tracking-wider text-xs"
          >
            Resume
          </a>
          <a 
            href="https://www.linkedin.com/in/lcharlesworth" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-light text-[#8B5CF6] hover:text-[#7C3AED] transition-colors uppercase tracking-wider text-xs"
          >
            LinkedIn
          </a>
          <a 
            href="https://github.com/lukechar05" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="font-light text-[#8B5CF6] hover:text-[#7C3AED] transition-colors uppercase tracking-wider text-xs"
          >
            GitHub
          </a>
        </footer>
      </body>
    </html>
  );
}
