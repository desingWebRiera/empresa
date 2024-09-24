import { Entity } from '@loopback/repository';
export declare class Comanda extends Entity {
    dataComanda: string;
    id?: number;
    idClient: number;
    idEmpleat: number;
    idNaviera: number;
    [prop: string]: any;
    constructor(data?: Partial<Comanda>);
}
export interface ComandaRelations {
}
export type ComandaWithRelations = Comanda & ComandaRelations;
