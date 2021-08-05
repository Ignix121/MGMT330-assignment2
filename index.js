/**
 * @file This file has usage of arrays and different functions
 * @author  Prakat Bhatta <pbhatta@unm.edu>
 * @date 09/11/2020
 */

/**
 * VARIABLES: firstName, lastName, 
 *            fullName, fullNameLength, 
 *            firstInitial, lastInitial, initials
 */

 let firstName = 'Ada';
console.log({firstName});

let lastName = 'Lovelace';
console.log({lastName});

// concatenating the first and last names
let fullName = firstName + ' ' + lastName;
console.log({fullName});

// total length of the full Name
let fullNameLength = fullName.length;
console.log({fullNameLength});

// finding the first name initial
let firstInitial = firstName.substring(0,1);
console.log({firstInitial});

// finding the last name initial
let lastInitial = lastName.substring(0,1);
console.log({lastInitial});

// concatenating first and last name initials, using + sign
let initials = firstInitial + lastInitial;
console.log({initials});

// converting full name to Uppercase
let fullNameUppercase = fullName.toUpperCase();
console.log({fullNameUppercase});

let repeatCount = 12;

// repeating the first initial as the number declared in the repeatCount variable
let repeatFirstInitial = firstInitial.repeat(repeatCount);
console.log({repeatFirstInitial});

//generating 1st random number between 0 and 10
let randomNumber = Math.random() * 10;
console.log({randomNumber});

// conditionals for the 1st randomNumber
if (randomNumber <= 3) {
  console.log('<= 3');
} else if(randomNumber > 3 && randomNumber <= 7) {
    console.log('> 3 and <= 7');
} else {
    console.log('> 7');
}

//generating 2nd random number between 0 and 10
let randomNumber2 = Math.random() * 10;
let randomMessage = ('No message.');
// setting up conditionals for randomNumber and randomNumber2 and printing out different messages
if (randomNumber <= 5 && randomNumber2 <=5){
    randomMessage = ('Both less than 5');
} else if((randomNumber > 5 && randomNumber <= 8) && (randomNumber2 >5 && randomNumber2 <= 8)){
    randomMessage = ('Both between 5 and 8');
} else if(randomNumber > 8 && randomNumber2 > 8) {
    randomMessage = ('Both larger than 8');
} else if(randomNumber < 4 || randomNumber2 > 7){
    randomMessage = ('random #1 is less than 4 and random #2 is greater than 7');
} else {
    randomMessage = ('No conditions met.');
}
console.log({randomMessage});

// finding out if the given fullname length is odd or given
let fullNameLengthIsEven = false;
if (fullNameLength % 2 === 0){
    fullNameLengthIsEven = true;
} else {
    fullNameLengthIsEven = false;
}
console.log({fullNameLengthIsEven});

// creating array that stores grades
let grades = [97, 78, 85, 88, 94, 95];

// initializing countOfGrades variable to 0 so that it does not have a garbage value
let countOfGrades = 0;
/**
 * forEach() method calls the function for each element of in the array
 * the program below counts the number of grades, as countOfGrades is set to 0, and is added to 1,
 * as the program loops using forEach(), 1 is added for each step and we get total number of grade counts
 */
grades.forEach(value => {
    countOfGrades = countOfGrades + 1;
});
console.log({countOfGrades});

// finding the sum of all the grades stored in the array named grades
let sumOfGrades = 0;
grades.forEach(value => {
    sumOfGrades = sumOfGrades + value;
});
console.log({sumOfGrades});

// calculating average using the array length as a divisor
let avgGrade = sumOfGrades/grades.length;
console.log({avgGrade});

// adding new value to the end of the array grades
grades.push(99);

// adding new value to the start of the array grades
grades.unshift(56);

// oddGrades array stores only the odd grades using filter() method
let oddGrades = grades.filter(value => value % 2 != 0);
console.log({oddGrades});

/**
 * let classList = ['Lucy', 'Lucky', 'Louie', 'Anderson'];
classList.forEach(value => {
    odd = classlist.length % 2;
    if (odd !=2){
        console.log(classList[odd]);
    }
})

 */



// 
// DO NOT ADD, EDIT OR MODIFY CODE BELOW THIS SECTION...
// 

