const mountainRange = document.querySelectorAll(".home-about img");
const title = document.querySelector("h1,p");

gsap.to(mountainRange, {
  y: -100,
  x: 100,
  scale: 0.5,
  scrollTrigger: {
    trigger: "home-about",
    scrub: true,
  },
});

gsap.to(title, {
  y: 500,
  scale: 0.5,
  scrollTrigger: {
    trigger: "home-about",
    scrub: true,
  },
});
