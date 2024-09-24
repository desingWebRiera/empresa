"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DbDataSource = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@loopback/core");
const repository_1 = require("@loopback/repository");
const config = {
    name: 'db',
    connector: 'mysql',
    url: 'mysql://avnadmin:AVNS_ajF_HzyNBFDC8_Qt5wq@mysql-3690e1e5-rieravelazquez-4baa.d.aivencloud.com:21335/empresa?ssl-mode=REQUIRED',
    host: 'mysql-3690e1e5-rieravelazquez-4baa.d.aivencloud.com',
    port: 21335,
    user: 'avnadmin',
    password: 'AVNS_ajF_HzyNBFDC8_Qt5wq',
    database: 'empresa'
};
// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
let DbDataSource = class DbDataSource extends repository_1.juggler.DataSource {
    constructor(dsConfig = config) {
        super(dsConfig);
    }
};
exports.DbDataSource = DbDataSource;
DbDataSource.dataSourceName = 'db';
DbDataSource.defaultConfig = config;
exports.DbDataSource = DbDataSource = tslib_1.__decorate([
    (0, core_1.lifeCycleObserver)('datasource'),
    tslib_1.__param(0, (0, core_1.inject)('datasources.config.db', { optional: true })),
    tslib_1.__metadata("design:paramtypes", [Object])
], DbDataSource);
//# sourceMappingURL=db.datasource.js.map