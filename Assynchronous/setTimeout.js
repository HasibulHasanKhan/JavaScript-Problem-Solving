function executeAfterDelay(callback, delay) {
  setTimeout(callback, delay);
}

executeAfterDelay(() => {
  console.log("Executed after 2 seconds!");
}, 2000);

// Example with Parameters :

function executeAfterDelay(message, delay) {
  setTimeout(() => {
    console.log(message);
  }, delay);
}

executeAfterDelay("Hello after 3 seconds!", 2000);

// Using a Named Function :
function showMessage() {
  console.log("Hello ! This ran after a delay");
}

setTimeout(showMessage, 1500);
