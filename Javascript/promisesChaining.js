function doSomething() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log("doing something!");
        resolve("Did something");
      } catch (error) {
        console.log(
          `Error occurred inside doSomething method : ${error.messge}`
        );
        reject(error.message);
      }
    }, 2000);
  });
}

function doSomethingElse(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`doing something else! from result : ${input}`);
        console.log(hello);
        resolve("Did something else");
      } catch (error) {
        console.log(
          `Error occurred inside doSomethingElse method : ${error.message}`
        );
        reject(error);
      }
    }, 3000);
  });
}

function doThirdThing(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`doing third thing ! from result : ${input}`);
        resolve("Did third thing");
      } catch (error) {
        console.log(
          `Error occurred inside doThirdThing method : ${error.messge}`
        );
        reject(error.message);
      }
    }, 4000);
  });
}
//simple notation
// doSomething()
//   .then(function (result) {
//     console.log(`result from doSomething method : ${result}`);
//     return doSomethingElse(result);
//   })
//   .then(function (finalResult) {
//     console.log(`result from doThirdThing method : ${finalResult}`);
//     return doThirdThing(finalResult);
//   })
//   .catch((error) => {
//     console.log(`Error occurred : ${error}`);
//   });

//arrow notation
// doSomething()
//   .then((result) => {
//     console.log(`result from doSomething method : ${result}`);
//     return doSomethingElse(result);
//   })
//   .then((finalResult) => {
//     console.log(`result from doThirdThing method : ${finalResult}`);
//     return doThirdThing(finalResult);
//   })
//   .catch((error) => {
//     console.log(`Error occurred : ${error}`);
//   });

//async/await notation
try {
  const result = await doSomething();
  console.log(`result : ${result}`);
  const newResult = await doSomethingElse(result);
  console.log(`newResult : ${newResult}`);
  const finalResult = await doThirdThing(newResult);
  console.log(`finalResult : ${finalResult}`);
} catch (error) {
  console.log(`Error occurred: ${error}`);
}

//handle the promise rejection in nodejs
//for unhandled promises
process.on("unhandledRejection", (reason, promise) => {
  console.log(
    `reason for promise rejection : ${reason}, rejected promise : ${JSON.stringify(
      promise
    )}`
  );
});
