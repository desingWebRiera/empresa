import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Comanda } from '../models';
import { ComandaRepository } from '../repositories';
export declare class ComandaController {
    comandaRepository: ComandaRepository;
    constructor(comandaRepository: ComandaRepository);
    create(comanda: Omit<Comanda, 'id'>): Promise<Comanda>;
    count(where?: Where<Comanda>): Promise<Count>;
    find(filter?: Filter<Comanda>): Promise<Comanda[]>;
    updateAll(comanda: Comanda, where?: Where<Comanda>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Comanda>): Promise<Comanda>;
    updateById(id: number, comanda: Comanda): Promise<void>;
    replaceById(id: number, comanda: Comanda): Promise<void>;
    deleteById(id: number): Promise<void>;
}
