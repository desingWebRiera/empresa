import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { Empleat } from '../models';
import { EmpleatRepository } from '../repositories';
export declare class EmpleatController {
    empleatRepository: EmpleatRepository;
    constructor(empleatRepository: EmpleatRepository);
    create(empleat: Omit<Empleat, 'id'>): Promise<Empleat>;
    count(where?: Where<Empleat>): Promise<Count>;
    find(filter?: Filter<Empleat>): Promise<Empleat[]>;
    updateAll(empleat: Empleat, where?: Where<Empleat>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<Empleat>): Promise<Empleat>;
    updateById(id: number, empleat: Empleat): Promise<void>;
    replaceById(id: number, empleat: Empleat): Promise<void>;
    deleteById(id: number): Promise<void>;
}
