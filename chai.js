// Challenge 2: Chai Bora Ingredient Calculator
function calculateChaiIngredients(numberOfCups) {
  const waterPerCup = 200; // ml per cup
  const milkPerCup = 50; // ml per cup
  const teaLeavesPerCup = 1; // tablespoon per cup
  const sugarPerCup = 2; // teaspoons per cup

  const totalWater = numberOfCups * waterPerCup;
  const totalMilk = numberOfCups * milkPerCup;
  const totalTeaLeaves = numberOfCups * teaLeavesPerCup;
  const totalSugar = numberOfCups * sugarPerCup;

  console.log(`To make ${numberOfCups} cups of Kenyan Chai, you will need:`);
  console.log(`Water: ${totalWater} ml`);
  console.log(`Milk: ${totalMilk} ml`);
  console.log(`Tea Leaves (Majani): ${totalTeaLeaves} tablespoons`);
  console.log(`Sugar (Sukari): ${totalSugar} teaspoons`);
  console.log("Enjoy your Chai Bora! ☕");
}

const chaiInput = prompt("Karibu! How many cups of Chai Bora would you like to make?");
const numberOfCups = Number(chaiInput);

if (!isNaN(numberOfCups) && numberOfCups > 0) {
  calculateChaiIngredients(numberOfCups);
} else {
  console.log("Tafadhali andika nambari sahihi ya vikombe.");
}