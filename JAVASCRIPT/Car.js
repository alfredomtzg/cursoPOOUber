// function Car(license, driver) {
//     this.id;
//     this.license = license;
//     this.driver = driver;
//     this.passenger;
// }

// Car.prototype.printDataCar = function () {
//     console.log(this.driver);
//     console.log(this.driver.name);
//     console.log(this.driver.document);
// }

// EcmaScript6

class Car {
    constructor(license, driver) {
        this.id;
        this.license = license;
        this.driver = driver;
        this.passenger;
    }

    printDataCar() {
        console.log(this.driver);
        console.log(this.driver.name);
        console.log(this.driver.document);
        console.log(this.passenger);
        
    }
    // printPassenger(){
    //     const passenger = 4;
    //     return {
    //         showPassenger: () => {
    //             console.log(`Este es el numero de pasajeros: ${passenger}`)
    //         },

    //         getPassenger: () => {
    //             if (passenger == 4) {
    //                 console.log("Todo bien");
    //                 return passenger;
    //             }
    //             else {
    //                 console.log("Ingresa un número que sea igual a 4");
    //             }
    //         }
    //     }
    // }

}