import { DefaultCrudRepository } from '@loopback/repository';
import { DbDataSource } from '../datasources';
import { Producte, ProducteRelations } from '../models';
export declare class ProducteRepository extends DefaultCrudRepository<Producte, typeof Producte.prototype.id, ProducteRelations> {
    constructor(dataSource: DbDataSource);
}
