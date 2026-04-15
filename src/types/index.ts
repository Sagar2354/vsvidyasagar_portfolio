export interface SiteConfig extends HeaderProps {
  title: string;
  description: string;
  lang: string;
  author: string;
  socialLinks: { text: string; href: string }[];
  socialImage: string;
  canonicalURL?: string;
}

export interface SiteContent {
  hero: HeroProps;
  skills: SkillGroupProps[];
  experience: ExperienceProps[];
  projects: ProjectProps[];
  about: AboutProps;
  education: EducationProps[];
  certifications: CertificationProps[];
  achievements: string[];
  contact: ContactProps;
}

export interface HeroProps {
  name: string;
  specialty: string;
  summary: string;
  email: string;
  location?: string;
  resumeHref?: string;
  profileImage?: string;
  linkedin?: string;
  github?: string;
}

export interface ExperienceProps {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  summary: string | string[];
}

export interface ProjectProps {
  name: string;
  summary: string;
  image?: string;
  linkPreview?: string;
  linkSource?: string;
  techStack?: string[];
  impact?: string[];
}

export interface CertificationProps {
  title: string;
  href: string;
}

export interface AboutProps {
  description: string;
  image?: string;
  stats?: StatProps[];
}

export interface StatProps {
  value: string;
  label: string;
}

export interface SkillGroupProps {
  title: string;
  items: string[];
}

export interface EducationProps {
  degree: string;
  institution: string;
  year: string;
  cgpa?: string;
}

export interface ContactProps {
  email: string;
  phone?: string;
  location: string;
  linkedin?: string;
  github?: string;
  resumeHref?: string;
}

export interface HeaderProps {
  siteLogo: string;
  navLinks: { text: string; href: string }[];
  resumeHref?: string;
  brandText?: string;
}
