"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-surface/80 backdrop-blur-md transition-colors">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-primary flex items-center justify-center text-white font-bold transition-transform group-hover:scale-105">
            R
          </div>
          <span className="font-bold text-xl tracking-tight">ROAMI AI</span>
        </Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-subtext">
          <Link href="/about-us" className="hover:text-primary transition-colors">About</Link>
          <Link href="/faq" className="hover:text-primary transition-colors">FAQ</Link>
          <Link href="/contact-us" className="hover:text-primary transition-colors">Contact</Link>
        </nav>
        <div className="flex items-center gap-2">
          <Link 
            href="/contact-us" 
            className="hidden md:inline-flex px-4 py-2 text-sm font-medium bg-primary text-white rounded-full hover:opacity-90 transition-opacity"
          >
            Get App
          </Link>
          <button 
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            title="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-surface border-b border-border p-6 shadow-xl flex flex-col gap-4 animate-fade-in">
          <Link href="/about-us" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary font-medium py-2">About</Link>
          <Link href="/faq" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary font-medium py-2">FAQ</Link>
          <Link href="/contact-us" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground hover:text-primary font-medium py-2">Contact</Link>
        </div>
      )}
    </header>
  );
}
