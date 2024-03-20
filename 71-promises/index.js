// Promise = An Object that manages asynchronous operations.
//           Wrap a Promise Object around {asynchronous code}
//           "I promise tro return a value"
//           PENDING => RESOVLED or REJECTED
//           new Promise((resolve, reject) => {aynchronous code})

// 1. WALK THE DOG
// 2. CLEAN THE KITCHEN
// 3. TAKE OUT THE TRASH

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const walkDog = true;
      if (walkDog) {
        resolve("You walk the dog 🐕");
      } else {
        reject("You didn't walk the dog");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cleanKitchen = true;
      if (cleanKitchen) {
        resolve("You clean the kitchen 🧹");
      } else {
        reject("You didn't clean the kitchen");
      }
    }, 2500);
  });
}

function takeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const takeOutTrash = true;
      if (takeOutTrash) {
        resolve("You take out the trash 🗑️");
      } else {
        reject("You didn't take out the trash");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return takeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores!");
  });
