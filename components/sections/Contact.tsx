"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { X, ArrowRight } from "lucide-react";
import { useState, useTransition, useRef, useEffect } from "react";
import { submitContactForm } from "@/app/actions/contact";
import { AnimatePresence, motion } from "framer-motion";

export function Contact() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<{ success: boolean; message: string } | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  // Prevent scrolling when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  const handleFormAction = (formData: FormData) => {
    setStatus(null);
    startTransition(async () => {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus({ success: true, message: "Enquiry sent successfully! We'll be in touch soon." });
        formRef.current?.reset();
        setTimeout(() => {
          setStatus(null);
          setIsModalOpen(false);
        }, 3000);
      } else {
        setStatus({ success: false, message: result.error || "Failed to send enquiry." });
      }
    });
  };

  return (
    <section id="contact" className="py-32 scroll-mt-16 relative bg-background border-t border-border/50">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center relative z-10">
        
        {/* Decorative gradient blob */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand/5 blur-[100px] rounded-full pointer-events-none" />
        
        <StaggerContainer className="flex flex-col items-center space-y-12 relative z-10">
          
          <div className="space-y-6 flex flex-col items-center">
            <SlideUp className="space-y-4 flex flex-col items-center w-full">
              <div className="text-brand font-semibold tracking-wider text-sm uppercase bg-brand/10 px-4 py-1.5 rounded-full inline-block">Get in touch</div>
              <SectionHeading className="text-center w-full block">
                Have a <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">Business Problem</span> We Can Solve?
              </SectionHeading>
              <p className="text-lg text-muted text-balance mx-auto max-w-2xl leading-relaxed mt-4">
                Tell us what you&apos;re currently doing manually, what isn&apos;t working, or what you want to build. We&apos;ll help you figure out the right digital solution.
              </p>
            </SlideUp>

            <SlideUp className="pt-6">
              <Button size="lg" className="text-lg rounded-full px-10 h-14 font-medium shadow-lg hover:shadow-brand/25 transition-all duration-300 group" onClick={() => setIsModalOpen(true)}>
                Get a Free Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </SlideUp>
          </div>

        </StaggerContainer>
      </div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-background/80 backdrop-blur-md overflow-y-auto"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-2xl bg-card border border-border rounded-2xl shadow-2xl overflow-hidden relative text-left my-auto"
            >
              <div className="p-6 sm:p-8">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-muted hover:text-foreground bg-background hover:bg-muted/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-2xl font-display font-bold text-foreground mb-1">Discuss Your Requirements</h3>
                <p className="text-muted text-sm mb-8">Fill out the form below and we&apos;ll get back to you shortly.</p>

                <form ref={formRef} action={handleFormAction} className="space-y-6">
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Name</label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">Business / Company</label>
                      <input
                        name="company"
                        id="company"
                        type="text"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                        placeholder="Your business name"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">Phone / WhatsApp</label>
                      <input
                        name="phone"
                        id="phone"
                        type="tel"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                        placeholder="Your contact number"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        required
                        className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                        placeholder="Your email address"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">What do you need?</label>
                    <select
                      name="service"
                      id="service"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow appearance-none cursor-pointer"
                    >
                      <option value="" disabled defaultValue="">Select a solution...</option>
                      <option value="Website">Website</option>
                      <option value="Business Software">Business Software</option>
                      <option value="ERP">ERP</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="Custom Software">Custom Software</option>
                      <option value="Advice">Not Sure — I Need Advice</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Tell us briefly about your requirement</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow resize-none"
                      placeholder="Describe your current challenges or what you want to build..."
                    />
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full rounded-lg h-14 text-base font-medium" size="lg">
                    {isPending ? "Sending Enquiry..." : "Send Enquiry"}
                  </Button>

                  {status && (
                    <div className={`p-4 rounded-lg text-center text-sm font-medium mt-4 border ${status.success ? 'bg-green-50 border-green-200 text-green-700' : 'bg-red-50 border-red-200 text-red-700'}`}>
                      {status.message}
                    </div>
                  )}
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
