export interface Class {
    id: string;
    name: string;
    description: string;
}

export interface ClassesResponse {
    data: Class[];
}