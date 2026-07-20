export interface Lawyer {
  id: string;
  name: string;
  photo: string;
  imageProfile: string;
  workplace: string;
  regNumber: string;
  practices: string[];
}

export interface LawyerCardProps {
  lawyer: Lawyer;
  className?: string;
  animateOnScroll?: boolean;
  isExpanded?: boolean;
  onToggle?: () => void;
}

