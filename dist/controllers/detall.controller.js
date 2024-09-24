"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallController = void 0;
const tslib_1 = require("tslib");
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let DetallController = class DetallController {
    constructor(detallDeLaComandaRepository) {
        this.detallDeLaComandaRepository = detallDeLaComandaRepository;
    }
    async create(detallDeLaComanda) {
        return this.detallDeLaComandaRepository.create(detallDeLaComanda);
    }
    async count(where) {
        return this.detallDeLaComandaRepository.count(where);
    }
    async find(filter) {
        return this.detallDeLaComandaRepository.find(filter);
    }
    async updateAll(detallDeLaComanda, where) {
        return this.detallDeLaComandaRepository.updateAll(detallDeLaComanda, where);
    }
    async findById(id, filter) {
        return this.detallDeLaComandaRepository.findById(id, filter);
    }
    async updateById(id, detallDeLaComanda) {
        await this.detallDeLaComandaRepository.updateById(id, detallDeLaComanda);
    }
    async replaceById(id, detallDeLaComanda) {
        await this.detallDeLaComandaRepository.replaceById(id, detallDeLaComanda);
    }
    async deleteById(id) {
        await this.detallDeLaComandaRepository.deleteById(id);
    }
};
exports.DetallController = DetallController;
tslib_1.__decorate([
    (0, rest_1.post)('/detalls'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLaComanda model instance',
        content: { 'application/json': { schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLaComanda) } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLaComanda, {
                    title: 'NewDetallDeLaComanda',
                    exclude: ['id'],
                }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "create", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detalls/count'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLaComanda model count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, rest_1.param.where(models_1.DetallDeLaComanda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "count", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detalls'),
    (0, rest_1.response)(200, {
        description: 'Array of DetallDeLaComanda model instances',
        content: {
            'application/json': {
                schema: {
                    type: 'array',
                    items: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLaComanda, { includeRelations: true }),
                },
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.filter(models_1.DetallDeLaComanda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "find", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/detalls'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLaComanda PATCH success count',
        content: { 'application/json': { schema: repository_1.CountSchema } },
    }),
    tslib_1.__param(0, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLaComanda, { partial: true }),
            },
        },
    })),
    tslib_1.__param(1, rest_1.param.where(models_1.DetallDeLaComanda)),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [models_1.DetallDeLaComanda, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "updateAll", null);
tslib_1.__decorate([
    (0, rest_1.get)('/detalls/{id}'),
    (0, rest_1.response)(200, {
        description: 'DetallDeLaComanda model instance',
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLaComanda, { includeRelations: true }),
            },
        },
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, rest_1.param.filter(models_1.DetallDeLaComanda, { exclude: 'where' })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "findById", null);
tslib_1.__decorate([
    (0, rest_1.patch)('/detalls/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetallDeLaComanda PATCH success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)({
        content: {
            'application/json': {
                schema: (0, rest_1.getModelSchemaRef)(models_1.DetallDeLaComanda, { partial: true }),
            },
        },
    })),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DetallDeLaComanda]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "updateById", null);
tslib_1.__decorate([
    (0, rest_1.put)('/detalls/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetallDeLaComanda PUT success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__param(1, (0, rest_1.requestBody)()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number, models_1.DetallDeLaComanda]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "replaceById", null);
tslib_1.__decorate([
    (0, rest_1.del)('/detalls/{id}'),
    (0, rest_1.response)(204, {
        description: 'DetallDeLaComanda DELETE success',
    }),
    tslib_1.__param(0, rest_1.param.path.number('id')),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Number]),
    tslib_1.__metadata("design:returntype", Promise)
], DetallController.prototype, "deleteById", null);
exports.DetallController = DetallController = tslib_1.__decorate([
    tslib_1.__param(0, (0, repository_1.repository)(repositories_1.DetallDeLaComandaRepository)),
    tslib_1.__metadata("design:paramtypes", [repositories_1.DetallDeLaComandaRepository])
], DetallController);
//# sourceMappingURL=detall.controller.js.map