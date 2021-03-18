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
  console.log(message); // it runs faster than .then.catch
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

function makeRequest(location) {
  return new Promise((resolve, reject) => {
    console.log("making location request..");
    if (location == "google") {
      resolve("Google says hi");
    } else reject("you can only talk to google");
  });
}

function processRequest(response) {
  return new Promise((resolve, reject) => {
    console.log("Processing resposnse..");
    resolve("Processed " + response);
  });
}

// using promises
makeRequest("google")
  .then((response) => {
    console.log(response);
    return processRequest(response); //return it so that it can be chained
  })
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });

//using async await
async function doWork() {
  try {
    const res = await makeRequest("google");
    console.log("from async responded");
    const mess = await processRequest(res);
    console.log("from async" + mess);
  } catch (err) {
    console.log(err);
  }
}
doWork();
