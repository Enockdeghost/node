function fuelCalculator(liters) {
    return liters * 12; // 1 liter = 12 km
}

function carTrip(liters) {
    const distance = fuelCalculator(liters);

    return `The car can travel ${distance} km`;
}

console.log(carTrip(5));