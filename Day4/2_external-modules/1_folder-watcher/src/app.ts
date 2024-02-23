import chokidar from 'chokidar';
import * as path from 'path';

const folderToWatch = path.join(process.cwd(), 'my-folder');
const watcher = chokidar.watch(folderToWatch);

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