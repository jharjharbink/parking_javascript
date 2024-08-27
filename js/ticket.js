import getDuration from "./util.js";

export default class Ticket{

    constructor(immat, parkingBeginTimestamp){
        this.immatriculation = immat;
        this.parkingBeginTimestamp = parkingBeginTimestamp;
    }

    getTarif() {
        const timeDuration = getDuration(this.parkingBeginTimestamp, this.parkingEndTimestamp);

        if (timeDuration <= 15){ 
            return 0.8;
        } else if (timeDuration <= 30){
            return 1.3;
        } else if (timeDuration <= 45){
            return 1.7;
        } else {
            return 6;
        }
    }
}