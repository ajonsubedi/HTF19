import {LocationHistory} from './LocationHistory';

export interface Guard{
    modifiedDate: Date;
        name: string;
        x: number;
        y: number;
        locationHistory: LocationHistory[];
}