if(typeof(firstName) === 'undefined') { let firstName; module.exports.firstName = firstName; } else { module.exports.firstName = firstName; }
if(typeof(lastName) === 'undefined') { let lastName; module.exports.lastName = lastName; } else { module.exports.lastName = lastName; }
if(typeof(fullName) === 'undefined') { let fullName; module.exports.fullName = fullName; } else { module.exports.fullName = fullName; }
if(typeof(fullNameLength) === 'undefined') { let fullNameLength; module.exports.fullNameLength = fullNameLength; } else { module.exports.fullNameLength = fullNameLength; }
if(typeof(firstInitial) === 'undefined') { let firstInitial; module.exports.firstInitial = firstInitial; } else { module.exports.firstInitial = firstInitial; }
if(typeof(lastInitial) === 'undefined') { let lastInitial; module.exports.lastInitial = lastInitial; } else { module.exports.lastInitial = lastInitial; }
if(typeof(initials) === 'undefined') { let initials; module.exports.initials = initials; } else { module.exports.initials = initials; }
if(typeof(fullNameUppercase) === 'undefined') { let fullNameUppercase; module.exports.fullNameUppercase = fullNameUppercase; } else { module.exports.fullNameUppercase = fullNameUppercase; }
if(typeof(repeatCount) === 'undefined') { let repeatCount; module.exports.repeatCount = repeatCount; } else { module.exports.repeatCount = repeatCount; }
if(typeof(repeatFirstInitial) === 'undefined') { let repeatFirstInitial; module.exports.repeatFirstInitial = repeatFirstInitial; } else { module.exports.repeatFirstInitial = repeatFirstInitial; }
if(typeof(endOfFirstName) === 'undefined') { let endOfFirstName; module.exports.endOfFirstName = endOfFirstName; } else { module.exports.endOfFirstName = endOfFirstName; }
if(typeof(endOfLastName) === 'undefined') { let endOfLastName; module.exports.endOfLastName = endOfLastName; } else { module.exports.endOfLastName = endOfLastName; }
if(typeof(testRepeat) === 'undefined') { let testRepeat; module.exports.testRepeat = testRepeat; } else { module.exports.testRepeat = testRepeat; }
if(typeof(redactedName) === 'undefined') { let redactedName; module.exports.redactedName = redactedName; } else { module.exports.redactedName = redactedName; }
if(typeof(emailAddress) === 'undefined') { let emailAddress; module.exports.emailAddress = emailAddress; } else { module.exports.emailAddress = emailAddress; }
if(typeof(atPosition) === 'undefined') { let atPosition; module.exports.atPosition = atPosition; } else { module.exports.atPosition = atPosition; }
if(typeof(periodPosition) === 'undefined') { let periodPosition; module.exports.periodPosition = periodPosition; } else { module.exports.periodPosition = periodPosition; }
if(typeof(redactedEmailAddress) === 'undefined') { let redactedEmailAddress; module.exports.redactedEmailAddress = redactedEmailAddress; } else { module.exports.redactedEmailAddress = redactedEmailAddress; }
if(typeof(randomNumber) === 'undefined') { let randomNumber; module.exports.randomNumber = randomNumber; } else { module.exports.randomNumber = randomNumber; }
if(typeof(randomNumber2) === 'undefined') { let randomNumber2; module.exports.randomNumber2 = randomNumber2; } else { module.exports.randomNumber2 = randomNumber2; }
if(typeof(fullNameLengthIsEven) === 'undefined') { let fullNameLengthIsEven; module.exports.fullNameLengthIsEven = fullNameLengthIsEven; } else { module.exports.fullNameLengthIsEven = fullNameLengthIsEven; }
if(typeof(middleOfFirstName) === 'undefined') { let middleOfFirstName; module.exports.middleOfFirstName = middleOfFirstName; } else { module.exports.middleOfFirstName = middleOfFirstName; }
if(typeof(grades) === 'undefined') { let grades; module.exports.grades = grades; } else { module.exports.grades = grades; }
if(typeof(countOfGrades) === 'undefined') { let countOfGrades; module.exports.countOfGrades = countOfGrades; } else { module.exports.countOfGrades = countOfGrades; }
if(typeof(sumOfGrades) === 'undefined') { let sumOfGrades; module.exports.sumOfGrades = sumOfGrades; } else { module.exports.sumOfGrades = sumOfGrades; }
if(typeof(avgGrade) === 'undefined') { let avgGrade; module.exports.avgGrade = avgGrade; } else { module.exports.avgGrade = avgGrade; }
if(typeof(oddGrades) === 'undefined') { let oddGrades; module.exports.oddGrades = oddGrades; } else { module.exports.oddGrades = oddGrades; }


