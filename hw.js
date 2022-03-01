function max(iterable, key) {
    var maximum = key(iterable[0]);
    var maxKey;
    for (var i in iterable) {
      var changed = key(iterable[i]);
      if (changed >= maximum) {
        maximum = changed;
        maxKey = iterable[i]
      }
    }
    return maxKey;
  }

  const reverser = (input) => (-1*input);

  function changer(object, key, value) {
    var prev = object.key;
    if (Array.isArray(prev)) {
      prev.push(value);
    } else if (typeof prev == 'object' && prev != null) {
      prev[key] = value;
    } else {
      object[key] = value;
    }
    return null;
  }

  async function promise_me(truthy) {
    const a = new Promise((resolve, reject) => {
        console.log(1);
        resolve();
    })
    console.log(2);
    console.log(3);
    console.log(4);
    const five = 5;
    console.log(five);
    return five
}

console.log("input of [1,2,3,4,5]");
console.log("calling max with key as identity function");
console.log(max([1,2,3,4,5], (input) => (1*input)));
console.log("calling max with key as reverser function");
console.log(max([1,2,3,4,5], reverser));

console.log("calling promise_me");
promise_me(true);