// const userLeft = false;
// const userWatchingCatMeme = false;

// function WatchTutorialCallback(callback, errorCallback) {
//   if (userLeft) {
//     errorCallback({
//       name: "User Left",
//       message: "😢",
//     });
//   } else if (userWatchingCatMeme) {
//     errorCallback({
//       name: "User watching cat meme\n",
//       message: "WebDevSimplified < Cat",
//     });
//   } else {
//     callback("Thumbs Up and subscribe✌");
//   }
// }

// WatchTutorialCallback(
//   (message) => {
//     console.log(`Success: ${message}`);
//   },
//   (error) => {
//     console.log(error.name + error.message);
//   }
// );

const count = true;
let countValue = new Promise((resolve, reject) => {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no count values");
  }
});
console.log(countValue);
// countValue
//   .then((message) => {
//     console.log(message);
//   })
//   .catch((message) => {
//     console.log(message);
//   });

