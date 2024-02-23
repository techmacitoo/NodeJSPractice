const fs = require('fs');
const crypto = require('crypto');
const { path } = JSON.parse(process.argv[2]);

function mockEncrypt(data) {
    let encrypted = data;
    for (let i = 0; i < 1000000; i++) {
        encrypted = crypto.createHash('sha256').update(encrypted).digest();
    }
    return encrypted;
}

fs.readFile(path, (err, data) => {
    if (err) {
        process.send({ error: err.message });
        return;
    }
    const processed = mockEncrypt(data);
    process.send({ processed: 'done' });
    process.exit(0); // Exit the child process when done
});
