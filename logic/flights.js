function Flights() {
    function calculateNumberOfFlights(passengers, capacity){
        if (passengers<0){
            throw new Error("The number of passengers must be a positive integer value");
        }
        if (capacity<0){
            throw new Error("The capacity of the flight must be a positive integer value");
        }
        
        if(passengers%capacity==0) {
            return passengers/capacity;
        } else {
            return Math.floor(passengers/capacity)+1;
        }
    }
    return {calculateNumberOfFlights};
}
module.exports = Flights();