// Resolve, reject
// Promise has 1 callback function with resolve and reject args

let p = new Promise((resolve, reject) => {
  let a = 1 + 1;
  if (a == 2) {
    resolve("Success");
  } else reject("Failed");
});

p.then((message) => {
  //if resolved
  console.log(message);
}).catch((message) => {
  //if rejected
  console.log(message);
});

let yes = false;
let no = false;

function yesOrnoPromise() {
  return new Promise((resolve, reject) => {
    if (!yes) {
      reject("yes");
    }
    if (no) {
      reject("no");
    } else resolve("else");
  });
}

yesOrnoPromise()
  .then((message) => {
    console.log(message);
  })
  .catch((message) => {
    console.log(message);
  });

// Promise.all([]) for multiple promises to run simultaneously

const red = new Promise((resolve, rejec) => {
  resolve("red");
});
const blue = new Promise((resolve, rejec) => {
  resolve("blue");
});
const green = new Promise((resolve, rejec) => {
  resolve("green");
});

red.then((message) => {
  console.log(message);
});

// will execeute all at the same time. ie, it doesnt wait 1st one to finish the second one
Promise.all([red, blue, green]).then((messagesArray) => {
  console.log(messagesArray);
});

// will return the first promise that has executed
Promise.race([red, blue, green]).then((message) => {
  console.log(message);
});

//closure means inner function's access of outter functions variables
//eg

function init() {
  var name = "blue";
  function displayname() {
    console.log(name); //it executes before promises
  }
  displayname();
}
init();

// async await
