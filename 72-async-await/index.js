// Asunc/Await = Async = makes a function return a promise
//               Await = makes an async function wait for a promis
//
//               Allows you write asynchronous code in a synchronous manner
//               Async doesn't have resolve or reject parameters
//               Everything after await is placed in an event queue

function walkDog() {
  setTimeout(() => {
    console.log("You walk the dog 🐕");
  }, 1500);
}

function cleanKitchen() {
  setTimeout(() => {
    console.log("You clean the kitchen 🧹");
  }, 1500);
}

function takeOutTrash() {
  setTimeout(() => {
    console.log("You take out the trash 🗑️");
  }, 1500);
}

async function doChores() {
  try {
    const walkDogresult = await walkDog();
    console.log(walkDogresult);

    const cleanKitchenresult = await cleanKitchen();
    console.log(cleanKitchenresult);

    const takeOutTrashresult = await takeOutTrash();
    console.log(takeOutTrashresult);
  } catch (error) {
    console.error("error");
  }
}

doChores();
