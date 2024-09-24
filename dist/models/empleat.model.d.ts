import { Entity } from '@loopback/repository';
export declare class Empleat extends Entity {
    cognoms: string;
    dataNaixement?: string;
    foto?: string;
    id?: number;
    nom: string;
    [prop: string]: any;
    constructor(data?: Partial<Empleat>);
}
export interface EmpleatRelations {
}
export type EmpleatWithRelations = Empleat & EmpleatRelations;
