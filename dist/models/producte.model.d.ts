import { Entity } from '@loopback/repository';
export declare class Producte extends Entity {
    id?: number;
    idProveidor: number;
    nom: string;
    preu?: number;
    [prop: string]: any;
    constructor(data?: Partial<Producte>);
}
export interface ProducteRelations {
}
export type ProducteWithRelations = Producte & ProducteRelations;
