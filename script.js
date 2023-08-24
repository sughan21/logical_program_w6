//1.Write a JavaScript function to generate a random integer.

function rand(max, min) {
  if (max === undefined) {
    max = 1;
    min = 0;
  } else if (min === undefined) {
    min = 1;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(rand(20, 1));
console.log(rand(1, 10));
console.log(rand(6));
console.log(rand());

//2.Write a JavaScript program to display the current day and time in the following format.

function formatTimeUnit(unit) {
  return unit < 10 ? "0" + unit : unit;
}

function displayCurrentTime() {
  const now = new Date();

  const day = now.toLocaleString("en-US", { weekday: "long" });

  let hours = now.getHours();
  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12; // Convert to 12-hour format

  const minutes = formatTimeUnit(now.getMinutes());
  const seconds = formatTimeUnit(now.getSeconds());

  const formattedTime = `Today is: ${day}\nCurrent time is: ${hours} ${ampm} : ${minutes} : ${seconds}`;
  console.log(formattedTime);
}

displayCurrentTime();

//3.Write a JavaScript program to get the current date.

function getCurrentDate() {
  const now = new Date();

  const month = now.getMonth() + 1;
  const day = now.getDate();
  const year = now.getFullYear();

  const formattedDate1 = `${month}-${day}-${year}`;
  const formattedDate2 = `${month}/${day}/${year}`;
  const formattedDate3 = `${day}-${month}-${year}`;
  const formattedDate4 = `${day}/${month}/${year}`;

  console.log(`mm-dd-yyyy: ${formattedDate1}`);
  console.log(`mm/dd/yyyy: ${formattedDate2}`);
  console.log(`dd-mm-yyyy: ${formattedDate3}`);
  console.log(`dd/mm/yyyy: ${formattedDate4}`);
}

getCurrentDate();

//4. Write a JavaScript program to check whether a given matrix is an identity matrix.

function isIdentityMatrix(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === j && matrix[i][j] !== 1) {
        return false;
      }
      if (i !== j && matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}

const matrix1 = [
  [1, 0, 0],
  [0, 1, 0],
  [0, 0, 1],
];
const matrix2 = [
  [1, 0, 0],
  [0, 1, 0],
  [1, 0, 1],
];

console.log(isIdentityMatrix(matrix1));
console.log(isIdentityMatrix(matrix2));

//5. Write a JavaScript function to get all possible subsets with a fixed length (for example 2) combinations in an array.

function getSubsets(array, length) {
  if (length === 0) {
    return [[]];
  }

  if (array.length === 0 || length > array.length) {
    return [];
  }

  if (length === array.length) {
    return [array];
  }

  if (length === 1) {
    return array.map((item) => [item]);
  }

  const subsets = [];

  for (let i = 0; i <= array.length - length; i++) {
    const first = array[i];
    const rest = array.slice(i + 1);
    const subSubsets = getSubsets(rest, length - 1);

    for (const subSubset of subSubsets) {
      subsets.push([first, ...subSubset]);
    }
  }

  return subsets;
}

const inputArray = [1, 2, 3];
const subsetLength = 2;
const result = getSubsets(inputArray, subsetLength);
console.log(result);

//6. Write a JavaScript function to check whether a string is blank or not.

function isBlank(str) {
  return str.trim() === "";
}

console.log(isBlank(""));
console.log(isBlank("abc"));

//7.Write a JavaScript function to round a number to decimal place.

function preciseRound(number, decimals) {
  const factor = 10 ** decimals;
  return Math.round(number * factor) / factor;
}

console.log(preciseRound(12.375, 2));
console.log(preciseRound(-10.3079499, 3));
console.log(preciseRound(10.49999, 0));
console.log(preciseRound(10.49999, 1));

//8. Write a JavaScript program to display a random image (clicking on a button) from the following list.

//9.Write a JavaScript function that hides email addresses to prevent unauthorized access.

function protectEmail(email) {
  const parts = email.split("@");
  const username = parts[0];
  const domain = parts[1];

  const hiddenUsername = username.slice(0, 3) + "..." + username.slice(-4);

  return `${hiddenUsername}@${domain}`;
}

console.log(protectEmail("sughanrithvik1@gmail.com"));
