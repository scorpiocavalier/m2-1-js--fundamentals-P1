// Q11
// Write a program that creates a string that represents an 8×8 grid,
// using newline characters to separate lines. At each position of the grid
// there is either an "_" or a "#" character. The characters should form a chessboard.

// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#
// #_#_#_#_
// _#_#_#_#

let line = '#_#_#_#_';
let reversedLine = line.substring(1) + '#';

for(let i = 1; i <= 4; i++) {
    console.log(line);
    console.log(reversedLine);
}