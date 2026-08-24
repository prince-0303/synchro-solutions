import { CONTACT_INFO } from "@/lib/constants";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Synchro Solutions. Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "/privacy-policy",
  },
  openGraph: {
    title: "Privacy Policy",
    description: "Privacy Policy for Synchro Solutions. Learn how we collect, use, and protect your data.",
    url: "/privacy-policy",
    siteName: "Synchro Solutions",
    type: "website",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-24">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl prose prose-invert">
        <h1 className="text-4xl md:text-5xl font-display font-bold tracking-tight mb-8">Privacy Policy</h1>
        <p className="text-muted mb-4">Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        
        <p className="mb-6">
          At Synchro Solutions, we take your privacy seriously. This Privacy Policy describes how your personal information is collected, used, and shared when you visit or make a purchase from our website.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Information We Collect</h2>
        <p className="mb-6">
          When you visit the Site, we may collect certain information about your device, including information about your web browser, IP address, time zone, and some of the cookies that are installed on your device.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">How We Use Your Information</h2>
        <p className="mb-6">
          We use the information that we collect generally to fulfill any requests placed through the Site (including processing your contact form submissions).
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4">Contact Us</h2>
        <p className="mb-6">
          For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at <a href={`mailto:${CONTACT_INFO.email}`}>{CONTACT_INFO.email}</a>.
        </p>
      </div>
    </div>
  );
}
