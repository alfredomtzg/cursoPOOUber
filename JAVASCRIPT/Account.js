// function Account (name, document) {
//     this.id;
//     this.name = name;
//     this.document = document;
//     this.email;
//     this.password;
// }

// EcmaScript6 

class Account {
    constructor(id, name, document, email, password) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.email = email;
        this.password = password;
    }

    printDataAccount () {
        console.log(this.id);
        console.log(this.email);
    }
}