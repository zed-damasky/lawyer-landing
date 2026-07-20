export interface ContactInfo {
  phones: string[];
  email: string[];
  address: string;
  coordinates: [number, number];
}

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  renderIcon: (props: { className?: string; fill?: string }) => React.ReactNode;
}
