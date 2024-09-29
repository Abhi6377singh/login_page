const enrollLink = document.querySelector(".click-enroll");
const actDiv = document.querySelector(".act");
const button = document.querySelector(".button");
const addClass = document.querySelector(".img-tag-box");

actDiv.style.display = "none";
enrollLink.addEventListener("mouseover", () => {
  actDiv.style.display = "block";
});

enrollLink.addEventListener("mouseout", () => {
  actDiv.style.display = "none";
});

let tl = gsap.timeline();
button.addEventListener("click", () => {
  tl.to(".logo span", {
    x: -50,
    opacity: 0,
  });
  tl.to(".bottom,.login,.enroll", {
    opacity: 0,
    y: 50,
  });
  tl.to(".logo-img", {
    x: 650,
    y: 325,
    opacity: 0,
    duration: 1,
  });
  tl.to(".image", {
    scale: 1.1,
    duration: 0.1,
  });

  tl.to(".image", {
    duration: 1,
    scale: 0,
  });

  tl.to("#bg-img12", {
    x: 0,
    width: "100%",
    margin: 0,
    scale: 1,
    duration: 1,
    autoAlpha: 1,
  });
  tl.to(".image", {
    // duration: 1,
    scale: 1,
  });
  tl.to(".logo-img", {
    // duration: 0.5,
    scale: 1,
    opacity: 1,
  });
  tl.to(".logo-img", {
    // duartion: 1,
    x: 0,
    y: 0,
  });
  tl.to("#bg-img12", {
    autoAlpha: 1,
    x: "49%",
  });
  tl.to("#bg-img12", {
    x: 0,
    margin: 0,
    duration: 0,
    autoAlpha: 0,
  });
  tl.to(".bottom,.login,.enroll", {
    opacity: 1,
    y: -1,
  });
  tl.to(".logo span", {
    x: -50,
    opacity: 1,
  });
});
