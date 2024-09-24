import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { DetallDeLaComanda, DetallDeLaComandaRelations } from '../models';
export declare class DetallDeLaComandaRepository extends DefaultCrudRepository<DetallDeLaComanda, typeof DetallDeLaComanda.prototype.id, DetallDeLaComandaRelations> {
    constructor(dataSource: DbDataSource);
}
