export const metadata = {
  title: "Terms of Service | Synchro Solutions",
  description: "Terms of Service for Synchro Solutions.",
};

export default function TermsOfServicePage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">Terms of Service</h1>
        <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <p className="mb-6">
          Welcome to Synchro Solutions. By accessing or using our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Use License</h2>
        <p className="mb-6">
          Permission is granted to temporarily download one copy of the materials (information or software) on Synchro Solutions&apos; website for personal, non-commercial transitory viewing only.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Disclaimer</h2>
        <p className="mb-6">
          The materials on Synchro Solutions&apos; website are provided on an &apos;as is&apos; basis. Synchro Solutions makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Limitations</h2>
        <p className="mb-6">
          In no event shall Synchro Solutions or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Synchro Solutions&apos; website.
        </p>
      </div>
    </div>
  );
}
