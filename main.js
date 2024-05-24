// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];

// Add your functions below:
//Taken from Codecademy solution
function validateCred(numArr) {
  let total = 0;
  for (let i = numArr.length - 1; i >= 0; i--) {
    //By using numArr.length - 1, we discount the last element of the array without altering it. Then as long as i is greater than or equal to 0, we start counting backwards through the array, neglecting the last element.
    let currValue = numArr[i]
    //We then create a variable to hold the current value of the array, so as not to maniuplate it.
    if ((numArr.length - 1 - i) % 2 === 1) {
      //not entirely sure what's going on above, but we're using modulo to only target numbers in odd positions.
      currValue *= 2;
      if (currValue > 9) {
        currValue -= 9;
      }
    }
    total += currValue;
    //Within the initial loop, we initialise total to cumulatively add up the currValue figures of each odd position in the array.
  }
  return total % 10 === 0;
  //This sum will determine whether the number is valid or invalid.
}

const findInvalidCards = cards => {
  const invalid = [];
  //here we initalise a new array to store our invalid credit card numbers
  for (i = 0; i < cards.length; i++) {
    //We loop through the array and assign a variable to the value of the ith position in the array (below)
    let currCard = cards[i];
    if(!validateCred(currCard)) {
      //With the above, we run the validateCred function, and if the currCard value does NOT pass the validation test i.e. returning 0 from the sum modulo operation, we (via the .push method) add that array of numbers into the invalid array we initialised earlier. We then return invalid.
      invalid.push(currCard);
    }
  }
  return invalid;
}


function idInvalidCardCompanies(invalidBatch) {
  const companies = [];
  //initialise an empty array ready to store the names of companies to contact
  for (let i = 0; i < invalidBatch.length; i++) {
    //now iterating through the invalid companies, we're checking the first position in each array in invalidBatch (the argument provided will be the 'invalid' array we made earlier) below via switch.
    switch (invalidBatch[i][0]) {
      //in case the number is '3' and so on
      case 3:
        if (companies.indexOf('Amex') === -1) {
          //indexOf returns -1 if a value is not present in an array. If it isn't present, we add that company to the array 'companies' via .push (and so on)
          companies.push('Amex');
        }
        break
      case 4:
        if (companies.indexOf('Visa') === -1) {
          companies.push('Visa');
        }
        break
      case 5:
        if (companies.indexOf('Mastercard') === -1) {
          companies.push('Mastercard');
        }
        break
      case 6:
        if (companies.indexOf('Discover') === -1) {
          companies.push('Discover');
        }
        break
      default:
        console.log('Company not found');
    }
  }
  return companies;
}

console.log(idInvalidCardCompanies([invalid1])); // Should print['visa']
console.log(idInvalidCardCompanies([invalid2])); // Should print ['mastercard']
console.log(idInvalidCardCompanies(batch)); // Find out which companies have mailed out invalid cards





/* MY INITIAL THOUGHTS:

  const validateCred = arr => {
    let total = 0;
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    newArr.pop();
    newArr.reverse();
    console.log(newArr);
    for (let i = 0; i < newArr.length; i++) {
      if ((i + 2) % 2 === 1) {
        let currValue = newArr[i]
        currValue *= 2;
        console.log(currValue)  
      }
    }
  }

validateCred(valid1);

*/


