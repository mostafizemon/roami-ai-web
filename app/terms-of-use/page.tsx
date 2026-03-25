import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use | ROAMI AI",
};

export default function TermsOfUse() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl flex-1 animate-fade-in">
      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Legal</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Terms of Use</h1>
      
      <div className="space-y-8 text-subtext leading-relaxed">
        <p className="font-medium text-foreground">Effective Date: March 24, 2026</p>
        
        <p>Welcome to Roami AI. By accessing or using our website and application, you agree to these Terms of Use.</p>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">AI Disclaimer</h2>
           <p>Roami provides AI-powered guidance. While we strive for accuracy, information may occasionally be incorrect. Please verify important details like hours, reservations, and transit schedules with official sources.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">Use of Service</h2>
           <p>You agree to use Roami responsibly and for lawful purposes.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
           <p>Roami is provided "as is" without warranties.</p>
        </section>
        
        <section className="p-6 bg-surface border border-border rounded-2xl mt-8">
           <h3 className="text-xl font-bold mb-2 text-foreground">Contact</h3>
           <p>Email: <a href="mailto:getroamiai@gmail.com" className="text-primary font-medium hover:underline">getroamiai@gmail.com</a></p>
        </section>
      </div>
    </div>
  );
}
