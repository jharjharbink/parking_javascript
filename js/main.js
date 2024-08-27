import Car from "./car.js";
import Ticket from "./ticket.js";

let tickets = []; 
let cars = [];

let successBox = document.querySelector("#successBox");
let alertBox = document.querySelector("#alertBox");
let messageBox = document.querySelector("#messageBox");


// the car ask for a ticket
document.querySelector("#enterBtn").addEventListener("click", () => {
    let licencePlate = document.querySelector("#licencePlate");

    if(licencePlate.value) {
        tickets.push(new Ticket(licencePlate.value, Date.now()));
    }
    console.log(tickets);
    console.log(cars);
});


// the car exit the parking
document.querySelector("#paymentBtn").addEventListener("click", () => {
    
    const parkingEndTimestamp = Date.now();

    if(licencePlate.value) {

        const ticket = tickets.findLast((ticket) => ticket.immatriculation === licencePlate.value)

        if (ticket) {
            // set ticket property
            ticket["parkingEndTimestamp"] = parkingEndTimestamp;
            ticket["cost"] = ticket.getTarif();

            // add ticket to registered car or register new car with ticket
            const registeredCar = cars.find((car) => car.immatriculation === licencePlate.value);

            if (registeredCar){
                registeredCar.tickets.push(ticket);
            } else {
                const newCar = new Car(licencePlate.value)
                newCar.tickets.push(ticket);
                cars.push(newCar);
            }

            // display informations
            successBox.innerHTML = ticket["cost"];
        } else {
            alertBox.innerHTML = "Immatriculation inconnue.";
        }
    } else {
        messageBox.innerHTML = "Veuillez saisir une immatriculation.";
    }

    // remove information
    setTimeout(() => {
        successBox.innerHTML = "";
        alertBox.innerHTML = "";
        messageBox.innerHTML = "";
    } , 2000);

    console.log(tickets);
    console.log(cars);
});

