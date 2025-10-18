function doSomethingCritical(input) {
  return new Promise((resolve, rejecct) => {
    setTimeout(() => {
      console.log(`Do something critical : ${input}`);
      resolve(`Did something optional after : ${input}`);
    }, 2000);
  });
}

function doSomethingOptional(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`Do something optional : ${input}`);
        // console.log(hello);
        resolve(`Did something extra nice  after : ${input}`);
      } catch (error) {
        reject(error.message);
      }
    }, 3000);
  });
}

function doSomethingExtraNice(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        console.log(`Do something extra nice : ${input}`);
        console.log(Hello);
        resolve(`Did something critical Stuff : ${input}`);
      } catch (error) {
        reject(error);
      }
    }, 4000);
  });
}

function doMoreCriticalStuff(input) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(`Do more critical stuff : ${input}`);
      resolve(`Completed critical stuff !`);
    }, 5000);
  });
}

try {
  let result, optionalResult, extraNiceResult, finalResult;
  result = await doSomethingCritical("Study");
  try {
    optionalResult = await doSomethingOptional(result);
    extraNiceResult = await doSomethingExtraNice(optionalResult);
    console.log("did something extra nice easily!");
  } catch (error) {
    console.log(`Problem in doing extra nice : ${error.message}`);
  }
  finalResult = await doMoreCriticalStuff(extraNiceResult);
  console.log(`final result after all operations : ${finalResult}`);
} catch (error) {
  console.log(
    `Error occurred while trying something extra nice : ${error.message}`
  );
  // This catch will handle errors
}

process.on("unhandledRejection", (reason, promise) => {
  console.log(`reason: ${reason}, promise: ${JSON.stringify(promise)}}`);
});
