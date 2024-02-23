"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const chokidar_1 = tslib_1.__importDefault(require("chokidar"));
const path = tslib_1.__importStar(require("path"));
const folderToWatch = path.join(process.cwd(), 'my-folder');
const watcher = chokidar_1.default.watch(folderToWatch);
watcher.on('add', (path) => {
    console.log(`File ${path} has been created`);
});
watcher.on('change', (path) => {
    console.log(`File ${path} has been modified`);
});
watcher.on('unlink', (path) => {
    console.log(`File ${path} has been deleted`);
});
console.log("Chokidar is watching the folder...");
//# sourceMappingURL=app.js.map