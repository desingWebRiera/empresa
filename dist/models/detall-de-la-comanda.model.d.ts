import { Entity } from '@loopback/repository';
export declare class DetallDeLaComanda extends Entity {
    id?: number;
    idComanda: number;
    idProducte: number;
    quantitat: number;
    [prop: string]: any;
    constructor(data?: Partial<DetallDeLaComanda>);
}
export interface DetallDeLaComandaRelations {
}
export type DetallDeLaComandaWithRelations = DetallDeLaComanda & DetallDeLaComandaRelations;
