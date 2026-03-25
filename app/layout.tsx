import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import { Header } from "./header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ROAMI AI",
  description: "AI chat and voice assistant application.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col font-sans bg-background text-foreground antialiased selection:bg-primary/30">
        <Header />

        <main className="flex-1 flex flex-col relative w-full overflow-hidden">
          {children}
        </main>

        <footer className="border-t border-border bg-surface py-12 transition-colors">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold">
                  R
                </div>
                <span className="font-bold text-xl tracking-tight">ROAMI AI</span>
              </Link>
              <p className="text-subtext max-w-sm text-sm/relaxed">
                Next-generation AI chatbot with advanced voice and text capabilities. 
                Experience seamless communication tailored to your needs.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3 text-sm text-subtext">
                <li><Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms of Use</Link></li>
                <li><Link href="/apple-eula" className="hover:text-primary transition-colors">Apple EULA</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-3 text-sm text-subtext">
                <li><Link href="/contact-us" className="hover:text-primary transition-colors">Contact Us</Link></li>
                <li><Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link href="/account-deletion" className="hover:text-primary transition-colors">Account Deletion</Link></li>
              </ul>
            </div>
          </div>
          
          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-border text-sm text-subtext text-center md:flex md:justify-between md:text-left transition-colors">
            <p>© {new Date().getFullYear()} ROAMI AI. All rights reserved.</p>
            <div className="mt-4 md:mt-0 flex justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-primary transition-colors">Privacy</Link>
              <Link href="/terms-of-use" className="hover:text-primary transition-colors">Terms</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
