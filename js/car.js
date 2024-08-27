export default class Car{

    constructor(immatriculation, brand, model, mileage, year){
        this.immatriculation = immatriculation;
        this.tickets = [];
    }

    display(){
        let displayedString = ``;
        Object.getOwnPropertyNames(this).forEach((property) => {
            displayedString += `${property}: ${this[property]}\n`;
        })
        return displayedString;
    }

}