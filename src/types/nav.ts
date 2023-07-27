export type NavItem = {
  id: string;
  name: string;
  src: string;
  sublinks?: {
    id: string;
    name: string;
    src: string;
  }[];
};
