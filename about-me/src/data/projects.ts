export interface Project {
    id: number;
    name: string;
    org: string;
    summary: string;
    role: string;
    tech: string[];
    status: "In progress" | "Shipped";
    link?: string;
  }
  
  export const projects: Project[] = [
    {
      id: 1,
      name: "Housing Matters",
      org: "UCSC Blueprint",
      summary: "",
      role: "Developer",
      tech: ["React", "TypeScript"],
      status: "In progress",
    },
  ];