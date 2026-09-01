

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import { SOCIAL_LINKS } from "@/lib/constants";

export function CTABanner() {
  return (
    <section className="py-24 relative overflow-hidden bg-background">
      {/* Decorative gradient blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        <FadeIn className="space-y-8 bg-card/50 backdrop-blur-2xl border border-border/50 p-8 md:p-16 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative z-10">
          <SectionHeading>
            Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Business Problem</span> We Can Solve?
          </SectionHeading>
          <p className="text-lg md:text-xl text-muted text-balance mx-auto max-w-2xl leading-relaxed">
            Tell us what you&apos;re currently doing manually, what isn&apos;t working, or what you want to build. We&apos;ll help you figure out the right digital solution.
          </p>
          <div className="pt-6 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button href="/contact" size="lg" className="w-full sm:w-auto text-lg px-8 h-12 rounded-[30px] font-medium">
              Get a Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button href={SOCIAL_LINKS.whatsapp} target="_blank" variant="outline" size="lg" className="w-full sm:w-auto text-lg px-8 h-12 rounded-[30px] font-medium border-[#25D366]/30 text-[#25D366] hover:bg-[#25D366]/10 hover:border-[#25D366]">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button>
          </div>
          <div className="pt-8">
             <p className="text-sm font-medium text-muted">
               Based in Kerala • Serving businesses across Kerala and beyond
             </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
