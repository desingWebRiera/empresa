import { Entity } from '@loopback/repository';
export declare class Client extends Entity {
    ciutat?: string;
    codiPostal?: string;
    direccio?: string;
    id?: number;
    nom: string;
    pais?: string;
    [prop: string]: any;
    constructor(data?: Partial<Client>);
}
export interface ClientRelations {
}
export type ClientWithRelations = Client & ClientRelations;
