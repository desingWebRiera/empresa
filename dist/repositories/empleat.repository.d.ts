import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Empleat, EmpleatRelations } from '../models';
export declare class EmpleatRepository extends DefaultCrudRepository<Empleat, typeof Empleat.prototype.id, EmpleatRelations> {
    constructor(dataSource: DbDataSource);
}
