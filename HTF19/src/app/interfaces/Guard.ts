
export interface LocationHistory{
    timestamp: Date;
    x: number;
    y: number;
}

export interface Guard{
    modifiedDate: Date;
        name: string;
        x: number;
        y: number;
        locationHistory: LocationHistory[];
}