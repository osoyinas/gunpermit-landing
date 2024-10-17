export interface Place {
    id: number;
    name: string;
    province?: string;
}

export interface Assessment {
    id: number;
    title: string;
    date: Date;
    place: number;
}
