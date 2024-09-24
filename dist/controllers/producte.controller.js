"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProducteController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ProducteController = class ProducteController {
    constructor(producteRepository) {
        this.producteRepository = producteRepository;
    }
    async create(producte) {
        return this.producteRepository.create(producte);
    }
    async count(where) {
        return this.producteRepository.count(where);
    }
    async find(filter) {
        return this.producteRepository.find(filter);
    }
    async updateAll(producte, where) {
        return this.producteRepository.updateAll(producte, where);
    }
    async findById(id, filter) {
        return this.producteRepository.findById(id, filter);
    }
    async updateById(id, producte) {
        await this.producteRepository.updateById(id, producte);
    }
    async replaceById(id, producte) {
        await this.producteRepository.replaceById(id, producte);
    }
    async deleteById(id) {
        await this.producteRepository.deleteById(id);
    }
};
exports.ProducteController = ProducteController;
tslib_1.__decorate([
    (0, rest_1.post)('/productes'),
    (0, rest_1.response)(200, {
        description: 'Producte model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Producte) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producte, {
                    title: 'NewProducte',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productes/count'),
    (0, rest_1.response)(200, {
        description: 'Producte model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Producte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productes'),
    (0, rest_1.response)(200, {
        description: 'Array of Producte model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Producte, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Producte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productes'),
    (0, rest_1.response)(200, {
        description: 'Producte PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producte, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Producte)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Producte, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/productes/{id}'),
    (0, rest_1.response)(200, {
        description: 'Producte model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producte, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Producte, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/productes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Producte PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Producte, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Producte]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/productes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Producte PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Producte]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/productes/{id}'),
    (0, rest_1.response)(204, {
        description: 'Producte DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ProducteController.prototype, "deleteById", null);
exports.ProducteController = ProducteController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ProducteRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ProducteRepository])
], ProducteController);
//# sourceMappingURL=producte.controller.js.map