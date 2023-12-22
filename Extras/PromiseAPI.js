// // Promise.all

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Sucess"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("P2 Sucess"), 1000);
//   setTimeout(() => reject("P2 failure"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Sucess"), 2000);
// });

// Promise.all([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// // Promise.all Settled

// const p1 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P1 Sucess"), 3000);
// });

// const p2 = new Promise((resolve, reject) => {
//   //setTimeout(() => resolve("P2 Sucess"), 1000);
//   setTimeout(() => reject("P2 failure"), 1000);
// });

// const p3 = new Promise((resolve, reject) => {
//   setTimeout(() => resolve("P3 Sucess"), 2000);
// });

// Promise.allSettled([p1, p2, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// Promise.any

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P1 failure"), 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("P2 Sucess"), 5000);
});

const p3 = new Promise((resolve, reject) => {
  setTimeout(() => reject("P3 failure"), 2000);
});

Promise.any([p1, p2, p3]) //P2 sucess will be returned after 5 seconds
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });