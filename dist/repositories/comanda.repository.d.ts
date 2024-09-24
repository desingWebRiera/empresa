import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Comanda, ComandaRelations } from '../models';
export declare class ComandaRepository extends DefaultCrudRepository<Comanda, typeof Comanda.prototype.id, ComandaRelations> {
    constructor(dataSource: DbDataSource);
}
