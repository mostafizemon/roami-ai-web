import type { Metadata } from "next";
import { Sparkles, Users, Map } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | ROAMI AI",
};

export default function AboutUs() {
  return (
    <div className="flex flex-col flex-1 w-full animate-fade-in">
      <section className="py-24 bg-surface border-b border-border">
         <div className="container mx-auto px-6 max-w-4xl text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground tracking-tight">About ROAMI AI</h1>
            <p className="text-xl text-subtext leading-relaxed mb-0">
               We are on a mission to democratize exploring the world by creating a personal AI travel companion that understands exactly what you want out of your journey.
            </p>
         </div>
      </section>

      <section className="py-24">
         <div className="container mx-auto px-6 max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
               <div>
                  <h2 className="text-3xl font-bold mb-6 text-foreground">Our Story</h2>
                  <p className="text-subtext leading-relaxed mb-4">
                     Founded with the belief that travel planning should be seamless and inspiring, ROAMI AI was created to move beyond generic recommendations. We felt travelers needed a digital companion capable of understanding nuanced "vibes" to discover true, localized, soulful experiences.
                  </p>
                  <p className="text-subtext leading-relaxed">
                     By harnessing advanced language models and intuitive voice/text chat, we empower modern travelers to generate highly personalized itineraries, find hidden spots on the map, and explore destinations exactly as they envisioned.
                  </p>
               </div>
               
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 bg-surface border border-border rounded-2xl">
                     <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Users className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold mb-2">Traveler First</h3>
                     <p className="text-sm text-subtext">Designed for your peace of mind, balancing brilliant recommendations with pristine data privacy.</p>
                  </div>
                  <div className="p-6 bg-surface border border-border rounded-2xl">
                     <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Sparkles className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold mb-2">Soulful Experiences</h3>
                     <p className="text-sm text-subtext">More than just landmarks, we leverage AI to connect you with the heartbeat of local culture.</p>
                  </div>
                  <div className="p-6 bg-surface border border-border rounded-2xl sm:col-span-2">
                     <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-4">
                        <Map className="w-6 h-6" />
                     </div>
                     <h3 className="text-lg font-bold mb-2">Seamless Plans</h3>
                     <p className="text-sm text-subtext">Generate complete travel plans via simple conversation and visualize your next adventure directly on the map.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>
    </div>
  );
}
