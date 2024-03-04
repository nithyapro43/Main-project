export interface MenuItem {
  label: string;
  icon?: string;
  command?: () => void;
  url?: string;
  routerLink?: string;
  items?: MenuItem[];
 
}