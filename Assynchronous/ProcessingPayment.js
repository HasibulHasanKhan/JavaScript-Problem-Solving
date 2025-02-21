function validateCard(cardNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Card validated:", cardNumber);
      resolve(cardNumber);
    }, 1000);
  });
}

function processPayment(cardNumber) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Payment processed for card:", cardNumber);
      resolve("Payment Successful");
    }, 2000);
  });
}

function sendEmail(receipt) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Email sent with receipt:", receipt);
      resolve("Email Sent");
    }, 1000);
  });
}

// Promise Chaining
validateCard("1234-5678-9876-5432")
  .then(processPayment)
  .then(sendEmail)
  .then((result) => console.log(result))
  .catch((error) => console.error("Error:", error));
