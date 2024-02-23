import * as Worker from 'worker_threads';
import * as path from 'path';

const numWorkers = 4; // Number of parallel workers to spawn

const filePath = path.join(process.cwd(), 'files', 'large_file.txt');
const workerFilePath = path.join(process.cwd(), './dist/worker-file-process.js');

console.time('Processing with multiple workers');

let completedWorkers = 0;

for (let i = 0; i < numWorkers; i++) {
    const worker = new Worker.Worker(workerFilePath, {
        workerData: { 
            path: filePath 
        }
    });
    
    worker.on('message', (message) => {
        console.log(`Worker ${i + 1} processing complete.`);
        completedWorkers++;
        if (completedWorkers === numWorkers) {
            console.log(message.length);
            console.timeEnd('Processing with multiple workers');
        }
    });
    
    worker.on('error', console.error);
    
    worker.on('exit', (code) => {
        if (code !== 0) {
            console.error(new Error(`Worker ${i + 1} stopped with exit code ${code}`));
        }
    });
}