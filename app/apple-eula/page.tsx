import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apple EULA | ROAMI AI",
};

export default function AppleEULA() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl flex-1 animate-fade-in">
      <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Legal</div>
      <h1 className="text-4xl md:text-5xl font-bold mb-8 text-foreground tracking-tight">Apple End User License Agreement</h1>
      
      <div className="space-y-8 text-subtext leading-relaxed">
        <p className="font-medium text-foreground">Last updated: {new Date().toLocaleDateString()}</p>
        
        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">1. Acknowledgement</h2>
           <p>ROAMI AI and the End-User acknowledge that this EULA is concluded between ROAMI AI and the End-User only, and not with Apple, and ROAMI AI, not Apple, is solely responsible for the Licensed Application and the content thereof. The EULA may not provide for usage rules for Licensed Applications that are in conflict with the Apple Media Services Terms and Conditions as of the Effective Date.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">2. Scope of License</h2>
           <p>The license granted to the End-User for the Licensed Application must be limited to a non-transferable license to use the Licensed Application on any Apple-branded Products that the End-User owns or controls and as permitted by the Usage Rules set forth in the Apple Media Services Terms and Conditions, except that such Licensed Application may be accessed and used by other accounts associated with the purchaser via Family Sharing or volume purchasing.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">3. Maintenance and Support</h2>
           <p>ROAMI AI is solely responsible for providing any maintenance and support services with respect to the Licensed Application, as specified in the EULA, or as required under applicable law. ROAMI AI and the End-User must acknowledge that Apple has no obligation whatsoever to furnish any maintenance and support services with respect to the Licensed Application.</p>
        </section>

        <section>
           <h2 className="text-2xl font-bold mb-4 text-foreground">4. Warranty</h2>
           <p>ROAMI AI is solely responsible for any product warranties, whether express or implied by law, to the extent not effectively disclaimed. In the event of any failure of the Licensed Application to conform to any applicable warranty, the End-User may notify Apple, and Apple will refund the purchase price for the Licensed Application to that End-User.</p>
        </section>
        
        <section className="p-6 bg-surface border border-border rounded-2xl mt-8">
           <h3 className="text-xl font-bold mb-2 text-foreground">Questions?</h3>
           <p>If you have any questions about this EULA, please contact us at legal@roamiai.com.</p>
        </section>
      </div>
    </div>
  );
}
