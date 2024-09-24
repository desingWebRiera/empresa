"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallDeLaComanda = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let DetallDeLaComanda = class DetallDeLaComanda extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.DetallDeLaComanda = DetallDeLaComanda;
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
], DetallDeLaComanda.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_comanda', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], DetallDeLaComanda.prototype, "idComanda", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'id_producte', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], DetallDeLaComanda.prototype, "idProducte", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        mysql: { columnName: 'quantitat', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], DetallDeLaComanda.prototype, "quantitat", void 0);
exports.DetallDeLaComanda = DetallDeLaComanda = tslib_1.__decorate([
    (0, repository_1.model)({
        settings: { idInjection: false, mysql: { schema: 'empresa', table: 'detall_de_la_comanda' } }
    }),
    tslib_1.__metadata("design:paramtypes", [Object])
], DetallDeLaComanda);
//# sourceMappingURL=detall-de-la-comanda.model.js.map