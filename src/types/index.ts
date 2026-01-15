export interface NavLink {
  href: string;
  label: string;
  variant: 'default' | 'primary';
}

export interface Skill {
  label: string;
  variant: 'primary' | 'secondary';
}

export interface Experience {
  role: string;
  company: string;
  employmentType: string;
  period: string;
  highlights: string[];
}

export interface ProjectFeature {
    icon: string; // font awesome class
    title: string;
    desc: string;
    iconColor: string; // e.g. text-green-500
}

export interface Project {
    title: string;
    category: string;
    categoryColor: 'blue' | 'orange';
    description: string;
    features: ProjectFeature[];
    techStack: { name: string; isHighlight?: boolean }[];
    images: string[];
    reverseLayout?: boolean;
}
