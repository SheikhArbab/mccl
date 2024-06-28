import * as P from "@/pages/index"




export const Authorized = [
    // {
    //     path: '/admin/dashboard/',
    //     element: P.LAdminDashboard
    // }, 
]


export const Admin = [
    // {
    //     path: '/super-admin/dashboard/',
    //     element: P.LAdminDashboard
    // }, 
]


export const Authenticate = [
    {
        path: '/revenue',
        element: P.Revenue
    },
    {
        path: '/payment-voucher',
        element: P.PaymentVoucher
    },
    {
        path: '/user',
        element: P.User
    },
    {
        path: '/profile',
        element: P.Profile
    },
]
export { default as Routing } from "./Routing"