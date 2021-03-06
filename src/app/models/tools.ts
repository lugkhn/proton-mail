export interface Filter {
    [key: string]: number;
}

export interface Sort {
    sort: 'Time' | 'Size';
    desc: boolean;
}

export interface Page {
    page: number;
    total: number;
    size: number;
    limit: number;
}
