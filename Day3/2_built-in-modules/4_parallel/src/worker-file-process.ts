import * as Worker from 'worker_threads';
import * as fs from 'fs';
import * as crypto from 'crypto';

const filePath = Worker.workerData.path;

fs.readFile(filePath, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        const encrypted = mockEncrypt(data);
        Worker.parentPort.postMessage(encrypted);
    }
});

function mockEncrypt(data) {
    // Simulate an encryption operation by hashing the data multiple times
    let encrypted = data;
    for (let i = 0; i < 1000000; i++) {
        encrypted = crypto.createHash('sha256').update(encrypted).digest();
    }
    return encrypted;
}