function Passengers() {
    function checkFlightCapacity(flightCapacity, passengerArray){
        let passengerNumber = 0;
        let passengers;
        for (passengers of passengerArray){
            passengerNumber += passengers;
        }
        if (passengerNumber>flightCapacity){
            throw new Error("Flight capacity (" + flightCapacity + ") exceeded. You have " + passengersNumber + " passengers.");
        }else{
            return passengerNumber;
        }
    }
    return {checkFlightCapacity};
}
module.exports = Passengers();
