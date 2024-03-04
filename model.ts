export interface MenuItem {
    label: string;
    icon?: string;
    command?: () => void;
    url?: string;
    routerLink?: string;
    items?: MenuItem[];
   
  }
  
  export interface customermodel{
     ID:number;
    customerName:string;
    address1:string;
    address2:string;
    city:string;
    state:string;
  }

  