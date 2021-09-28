function Util() {
function calculateTotalDistributedPassengers(distributedPassengers){
    let totalDistributedPassengers = 0;
    let value;

    for (value in distributedPassengers){
        totalDistributedPassengers += distributedPassengers[value];
    }

    return totalDistributedPassengers;
}

function calculateTotalNumberOfPassengers(passengerArray){
    let calculateTotalNumberOfPassengers = 0;
    let passengers;

    for (passengers of passengerArray){
        totalNumberOfPassengers += passengers;
    }
    return totalNumberOfPassengers;
}
return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers};
}
module.exports = Util();
