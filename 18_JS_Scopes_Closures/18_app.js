// Scopes Concept

let a = 10; // global
let outerFn = () => {
    let b = 20; // outerFn Scope
    let innerFn = () => {
        let c = 30; // Innerfn Scope
        console.log(a);
        console.log(b);
        console.log(c);
    };
    innerFn();
};
outerFn();

let x = 10; // global
let parentFn = () => {
    let y = 20; // outerFn Scope
    let childFn = () => {
        let z = 30; // Innerfn Scope
        console.log(x);
        console.log(y);
        console.log(z);
    };
    return childFn;
};
let greet = (x) => {
    x();
};
let cFn = parentFn();
greet(cFn);






