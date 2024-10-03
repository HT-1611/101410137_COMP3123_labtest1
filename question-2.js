
function resolvedPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('message : delayed success!');
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject('error : delayed exceptions!');
        }, 500);
    });
}


resolvedPromise()
    .then(result => console.log(result))  // Output: Resolved after 500ms
    .catch(error => console.log(error));

rejectedPromise()
    .then(result => console.log(result))
    .catch(error => console.log(error));  // Output: Rejected after 500ms