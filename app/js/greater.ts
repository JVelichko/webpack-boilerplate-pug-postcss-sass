/* function greeter(person:string) {
  return "Hello, " + person;
}

let user = "Jane User";
//let user = [0, 1, 2];
console.log(greeter(user));

let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ name }.
 
I'll be ${ age + 1 } years old next month.`
console.log(name);
console.log(age);
console.log(sentence); */
/* 
enum Color{Red = 1,Green = 5,Blue = 8};
let c: Color = Color.Blue;
console.log(c); */
/* 
enum Color {Red = 1, Green, Blue};
let colorName: string = Color[2];
 
//alert(colorName);

let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;

console.log(notSure);


//notSure.ifItExists(); // ifItExists может существовать на этапе исполнения
//notSure.toFixed(); // метод toFixed существует (но компилятор не проверяет это)
 
//let prettySure: Object = 4;
//prettySure.toFixed(); // Ошибка: Свойство 'toFixed' не существует у типа 'Object'.
let list: any[] = [1, true, "free"];
 
list[1] = 100;
console.log(list);

let someValue: any = "this is a string";
 
//let strLength: number = (<string>someValue).length;

let strLength: number = (someValue as string).length;
console.log(strLength);

try {
  throw "oh no!";
}
catch (e) {
  console.log("Oh well.");
}

// Error: 'e' doesn't exist here
//console.log(e);

type C = {a: string, b?: number}
function f({a, b}: C): void {
    // ...
} */
/* 
function printLabel(labelledObj: { label: string }) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj); */
/* 
interface LabelledValue {
  label: string;
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label);
}

let myObj = {size: 10, label: "Size 10 Object"};
printLabel(myObj);


interface SquareConfig {
  color?: string;
  width?: number;
}

function createSquare(config: SquareConfig): {color: string; area: number} {
  let newSquare = {color: "white", area: 100};
  if (config.color) {
      newSquare.color = config.color;
  }
  if (config.width) {
      newSquare.area = config.width * config.width;
  }
  return newSquare;
}

let mySquare = createSquare({color: "black"});
console.log(mySquare);

class Animal {
  name: string;
}
class Dog extends Animal {
  breed: string;
}

// Ошибка: индексация строкой может вернуть объект Dog!
interface NotOkay {
  //[x: number]: Animal;
  [x: string]: Dog;
} */
/* 
interface ClockConstructor {
      new (hour: number, minute: number): ClockInterface;
  }
  interface ClockInterface {
      tick();
  }
   
  function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
      return new ctor(hour, minute);
  }
   
  class DigitalClock implements ClockInterface {
      constructor(h: number, m: number) { }
      tick() {
          console.log("beep beep");
      }
  }
  class AnalogClock implements ClockInterface {
      constructor(h: number, m: number) { }
      tick() {
          console.log("tick tock");
      }
  }
   
  let digital = createClock(DigitalClock, 12, 17);
  let analog = createClock(AnalogClock, 7, 32);
  analog.tick();



  interface Shape {
    color: string;
}
 
interface PenStroke {
    penWidth: number;
}
 
interface Square extends Shape, PenStroke {
    sideLength: number;
}
 
let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;


interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
console.log(c(10));
console.log (c.reset());

c.interval = 5.0; */

/* class Greeter {
  greeting: string;
  constructor(message: string) {
      this.greeting = message;
  }
  greet() {
      return "Hello, " + this.greeting;
  }
}

let greeter = new Greeter("world");
console.log(greeter.greet());

class Animal {
      name: string;
      constructor(theName: string) { this.name = theName; }
      move(distanceInMeters: number = 0) {
          console.log(`${this.name} moved ${distanceInMeters}m.`);
      }
  }
   
  class Snake extends Animal {
      constructor(name: string) { super(name); }
      move(distanceInMeters = 5) {
          console.log("Slithering...");
          super.move(distanceInMeters);
      }
  }
   
  class Horse extends Animal {
      constructor(name: string) { super(name); }
      move(distanceInMeters = 45) {
          console.log("Galloping...");
          super.move(distanceInMeters);
      }
  }
   
  let sam = new Snake("Sammy the Python");
  let tom: Animal = new Horse("Tommy the Palomino");
   
  sam.move();
  tom.move(34);


  let passcode = "secret passcode";
 
class Employee {
    private _fullName: string;
 
    get fullName(): string {
        return this._fullName;
    }
 
    set fullName(newName: string) {
      console.log("set");
        if (passcode && passcode == "secret passcode") {
            this._fullName = newName;
        }
        else {
            console.log("Error: Unauthorized update of employee!");
        }
    }
}
 
let employee = new Employee();
employee.fullName = "Bob Smith";
if (employee.fullName) {
    console.log(employee.fullName);
}



abstract class Department {
 
  constructor(public name: string) {
  }

  printName(): void {
      console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; //  должен быть реализован в производном классе
}

class AccountingDepartment extends Department {

  constructor() {
      super("Accounting and Auditing"); // конструкторы в производных классах должны вызывать super()
  }

  printMeeting(): void {
      console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
      console.log("Generating accounting reports...");
  }
}

let department: Department; // окей, создана ссылка на абстрактный класс
//department = new Department(); // ошибка: cannot create an instance of an abstract class
department = new AccountingDepartment(); // окей, создан и присвоен не абстрактный класс
department.printName();
department.printMeeting();
//department.generateReports(); // ошибка: method doesn't exist on declared abstract type
 */
