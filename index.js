// ==============================================================================================
// const greet = (name) => {
//   return `Сайн уу, ${name}!`;
// };

// const result = greet ("Бат");
// console.log(result);
// ==============================================================================================
// const getLength = (word) => {
//   return word.length;
// };

// const result = getLength("apple");
// console.log(result);
// ==============================================================================================
// const toUpper = (text) => {
//   return text.toUpperCase();
// };

// const result = toUpper("apple");
// console.log(result);
// ==============================================================================================
// const toLower = (text) => {
//   return text.toLowerCase();
// };

// const result = toLower("APPLE");
// console.log(result);
// ==============================================================================================
// const getFirstLetter = (word) => {
//   return word.charAt(0);
// };

// const result = getFirstLetter("apple");
// console.log(result);
// ==============================================================================================
// const getLastLetter = (word) => {
//   if (word.length > 0) {
//     return word.charAt(word.length - 1);
//   }
// };

// const result = getLastLetter("apple");
// console.log(result);
// ==============================================================================================
// const joinWords = (first, second) => {
//   return first.concat(" ", second);
// };

// const result = joinWords("apple", "ringo");
// console.log(result);
// ==============================================================================================
// const cleanText = (text) => {
//   return text.trim()
// };

// const result = cleanText("   apple    ");
// console.log(result);
// ==============================================================================================
// const repeatWord = (word, count) => {
//   if (count >=0 && Number.isInteger(count)) {
//     return word.repeat(count);
//   }
// };

// const result = repeatWord("bye", 2);
// console.log(result);
// ==============================================================================================
// const reverseWord = (word) => {
//   return word.split("").reverse().join("");
// };

// const result = reverseWord("alucard");
// console.log(result);
// ==============================================================================================
// const getPrefix = (word) => {
//   if (word.length >= 3) {
//     return word.slice(0, 3);
//   }
// };

// const result = getPrefix("javascript");
// console.log(result);
// ==============================================================================================
// const getEnding = (word) => {
//   return word.slice(-2);
// };

// const result = getEnding("apple");
// console.log(result);
// ==============================================================================================
// const capitalize = (word) => {
//   if (word.length > 0) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   }
// };

// const result = capitalize("hello");
// console.log(result);
// ==============================================================================================
// const countVowels = (letter) => {
//   let count = 0;
//   for (const x of letter) {
//     if ("aeiou".includes(x)) {
//       count++;
//     }
//   }
//   return count;
// };

// const result = countVowels("education");
// console.log(result);
// ==============================================================================================
// const countSpaces = (word) => {
//   let a = word.split(" ");
//   return a.length - 1;
// };

// const result = countSpaces("hi hih ihii iii");
// console.log(result);
// ==============================================================================================
// const multiply = (a, b) => {
//   return a * b;
// };

// const result = multiply(5, 5);
// console.log(result);
// ==============================================================================================
// const square = (number) => {
//   return Math.pow(number, 2);
// };

// const result = square(5);
// console.log(result);
// ==============================================================================================
// const getMax = (a, b) => {
//   return Math.max(a, b);
// };

// const result = getMax(5, 8);
// console.log(result);
// ==============================================================================================
// const sumDigits = (number) => {
//   let x = number.toString().split("");
//   let sum = 0;
//   for (i = 0; i < x.length; i++) {
//     sum += Number(x[i]);
//   }
//   return sum
// };

// const result = sumDigits(999);
// console.log(result);
// ==============================================================================================
// const calculateAge = (yearOfBirth) => {
//   let currentYear = new Date().getFullYear();
//   return currentYear - yearOfBirth;
// };

// const result = calculateAge(2026);
// console.log(result);
// ==============================================================================================
// const calculateDiscountedPrice = (price) => {
//   let discountPercent = 20;
//   return price - (price * 0.2);
// };

// const result = calculateDiscountedPrice(10000);
// console.log(result);
// ==============================================================================================
// const calculatePerimeter = (width, height) => {
//   return (width + height) * 2;
// };

// const result = calculatePerimeter(5, 8);
// console.log(result);
// ==============================================================================================
// const convertHours = (hours) => {
//   return hours * 60;
// };

// const result = convertHours(5);
// console.log(result);
// ==============================================================================================
// const reverseNumber = (number) => {
//   let a = number.toString().split("").reverse().join("");
//   a = Number(a)
//   return a;
// };

// const result = reverseNumber(56);
// console.log(result);
// ==============================================================================================
// const calculateSum = (n) => {
//   return n * (n + 1) / 2
// };

