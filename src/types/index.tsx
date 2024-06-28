import { IconType } from "react-icons";

export interface NestedMenuItem {
    title: string;
    link: string;
}

export interface MenuItem {
    title: string;
    link: string;
    nestedMenu: NestedMenuItem[];
}


export interface Form {
    label: string,
    type: string,
    name: string,
}

export interface MobileNavArr {
    name: string;
    link: string;
    icon: IconType;
    isAdmin: string[] | boolean;
}


export interface Links {
    title: string;
    url: string;
}

export interface Data {
    heading: string;
    links: Links[]
}

export interface User {
    email: string;
    first_name: string;
    user_id: string;
    last_name: string;
    permissions_details: { id: number; permission: string }[];
    roles_details: { id: number; role: string };
    roles: string;
}



export interface UserInitialState {
    user: User | null;
    token: any;
}

export interface ToggleInitialState {
    toggle: boolean;
}


export interface UserState {
    auth: UserInitialState
}


export interface SocialLinks {
    icon: IconType;
    url: string;
}


export interface AdminLinks extends SocialLinks {
    title: string;
}

