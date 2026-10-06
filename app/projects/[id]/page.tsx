import React from "react";
import { PROJECTS } from "@/data/portfolioData";
import { notFound } from "next/navigation";
import { CaseStudyView } from "@/components/CaseStudyView";

export function generateStaticParams() {
  return PROJECTS.map((project) => ({
    id: project.id,
  }));
}

interface CaseStudyPageProps {
  params: Promise<{ id: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { id } = await params;
  const project = PROJECTS.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return <CaseStudyView project={project} />;
}
