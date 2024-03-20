function task1(callback) {
  setTimeout(() => {
    console.log("Task 1 complete");
    callback();
  }, 2000);
}

function task2(callback) {
  setTimeout(() => {
    console.log("Task 2 complete");
  }, 1000);
  callback();
}

function task3(callback) {
  setTimeout(() => {
    console.log("Task 3 complete");
  }, 3000);
  callback();
}

function task4(callback) {
  setTimeout(() => {
    console.log("Task 4 complete");
  }, 1500);
  callback();
}

function task5(callback) {
  setTimeout(() => {
    console.log("Task 5 complete");
  }, 1500);
  callback();
}

task1(() => {
  task2(() => {
    task3(() => {
      task4(() => console.log("All tasks completed!"));
    });
  });
});
