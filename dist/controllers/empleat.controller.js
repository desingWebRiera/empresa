"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmpleatController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let EmpleatController = class EmpleatController {
    constructor(empleatRepository) {
        this.empleatRepository = empleatRepository;
    }
    async create(empleat) {
        return this.empleatRepository.create(empleat);
    }
    async count(where) {
        return this.empleatRepository.count(where);
    }
    async find(filter) {
        return this.empleatRepository.find(filter);
    }
    async updateAll(empleat, where) {
        return this.empleatRepository.updateAll(empleat, where);
    }
    async findById(id, filter) {
        return this.empleatRepository.findById(id, filter);
    }
    async updateById(id, empleat) {
        await this.empleatRepository.updateById(id, empleat);
    }
    async replaceById(id, empleat) {
        await this.empleatRepository.replaceById(id, empleat);
    }
    async deleteById(id) {
        await this.empleatRepository.deleteById(id);
    }
};
exports.EmpleatController = EmpleatController;
tslib_1.__decorate([
    (0, rest_1.post)('/empleats'),
    (0, rest_1.response)(200, {
        description: 'Empleat model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Empleat) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleat, {
                    title: 'NewEmpleat',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empleats/count'),
    (0, rest_1.response)(200, {
        description: 'Empleat model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Empleat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empleats'),
    (0, rest_1.response)(200, {
        description: 'Array of Empleat model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Empleat, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Empleat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empleats'),
    (0, rest_1.response)(200, {
        description: 'Empleat PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleat, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Empleat)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Empleat, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/empleats/{id}'),
    (0, rest_1.response)(200, {
        description: 'Empleat model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleat, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Empleat, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/empleats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleat PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Empleat, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Empleat]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/empleats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleat PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Empleat]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/empleats/{id}'),
    (0, rest_1.response)(204, {
        description: 'Empleat DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], EmpleatController.prototype, "deleteById", null);
exports.EmpleatController = EmpleatController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.EmpleatRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.EmpleatRepository])
], EmpleatController);
//# sourceMappingURL=empleat.controller.js.map