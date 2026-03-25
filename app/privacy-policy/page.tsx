import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Roami AI™",
};

export default function PrivacyPolicy() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl flex-1 animate-fade-in">
      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Legal</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Roami AI™ Privacy Policy</h1>
      
      <div className="space-y-8 text-subtext leading-relaxed">
        <p className="font-medium text-foreground">Last Updated: March 24, 2026</p>
        
        <p>At Roami AI™, your privacy is as important to us as your journey. This policy explains how we collect, use, and protect your information while providing our services.</p>
        
        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">1. Information We Collect</h2>
           <ul className="list-disc pl-6 space-y-4">
             <li>
               <strong className="text-foreground">Search Queries & Preferences</strong><br/>
               We collect the destinations, "Vibes," and preferences you enter to generate personalized recommendations and travel guidance.
             </li>
             <li>
               <strong className="text-foreground">Location Data</strong><br/>
               With your permission, we access your approximate location while using the app to provide relevant, real-time insights and navigation support.
             </li>
             <li>
               <strong className="text-foreground">Contact Information</strong><br/>
               If you create an account or join our updates, we collect your name and email address to manage your access and communicate with you.
             </li>
             <li>
               <strong className="text-foreground">User-Provided Data</strong><br/>
               Any additional information you choose to share (such as preferences or travel details) is used to improve your experience within the app.
             </li>
           </ul>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">2. How We Use Your Information</h2>
           <p className="mb-3">We use your data to:</p>
           <ul className="list-disc pl-6 space-y-2">
             <li>provide personalized travel recommendations</li>
             <li>deliver real-time, location-based guidance</li>
             <li>improve app performance and user experience</li>
             <li>communicate updates and support requests</li>
           </ul>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">3. AI Processing & Transparency</h2>
           <p className="mb-3">Roami AI uses third-party AI providers, including OpenAI and Google Gemini, to process your requests and generate responses.</p>
           <ul className="list-disc pl-6 space-y-2">
             <li>Your inputs are shared only to fulfill your request</li>
             <li>We do not use your personal data to train public AI models</li>
             <li>We may use anonymized, de-identified data to improve our services</li>
           </ul>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">4. Data Sharing</h2>
           <p className="mb-3">We share limited data only when necessary to operate the app:</p>
           <ul className="list-disc pl-6 space-y-2">
             <li>Mapping Services (Apple Maps / Google Maps) for navigation</li>
             <li>AI Providers to generate responses</li>
           </ul>
           <p className="mt-4 font-medium text-foreground">We do not sell your personal data.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">5. Data Retention</h2>
           <p>We retain your data only as long as necessary to provide the service and improve functionality. You may delete your data at any time using in-app tools or by contacting us.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">6. Your Rights & Control</h2>
           <p className="mb-3">You have control over your data:</p>
           <ul className="list-disc pl-6 space-y-2">
             <li>You can delete your chat history within the app</li>
             <li>You can request full account deletion at any time</li>
             <li>We will process deletion requests within 30 days</li>
           </ul>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">7. Data Security</h2>
           <p>We take reasonable technical and organizational measures to protect your data from unauthorized access, misuse, or disclosure.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">8. Children's Privacy</h2>
           <p>Roami AI is not intended for users under the age of 13. We do not knowingly collect data from children.</p>
        </section>
        
        <section className="p-6 bg-surface border border-border rounded-2xl mt-8">
           <h3 className="text-xl font-bold mb-2 text-foreground">9. Contact Us</h3>
           <p>If you have any questions about this Privacy Policy or your data:</p>
           <p className="mt-2 text-lg">📧 <a href="mailto:getroamiai@gmail.com" className="text-primary font-medium hover:underline">getroamiai@gmail.com</a></p>
        </section>
      </div>
    </div>
  );
}
