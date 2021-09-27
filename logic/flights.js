function Flights() {
    function calculateNumberOfFlights(passengers, capacity) {
        let flights=0;
        if (passengers % capacity == 0) {
            flights = passengers/capacity;
        } else {
            flights = (passengers/capacity) + 1;
        }
        return flights;
    }
