export interface NavItem {
    label: string;
    href: string;
    isExternal?: boolean;
}

export const nav_items: NavItem[] = [
    { label: "Home", href: "/" },
    { label: "Profile", href: "/profile/" }, 
    { label: "Works", href: "/works/" },
    { label: "Contact", href: "/contact/" }, 
];