// function comprssString(str){

//   let compressed = "";
//   let count = 1;

//   for(let i = 0; i<str.length; i++){
//     if(str[i] === str[i+1]){
//       count++;
//     }else{
//       compressed += str[i]+count;
//       count = 1;
//     }
//   }
//   return compressed;
// }

// const input = "aaaabbbbcccccdddddd";
// const output = comprssString(input);
// console.log(output); 


// function decompressString(str){

//   let decompressed = "";

//   for(let i = 0; i<str.length; i+=2){
//     const char = str[i];
//     const count = Number(str[i+1]);
//     decompressed += char.repeat(count);
//   }
//   return decompressed;
// }

// let input = "a2b3c4";
// let output = decompressString(input);
// console.log(output);


// function decompressString(str){

//   let decompressed = "";

//   for(let i=0; i<str.length; i+=2){
//     const char = str[i];
//     const count = Number(str[i+1]);
//     decompressed += char.repeat(count);
//   }
//   return decompressed
// }

// const input = "a4b5c6d7";
// const output = decompressString(input);
// console.log(output);

//Triangle pattern

// let rows = 5;
// let pattern = "";

// for(let n = 1; n<=rows; n++){
//     for(let m = 1; m<=n ; m++){
//         pattern += m;
//     }
//     pattern += "\n";
// }
// console.log(pattern);



// let rows = 5;
// let pattern = "";

// for(let n =1; n<=rows ; n++){
//     for(let m =1; m<=n; m++){
//         pattern += n;
//     }
//     pattern +="\n";
// }
// console.log(pattern);


// let n = 5;
// let string = "";

// for(let i=1; i<=n ; i++){
//     for(let j=0; j<i; j++){
//         string += "*";
//     }
//     string += "\n";
// }
// console.log(string);



// let n = 5;
// let string = "";

// for(let i=1; i<=n ; i++){
//     for(let j=0; j<i; j++){
//         string += "#";
//     }
//     string += "\n";
// }
// console.log(string);

/* ==================================  */ 

//Number Pyrmamid 

// let rows = 5;
// let pattern = "";

// for(let n=1; n<=rows; n++){
//     for(let m=1; m<= rows - n; m++){
//         pattern += " ";
//     }
//     for(let x=1; x<=2*n-1 ; x++){
//         pattern += x;
//     }
//     pattern +="\n"
// }
// console.log(pattern);


/*= =========================== = */

// function countVowels(str) {
//   let vowels = {
//     'a': 0,
//     'e': 0,
//     'i': 0,
//     'o': 0,
//     'u': 0
//   };

//   str = str.toLowerCase();

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];

//     if (vowels.hasOwnProperty(char)) {
//       vowels[char]++;
//     }
//   }
//   for (let vowel in vowels) {
//     console.log(vowel + '-' + vowels[vowel]); zz
//   }
// }

// let input = 'Higher education';
// countVowels(input);


//Reverse Number

// let rows = 5;
// let pattern = "";

// for(let n=1; n<=rows; n++ ){
//   for(let m=1; m<=rows-n; m++){
//     pattern += ' ';
//   }
//   for(let k = 1; k<=2*n-1; k++){
//     pattern += k;
//   }
//   pattern += '\n';
// }
// console.log(pattern);




// function generatePattern(rows) {
//   let pattern = '';

//   for (let i = 0; i < rows; i++) {
//     for (let j = 0; j < i; j++) {
//       pattern += '  ';
//     }

//     for (let k = 0; k < 2 * (rows - i) - 1; k++) {
//       pattern += k;
//     }

//     pattern += '\n';
//   }

//   return pattern;
// }

// Example usage
// const rows = 5;
// const result = generatePattern(rows);
// console.log(result);
