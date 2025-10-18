function doSomething(input) {
  return new Promise((resolve, reject) => {
    try {
      setTimeout((input) => {
        try {
          throw new Error("Some error occurred!");
          console.log(`Doing something with input: ${input}`);
        } catch (error) {
          reject(error);
        }
      }, 2000);
    } catch (error) {
      reject(error);
    }
  });
}

doSomething("Test")
  .then((result) => {
    console.log(`Result : ${result}`);
  })
  .catch((error) => {
    console.log(`error : ${error.message}`);
  })
  .then(() => {
    console.log(`Do something , no matter what happened before!`);
  });
