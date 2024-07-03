export interface User {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
    roles: UserRole;
    permissions: Permission[];
}

interface UserRole {
    id: number;
    role: string;
}

interface Permission {
    id: number;
    name: string;
}

export interface UserInitialState {
    user: User | null;
    token: any;
}

export interface UserState {
    auth: UserInitialState;
}
    