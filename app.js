var container = document.querySelector(".container");
var code = "";
for (let i = projects.length - 1; i >= 0; i--) {
  code += `
  <a class="item" href="${projects[i].page}">
      <h2>${projects[i].heading}</h2>
      <h3>${projects[i].subHeading}</h3>
      <p class="paragraph">${projects[i].description}</p>
    </a> `;
}
container.innerHTML = code;
