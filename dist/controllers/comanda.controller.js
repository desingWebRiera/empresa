"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComandaController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ComandaController = class ComandaController {
    constructor(comandaRepository) {
        this.comandaRepository = comandaRepository;
    }
    async create(comanda) {
        return this.comandaRepository.create(comanda);
    }
    async count(where) {
        return this.comandaRepository.count(where);
    }
    async find(filter) {
        return this.comandaRepository.find(filter);
    }
    async updateAll(comanda, where) {
        return this.comandaRepository.updateAll(comanda, where);
    }
    async findById(id, filter) {
        return this.comandaRepository.findById(id, filter);
    }
    async updateById(id, comanda) {
        await this.comandaRepository.updateById(id, comanda);
    }
    async replaceById(id, comanda) {
        await this.comandaRepository.replaceById(id, comanda);
    }
    async deleteById(id) {
        await this.comandaRepository.deleteById(id);
    }
};
exports.ComandaController = ComandaController;
tslib_1.__decorate([
    (0, rest_1.post)('/comandas'),
    (0, rest_1.response)(200, {
        description: 'Comanda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.Comanda) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comanda, {
                    title: 'NewComanda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/comandas/count'),
    (0, rest_1.response)(200, {
        description: 'Comanda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.Comanda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/comandas'),
    (0, rest_1.response)(200, {
        description: 'Array of Comanda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.Comanda, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.Comanda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/comandas'),
    (0, rest_1.response)(200, {
        description: 'Comanda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comanda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.Comanda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.Comanda, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/comandas/{id}'),
    (0, rest_1.response)(200, {
        description: 'Comanda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comanda, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.Comanda, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/comandas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Comanda PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.Comanda, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Comanda]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/comandas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Comanda PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.Comanda]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/comandas/{id}'),
    (0, rest_1.response)(204, {
        description: 'Comanda DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], ComandaController.prototype, "deleteById", null);
exports.ComandaController = ComandaController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.ComandaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.ComandaRepository])
], ComandaController);
//# sourceMappingURL=comanda.controller.js.map