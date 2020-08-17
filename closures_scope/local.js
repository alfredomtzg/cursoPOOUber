const helloWorld = () => {
    const hello = "Hello World";
    console.log(hello);
};

helloWorld();
console.log(hello); // no se puede acceder a una variable que este en un scope local 

var scope = "I'm global";

const functioScope = () => {
    var scope = "I'm just a local";
    const func = () => {
        return scope
    }
    console.log(func());
};

functioScope();
console.log(scope);

