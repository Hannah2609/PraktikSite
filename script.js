document.addEventListener("scroll", scrollEffects);

function scrollEffects() {
  const y = 1 + window.scrollY;
  const divs = document.querySelectorAll(".ani");

  if (y < 400) {
    document.body.style.setProperty("--r", 239);
    document.body.style.setProperty("--g", 250);
    document.body.style.setProperty("--b", 255);
  } else if (y > 400 && y < 1000) {
    document.body.style.setProperty("--r", 232);
    document.body.style.setProperty("--g", 237);
    document.body.style.setProperty("--b", 255);
  } else if (y > 1000 && y < 1600) {
    document.body.style.setProperty("--r", 238);
    document.body.style.setProperty("--g", 232);
    document.body.style.setProperty("--b", 255);
  } else if (y > 1600 && y < 2200) {
    document.body.style.setProperty("--r", 255);
    document.body.style.setProperty("--g", 232);
    document.body.style.setProperty("--b", 250);
  } else {
    document.body.style.setProperty("--r", 255);
    document.body.style.setProperty("--g", 232);
    document.body.style.setProperty("--b", 232);
  }

  divs.forEach((div) => {
    let top = window.scrollY;
    let offset = div.offsetTop;
    let height = div.offsetHeight;

    console.log(div.offsetTop);
    console.log(div.offsetHeight);
    console.log(window.scrollY);

    if (top >= offset - window.innerHeight && top < offset + height) {
      div.classList.add("show");
    }
  });
}
