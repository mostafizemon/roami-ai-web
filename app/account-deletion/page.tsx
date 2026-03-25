import type { Metadata } from "next";
import { AlertTriangle } from "lucide-react";

export const metadata: Metadata = {
  title: "Account Deletion | ROAMI AI",
};

export default function AccountDeletion() {
  return (
    <div className="container mx-auto px-6 py-24 max-w-3xl flex-1 animate-fade-in">
      <div className="text-center mb-12">
        <div className="inline-block px-3 py-1 bg-red-500/10 text-red-500 rounded-full text-sm font-medium mb-6">Danger Zone</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground tracking-tight">Data & Account Deletion</h1>
        <p className="text-xl text-subtext">Learn how to permanently delete your ROAMI AI account and all associated data.</p>
      </div>

      <div className="p-6 md:p-8 bg-surface border border-border rounded-3xl mb-8">
         <div className="flex items-start gap-4 mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-2xl">
            <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
            <div>
               <h3 className="font-bold text-red-500 mb-1">Important Account Warning</h3>
               <p className="text-sm text-red-500/80 leading-relaxed">
                  Deleting your account is permanent. All of your chat history, voice preferences, and profile images will be completely wiped from our servers within 30 days. This action cannot be undone.
               </p>
            </div>
         </div>

         <h3 className="text-lg font-bold mb-4 text-foreground">How to delete your account in the App:</h3>
         <ol className="list-decimal pl-5 space-y-2 text-subtext">
            <li>Open the ROAMI AI app on your device.</li>
            <li>Navigate to your <strong>Profile Settings</strong>.</li>
            <li>Scroll to the bottom and tap <strong>Account & Security</strong>.</li>
            <li>Tap <strong>Delete Account</strong> and follow the confirmation prompts.</li>
         </ol>
      </div>
      
      <p className="text-center text-sm text-subtext">
         Need help? Please contact our <a href="/contact-us" className="text-primary hover:underline">Support team</a>.
      </p>
    </div>
  );
}
