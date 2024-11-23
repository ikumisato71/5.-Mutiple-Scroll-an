// const mountainRange = document.querySelectorAll(".home-about img");
// const title = document.querySelector("h1,p");

// gsap.to(mountainRange, {
//   y: -100,
//   x: 100,
//   scale: 0.5,
//   scrollTrigger: {
//     trigger: "home-about",
//     scrub: true,
//   },
// });

// gsap.to(title, {
//   y: 500,
//   scale: 0.5,
//   scrollTrigger: {
//     trigger: "home-about",
//     scrub: true,
//   },
// });
const mountainRange = document.querySelectorAll(".home-about img");
const title = document.querySelector("h1,p");

// gsap.to(mountainRange, {
// 	y: -100,
// 	x: 100,
// 	scale: 0.5,
// 	scrollTrigger: {
// 		trigger: "home-about",
// 		scrub: true,
// 	},
// });

gsap.to(title, {
  y: 500,
  scale: 0.5,
  scrollTrigger: {
    trigger: "home-about",
    scrub: true,
  },
});

const directions = [
  { x: 100, y: -100 },
  { x: -100, y: 150 },
  { x: 100, y: 150 },
  { x: -150, y: -150 },
  { x: -150, y: -150 },
];

mountainRange.forEach((image, index) => {
  const direction = directions[index % directions.length];

  gsap.to(image, {
    x: direction.x,
    y: direction.y,
    scale: 0.5,
    scrollTrigger: {
      trigger: "home-about",
      scrub: true,
    },
  });
});

// directions = [A, B, C];
// index = 0 → directions[0 % 3] = A;
// index = 1 → directions[1 % 3] = B;
// index = 2 → directions[2 % 3] = C;
// index = 3 → directions[3 % 3] = A;
// index = 4 → directions[4 % 3] = B;
