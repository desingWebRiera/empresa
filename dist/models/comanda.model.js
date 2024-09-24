"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comanda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let Comanda = class Comanda extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.Comanda = Comanda;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'date',
        required: true,
        jsonSchema: { nullable: false },
        generated: false,
        mysql: { columnName: 'data_comanda', dataType: 'datetime', dataLength: null, dataPrecision: null, dataScale: null, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], Comanda.prototype, "dataComanda", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: 1,
        id: 1,
        mysql: { columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: 1 },
    }),
    tslib_1.__metadata("design:type", Number)
], Comanda.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_client', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], Comanda.prototype, "idClient", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_empleat', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], Comanda.prototype, "idEmpleat", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_naviera', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], Comanda.prototype, "idNaviera", void 0);
exports.Comanda = Comanda = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { idInjection: false, mysql: { schema: 'empresa', table: 'comanda' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], Comanda);
//# sourceMappingURL=comanda.model.js.map