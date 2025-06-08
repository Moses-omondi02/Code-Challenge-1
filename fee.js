// Challenge 3: Mobile Money Transaction Fee Estimator
function estimateTransactionFee(amountToSend) {
  const percentageFee = 0.015; // 1.5% fee
  const minFee = 10; // Minimum fee is KES 10
  const maxFee = 70; // Maximum fee is KES 70

  // Calculate fee (1.5% of amount, but clamped between min and max)
  let fee = amountToSend * percentageFee;

  // Apply min and max limits
  if (fee < minFee) {
    fee = minFee;
  } else if (fee > maxFee) {
    fee = maxFee;
  }

  const totalDebited = amountToSend + fee;

  // Display results
  console.log(`Sending KES ${amountToSend}`);
  console.log(`Calculated Transaction Fee: KES ${fee}`);
  console.log(`Total amount to be debited: KES ${totalDebited}`);
  console.log("Send Money Securely!");
}

window.onload = function () {
  const input = prompt("Unatuma Ngapi? (KES):");
  const amountToSend = Number(input);

  // Validate input
  if (!isNaN(amountToSend) && amountToSend > 0) {
    estimateTransactionFee(amountToSend);
  } else {
    console.log("Please enter a valid number.");
  }
};