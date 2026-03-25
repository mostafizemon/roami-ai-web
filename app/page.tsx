import Link from "next/link";
import { MessageSquare, Mic, ImageIcon, Sparkles, Shield, ChevronRight, Leaf, Compass, MapPin, Users, Heart, Zap } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-24 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent z-0" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col items-center text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-8 border border-primary/20">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Your Ultimate AI Travel Companion</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 max-w-4xl text-foreground">
            Discover the World with <span className="text-primary">ROAMI AI</span>
          </h1>
          <p className="text-xl md:text-2xl text-subtext md:max-w-3xl mb-10 leading-relaxed">
            Generate personalized travel plans and uncover soulful, local experiences. 
            Chat naturally using text or voice, and let Roami AI guide your next unforgettable journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-16 w-full sm:w-auto">
            <Link href="/contact-us" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white text-lg font-medium rounded-full hover:opacity-90 transition-all hover:scale-105 shadow-lg shadow-primary/30">
              Start Planning Now
              <ChevronRight className="w-5 h-5" />
            </Link>
            <Link href="/about-us" className="inline-flex items-center justify-center px-8 py-4 bg-surface text-foreground border border-border text-lg font-medium rounded-full hover:bg-input/20 transition-colors hover:scale-105">
              Learn More
            </Link>
          </div>
          
          <div className="relative w-full max-w-5xl min-h-[350px] md:aspect-[21/9] rounded-3xl overflow-hidden border border-border shadow-2xl bg-surface p-2 transition-all hover:shadow-primary/10 hover:shadow-3xl">
             <div className="w-full h-full bg-background rounded-2xl border border-border flex items-center justify-center relative overflow-hidden py-10 md:py-0">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--color-primary)_1px,_transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="flex flex-col items-center gap-6 z-10 p-4">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-primary flex items-center justify-center shadow-xl shadow-primary/20 animate-pulse">
                     <Mic className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground text-center">
                    "Hey ROAMI, where should I get<br className="hidden sm:block"/> coffee in Rome?"
                  </h3>
                  <div className="flex items-center gap-2 mt-2 px-4 py-2 rounded-full bg-surface border border-border shadow-sm">
                     <div className="w-2 h-2 rounded-full bg-primary animate-ping"></div>
                     <span className="text-sm font-medium text-subtext text-center">Generating your itinerary...</span>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Video Demo Section */}
      <section className="py-16 md:py-24 bg-background relative z-20">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-10">
             <div className="inline-flex items-center justify-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">Live Demo</div>
             <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">See It In Action</h2>
             <p className="text-lg text-subtext max-w-xl mx-auto">Watch how simple and powerful travel planning can be with ROAMI.</p>
          </div>
          <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden border-8 border-surface shadow-2xl shadow-primary/10 bg-black transform hover:-translate-y-2 transition-transform duration-500">
             <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/Mo_IHOdR--A?autoplay=1&mute=1&loop=1&playlist=Mo_IHOdR--A&controls=1" 
                title="ROAMI AI Demo" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowFullScreen
             ></iframe>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-surface relative border-t border-b border-border">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Travel Smarter, Dive Deeper</h2>
            <p className="text-lg md:text-xl text-subtext max-w-2xl mx-auto">Everything you need to plan soulful experiences and explore local hidden gems seamlessly.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <MessageSquare className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Generate Travel Plans</h3>
              <p className="text-subtext leading-relaxed">Chat with Roami AI to instantly create personalized itineraries, discover local favorites, and find exactly what you're looking for.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <Mic className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Voice-Activated Guidance</h3>
              <p className="text-subtext leading-relaxed">Walking around a new city? Speak naturally to ROAMI and get immediate voice responses with directions or local history on the go.</p>
            </div>
            
            <div className="p-8 rounded-3xl bg-background border border-border hover:border-primary/50 hover:shadow-xl transition-all group">
              <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all">
                <ImageIcon className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Your Travel Profile</h3>
              <p className="text-subtext leading-relaxed">Upload a profile image, save your favorite "vibes", and personalize the app to match your unique travel style and preferences.</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Vibes Section */}
      <section className="py-24 bg-background relative border-t border-b border-border">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Explore Based on How You Feel</h2>
            <p className="text-lg md:text-xl text-subtext max-w-2xl mx-auto">
               Roami AI™ matches your emotional state to curated experiences. Choose your energy, and we'll guide you there.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Mindful Reset */}
            <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                 <Leaf className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Mindful Reset</h3>
              <p className="text-subtext leading-relaxed">Calm the nervous system and reduce sensory load.</p>
            </div>
            
            {/* Self-Discovery */}
            <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                 <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Self-Discovery</h3>
              <p className="text-subtext leading-relaxed">Reflection, curiosity, and intellectual exploration.</p>
            </div>
            
            {/* Local Immersion */}
            <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                 <MapPin className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Local Immersion</h3>
              <p className="text-subtext leading-relaxed">Dissolve into the authentic rhythm of the city.</p>
            </div>
            
            {/* Social Soul */}
            <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                 <Users className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Social Soul</h3>
              <p className="text-subtext leading-relaxed">High-vibe, energetic, and socially active environments.</p>
            </div>
            
            {/* Community & Connection */}
            <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                 <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Community & Connection</h3>
              <p className="text-subtext leading-relaxed">Shared tables and collaborative human links.</p>
            </div>
            
            {/* Seamless Flow */}
            <div className="p-8 rounded-3xl bg-surface border border-border hover:border-primary/50 hover:-translate-y-1 hover:shadow-lg transition-all group flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                 <Zap className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-foreground">Seamless Flow</h3>
              <p className="text-subtext leading-relaxed">Remove friction and streamline your logistics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy & Trust Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
           <div className="flex-1">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-6">
                 <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-foreground">Your Privacy,<br />Our Priority</h2>
              <p className="text-lg text-subtext mb-8 leading-relaxed max-w-xl">
                 We believe your digital footprint belongs to you. ROAMI AI protects your location data and doesn't train public models on your personal chat history.
              </p>
              <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-4">
                 <Link href="/privacy-policy" className="text-primary font-medium hover:underline flex items-center gap-1">
                    Privacy Policy <ChevronRight className="w-4 h-4" />
                 </Link>
                 <Link href="/terms-of-use" className="text-primary font-medium hover:underline flex items-center gap-1">
                    Terms of Use <ChevronRight className="w-4 h-4" />
                 </Link>
                 <Link href="/account-deletion" className="text-primary font-medium hover:underline flex items-center gap-1">
                    Account Deletion <ChevronRight className="w-4 h-4" />
                 </Link>
              </div>
           </div>
           
           <div className="flex-1 w-full bg-surface border border-border rounded-3xl p-8 relative shadow-lg">
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
              <h3 className="text-xl font-semibold mb-6">Built for the Modern Traveler</h3>
              <ul className="space-y-4">
                 <li className="flex items-center gap-3 text-subtext">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                    Private Chat & Itinerary History
                 </li>
                 <li className="flex items-center gap-3 text-subtext">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                    Secure Location & Map Integration
                 </li>
                 <li className="flex items-center gap-3 text-subtext">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                    App Store & Play Console Compliant
                 </li>
                 <li className="flex items-center gap-3 text-subtext">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary text-sm font-bold">✓</div>
                    Transparent User Deletion Controls
                 </li>
              </ul>
           </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.2)_0%,_transparent_50%)]"></div>
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">Ready to experience ROAMI?</h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto mb-10">Download the app today and transform the way you travel. Find your next soulful adventure with AI.</p>
          <Link href="/contact-us" className="inline-flex items-center justify-center px-10 py-5 bg-white text-primary text-lg font-bold rounded-full hover:bg-surface hover:scale-105 transition-all shadow-xl">
             Get the App
          </Link>
        </div>
      </section>
    </div>
  );
}
