process.nextTick(() => console.log("this is process.nextTick 1"));

process.nextTick(() => {
  console.log("this is process.nextTick 2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside next tick")
  );
});

process.nextTick(() => console.log("this is process.nextTick 3"));

Promise.resolve().then(() => console.log("This is promise.resolve1"));

Promise.resolve().then(() => {
  console.log("this ir promise.resolve2");
  process.nextTick(() =>
    console.log("this is the inner next tick inside Promise then block")
  );
});

Promise.resolve().then(() => console.log("this is promise.resolve 3"));
