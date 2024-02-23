const { fork } = require('child_process');
const numChildren = 4; // Number of child processes to spawn
console.time('Processing with child processes');

let completedChildren = 0;
for (let i = 0; i < numChildren; i++) {
    const child = fork('./child-file-process.js', [JSON.stringify({ path: './large_file.txt' })]);

    child.on('message', (message) => {
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

    child.on('exit', (code) => {
        if (code !== 0) {
            console.error(`Child ${i + 1} exited with code ${code}`);
        }
    });
}
