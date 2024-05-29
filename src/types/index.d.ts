export type User = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    societyId: number;
    role: number;
    password: string;
}

export type Society = {
    name: string;
    address: string;
    postcode: string;
}

export type LoginRequest = {
    email: string;
    password: string;
}