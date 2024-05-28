export type User = {
    name: string;
    email: string;
    phone: string;
    address: string;
    society: Society;
    role: number;
}

export type Society = {
    name: string;
    address: string;
    postcode: string;
}