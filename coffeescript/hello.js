// Generated by CoffeeScript 1.12.7
var Account, Animal, Horse, Person, Snake, age, ages, awardMedals, child, city, close, contenders, contents, cube, eldest, end, error, food, forecast, futurists, gold, grade, html, i, isOn, j, len, middle, mobyDick, name, numbers, obj, open, ref, ref1, ref2, ref3, ref4, ref5, rest, sam, score, silver, spped, square, start, street, tag, temp, theBait, theSwitch, tim, tom, weatherReport, yearsOld,
  slice = [].slice,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

obj = {
  name: "lirawx",
  add: function(x, y) {
    return x + y;
  }
};

console.log(obj.name);

console.log(obj.add(1, 2));

square = function(x) {
  return x * x;
};

cube = function(x) {
  return square(x) * x;
};

isOn = true;

if (isOn) {
  console.log("hello");
} else {
  console.log("world");
}

gold = silver = rest = "unknown";

awardMedals = function() {
  var first, others, second;
  first = arguments[0], second = arguments[1], others = 3 <= arguments.length ? slice.call(arguments, 2) : [];
  gold = first;
  silver = second;
  return rest = others;
};

contenders = ["Michael Phelps", "Liu Xiang", "Yao Ming", "Allyson Yesl"];

awardMedals.apply(null, contenders);

console.log("Gold: " + gold);

console.log("Silver :" + silver);

console.log("Ther Feild :" + rest);

ref = ['toats', 'cheese', 'wine'];
for (i = 0, len = ref.length; i < len; i++) {
  food = ref[i];
  eat(food);
}

yearsOld = {
  max: 10,
  ida: 9,
  tim: 11
};

ages = (function() {
  var results;
  results = [];
  for (child in yearsOld) {
    age = yearsOld[child];
    results.push(child + " is " + age);
  }
  return results;
})();

numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

start = numbers.slice(0, 3);

middle = numbers.slice(3, -2);

end = numbers.slice(-2);

eldest = 24 > 21 ? "liz" : "lik";

spped = 0;

if (spped == null) {
  spped = 15;
}

Animal = (function() {
  function Animal(name1) {
    this.name = name1;
  }

  Animal.prototype.move = function(meters) {
    return alert(this.name + (" moved " + meters + "m."));
  };

  return Animal;

})();

Snake = (function(superClass) {
  extend(Snake, superClass);

  function Snake() {
    return Snake.__super__.constructor.apply(this, arguments);
  }

  Snake.prototype.move = function() {
    alert("Slithering...");
    return Snake.__super__.move.call(this, 5);
  };

  return Snake;

})(Animal);

Horse = (function(superClass) {
  extend(Horse, superClass);

  function Horse() {
    return Horse.__super__.constructor.apply(this, arguments);
  }

  Horse.prototype.move = function() {
    alert("Galloping...");
    return Horse.__super__.move.call(this, 45);
  };

  return Horse;

})(Animal);

sam = new Snake("Sammy the Python");

tom = new Horse("Tommy the Palomino");

sam.move();

tom.move();

theBait = 1000;

theSwitch = 0;

ref1 = [theSwitch, theBait], theBait = ref1[0], theSwitch = ref1[1];

weatherReport = function(location) {
  return [location, 72, "Mostly Sunny"];
};

ref2 = weatherReport("Bering, CA"), city = ref2[0], temp = ref2[1], forecast = ref2[2];

futurists = {
  sculptor: "Umberto Boccioni",
  painter: "Vladimir Burliuk",
  poet: {
    name: "F.T. Marinetti",
    address: ["Via Roma 42R", "Bellagio, Italy 22021"]
  }
};

ref3 = futurists.poet, name = ref3.name, (ref4 = ref3.address, street = ref4[0], city = ref4[1]);

tag = "<impossible>";

ref5 = tag.split(""), open = ref5[0], contents = 3 <= ref5.length ? slice.call(ref5, 1, j = ref5.length - 1) : (j = 1, []), close = ref5[j++];

Person = (function() {
  function Person(options) {
    this.name = options.name, this.age = options.age, this.height = options.height;
  }

  return Person;

})();

tim = new Person({
  age: 4
});

Account = function(customer, cart) {
  this.customer = customer;
  this.cart = cart;
  return $('shopping_cart').bind('click', (function(_this) {
    return function(event) {
      return _this.customer.purchase(_this.cart);
    };
  })(this));
};

score = 76;

grade = (function() {
  switch (false) {
    case !(score < 60):
      return 'F';
    case !(score < 70):
      return 'D';
    case !(score < 80):
      return 'C';
    case !(score < 90):
      return 'B';
    default:
      return 'A';
  }
})();

switch (day) {
  case "Mon":
    go(work);
    break;
  case "Tue":
    go(relax);
    break;
  case "Thu":
    go(iceFishing);
    break;
  case "Fri":
  case "Sat":
    if (day === bingoDay) {
      go(bingo);
      go(dancing);
    }
    break;
  case "Sun":
    go(church);
    break;
  default:
    go(work);
}

try {
  allHellBreaksLoose();
  catsAndDogsLivingTogether();
} catch (error1) {
  error = error1;
  print(error);
} finally {
  cleanUp();
}

mobyDick = "Call me Ishmael. Some years ago -- never mind how long precisely -- having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world...";

mobyDick = "Call me Ishmael. Some years ago --never mind how long precisely -- having littleor no money in my purse, and nothing particularto interest me on shore, I thought I would sailabout a little and see the watery part of theworld...";

html = "<strong>\n  cup of coffeescript\n</strong>";


/*
lirawx coffee script
 */
