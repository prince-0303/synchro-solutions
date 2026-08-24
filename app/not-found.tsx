import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <div className="pt-32 pb-24 flex flex-col items-center justify-center min-h-[70vh]">
      <div className="container mx-auto px-4 md:px-8 max-w-3xl text-center flex flex-col items-center">
        <div className="w-20 h-20 rounded-2xl bg-brand/10 flex items-center justify-center mb-8">
          <span className="text-4xl font-mono font-bold text-brand">404</span>
        </div>
        
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold tracking-tight mb-6 text-foreground">
          Page Not Found
        </h1>
        
        <p className="text-xl text-muted text-balance max-w-xl mx-auto mb-10">
          Oops! It looks like the page you are looking for has been moved or no longer exists.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gradient-to-r from-[#0F9D95] to-[#2dd4bf] hover:from-[#13B8AD] hover:to-[#5eead4] text-white shadow-[0_2px_12px_rgba(15,157,149,0.35)] hover:shadow-[0_4px_20px_rgba(15,157,149,0.5)] transition-all w-full sm:w-auto text-base rounded-[30px] px-8 h-12 font-medium"
          >
            Back to Homepage
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-border dark:border-white/25 bg-white/60 dark:bg-transparent backdrop-blur-md hover:bg-brand/5 dark:hover:bg-white/5 text-foreground shadow-sm hover:shadow-md hover:border-brand/40 dark:hover:border-brand/50 transition-all w-full sm:w-auto text-base rounded-[30px] px-8 h-12 font-medium"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
