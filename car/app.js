const button = document.querySelector(".container button");
const pumpsContainer = document.querySelector(".pumps h4");
const outputsContainer = document.querySelector(".outputs p");
const gameStart = document.querySelector(".gameoutputs h3");

// random number generating function
const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max + 1 - min) + min);
};

const startGame = () => {
  gameStart.innerHTML = "Game Started";
  pumpsContainer.innerHTML = "";
  outputsContainer.innerHTML = "";

  let remaingPetrol = 30;
  let travelledDisance = 0;
  let moves;
  let array = new Array();
  let text = "Petrol pumps generated at ";
  let i = 0;

  // push random pumps into an array
  while (true) {
    array[i] = randomNumber(1, 99);
    i++;
    var mySet = new Set(array);
    if (mySet.size > 4) break;
  }
  pumps = [...mySet];
  pumps.sort();

  // print the list of pumps
  pumps.forEach((p) => {
    text += p + " ";
  });
  pumpsContainer.innerHTML = text;

  text = "";
  i = 0;
  while (true) {
    // genearte moves
    moves = randomNumber(1, 6);
    if (moves === 7) console.log(moves);
    travelledDisance += moves;
    remaingPetrol -= moves;

    // checks if car reached the pump
    pumps.forEach((pump) => {
      if (pump === travelledDisance) {
        remaingPetrol += 30;
        if (remaingPetrol > 30) remaingPetrol = 30;
      }
    });

    // print each move
    let op = "";

    // petrol reaches 0
    if (remaingPetrol <= 0) {
      op = `Move ${
        i + 1
      } - car at ${travelledDisance}, petrol remaining 0, game over <br/> `;
      text += op;
      outputsContainer.innerHTML = text;
      break;
    }
    // car reaches 100
    else if (travelledDisance >= 100) {
      op = `Move ${
        i + 1
      } - car at ${travelledDisance}, petrol remaining ${remaingPetrol}, reached <br/> `;
      text += op;
      outputsContainer.innerHTML = text;
      break;
    }
    // petrol reaches 0
    else
      op = `Move ${
        i + 1
      } - car at ${travelledDisance}, petrol remaining ${remaingPetrol} <br/> `;

    text += op;
    outputsContainer.innerHTML = text;
    i++;
  }
  button.innerHTML = "restart";
};

button.addEventListener("click", startGame);
