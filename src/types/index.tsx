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


export interface SizeArr { v: string; t: string }

export interface SizeWithQuantity {
    size: string;
    quantity: number;
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

export interface Address {
    city: string;
    country: string;
    createdAt: string;
    postalCode: string;
    state: string;
    street: string;
    updatedAt: string;
    userId: string;
    __v: number;
    _id: string;
}

export interface User {
    _id: string;
    fullName: string;
    email: string;
    avatar: string;
    phoneNumber: string;
    role: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
    address: Address | null;
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


export interface CategoryWithOutProds {
    _id: string;
    title: string;
}

export interface Category extends CategoryWithOutProds {
    url: string;
    image: string;
    parent: string[] | string | null | Category[];
    children: Category[];
    products: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
}

export interface Colors {
    _id?: string;
    name?: string;
    hexCode?: string;
}

export interface ColorWithQuantity extends Colors {
    quantity: number;
}

export interface UspData {
    title: string;
    icon: IconType;
}

export interface Product {
    _id: string;
    title: string;
    image: string[];
    slug: string;
    description: string;
    price: number;
    categories: string[];
    brand: string;
    availability: boolean;
    quantity: number;
    color: ColorWithQuantity[];
    size: SizeWithQuantity[];
    gender: 'male' | 'female' | 'unisex';
    reviews: string[];
    sale: string | null;
    discount: number;
    createdAt: string;
    updatedAt: string;
    __v: number;
}