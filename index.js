//1. Create an array called ages that contains the values 3,9,23,64,2,28,93.
let ages = [3,9,23,64,2,8,28,93]
//1.b.Add a new age to myArray.
ages.push(75);
//1.a Subtract first element from the last element in ages.
let result = ages[ages.length -1 ] - ages[0];
//Print the result.
console.log(result);
// 1.c Use a loop to iterate through the array and calculate the average age.
for (let i = 0; i < 9; i++) {
    console.log(result / ages.length);
}
//2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim, 'Sally', 'Buck', 'Bob'.
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']

//2.a. Calculate the total number of letters
let totalLetters = names.reduce((total, name) => total + name.length, 0);

// Calculate the average number of letters
let averageLetters = totalLetters / names.length;

// Print the result

for (let i = 0; i < 6; i++) {
    console.log(averageLetters);
}
//2.b. Use a loop to iterate through the array again and concatenate all the names together separated by spaces. I initially created the names array up here but had to move it down to complete number 5
//since I couldn't re-declare the let value of names when completing number 5.
for (let i= 0; i < 6; i++) {
    let concatNames = names.join( " ");
    console.log(concatNames);

}
//3. To access the last element of an Array it is located at array.length - 1.
//4. The first element of any array is located at index O.
//5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to nameLengths array.
names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];
let namesLengths = [];
for (let i = 0; i < names.length; i++) {
    namesLengths.push(names[i].length);
    console.log(namesLengths);
}
//6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.
for (let i = 0; i < namesLengths.length; i++) {
    let totalNumbers = namesLengths.reduce((total, number) => total + number, 0);
    console.log(totalNumbers);
}
//7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function
//to return'HelloHelloHello'). 
function greeting(word, n) {
    let result4 = '';
    for (let i = 0; i < n; i++) {
        result4 = result4.concat(word);
    }
    return result4;
}
//Testing it to see if it works. Yeah!! It works!
let greeting2 = "Hello"
let times = 5
let result5 = greeting(greeting2, times)
console.log(result5);

//8. Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.
let fullName = (firstName, lastName) => firstName + " " + lastName;
//Testing function to see if it works. Not sure why it says undefined in console.log after the student name. 
let student = ['Christy', 'Gordon'];
let result2 = fullName(student);
console.log("Student Name", result2);

//9. Write a function that takes an array of numbers and returns true if the sum of all numbers in the array is greater than 100.
function myFunction(newNumbers) {
    let numArray = 0;
    for (let i = 0; i < newNumbers.length; i++) {
        numArray =+ newNumbers[i];
    }
    return numArray > 100; 
}
//Test the function that I just created; it works!!!!
let numList = [7, 5, 3, 9, 12, 22, 30];
let result3 = myFunction(numList);
console.log(result3);
//10. Write a function that takes an array of numbers and returns the average of all the elements in the array.
function myFunction2(newNumbers2) {
    if(newNumbers2.length === 0) {
        return 0; 
    }
    let numArray2 = 0;
    for(let i = 0; i < newNumbers2.length; i++) {
        numArray2 =+ newNumbers2[i]
    }
    return numArray2 / newNumbers2.length;
}
//Test the function that I just created; It's not giving the right calculation, not sure why.
let numList2 = [5,10,15,20,25,30];
let anotherResult = myFunction2(numList2);
console.log(anotherResult);

//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
function compAvg(newArray1, newArray2) {
    const avg = getAverage(newArray1);
    const avg1 = getAverage(newArray2);
    return avg > avg1;    
}
function getAverage(numbers3) {
    if (numbers3.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers3.length; i++) {
        sum =+ numbers3[i];
    }
    return sum / numbers3.length;
    }
//Testing my function
let newArray1 = [2, 4, 6, 8, 10];
let newArray2 = [3, 6, 9, 12, 15];
let result6 = compAvg(newArray1, newArray2);

console.log(result6);

//12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.
let willBuyDrink = (isHotOutside, moneyInPocket) => isHotOutside && moneyInPocket > 10.50;
//Testing my function; It works!!
let hotyes = false;
let money = 20.00;
let result7 =  willBuyDrink(hotyes, money);
console.log ("Will I buy a drink today", result7);

//13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it. 
//I am creating a function that determines if a student is old enough to drive.
function driveReady(legalAge, currentAge) {
    if (legalAge <  currentAge) {
    return true
} else {
return false
}
}
let StudentAge = 14;
let legalAgeAlabama = 15;
let result8 = driveReady(legalAgeAlabama, StudentAge)
console.log("Is student able to drive", result8)

