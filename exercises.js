function flattening(list) {
    // Use reduce and concat to flatten the array
    return list.reduce((acc, item) => acc.concat(item), []);
  }
  
  function loop(value, test, update, body) {
    while (test(value)) {
      body(value);
      value = update(value);
    }
  }
  
  function everyLoop(array, test) {
    for (let i = 0; i < array.length; i++) {
      if (!test(array[i])) {
        return false;
      }
    }
    return true;
  }
  
  function everySome(array, test) {
    return !array.some(item => !test(item));
  }
  