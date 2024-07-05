import * as P from "@/pages/index";
type RouteItem = {
    path: string;
    title: string;
    element: React.ComponentType<any>;
};





export const routes: RouteItem[] = [

    {
        path: "*",
        title: "Oops page not found! | Metal Collection .Co LTD",
        element: P.NotFound
    }
];


export const authenticate: RouteItem[] = [
    {
        path: "/expenses",
        title: "Dashboard | Metal Collection .Co LTD",
        element: P.Expenses
    },
    {
        path: "/add-expenses",
        title: "Dashboard | Metal Collection .Co LTD",
        element: P.CreateExpenses
    },
    {
        path: "/dashboard",
        title: "Dashboard | Metal Collection .Co LTD",
        element: P.ECommerce
    },
    {
        path: "/calendar",
        title: "Calendar | Metal Collection .Co LTD",
        element: P.Calendar
    },
    {
        path: "/profile",
        title: "Profile | Metal Collection .Co LTD",
        element: P.Profile
    },
    {
        path: "/forms/form-elements",
        title: "Form Elements | Metal Collection .Co LTD",
        element: P.FormElements
    },
    {
        path: "/forms/form-layout",
        title: "Form Layout | Metal Collection .Co LTD",
        element: P.FormLayout
    },
    {
        path: "/tables",
        title: "Tables | Metal Collection .Co LTD",
        element: P.Tables
    },
    {
        path: "/settings",
        title: "Settings | Metal Collection .Co LTD",
        element: P.Settings
    },
    {
        path: "/user-settings/:id",
        title: "Settings | Metal Collection .Co LTD",
        element: P.UserDetail
    },
    {
        path: "/expenses-settings/:id",
        title: "Settings | Metal Collection .Co LTD",
        element: P.ExpensesSettings
    },
    {
        path: "/chart",
        title: "Basic Chart | Metal Collection .Co LTD",
        element: P.Chart
    },
    {
        path: "/ui/alerts",
        title: "Alerts | Metal Collection .Co LTD",
        element: P.Alerts
    },
    {
        path: "/ui/buttons",
        title: "Buttons | Metal Collection .Co LTD",
        element: P.Buttons
    },
    {
        path: "/auth/signup",
        title: "Signup | Metal Collection .Co LTD",
        element: P.SignUp
    },

]