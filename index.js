const btnel = document.querySelector(".btn");
btnel.addEventListener("mouseover", (event) => {
  const x = event.pageX - btnel.offsetLeft;
  const y = event.pageY - btnel.offsetTop;

  btnel.style.setProperty("--xpos", x + "px");
  btnel.style.setProperty("--ypos" + y + "px");
});
