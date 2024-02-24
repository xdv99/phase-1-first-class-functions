function  receivesAFunction (callback) {
    callback();
}

function returnsANamedFunction () {
    return function named () {
        console.log("This is a named function");
    };
}

function returnsAnAnonymousFunction () {
    return () => console.log("Anonymous Function");
}