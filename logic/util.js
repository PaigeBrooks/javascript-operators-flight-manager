function Util() {

    function calculateTotalDistributedPassengers(distributedPassengers) {
        let totalDistributedPassengers = 0;
        let value;
        for (value in distributedPassengers) {
           totalDistributedPassengers += distributedPassengers[value];
        }
        return totalDistributedPassengers;
     }

     function calculateTotalNumberOfPassengers(passengersArray) {
        let totalNumberOfPassengers = 0;
        let passengers;
        for (passengers of passengersArray) {
           totalNumberOfPassengers += passengers;
        }
        return totalNumberOfPassengers;
     }
     function checkInput(input){
         if (input = NaN || input=false){
             throw new Error("input a number")
         }
         
     }

     return {calculateTotalDistributedPassengers, calculateTotalNumberOfPassengers, checkInput};

}

module.exports = Util(); 
