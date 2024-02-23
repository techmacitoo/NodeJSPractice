// import * as https from 'https';
// import { ClientRequest, IncomingMessage } from 'http';
// import * as path from 'path';
// import * as fs from 'fs';

// const url: string = 'https://jsonplaceholder.typicode.com/posts';

// const filePath: string = path.join('.', 'files', 'posts.json');
// const writeStream = fs.createWriteStream(filePath, 'utf-8');

// const requestOptions: https.RequestOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     }
// };

// const request: ClientRequest = https.request(url, requestOptions, (response: IncomingMessage) => { 
//     if(response.statusCode !== 200) {
//         console.error(`Error: ${response.statusCode}`);
//         return;
//     }

//     response.on('data', (chunk: Buffer) => {
//         // console.log("Data received, ", chunk.length, " bytes...");
//         writeStream.write(chunk);
//     });

//     response.on('end', () => {
//         console.log('All data received....');
//         writeStream.end();
//     });
// });

// request.end();

// ---------------------------------------------------------------------- Mapping Response Data to Class Objects

// import * as https from 'https';
// import { ClientRequest, IncomingMessage } from 'http';
// import * as path from 'path';
// import * as fs from 'fs';

// const url: string = 'https://jsonplaceholder.typicode.com/posts';

// const filePath: string = path.join('.', 'files', 'posts.json');

// interface Post {
//     userId: number;
//     id: number;
//     title: string;
//     body: string;
// }

// const requestOptions: https.RequestOptions = {
//     method: 'GET',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json'
//     }
// };

// const request: ClientRequest = https.request(url, requestOptions, (response: IncomingMessage) => { 
//     if(response.statusCode !== 200) {
//         console.error(`Error: ${response.statusCode}`);
//         return;
//     }

//     let dataChunks: Buffer[] = [];

//     response.on('data', (chunk: Buffer) => {
//         dataChunks.push(chunk);
//     });

//     response.on('end', () => {
//         const data = Buffer.concat(dataChunks).toString();
//         const posts: Post[] = JSON.parse(data);
//         console.log(posts);

//         console.log('All data received and parsed....');
//         fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

//         console.log("\n First Record:");
//         console.log("Id: ", posts[0].id);   
//         console.log("Title: ", posts[0].title);
//         console.log("Body: ", posts[0].body);
//     });
// });

// request.end();

// -------------------------------------------------------------- Mapping using Axios

import axios, { AxiosResponse } from 'axios';
import * as path from 'path';
import * as fs from 'fs';

const url: string = 'https://jsonplaceholder.typicode.com/posts';
const filePath: string = path.join('.', 'files', 'posts.json');

interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

axios.get<Array<Post>>(url)
    .then((response: AxiosResponse<Array<Post>>) => {
        const posts: Post[] = response.data;
        console.log(posts);

        console.log('All data received and parsed....');
        fs.writeFileSync(filePath, JSON.stringify(posts, null, 2));

        console.log("\n First Record:");
        console.log("Id: ", posts[0].id);
        console.log("Title: ", posts[0].title);
        console.log("Body: ", posts[0].body);
    }).catch((error: any) => {
        console.error(`Error: ${error}`);
    });