/* class Greeter {
  static standardGreeting = "Hello, there";
  greeting: string;
  greet() {
      if (this.greeting) {
          return "Hello, " + this.greeting;
      }
      else {
          return Greeter.standardGreeting;
      }
  }
}

let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet());

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "Hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet());

let myAdd: (baseValue:number, increment:number) => number =
    function(x: number, y: number): number { return x + y; };

console.log(myAdd(2,3)); */
/* 
interface Card {
      suit: string;
      card: number;
  }
  interface Deck {
      suits: string[];
      cards: number[];
      createCardPicker(this: Deck): () => Card;
  }
  let deck: Deck = {
      suits: ["hearts", "spades", "clubs", "diamonds"],
      cards: Array(52),
      // ВНИМАНИЕ: Сейчас функция явно указывает на то, что она должна вызываться на объекте типа Deck
      createCardPicker: function(this: Deck) {
          return () => {
              let pickedCard = Math.floor(Math.random() * 52);
              let pickedSuit = Math.floor(pickedCard / 13);
   
              return {suit: this.suits[pickedSuit], card: pickedCard % 13};
          }
      }
  }
   
  let cardPicker = deck.createCardPicker();
  let pickedCard = cardPicker();
   
  alert("card: " + pickedCard.card + " of " + pickedCard.suit); */


  /* let suits = ["hearts", "spades", "clubs", "diamonds"];
 
function pickCard(x): any {
    // Работаем с объектом/массивом?
    // Значит, нам передали колоду и мы выбираем карту
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Иначе даем возможность выбрать карту
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
 
let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
 
let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
 */
/* function identity<t>(arg: T): T {
  return arg;
}
//let output = identity("myString");

let output = identity<string>("myString");  // у output будет тип string
console.log(output); */


/* 
function formatDate(date : any) { 
  if (date.getDate) {
    return date.toLocaleString("ru",{day: '2-digit',year: '2-digit',month: '2-digit'});
  }
  if (Array.isArray(date)) {
    let dateTemp = new Date(date[0],date[1],date[2]);
    return dateTemp.toLocaleString("ru",{day: '2-digit',year: '2-digit',month: '2-digit'});
  }
  if (typeof date === "number") {
    date = date * 1000;
    let dateTemp = new Date(date);
    return dateTemp.toLocaleString("ru",{day: '2-digit',year: '2-digit',month: '2-digit'});
  }
  if (typeof date === "string") {
    date = Date.parse(date);
    let dateTemp = new Date(date);
    return dateTemp.toLocaleString("ru",{day: '2-digit',year: '2-digit',month: '2-digit'});
  }
 }

//console.log( formatDate('2011-10-02') ); // 02.10.11
//console.log( formatDate(1234567890) ); // 14.02.09
//console.log( formatDate([2014, 0, 1]) ); // 01.01.14
//console.log( formatDate(new Date(2014, 0, 1)) ); // 01.01.14 */


/* function formatDate(date: any) {
  if (typeof date == 'number') {
    // перевести секунды в миллисекунды и преобразовать к Date
    date = new Date(date * 1000);
  } else if (typeof date == 'string') {
    // строка в стандартном формате автоматически будет разобрана в дату
    date = new Date(date); 
  } else if (Array.isArray(date)) { 
    date = new Date(date[0], date[1], date[2]);
  }

  return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
} */

/* function formatDate(date: Date):string;
function formatDate(date: number):string;
function formatDate(date: number[]):string;
function formatDate(date: string):string;
function formatDate(date):string {
  if (typeof date == 'number') {
    // перевести секунды в миллисекунды и преобразовать к Date
    date = new Date(date * 1000);
  } else if (typeof date == 'string') {
    // строка в стандартном формате автоматически будет разобрана в дату
    date = new Date(date); 
  } else if (Array.isArray(date)) { 
    date = new Date(date[0], date[1], date[2]);
  }

  return date.toLocaleString("ru", {day: '2-digit', month: '2-digit', year: '2-digit'});
} */


