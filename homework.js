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
let letter = 'g';
let o = 0;

for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) {
        o += 1;
    } else if (word[i] !== letter) {
        continue;
    }
}
console.log('The letter ' + letter + ' exists ' + o + ' time in my word.');

 


console.log('#3: Cherokee Hare');

let startingPopulation = 1000;
let birthRate = .05;
let numberOfWeeks = 6;


console.log('#4: Change Machine');




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






