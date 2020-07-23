const Laptop = require("./laptops");

class LaptopWithMouse extends Laptop {
    
    constructor(battery, ram, hdd, screenSize, color, price) {
        super(battery, ram, hdd, screenSize, color, price);
    }
    getPrice() {
        return this.price + 100;
    }
}

module.exports = LaptopWithMouse;