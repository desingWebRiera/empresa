import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Producte } from '../models';
import { ProducteRepository } from '../repositories';
export declare class ProducteController {
    producteRepository: ProducteRepository;
    constructor(producteRepository: ProducteRepository);
    create(producte: Omit<Producte, 'id'>): Promise<Producte>;
    count(where?: Where<Producte>): Promise<Count>;
    find(filter?: Filter<Producte>): Promise<Producte[]>;
    updateAll(producte: Producte, where?: Where<Producte>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Producte>): Promise<Producte>;
    updateById(id: number, producte: Producte): Promise<void>;
    replaceById(id: number, producte: Producte): Promise<void>;
    deleteById(id: number): Promise<void>;
}
