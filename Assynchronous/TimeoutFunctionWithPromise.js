function dalay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

// dalay(2000).then(() => console.log("Resolved after 2 second."));

async function demoDelay() {
  await dalay(2000);
}

demoDelay();
