console.log('#1: Tallest Mountain');

let height = [1000.8, 1055.60, 2288.19, 2111.14];
let tallest = 0;

for (let i = 0; i < height.length; i++) {
    //console.log(i);

    if (tallest < height[i]) {
        tallest = height[i];
        
    }
}
console.log(tallest);


console.log('#2: Hangman Lite');
 

let word = 'gnomes';
let letter = 'o';
let o = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        o += 1;
    } 
}
if (o < 1) {
    console.log('No that letter does not exist in the word.')
} else {
    console.log('Yeah, the letter ' + letter + ' exists ' + o + ' time in the word.');
}
 


console.log('#3: Cherokee Hare');

let startingPopulation = 1000;
let birthRate = .05;
let numberOfWeeks = 12;

babyHares = startingPopulation * birthRate;
allBabyHares = babyHares * numberOfWeeks;
population = startingPopulation + allBabyHares;

console.log('There will be ' + population + ' Cherokee Hares after ' + numberOfWeeks + ' weeks.');


console.log('#4: Change Machine');

// 1. Create a variable called amount and give it a value.
// 2. Make an array with different kinds of bills.
// 3. Write a 'for' statement that subtracts the correct amount of the correct bill.

let amount = 216;
let cash = [1, 5, 10, 20];

for (let i = 0; i > cash.length - 1; ) {
    
}



console.log('#5: Palindromes');

let word2 = 'amma';
let end = word2.length -1;
let palindrome = true; //whether the word is a palindrome

for (let index = 0; index < word2.length; index++) {
    if (word2[index] !== word2[end - index]) {
        palindrome = false;
    } 
}

console.log(palindrome);






