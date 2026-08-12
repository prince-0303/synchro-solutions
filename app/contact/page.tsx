import { Contact } from "@/components/sections/Contact";

export const metadata = {
  title: "Contact Us | Synchro Solutions",
  description: "Get in touch with Synchro Solutions. Tell us about your project, timeline, and goals.",
  alternates: { canonical: "/contact" },
  openGraph: { title: "Contact Us | Synchro Solutions", description: "Get in touch with Synchro Solutions. Tell us about your project, timeline, and goals." },
};

export default function ContactPage() {
  return (
    <div className="pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl text-center mb-4">
        <h1 className="sr-only">Contact Synchro Solutions</h1>
      </div>
      <Contact />
    </div>
  );
}
