const buttons = document.querySelectorAll("button");
const turbulence = document.querySelector("feTurbulence");
let xFrequency = 0.00001;
turbulence.setAttribute("baseFrequency", xFrequency + " 0.00001");
const steps = 30;
const interval = 10;