// const result = calculateSum(100)
// console.log(result);
// ==============================================================================================
// const calculateFactorial = (n) => {
//   let a = 1;
//   if (n >= 0) {
//     for (i = 1; i <= n; i++) {
//       a *= i;
//     }
//   }
//   return a;
// };

// const result = calculateFactorial(0);
// console.log(result);
// ==============================================================================================
// const calculatePower = (base, exponent) => {
//   return Math.pow(base, exponent);
// };

// const result = calculatePower(2, 3);
// console.log(result);
// ==============================================================================================
// const isEven = (number) => {
//   if (number % 2 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const result = isEven (9)
// console.log(result);
// ==============================================================================================
// const isEqual = (a, b) => {
//   if (a === b) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const result = isEqual(5, 3);
// console.log(result);
// ==============================================================================================
// const isDivisibleByFive = (number) => {
//   if (number % 5 === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const result = isDivisibleByFive(11);
// console.log(result);
// ==============================================================================================
// const getFullName = (person) => {
//   return `${person.lastName} ${person.firstName}`
// };

// const result = getFullName({ lastName: "Болд", firstName: "Бат" });
// console.log(result);
// ==============================================================================================
// const getProductTotal = (product) => {
//   return product.price * product.quantity;
// };

// const result = getProductTotal({ price: 500, quantity: 4 });
// console.log(result);
// ==============================================================================================
// const createUser = (name, age) => {
//   let a = {name: name, age: age};
//   return a
// };

// const result = createUser("Бат", 20);
// console.log(result);
// ==============================================================================================
// const isStudentPassed = (student) => {
//   if (student.score >= 60) {
//     return true;
//   } else {
//     return false;
//   }
// };

// const result = isStudentPassed({score: 85});
// console.log(result);
// ==============================================================================================
// const getCity = (user) => {
//   return user.address.city
// };

// const result = getCity({ address: { city: "Дархан" } });
// console.log(result);
// ==============================================================================================
// const getRectangleArea = (rectangle) => {
//   return rectangle.width * rectangle.height;
// };

// const result = getRectangleArea({ width: 5, height: 3 });
// console.log(result);
// ==============================================================================================
// const getProductValues = (product) => {
//   a = [product.title, product.price];
//   return a;
// };

// const result = getProductValues(product = { title: "Ном", price: 5000 });
// console.log(result);
// ==============================================================================================
// const sumArray = (numbers) => {
//   let a = 0;
//   for (i = 0; i < numbers.length; i++) {
//     a += numbers[i];
//   }
//   return a;
// };

// const result = sumArray([1, 2, 3]);
// console.log(result);
// ==============================================================================================
// const findMin = (numbers) => {
//   return Math.min(...numbers);
// };

// const result = findMin([3, 9, 2]);
// console.log(result);
// ==============================================================================================
// const getEvenNumbers = (numbers) => {
//   let a = [];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       a.push(numbers[i])
//     }
//   }
//   return a;
// };

// const result = getEvenNumbers([1, 2, 3, 4]);
// console.log(result);
// ==============================================================================================
// const getNegativeNumbers = (numbers) => {
//   let a = [];
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] < 0) {
//       a.push(numbers[i])
//     }
//   }
//   return a;
// };

// const result = getNegativeNumbers([-2, 3, -5, 0]);
// console.log(result);
// ==============================================================================================
// const sumEvenNumbers = (numbers) => {
//   let a = 0;
//   for (i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 === 0) {
//       a += numbers[i];
//     }
//   }
//   return a;
// };

// const result = sumEvenNumbers([1, 2, 3, 4]);
// console.log(result);
// ==============================================================================================
// const uppercaseWords = (words) => {
//   let a = [];
//   for (i = 0; i < words.length; i++) {
//     a.push(words[i].toUpperCase());
//   }
//   return a;
// };

// const result = uppercaseWords(["cat", "dog"]);
// console.log(result);
// ==============================================================================================
// const combineArrays = (firstArray, secondArray) => {
//   return firstArray.concat(secondArray); 
// };

// const result = combineArrays(firstArray = [1, 2], secondArray = [3, 4]);
// console.log(result);
// ==============================================================================================
// const getExpensiveProducts = (products, minPrice) => {
//   let a = [];
//   for (i = 0; i < products.length; i++) {
//     if (products[i].price > minPrice) {
//       a.push(products[i]);
//     }
//   }
//   return a;
// };

// const result = getExpensiveProducts(products = [{ title: "Аяга", price: 2000 }, { title: "Сав", price: 5000 }], minPrice = 3000);
// console.log(result);
