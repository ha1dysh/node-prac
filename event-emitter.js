class EventEmitter {
  listeners = {};

  addListener(eventName, listenerFn) {
    this.listeners[eventName] = this.listeners[eventName] || [];
    this.listeners[eventName].push(listenerFn);
    return this;
  }

  emit(eventName, ...args) {
    let funcs = this.listeners[eventName];
    if (!funcs) {
      return false;
    }
    funcs.forEach((fn) => fn(...args));
    return true;
  }

  removeListener(eventName, listenerFn) {
    let lis = this.listeners[eventName];
    if (!lis) {
      return this;
    }
    for (let i = lis.length - 1; i >= 0; i--) {
      if (lis[i] === listenerFn) {
        lis.splice(i, 1);
        break;
      }
    }
    return this;
  }
}

const ee = new EventEmitter();
const test = (a, b) => console.log(a, b);

ee.addListener('test', test);
ee.emit('test', 1, 1);
ee.removeListener('test', test);
ee.emit('test', 2, 2);
