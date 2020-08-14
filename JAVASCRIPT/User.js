class User extends Account {
    constructor(id, name, document, email, password) {
        super(id, name, document, email, password);
    }

    printDataUser () {
        console.log(this.id);
        console.log(this.document);
        console.log(this.name);
        console.log(this.email);
    }
}