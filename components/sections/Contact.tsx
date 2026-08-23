"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { X } from "lucide-react";
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
        setStatus({ success: true, message: "Message sent successfully! We'll be in touch soon." });
        formRef.current?.reset();
        setTimeout(() => {
          setStatus(null);
          setIsModalOpen(false);
        }, 3000);
      } else {
        setStatus({ success: false, message: result.error || "Failed to send message." });
      }
    });
  };

  return (
    <section id="contact" className="py-32 scroll-mt-16 relative bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl text-center">
        <StaggerContainer className="flex flex-col items-center space-y-12">
          
          <div className="space-y-6 flex flex-col items-center">
            <SlideUp className="space-y-4 flex flex-col items-center w-full">
              <div className="text-brand font-semibold tracking-wider text-sm uppercase bg-brand/10 px-4 py-1.5 rounded-full inline-block">Get in touch</div>
              <SectionHeading className="text-center w-full block">Let&apos;s build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-teal)] via-[var(--brand-cyan)] to-[var(--brand-blue)] drop-shadow-sm">great together.</span></SectionHeading>
              <p className="text-muted text-lg max-w-xl text-center mx-auto">
                Tell us about your project, your timeline, and your goals. We&apos;ll get back to you within 24 hours to discuss how we can help.
              </p>
            </SlideUp>

            <SlideUp className="pt-4">
              <Button size="lg" className="text-base rounded-full px-8 h-14 font-medium shadow-lg hover:shadow-brand/25 transition-all duration-300" onClick={() => setIsModalOpen(true)}>
                Start a Conversation
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-background/80 backdrop-blur-md"
            onClick={(e) => {
              if (e.target === e.currentTarget) setIsModalOpen(false);
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="w-full max-w-lg bg-card border border-border rounded-2xl shadow-2xl overflow-hidden relative text-left"
            >
              <div className="p-6 sm:p-8">
                <button 
                  onClick={() => setIsModalOpen(false)}
                  className="absolute top-4 right-4 p-2 text-muted hover:text-foreground bg-background hover:bg-muted/10 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
                
                <h3 className="text-2xl font-display font-medium text-foreground mb-1">Tell us about your project</h3>
                <p className="text-muted text-sm mb-6">Fill out the form below and we&apos;ll get back to you shortly.</p>

                <form ref={formRef} action={handleFormAction} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                    <input
                      name="name"
                      id="name"
                      type="text"
                      required
                      minLength={2}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                      placeholder="Enter your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email Address</label>
                    <input
                      name="email"
                      id="email"
                      type="email"
                      required
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Project Details</label>
                    <textarea
                      name="message"
                      id="message"
                      rows={4}
                      required
                      minLength={10}
                      className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow resize-none"
                      placeholder="Tell us about your goals, timeline, and any specific requirements..."
                    />
                  </div>

                  <Button type="submit" disabled={isPending} className="w-full rounded-lg h-12" size="lg">
                    {isPending ? "Sending..." : "Send Message"}
                  </Button>

                  {status && (
                    <p className={`text-center text-sm font-medium mt-2 ${status.success ? 'text-green-500' : 'text-red-500'}`}>
                      {status.message}
                    </p>
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
