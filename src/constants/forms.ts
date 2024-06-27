import * as T from "@/types/index"

export const Form: T.Form[] = [
    { label: 'Your Email', type: 'email', name: 'email' },
    { label: 'Your password...', type: 'password', name: 'password' },
]

export const signUpForm: T.Form[] = [
    { label: 'Your Name', type: 'text', name: 'fullName' },
    { label: 'Your Email', type: 'email', name: 'email' },
    { label: 'Your Number', type: 'number', name: 'phoneNumber' },
    { label: 'Your password...', type: 'password', name: 'password' },
]

export const updateUser: T.Form[] = [
    { label: 'Your Name', type: 'text', name: 'fullName' },
    { label: 'Your Email', type: 'email', name: 'email' },
    { label: 'Your Number', type: 'number', name: 'phoneNumber' },
    { label: 'Your password...', type: 'password', name: 'password' },
]
export const adminUpdateUser: T.Form[] = [
    { label: 'User Name', type: 'text', name: 'fullName' },
    { label: 'User Email', type: 'email', name: 'email' },
    { label: 'User Number', type: 'number', name: 'phoneNumber' },
    { label: 'User password...', type: 'password', name: 'password' },
    { label: 'User Role', type: 'text', name: 'role' },
]


export const updateCate: T.Form[] = [
    { label: 'Category title', type: 'text', name: 'title' }
]
export const addColor: T.Form[] = [
    { label: 'Color name', type: 'text', name: 'name' },
    { label: 'Color hex code', type: 'text', name: 'hexCode' }
]

export const address: T.Form[] = [
    { label: 'street', type: 'text', name: 'street' },
    { label: 'city', type: 'text', name: 'city' },
    { label: 'state', type: 'text', name: 'state' },
    { label: 'postalCode', type: 'number', name: 'postalCode' }
]
export const productForm: T.Form[] = [
    { label: 'title', type: 'text', name: 'title' },
    { label: 'brand', type: 'text', name: 'brand' },
    { label: 'price', type: 'number', name: 'price' }, 
    { label: 'discount', type: 'number', name: 'discount' },
]
