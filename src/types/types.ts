export type Project = {
  children?: string;
  header: string;
  key: string;
  title: string;
  subtitle: string;
  text: string;
  theme: string;
  badge: string;
  code: string;
  doc: string;
  carousel: {
    directory: string;
    prefix: string;
    altPrefix: string;
    theme: string;
  };
  isEtudes: boolean;
  etudes: string;
};