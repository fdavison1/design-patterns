class Car {
    constructor(doors, engine, color) {
        this.door = doors;
        this.engine = engine;
        this.color = color;
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(4, 'V6', 'grey')
            case 'honda':
                return new Car(2, 'V4', 'red')
        }
    }
}

let carMixin = {
    revEngine(){
        console.log(`The ${this.engine} goes Vroom Vroom.`);
        
    }
}

const carFactory = new CarFactory();

const autoManufacturer = (type, model) => {
    switch (type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createSuv(model);
    }
}

Object.assign(Car.prototype, carMixin);

const honda = autoManufacturer('car', 'honda');

honda.revEngine();