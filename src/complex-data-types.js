'use strict';

// IIFE - Immediately Invoked Function Expression
(function () {
  console.clear();

  const user = {
    email: 'a@a.com',
    password: 'parola',
    weight: 100,
    height: 1.85,
    isAdmin: false,
    0: 'ceva valoare',
    1: 'still ok',
    2: 'kind of the same',
    'nume complex': 'this is also ok',
    telephoneNumbers: {
      mobile: '1234567',
      work: '1234567',
    },

    // calculateBmi: function() {
    calculateBmi() {
      return (this.weight / this.height ** 2).toFixed(1);
    },

    calculateBmi2: () => this,
  };

  // console.log(user['telephoneNumbers']['mobile']);

  const altObj = {
    weight: 80,
    height: 1.75,
    otherBmi: user.calculateBmi,
  };

  const myExternalFunction = user.calculateBmi.bind(altObj);

  console.log(
    user['calculateBmi'](),
    altObj.otherBmi.apply(user),
    myExternalFunction(),
  );

  console.log(user.calculateBmi2(), this);

  // Ground rules for "this"
  /**
   * What is "this"?
   * 1. "this" is dynamically determined at the moment of function invocation
   *    - "this" is whatever is to the left of the "." (period)
   *    - if there is no period (nothing to the left of the period), "this" is undefined if we 'use strict', otherwise it's 'window'
   * 2. "this" is determined at the moment of function creation
   *    - arrow function use the value of "this" from the lexical scope they are created in
   *    - "this" can be programmatically set by the developer using "call", "apply", or "bind"
   * 3. "this" is set to whatever the programmer wants inside a constructor function
   */

  const obj = {
    email: 'a@a.com',
  };

  const prop = 'em';

  console.log(obj[prop + 'ail']);

  if (user['nume complex'] === 'wrong') {
    console.log('Yeeees');
  }

  console.log(JSON.stringify(user));
  user['nume complex'] = 'wrong';
  obj.email = 'b@b.com';
  obj.firstName = 'Paul';
  delete obj.email;

  console.log(obj);

  const whatever = user;

  whatever.newProp = 'something new';

  function test(anObj) {
    // shallow cloning/spread operator
    const clone = { ...anObj };

    // recursive/deep cloning
    // const clone2 = structuredClone(anObj);
    clone.telephoneNumbers.something = 'else0';
  }

  test(user);
  console.log(user.telephoneNumbers.something);

  // let thisIsAPrimitive = 'Paul';
  // thisIsAPrimitive[0] = 'R';
  // console.log(thisIsAPrimitive);

  console.dir(document.body);

  console.table(user.telephoneNumbers);

  console.clear();

  const arr = [1, 'Paul', user];

  arr.push('something');

  console.log(arr.keys().forEach((key) => console.log(typeof key)));

  {
    let i = 0;
    while(i < arr.length) {
      const item = arr[i];
      console.log(item);
      i++;
    }
  }

  for(let i = 0; i < arr.length; i++) {
    const item = arr[i];
    console.log(item);
  }

  console.clear();

  for(const item of arr) {
    console.log(item);
  }
})();
