const person = () => {
    let saveName = "Name";
    return {
        get saveName () {
            return saveName;
        },
        set saveName (name) {
            saveName = name;
        }
    };
};

const newPerson = person();
console.log(newPerson.name);
newPerson.name = 'Oscar';
console.log(newPerson.name);