"use strict";

//Task 1. Вычислить сумму первых N элементов последовательности . параметр N задает пользователь (например n=4 , 1+2+3+4)

function beforeSum(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

//Task 2.
// 2.1 Создать объект Student который содержит следующие свойства: имя, фамилию, пол, контактные данные.

class Student {
  constructor(name, surname, isMale, contacts, department) {
    this.name = name;
    this.surname = surname;
    this.isMale = isMale;
    this.contacts = contacts;
    this.department = department;
  }
  set name(newValue) {
    if (typeof newValue !== "string") throw new TypeError();
    this._name = newValue;
  }
  get name() {
    return this._name;
  }
  set surname(newValue) {
    if (typeof newValue !== "string") throw new TypeError();
    this._surname = newValue;
  }
  get surname() {
    return this._surname;
  }
  set isMale(newValue) {
    if (typeof newValue !== "boolean") throw new TypeError();
    this._isMale = newValue;
  }
  get isMale() {
    return this._isMale;
  }
  set contacts(newValue) {
    if (typeof newValue !== "string") throw new TypeError();
    this._contacts = newValue;
  }
  get contacts() {
    return this._contacts;
  }
  set department(newValue) {
    if (typeof newValue !== "object") throw new TypeError();
    this._department = newValue;
  }
  get department() {
    return this._department;
  }
  //Реализовать функцию выводит на экран всю информацию о студенте
  showInfo = function () {
    return [
      this.name,
      this.surname,
      this.surname,
      this.contacts,
      this.department,
    ];
  };
}

//2.2 Создать объект, который содержит свойства, о факультете и кафедре.
class Department {
  constructor(faculty, cathedra) {
    this.faculty = faculty;
    this.cathedra = cathedra;
  }
  set faculty(newValue) {
    if (typeof newValue !== "string") throw new TypeError();
    this._faculty = newValue;
  }
  get faculty() {
    return this._faculty;
  }
  set cathedra(newValue) {
    if (typeof newValue !== "string") throw new TypeError();
    this._cathedra = newValue;
  }
  get cathedra() {
    return this._cathedra;
  }
}

//Связать объекты между собой. т.е. прописать данные об факультете и кафедре для студента

const IT = new Department("Development", "IT");
const test1 = new Student("Test", "Testovich", true, "0558554761", IT);

//Task 3
// Создать числовой массив и проинициализировать его из 25 элементов.
const testArray = [];
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}
function randomFill(array, length, min, max) {
  for (let i = 0; i < length; i++) {
    array[i] = getRandomNumber(min, max);
  }
}
function getEvenIndexElems(array) {
  const res = [];
  for (let i = 0; i < array.length; i++) {
    if (i % 2 === 0) res.push(array[i]);
  }
  return res;
}
function getEvenElems(array) {
  return array.filter((elem) => elem % 2 === 0);
}
function getZeroElems(array) {
  const res = [];
  array.forEach((element, index) => {
    if (element === 0) res.push(index);
  });
  return res;
}

randomFill(testArray, 25, -10, 10);

//Task 4.
/* Создать классы:
- Книга (автор, название, год издания, издательство) 
- Электронная версия книги (автор, название, год издания, издательство, формат, электронный номер) */

class Book {
  constructor(author, name, productionYear, publisher) {
    this.author = author;
    this.name = name;
    this.productionYear = productionYear;
    this.publisher = publisher;
  }
  set author(newValue) {
    if (typeof newValue !== "string")
      throw new TypeError("Incorrect new value type!");
    this._author = newValue;
  }
  get author() {
    return this._author;
  }
  set name(newValue) {
    if (typeof newValue !== "string")
      throw new TypeError("Incorrect new value type!");
    this._name = newValue;
  }
  get name() {
    return this._name;
  }
  set productionYear(newValue) {
    if (typeof newValue !== "number")
      throw new TypeError("Incorrect new value type!");
    this._productionYear = newValue;
  }
  get productionYear() {
    return this._productionYear;
  }
  set publisher(newValue) {
    if (typeof newValue !== "string")
      throw new TypeError("Incorrect new value type!");
    this._publisher = newValue;
  }
  get publisher() {
    return this._publisher;
  }
}

class EBook extends Book {
  constructor (author, name, productionYear, publisher, format, eNumber) {
    super(author, name, productionYear, publisher);
    this.format = format;
    this.eNumber = eNumber;
  }
  set format(newValue) {
    if (typeof newValue !== "string")
      throw new TypeError("Incorrect new value type!");
    this._format = newValue;
  }
  get format() {
    return this._format;
  }
  set eNumber(newValue) {
    if (typeof newValue !== "number")
      throw new TypeError("Incorrect new value type!");
    this._eNumber = newValue;
  }
  get eNumber() {
    return this._eNumber;
  }
}

//Task 5.
/* Требуется написать функцию, выводящую в консоль числа от 1 до n, где n —
это целое число, которая функция принимает в качестве параметра, с такими условиями:
вывод fizzbuzz вместо чисел, кратных как 3, так и 5.
вывод fizz вместо чисел, кратных 3;
вывод buzz вместо чисел, кратных 5; */

function customOutput(n) {
  for (let i = 1; i < n; i++){
    if (i % 3 === 0 && i % 5 === 0) {
      console.log('fizzbuzz');
      continue;
    };
    if (i % 3 === 0) {
      console.log('fizz');
      continue;
    };
    if (i % 5 === 0) {
      console.log('buzz');
      continue;
    }
    console.log(i);
  }
}