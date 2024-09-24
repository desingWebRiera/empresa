import { Count, Filter, FilterExcludingWhere, Where } from '@loopback/repository';
import { DetallDeLaComanda } from '../models';
import { DetallDeLaComandaRepository } from '../repositories';
export declare class DetallController {
    detallDeLaComandaRepository: DetallDeLaComandaRepository;
    constructor(detallDeLaComandaRepository: DetallDeLaComandaRepository);
    create(detallDeLaComanda: Omit<DetallDeLaComanda, 'id'>): Promise<DetallDeLaComanda>;
    count(where?: Where<DetallDeLaComanda>): Promise<Count>;
    find(filter?: Filter<DetallDeLaComanda>): Promise<DetallDeLaComanda[]>;
    updateAll(detallDeLaComanda: DetallDeLaComanda, where?: Where<DetallDeLaComanda>): Promise<Count>;
    findById(id: number, filter?: FilterExcludingWhere<DetallDeLaComanda>): Promise<DetallDeLaComanda>;
    updateById(id: number, detallDeLaComanda: DetallDeLaComanda): Promise<void>;
    replaceById(id: number, detallDeLaComanda: DetallDeLaComanda): Promise<void>;
    deleteById(id: number): Promise<void>;
}
