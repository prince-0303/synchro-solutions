import { notFound } from "next/navigation";
import { PROJECTS } from "@/content/projects";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckCircle2 } from "lucide-react";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({
    id: p.id,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} - Synchro Solutions`,
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);
  
  if (!project) {
    notFound();
  }

  return (
    <div className="pt-32 pb-24 bg-background min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-5xl">
        <div className="mb-12">
          <Button href="/portfolio" variant="outline" className="mb-8 rounded-full border-border">
            ← Back to Portfolio
          </Button>
          
          <Badge variant="secondary" className="mb-6">{project.label}</Badge>
          <h1 className="text-4xl md:text-6xl font-display font-bold text-foreground mb-6">
            {project.title}
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {project.id === "school-erp" && (
          <div className="space-y-12">
            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-12 rounded-2xl overflow-hidden bg-muted/10 border border-border/50 aspect-[16/9] flex items-center justify-center">
                {project.images?.[0] ? (
                  <img src={project.images[0]} alt={`${project.title} Dashboard`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted/50 font-medium tracking-widest uppercase">Dashboard Placeholder</div>
                )}
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden bg-muted/10 border border-border/50 aspect-video flex items-center justify-center">
                {project.images?.[1] ? (
                  <img src={project.images[1]} alt={`${project.title} Attendance`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted/50 text-sm font-medium tracking-widest uppercase text-center px-4">Attendance Placeholder</div>
                )}
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden bg-muted/10 border border-border/50 aspect-video flex items-center justify-center">
                {project.images?.[2] ? (
                  <img src={project.images[2]} alt={`${project.title} Fees`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted/50 text-sm font-medium tracking-widest uppercase text-center px-4">Fees Placeholder</div>
                )}
              </div>
            </div>

            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
              <h3 className="text-2xl font-bold mb-6">Key Features</h3>
              <ul className="grid sm:grid-cols-2 gap-4">
                {project.features?.map((feature, i) => (
                  <li key={i} className="flex items-start text-foreground/80">
                    <CheckCircle2 className="w-5 h-5 text-brand mr-3 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {project.id === "ez-stay" && (
          <div className="space-y-16">
            <div className="bg-card rounded-3xl p-8 md:p-12 border border-border/50">
               <h2 className="text-3xl font-bold mb-4">{project.caseStudyHeadline}</h2>
               <p className="text-lg text-muted-foreground">{project.caseStudyDescription}</p>
            </div>

            <div className="grid md:grid-cols-12 gap-6">
              <div className="md:col-span-12 rounded-2xl overflow-hidden bg-muted/10 border border-border/50 aspect-[16/9] flex items-center justify-center">
                {project.images?.[0] ? (
                  <img src={project.images[0]} alt={`${project.title} Homepage`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted/50 font-medium tracking-widest uppercase">Homepage Screenshot Placeholder</div>
                )}
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden bg-muted/10 border border-border/50 aspect-video flex items-center justify-center">
                {project.images?.[1] ? (
                  <img src={project.images[1]} alt={`${project.title} Booking Flow`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted/50 text-sm font-medium tracking-widest uppercase text-center px-4">Booking Flow Placeholder</div>
                )}
              </div>
              <div className="md:col-span-6 rounded-2xl overflow-hidden bg-muted/10 border border-border/50 aspect-video flex items-center justify-center">
                {project.images?.[2] ? (
                  <img src={project.images[2]} alt={`${project.title} Admin Dashboard`} className="w-full h-full object-cover" />
                ) : (
                  <div className="text-muted/50 text-sm font-medium tracking-widest uppercase text-center px-4">Admin Dashboard Placeholder</div>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-card rounded-3xl p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center mr-3 text-sm">1</span>
                  Public Platform Features
                </h3>
                <ul className="space-y-3">
                  {project.publicFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start text-foreground/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand mr-3 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-3xl p-8 border border-border/50">
                <h3 className="text-xl font-bold mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-brand/10 text-brand flex items-center justify-center mr-3 text-sm">2</span>
                  Admin Platform Features
                </h3>
                <ul className="space-y-3">
                  {project.adminFeatures?.map((feature, i) => (
                    <li key={i} className="flex items-start text-foreground/80 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-brand mr-3 mt-0.5 shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        <div className="mt-20 text-center bg-alt-bg rounded-3xl p-12 border border-border/50">
          <h2 className="text-3xl font-bold mb-6">Need a Platform Like This?</h2>
          <Button href="/contact" size="lg" className="rounded-full px-8 h-14 text-base font-medium">
            Discuss Your Project
          </Button>
        </div>
      </div>
    </div>
  );
}
