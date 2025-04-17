export type Route = {
  path: string;
  element: React.ReactNode;
  roles?: string[];
  icon?: React.ReactNode;
  showOnSideNav?: boolean;
  children?: Route[];
  key: string;
};
