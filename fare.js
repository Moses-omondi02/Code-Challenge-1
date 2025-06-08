// Boda Boda Fare Estimator
function calculateBodaFare(distance) {
  const baseFare = 50; // KES
  const ratePerKm = 15; // KES per km
  const distanceFare = distance * ratePerKm;
  const totalFare = baseFare + distanceFare;

  console.log(`Trip Distance: ${distance} km`);
  console.log(`Base Fare: KES ${baseFare}`);
  console.log(`Distance Fare: KES ${distanceFare}`);
  console.log(`Total Estimated Fare: KES ${totalFare}`);
  console.log("Panda Twende!"); // Added Swahili farewell
}

window.onload = function () {
  const input = prompt("Unataka kwenda umbali gani? (Kilometa):"); // Swahili prompt
  const distance = Number(input);

  if (!isNaN(distance) && distance > 0) {
    calculateBodaFare(distance);
  } else {
    console.log("Tafadhali weka umbali sahihi."); // Swahili error message
  }
};