function doSomething() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Did something!");
      resolve("https://example.com/");
    }, 6000);
  });
}

function didSomethingSecond() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Did something second time ");
      resolve(5);
    }, 2000);
  });
}

function doSomethingElse(result) {
  return new Promise((resolve, reject) => {
    //adding 2 after 2 seconds
    setTimeout(() => {
      if (Math.random() > 0.7) {
        //returning reject response
        return reject(new Error("Failed in doSomethingElse method"));
      }
      console.log("adding 2 in ", result);
      resolve(result + 2);
    }, 2000);
  });
}

function doThridThing(newResult) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.7) {
        //returning reject response
        return reject(new Error("Failed in doThirdThing method"));
      }
      console.log("adding 4 in", newResult);
      resolve(newResult + 4);
    }, 4000);
  });
}

function failureCallBack(error) {
  console.log(`error occurred : ${error.message}`);
}

// const result = didSomethingSecond()
//   .then(function (result) {
//     return doSomethingElse(result);
//   })
//   .then(function (newResult) {
//     return doThridThing(newResult);
//   })
//   .then(function (finalResult) {
//     console.log("final result : ", finalResult);
//   })
//   .catch(failureCallBack);

doSomething().then((url) => {
  console.log(`url : ${url}`);
});

//arroe notation example
// const resultArrow = didSomethingSecond()
//   .then((result) => doSomethingElse(result))
//   .then((newResult) => doThridThing(newResult))
//   .then((finalResult) => {
//     console.log("final result : ", finalResult);
//   })
//   .catch(failureCallBack);

// didSomethingSecond(5);

//async await notation
const resultAsyncAwaitImpl = async () => {
  try {
    const result = await didSomethingSecond();
    const newResult = await doSomethingElse(result);
    const finalResult = await doThridThing(newResult);
    console.log("final result : ", finalResult);
  } catch (error) {
    console.log(`error message: ${error}`);
  }
};

resultAsyncAwaitImpl();
