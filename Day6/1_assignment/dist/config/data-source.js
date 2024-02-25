"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const tslib_1 = require("tslib");
const typeorm_1 = require("typeorm");
require("reflect-metadata");
const user_1 = require("../entity/user");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "mongodb",
    url: process.env.mongoURI,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    database: "UserDB_Sync_Feb24",
    entities: [user_1.UserEntity],
    synchronize: true,
    logging: true
});
exports.AppDataSource.initialize().then(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    console.log("DataSource has been initialized successfully.");
})).catch((err) => {
    console.error("Error during Data Source initialization:", err);
});
//# sourceMappingURL=data-source.js.map