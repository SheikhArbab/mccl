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
