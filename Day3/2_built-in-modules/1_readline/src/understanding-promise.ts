// function getData(): number {
//     return Math.random();
// }

// const data = getData();
// console.log(data);

// ---------------------------------- Callback

// function getData(callbackFn: (data: number) => void) {
//     setTimeout(() => {
//         callbackFn(Math.random());
//     }, 5000);
// }

// getData(function (data) {
//     console.log(data);
// });

// ---------------------------------- Promise

// function getData(): Promise<number> {
//     return new Promise((resolve, reject) => {
//         // setTimeout(() => {
//         //     resolve(Math.random());
//         //     // reject('Error occurred');
//         // }, 5000);
//         fetch('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//             resolve(response.json());
//         }).catch(error => {
//             reject(error);
//         });
//     });
// }

// let promise = getData();
// promise.then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// }).finally(() => {
//     console.log('Finally');
// });

// ---------------------------------- Callback hell

// function firstMethod(callbackFn: (data: { first: string }) => void) {
//     setTimeout(() => {
//         console.log('first method completed...');
//         callbackFn({ first: 'added from first method' });
//     }, 2000);
// }

// function secondMethod(callbackFn: (data: { second: string }) => void) {
//     setTimeout(() => {
//         console.log('second method completed...');
//         callbackFn({ second: 'added from second method' });
//     }, 2000);
// }

// function thirdMethod(callbackFn: (data: { third: string }) => void) {
//     setTimeout(() => {
//         console.log('third method completed...');
//         callbackFn({ third: 'added from third method' });
//     }, 2000);
// }

// firstMethod(function(fData){
//     secondMethod(function(sData){
//         thirdMethod(function(tData){
//             console.log(fData, sData, tData);
//         });
//     });
// });

// // ---------------------------------- Promise chaining

// function firstMethod(): Promise<{ first: string }> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('first method completed...');
//             resolve({ first: 'added from first method' });
//         }, 2000);
//     });
// }

// function secondMethod(data: { first: string }): Promise<{ second: string }> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('second method completed...');
//             resolve({ ...data, second: 'added from second method' });
//         }, 2000);
//     });
// }

// function thirdMethod(data: { second: string }): Promise<{ third: string }> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('third method completed...');
//             resolve({ ...data, third: 'added from third method' });
//         }, 2000);
//     });
// }

// firstMethod().then(secondMethod).then(thirdMethod).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });


// ---------------------------------- Promise All

// function firstMethod(): Promise<{ first: string }> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('first method completed...');
//             resolve({ first: 'added from first method' });
//         }, 2000);
//     });
// }

// function secondMethod(): Promise<{ second: string }> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('second method completed...');
//             resolve({ second: 'added from second method' });
//         }, 2000);
//     });
// }

// function thirdMethod(): Promise<{ third: string }> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log('third method completed...');
//             resolve({ third: 'added from third method' });
//         }, 2000);
//     });
// }

// Sequential execution
// firstMethod().then((data) => {
//     return secondMethod().then((sData) => {
//         return { ...data, ...sData };
//     })
// }).then((data) => {
//     return thirdMethod().then((tData) => {
//         return { ...data, ...tData };
//     });
// }).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// Parallel execution
// Promise.all([firstMethod(), secondMethod(), thirdMethod()]).then((data) => {
//     console.log(data);
// }).catch((error) => {
//     console.log(error);
// });

// ---------------------------------- Async Await

// function getData(): Promise<number> {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(Math.random());
//         }, 5000);
//     });
// }

// // async function execute() {
// //     const data = await getData();
// //     console.log(data);
// // }
// // execute();

// (async function () {
//     const data = await getData();
//     console.log(data);
// })();

// ---------------------------------- Async Await
function firstMethod(): Promise<{ first: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('first method completed...');
            resolve({ first: 'added from first method' });
        }, 2000);
    });
}

function secondMethod(): Promise<{ second: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('second method completed...');
            resolve({ second: 'added from second method' });
        }, 2000);
    });
}

function thirdMethod(): Promise<{ third: string }> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('third method completed...');
            resolve({ third: 'added from third method' });
        }, 2000);
    });
}

// Sequential execution
// (async function(){
//     const data1 = await firstMethod();
//     const data2 = await secondMethod();
//     const data3 = await thirdMethod();
//     console.log(data1, data2, data3);
// })();

// Parallel execution
(async function(){
    const [data1, data2, data3] = await Promise.all([firstMethod(), secondMethod(), thirdMethod()]);
    console.log(data1, data2, data3);
})();