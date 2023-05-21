const debounce = (func, delay, isImmediate) => {
  let timerout;

  return function () {
    let context = this,
      args = arguments;
    let later = function () {
      timerout = null;
      if (!isImmediate) func.apply(context, args);
    };

    let callNow = isImmediate && !timerout;
    clearTimeout(timerout);
    timerout = setTimeout(later, delay);
    if (callNow) func.apply(context, args);
  };
};
export default debounce;