/* let leader = {
  name: "Василий Иванович",
  age: 35
};
let str = JSON.stringify(leader);
console.log(str);
leader = JSON.parse(str);
console.log(leader); */

/* let leader = {
  name: "Василий Иванович"
};

let soldier = {
  name: "Петька"
};

// эти объекты ссылаются друг на друга!
leader.soldier = soldier;
soldier.leader = leader;

let team = [leader, soldier]; */


/* 
var leader = {
  id: 12,
  name: "Василий Иванович"
};

var soldier = {
  id: 51,
  name: "Петька"
};

// поменяли прямую ссылку на ID
leader.soldierId = 51;
soldier.leaderId = 12;

var team = {
  12: leader,
  51: soldier //,
  //team.toJSON = function() {
    // свой код, который может создавать копию объекта 
    //без круговых ссылок и передавать управление JSON.stringify
  //}
};


let str = JSON.stringify(team);
console.log(str); 
*/
/* 
function printNumbersInterval():void {
  let i:number = 0;
  let timer:number = setInterval(function() {
    if (i == 20) {
    clearInterval(timer);
    } 
  console.log(i++);
  }, 100);
}

printNumbersInterval();  */


/* function printNumbersInterval():void {
  let i:number = 0;
  let timer:number = setTimeout(function iter() {
    if (i == 20) {
    clearTimeout(timer);
    } else {
      timer = setTimeout(iter,100);
    }
  console.log(i++);
  }, 100);
}

printNumbersInterval(); */
/* 
function f(x: string):void {
  alert( x );
}
function delay(func: Function,time: number) {
  return function() {
    let tempThis = this;
    let tempArg = arguments;
    setTimeout(function() {
      func.apply(tempThis,tempArg);
    }, time);
  };
}
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд 

 */

/* 
 function f(x: string):void {
  alert( x );
}
function delay(func: Function,time: number) {
  return function(...args: any[]) {
    setTimeout( () => {
      func.apply(this,args);
    }, time);
  };
}
var f1000 = delay(f, 1000);
var f1500 = delay(f, 1500);

f1000("тест"); // выведет "тест" через 1000 миллисекунд
f1500("тест2"); // выведет "тест2" через 1500 миллисекунд 
 */
 

/* 
// Упрощённо можно сказать,
// что debounce возвращает вариант f, срабатывающий не чаще чем раз в ms миллисекунд.

function debounce(f, ms) {

  let timer = null;

  return function (...args) {
    const onComplete = () => {
      f.apply(this, args);
      timer = null;
    }

    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(onComplete, ms);
  };
}

function f(x) { alert(x) }
let f = debounce(f, 1000);

f(1); // вызов отложен на 1000 мс
f(2); // предыдущий отложенный вызов игнорируется, текущий (2) откладывается на 1000 мс

// через 1 секунду появится alert(2)

setTimeout( function() { f(3) }, 1100); // через 1100 мс отложим вызов еще на 1000 мс
setTimeout( function() { f(4) }, 1200); // игнорируем вызов (3)

// через 2200 мс от начала выполнения появится alert(4) */


//неверно
/* var f = function(a) {
  console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

function throttle(f,ms) {
  let timer = null;
  return function(...args) {
    let result;
    if (timer === null) {
      result = f.apply(this,args);
    }
    const go = () => {
      f.apply(this,args);
      timer = null;
    }

    
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(go,ms);
  } 
}
f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(2.1);
f1000(2.2);
f1000(2.1);
f1000(2.2);
f1000(3); // (тормозим, не прошло 1000 мс)
f1000(13);
// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется  */


var f = function(a) {
  console.log(a)
};

// затормозить функцию до одного раза в 1000 мс
var f1000 = throttle(f, 1000);

f1000(1); // выведет 1
f1000(2); // (тормозим, не прошло 1000 мс)
f1000(3);
f1000(5); // (тормозим, не прошло 1000 мс)

// когда пройдёт 1000 мс...
// выведет 3, промежуточное значение 2 игнорируется

function throttle(func, ms) {

  var isThrottled = false,
    savedArgs,
    savedThis;

  function wrapper() {

    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    func.apply(this, arguments); // (1)

    isThrottled = true;

    setTimeout(function() {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        savedArgs = savedThis = null;
      }
    }, ms);
  }

  return wrapper;
}

/* let str = prompt("Введите выражение",'');
alert(eval(str)); */

