export type Project = {
  children?: string;
  header: string;
  title: string;
  subtitle: string;
  text: string;
  theme: string;
  badge: string;
  code: string;
  doc: string;
  carousel: {
    prefix: string;
    altPrefix: string;
    theme: string;
  };
  etudes: boolean;
};