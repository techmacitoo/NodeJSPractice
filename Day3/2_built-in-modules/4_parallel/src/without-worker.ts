import * as fs from 'fs';
import * as path from 'path';
import * as crypto from 'crypto';

const filePath = path.join(process.cwd(), 'files', 'large_file.txt');

const numIterations = 4; // To simulate processing the equivalent of 4 workers' workload

console.time('Processing without worker');

// Function to simulate CPU-intensive processing (mock encryption)
function mockEncrypt(data) {
    let encrypted = data;
    for (let i = 0; i < 1000000; i++) {
        encrypted = crypto.createHash('sha256').update(encrypted).digest();
    }
    return encrypted;
}

// Function to read and process the file
function readAndProcessFile(iteration) { 
    fs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
            console.log(err);
        } else {
            const encrypted = mockEncrypt(data);
            console.log(`Processing complete for iteration ${iteration}.`);
            if (iteration < numIterations) {
                readAndProcessFile(iteration + 1); // Process the next iteration
            } else {
                console.log(encrypted.length);
                console.timeEnd('Processing without worker');
            }
        }
    });
}

readAndProcessFile(1); // Start processing the file