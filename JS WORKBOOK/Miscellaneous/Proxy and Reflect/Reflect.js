let user = {};

Reflect.set(user, 'name', 'John');

console.log(user.name); // John


user = {
    name: "John",
  };
  
  user = new Proxy(user, {
    get(target, prop, receiver) {
      console.log(`GET ${prop}`);
      return Reflect.get(target, prop, receiver); // (1)
    },
    set(target, prop, val, receiver) {
      console.log(`SET ${prop}=${val}`);
      return Reflect.set(target, prop, val, receiver); // (2)
    }
  });
  
  let name = user.name; // shows "GET name"
  user.name = "Pete"; // shows "SET name=Pete"
  


  user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  };
  
  userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop];
    }
  });
  
  console.log(userProxy.name); // Guest



  user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  };
  
  userProxy = new Proxy(user, {
    get(target, prop, receiver) {
      return target[prop]; // (*) target = user
    }
  });
  
  let admin = {
    __proto__: userProxy,
    _name: "Admin"
  };
  
  // Expected: Admin
  console.log(admin.name); // outputs: Guest (?!?)




  user = {
    _name: "Guest",
    get name() {
      return this._name;
    }
  };
  
  userProxy = new Proxy(user, {
    get(target, prop, receiver) { // receiver = admin
      return Reflect.get(target, prop, receiver); // (*)
    //or
    // get(target, prop, receiver) {
    //     return Reflect.get(...arguments);
    //     } 
    }
  });
  
  
  admin = {
    __proto__: userProxy,
    _name: "Admin"
  };
  
  console.log(admin.name); // Admin




  map = new Map();

proxy1 = new Proxy(map, {});

//proxy.set('test', 1); // Error


map = new Map();

proxy1 = new Proxy(map, {
  get(target, prop, receiver) {
    let value = Reflect.get(...arguments);
    return typeof value == 'function' ? value.bind(target) : value;
  }
});

proxy1.set('test', 1);
console.log(proxy1.get('test')); // 1 (works!)



class User {
    #name = "Guest";
  
    getName() {
      return this.#name;
    }
  }
  
  user = new User();
  
  user = new Proxy(user, {});
  
  //console.log(user.getName()); // Error




  user = new User();
  
  user = new Proxy(user, {
    get(target, prop, receiver) {
      let value = Reflect.get(...arguments);
      return typeof value == 'function' ? value.bind(target) : value;
    }
  });
  
  console.log(user.getName()); // Guest




  let allUsers = new Set();

class User1 {
  constructor(name) {
    this.name = name;
    allUsers.add(this);
  }
}

user = new User1("John");

console.log(allUsers.has(user)); // true

user = new Proxy(user, {});

console.log(allUsers.has(user)); // false


let object = {
    data: "Valuable data"
  };
  
  let {proxy, revoke} = Proxy.revocable(object, {});
  
  // pass the proxy somewhere instead of object...
  console.log(proxy.data); // Valuable data
  
  // later in our code
  revoke();
  
  // the proxy isn't working any more (revoked)
  //console.log(proxy.data); // Error




// let revokes = new WeakMap();

// object = {
//   data: "Valuable data"
// };

// {proxy, revoke} = Proxy.revocable(object, {});

// revokes.set(proxy, revoke);

// // ..somewhere else in our code..
// revoke = revokes.get(proxy);
// revoke();

// alert(proxy.data); // Error (revoked)
