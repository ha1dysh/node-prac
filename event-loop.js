console.log('1-start');

setTimeout(() => {
  console.log('5-timeout, interval & immediate');
}, 0);

Promise.resolve().then(() => {
  console.log('4-promise & queueMicrotask');
});

process.nextTick(() => {
  console.log('3-nextTick');
});

console.log('2-end');
