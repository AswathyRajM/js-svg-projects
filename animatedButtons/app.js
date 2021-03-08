const buttons = document.querySelectorAll("button");
const turbulence = document.querySelector("feTurbulence");
let xFrequency = 0.00001;
turbulence.setAttribute("baseFrequency", xFrequency + " 0.00001");
const steps = 30;
const interval = 10;

buttons.forEach((button) => {
  button.addEventListener("mouseover", () => {
    xFrequency = 0.00001;
    for (let i = 0; i < steps; i++) {
      setTimeout(() => {
        xFrequency += 0.009;
        turbulence.setAttribute("baseFrequency", xFrequency + " 0.00001");
      }, i * interval);

      //to set the button state to inital after animation
      setTimeout(() => {
        xFrequency = 0.00001;
        turbulence.setAttribute("baseFrequency", xFrequency + " 0.00001");
      }, steps * interval);
    }
  });
});

