function Flights() {
    function calculateNumberOfFlights(passengers, capacity){
        if(passengers%capacity==0) {
            return passengers/capacity;
        } else {
            return (passengers/capacity)+1;
        }
    }
    return {calculateNumberOfFlights};
}
module.exports = Flights();