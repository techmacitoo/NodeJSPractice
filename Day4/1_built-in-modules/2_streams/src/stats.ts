import { stat } from 'fs';

function getFileSize(filePath: string): Promise<number> {
    return new Promise((resolve, reject) => {
        stat(filePath, (err, stats) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(stats.size);
        });
    });
}

export function compareFileSizes(originalFilePath: string, compressedFilePath: string) {
    Promise.all([
        getFileSize(originalFilePath),
        getFileSize(compressedFilePath)
    ]).then(([originalSize, compressedSize]) => {
        console.log(`Original file size: ${originalSize} bytes`);
        console.log(`Compressed file size: ${compressedSize} bytes`);
        console.log(`Compression saved ${originalSize - compressedSize} bytes`);
    }).catch(err => console.error(err));
}