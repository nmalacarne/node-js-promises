function doStuff(cb) {
  console.log('doStuff');
  process.nextTick(function () {
    cb();
  });
}

function doSomethingElse(cb) {
  console.log('doSomethingElse');
  process.nextTick(function () {
    cb();
  });
}

function doOneLastThing(cb) {
  console.log('doOneLastThing');
}

doStuff(function callbackA() {
  doSomethingElse(function callbackB() {
    doOneLastThing();
  });
});
