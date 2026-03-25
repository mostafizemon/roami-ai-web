import type { Metadata } from "next";
import { Mail, Smartphone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact Us | ROAMI AI",
};

export default function ContactUs() {
  return (
    <div className="container mx-auto px-6 py-24 flex-1 animate-fade-in flex flex-col items-center">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Get in Touch</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Contact Us</h1>
        <p className="text-xl text-subtext max-w-xl mx-auto">We'd love to hear from you.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
         {/* General Inquiries */}
         <div className="flex flex-col items-center text-center gap-4 p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-2">
               <Mail className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-xl font-bold mb-2 text-foreground">General Inquiries</h3>
               <p className="text-subtext mb-4 leading-relaxed">Reach out for any questions about our AI travel assistant.</p>
               <a href="mailto:getroamiai@gmail.com" className="text-primary font-medium hover:underline text-lg">getroamiai@gmail.com</a>
            </div>
         </div>
         
         {/* Support */}
         <div className="flex flex-col items-center text-center gap-4 p-8 bg-surface border border-border rounded-3xl hover:border-primary/50 hover:shadow-lg transition-all">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center shrink-0 mb-2">
               <Smartphone className="w-8 h-8" />
            </div>
            <div>
               <h3 className="text-xl font-bold mb-2 text-foreground">Technical Support</h3>
               <p className="text-subtext mb-4 leading-relaxed">Experiencing an issue? Please include your device type and a brief description of the issue in your email.</p>
               <a href="mailto:getroamiai@gmail.com?subject=Technical%20Support" className="text-primary font-medium hover:underline text-lg">Contact Support</a>
            </div>
         </div>
      </div>
    </div>
  );
}
