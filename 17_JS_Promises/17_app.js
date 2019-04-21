    // Achieve Promise using normal callbacks

let doTask = (success,failed) => {
    // perform
    let taskDone = false;
    if(taskDone){
        success('Task is Done');
    }
    else{
        failed('Task is NOT Done');
    }
};

doTask((successMessage) => {
    console.log(" From Success : " + successMessage);
} , (failedMessage) => {
    console.log(" From Failed : " + failedMessage);
});

// JavaScript Promises
let promise1 = new Promise((resolve,reject) => {
    // perform the promise
    let isDone = false;
    if(isDone){
        resolve('Promise 1 is Done');
    }
    else{
        reject('Promise 1 is NOt Done');
    }
});

promise1.then((fromResolve) => {
    console.log(" Then " + fromResolve);
}).catch((fromReject) => {
    console.log(" Catch " + fromReject);
});


// Dependent Promises
let doTraining = new Promise((resolve,reject) => {
    // do training
    let isDone = true;
    if(isDone){
        resolve('Training is Done');
    }
    else{
        reject('Training is NOT Done');
    }
});
let doProject = new Promise((resolve,reject) => {
    // do project
    let isDone = true;
    if(isDone){
        resolve('Project is Done');
    }
    else{
        reject('Project is NOT Done');
    }
});

let getJob = new Promise((resolve,reject) => {
    // do training
    let isDone = true;
    if(isDone){
        resolve('got Job');
    }
    else{
        reject('NOT got Job');
    }
});

    let output = '';
    doTraining.then((message) => {
        output += message + ' => ' ;
        doProject.then((message) => {
            output += message + ' => ' ;
            getJob.then((message) => {
                output += message + ' => ' ;
                console.log(output);
                console.log('Everything is Done');
            }).catch(() => {});
        }).catch(() => {});
    }).catch(() => {});