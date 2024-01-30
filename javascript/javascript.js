console.log("hello there");

/////////////////////////////////////////////CHALLENGE 1 /////////////////////////////////////////
////////1. Prime numbers
const text_array = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 19,
];
const isPrime = function (number) {
  if (number <= 1) {
    return false;
  }
  ///divide all number under it
  for (let i = 2; i <= number - 1; i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
};
const primitivenumber = function (array) {
  let answer = [];
  for (let i = 0; i <= array.length - 1; i++) {
    //checking
    const number = array[i];
    const condition = isPrime(number);

    if (condition) {
      answer.push(array[i]);
    }
  }
  console.log(answer);
};

primitivenumber(text_array);

/////////////////////////////////////////////CHALLENGE 2 /////////////////////////////////////////
////////2. Palindrome
const palindrome = function (string) {
  let text = "";
  for (let i = string.length - 1; i >= 0; i--) {
    text += string[i];
  }
  console.log(`Reverse text: ${text} `);

  if (string === text) {
    console.log("yes this text is pandrome🎇🎆");
    return true;
  } else {
    console.log("this text is not palidrome💀");
  }
};

palindrome("afa");

/////////////////////////////////////////////CHALLENGE 3 /////////////////////////////////////////
///////3. Array reversing

const reverse = (array) => {
  let revers = [];
  for (let i = array.length - 1; i >= 0; i--) {
    revers.push(array[i]);
  }
  console.log(revers);
  return revers;
};

reverse([1, 2, 3, 4, 5, 67, 21]);

/////////////////////////////////////////////CHALLENGE 4 /////////////////////////////////////////
///////4. Inplace Array reversing

const inplace = (array) => {
  for (let i = 0, j = array.length - 1; i < array.length - 1, j > 0; i++, j--) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
};

console.log(inplace([21, 32, 45, 6, 75, 43, 5]));

/////////////////////////////////////////////CHALLENGE 5 /////////////////////////////////////////
///////5. Array & Object
//given array info i need first to loop
const testarray = [
  "Patrick wyne, 30, male",
  "lil wyne, 32, male",
  "Eric mimi, 21, female",
  "Dodos deck, 21,male",
  "Alian Dwine, 22, male",
  "Patrick wyne, 33, male",
  "Patrick wyne, 10,trans",
  "Patrick wyne, 40,male",
];
console.log(testarray[1].split(","));

//// destruct the array into three and make all as text
function arrayobject(test) {
  const arraynew = [];
  for (let i = 0; i < test.length; i++) {
    const values = test[i].split(",");

    ////////// removing the extra space for the names
    for (let j = 0; j < values.length; j++) {
      values[j] = values[j].trim();
    }
    arraynew.push(values);
  }
  //   console.log(arraynew);

  /////////////LOOP OVER NEW ARRAY
  const male = []; /// contain all males
  const females = [];
  const trans = [];

  for (let i = 0; i < arraynew.length; i++) {
    console.log(arraynew[i]);
    if (arraynew[i][2] === "male") {
      male.push([arraynew[i]]);
    } else if (arraynew[i][2] === "female") {
      females.push(arraynew[i]);
    } else if (arraynew[i][2] === "trans") {
      trans.push(arraynew[i]);
    }
  }

  const objct = {
    females: [{}],
  };
}
arrayobject(testarray);
