export interface Interest {
    id: number;
    title: string;
    description: string;
    tags: string[];
  }
  
  export const interests: Interest[] = [
    {
      id: 1,
      title: "APIs & Backend",
      description: "Designing clean APIs and connecting them to data.",
      tags: ["Node", "REST", "SQL"],
    },
    {
      id: 2,
      title: "Frontend Development",
      description: "Building accessible interfaces.",
      tags: ["React", "TypeScript", "CSS"],
    },
    {
      id: 3,
      title: "AI/ML Ethics",
      description: "Designing guardrails for LLMs with different applications",
      tags: ["Python", "JSON", "SQL"],
    },
  ];