import { fork } from 'child_process';
import * as path from 'path';

const numChildren: number = 4; // Number of child processes to spawn

// Make sure to compile your child-file-process.ts to child-file-process.js before running this
const childFilePath = path.join(process.cwd(), './dist/child-file-process.js');

console.time('Processing with child processes');

let completedChildren: number = 0;
for (let i = 0; i < numChildren; i++) {
    const child = fork(childFilePath, [JSON.stringify({ path: './files/large_file.txt' })]);

    child.on('message', (message: { error?: string }) => {
        if (message.error) {
            console.error(`Child ${i + 1} reported error:`, message.error);
        } else {
            console.log(`Child ${i + 1} processing complete.`);
        }
        completedChildren++;
        if (completedChildren === numChildren) {
            console.timeEnd('Processing with child processes');
        }
    });

    child.on('exit', (code: number) => {
        if (code !== 0) {
            console.error(`Child ${i + 1} exited with code ${code}`);
        }
    });
}
