"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
let User = class User extends repository_1.Entity {
    constructor(data) {
        super(data);
    }
};
exports.User = User;
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        jsonSchema: { nullable: true },
        precision: 3,
        scale: 0,
        generated: false,
        mysql: { columnName: 'hasAccount', dataType: 'tinyint', dataLength: null, dataPrecision: 3, dataScale: 0, nullable: 'Y', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "hasAccount", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'number',
        required: true,
        jsonSchema: { nullable: false },
        precision: 10,
        scale: 0,
        generated: false,
        id: 1,
        mysql: { columnName: 'id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N', generated: false },
    }),
    tslib_1.__metadata("design:type", Number)
], User.prototype, "id", void 0);
tslib_1.__decorate([
    (0, repository_1.property)({
        type: 'string',
        jsonSchema: { nullable: true },
        length: 512,
        generated: false,
        mysql: { columnName: 'name', dataType: 'varchar', dataLength: 512, dataPrecision: null, dataScale: null, nullable: 'Y', generated: false },
    }),
    tslib_1.__metadata("design:type", String)
], User.prototype, "name", void 0);
exports.User = User = tslib_1.__decorate([
    (0, repository_1.model)({ settings: { idInjection: false, mysql: { schema: 'empresa', table: 'User' } } }),
    tslib_1.__metadata("design:paramtypes", [Object])
], User);
//# sourceMappingURL=user.model.js.map