"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { StaggerContainer, SlideUp } from "@/components/motion";
import { Button } from "@/components/ui/Button";
import { CONTACT_INFO, SOCIAL_LINKS } from "@/lib/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState } from "react";

const Github = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/></svg>
);
const Linkedin = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
);
const Twitter = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
);

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  projectType: z.string().min(1, "Please select a project type"),
  budget: z.string().min(1, "Please select a budget range"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      
      if (res.ok) {
        setIsSuccess(true);
        reset();
        setTimeout(() => setIsSuccess(false), 5000);
      }
    } catch (error) {
      console.error("Error submitting form", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 scroll-mt-16 relative">
      <div className="container mx-auto px-4 md:px-8 max-w-7xl">
        <StaggerContainer className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          <div className="space-y-10">
            <SlideUp className="space-y-4">
              <div className="text-brand font-semibold tracking-wider text-sm uppercase">Get in touch</div>
              <SectionHeading>Let&apos;s build together.</SectionHeading>
              <p className="text-muted text-lg max-w-md">
                Tell us about your project, your timeline, and your goals. We&apos;ll get back to you within 24 hours.
              </p>
            </SlideUp>

            <SlideUp className="space-y-6 pt-4">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex flex-col items-center justify-center shrink-0">
                  <Mail className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Email us</h4>
                  <a href={`mailto:${CONTACT_INFO.email}`} className="text-muted hover:text-brand transition-colors text-sm">
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex flex-col items-center justify-center shrink-0">
                  <Phone className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Call us</h4>
                  <a href={`tel:${CONTACT_INFO.phone?.replace(/ /g, '')}`} className="text-muted hover:text-brand transition-colors text-sm">
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 flex flex-col items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Visit us</h4>
                  <p className="text-muted text-sm">{CONTACT_INFO.address}</p>
                </div>
              </div>
            </SlideUp>

            <SlideUp className="pt-8 border-t border-border flex space-x-6">
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand transition-colors" aria-label="Twitter">
                <Twitter className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-brand transition-colors" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
            </SlideUp>
          </div>

          <SlideUp>
            <div className="bg-card/50 backdrop-blur-xl border border-border/50 rounded-2xl p-8 shadow-[0_20px_50px_rgba(0,0,0,0.1)]">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">Full Name</label>
                  <input
                    {...register("name")}
                    id="name"
                    type="text"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                    placeholder="Jane Doe"
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">Email Address</label>
                  <input
                    {...register("email")}
                    id="email"
                    type="email"
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow"
                    placeholder="jane@example.com"
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-medium text-foreground mb-2">Project Type</label>
                    <select
                      {...register("projectType")}
                      id="projectType"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow appearance-none"
                    >
                      <option value="">Select a type...</option>
                      <option value="web">Web Application</option>
                      <option value="mobile">Mobile App</option>
                      <option value="saas">SaaS Development</option>
                      <option value="design">UI/UX Design</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && <p className="mt-1 text-sm text-red-500">{errors.projectType.message}</p>}
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-medium text-foreground mb-2">Budget Range</label>
                    <select
                      {...register("budget")}
                      id="budget"
                      className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow appearance-none"
                    >
                      <option value="">Select a range...</option>
                      <option value="<25k">Under $25k</option>
                      <option value="25k-50k">$25k - $50k</option>
                      <option value="50k-100k">$50k - $100k</option>
                      <option value=">100k">$100k+</option>
                    </select>
                    {errors.budget && <p className="mt-1 text-sm text-red-500">{errors.budget.message}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">Project Details</label>
                  <textarea
                    {...register("message")}
                    id="message"
                    rows={4}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:ring-2 focus:ring-brand focus:border-transparent transition-shadow resize-none"
                    placeholder="Tell us about your goals, timeline, and any specific requirements..."
                  />
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full" size="lg">
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>

                {isSuccess && (
                  <p className="text-center text-sm text-green-500 font-medium">
                    Message sent successfully! We&apos;ll be in touch soon.
                  </p>
                )}
              </form>
            </div>
          </SlideUp>

        </StaggerContainer>
      </div>
    </section>
  );
}
