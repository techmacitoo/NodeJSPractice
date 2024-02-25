"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const http_1 = require("http");
const app_1 = tslib_1.__importDefault(require("../app"));
// Hosting
const server = (0, http_1.createServer)(app_1.default);
server.listen(process.env.PORT || 3000);
function onError(err) {
    console.error(err);
}
function onListening() {
    const address = server.address();
    const port = typeof address === 'string' ? address : address === null || address === void 0 ? void 0 : address.port;
    console.log(`Express Server started on port: ${port}`);
}
server.on('error', onError);
server.on('listening', onListening);
//# sourceMappingURL=www.js.map