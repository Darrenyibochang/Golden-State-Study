let i = 1;
let body = document.getElementById("container");

for (i; i <= 100; i++) {
  let button = document.createElement("button");
  button.innerHTML = 'Button '+i;
  body.appendChild(button);

}