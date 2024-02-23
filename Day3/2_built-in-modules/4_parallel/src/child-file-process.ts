import * as fs from 'fs';
import * as crypto from 'crypto';

interface ProcessMessage {
    path: string;
}

const args = JSON.parse(process.argv[2]) as ProcessMessage;
const filePath = args.path;

// Replacing the commented-out code with a TypeScript-compliant structure
fs.readFile(filePath, (err: NodeJS.ErrnoException | null, data: Buffer) => {
    if (err) {
        if (process.send) {
            process.send({ error: err.message });
        }
        return;
    } else {
        const encrypted = mockEncrypt(data);
        if (process.send) {
            process.send({ processed: 'done', data: encrypted.toString('hex') });
        }
        process.exit(0);
    }
});

function mockEncrypt(data: Buffer): Buffer {
    // Simulate an encryption operation by hashing the data multiple times
    let encrypted: Buffer = data;
    for (let i = 0; i < 1000000; i++) {
        encrypted = crypto.createHash('sha256').update(encrypted).digest();
    }
    return encrypted;
}
