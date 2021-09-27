function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let flights=0;
        if (passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = Math.floor(passengers/capacity) + 1;
        }
        return {calculateNumberOfFlights};
    }
module.exports = Flights();
