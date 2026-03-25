import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQ | ROAMI AI",
};

export default function FAQ() {
  const faqs = [
    {
      question: "What is Roami AI?",
      answer: <>Roami AI is an emotionally intelligent AI travel companion for planning and real-time exploration.</>
    },
    {
      question: "Is the information accurate?",
      answer: <>We recommend verifying important details like hours, reservations, and transit schedules with official sources.</>
    },
    {
      question: "Does Roami guarantee safety?",
      answer: <>No. Roami provides guidance, but users should rely on personal judgment.</>
    },
    {
      question: "How can I contact support?",
      answer: <>Email: <a href="mailto:getroamiai@gmail.com" className="text-primary font-medium hover:underline">getroamiai@gmail.com</a></>
    }
  ];

  return (
    <div className="container mx-auto px-6 py-24 max-w-4xl flex-1 animate-fade-in">
      <div className="text-center mb-16">
        <div className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">Support</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">Frequently Asked Questions</h1>
        <p className="text-xl text-subtext max-w-2xl mx-auto">Find answers to common questions about ROAMI AI's travel features, account management, and privacy policies.</p>
      </div>
      
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div key={index} className="p-6 bg-surface border border-border rounded-2xl">
             <h3 className="text-xl font-bold mb-3 text-foreground">{faq.question}</h3>
             <p className="text-subtext leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
