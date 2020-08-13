class UberX extends Car {
    constructor(license, driver, brand, model) {
        super(license, driver)
        this.brand = brand;
        this.model = model;
    }

    printDataUberX () {
        console.log(this.driver);
        console.log(this.driver.name);
        console.log(this.driver.document);
        console.log(this.brand);
        console.log(this.model);
    }
}