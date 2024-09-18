// মডিউল ১০ এর এসাইনমেন্ট :

// 1) Write a function named calculateDifference that takes two arguments and returns the difference between the first and second argument.

function calculateDifference(num1, num2) {
  var Result = num1 - num2;
  return Result;
}
console.log(calculateDifference(20, -10));

// 2) Write a function named isOdd that takes one argument and returns true if the number is odd, and false if it is not.

function isOdd(Num) {
  if (Num % 2 == 0) {
    return (result = false);
  } else {
    return (result = true);
  }
}
console.log(isOdd(20));

// 3) Write a function named findMin that takes an array of numbers and returns the smallest number in the array.

function findMin(Num) {
  let min = Num[0];
  for (let i = 1; i < Num.length; i++) {
    if (Num[i] < min) {
      min = Num[i];
    }
  }
  return min;
}
console.log(findMin([10, 2, 30, 50, 3, 8, 100]));

//4) Write a function named filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers.

function filterEvenNumbers(Num = [10, 2, 30, 50, 3, 8, 100]) {
  var A = Num.filter(function (item) {
    return item % 2 === 0;
  });
  console.log(A);
}
filterEvenNumbers([10, 5, 8]);

// 5) Write a function named sortArrayDescending that takes an array of numbers and returns a new array sorted in descending order.

function sortArrayDescending(Num) {
  var B = Num.sort();
  return B.reverse();
}
console.log(sortArrayDescending([10, 2, 30, 50, 3, 8, 100]));

// 6) Write a function named lowercaseFirstLetter that takes a string and returns the same string with the first letter lowercased.

function lowercaseFirstLetter(char) {
  var lowFirst = char.charAt(0).toLowerCase();
  result = char.replace(char.charAt(0), lowFirst);
  return result;
}
console.log(lowercaseFirstLetter("BANGLADESH"));
// 7) Write a function named countVowels that takes a string and returns the number of vowels (a, e, i, o, u, A, E, I, O, U) in the string. It should filter vowels from the
// string.
function countVowels(Str) {
  const vowels = "aeiouAEIOU";
  const characters = Str.split("");
  const vowelArr = characters.filter(function (char) {
    return vowels.includes(char);
  });
  return vowelArr.length;
}
console.log(countVowels("Welcome to Js"));

// 8) Write a function named findAverage that takes an array of numbers and returns the average of all elements.

function findAverage(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  const average = sum / numbers.length;
  return average;
}
console.log(findAverage([10, 20, 30, 40, 50]));
