// // ? Numbers
// console.log(Number.MAX_VALUE);
// console.log(Number.EPSILON);

// let y = '654.500'
// console.log(parseInt(y));// 654
// console.log(parseFloat(y));// 654.5
// console.log(isFinite(y));// true
// console.log(Number(y).toExponential());// 6.545e+2
// console.log(Number(y).toFixed());// 655
// console.log(Number(y).toPrecision());// 654.5

// console.log(Math.max(4, 5, 10, 100));
// console.log(Math.min(4, 5, 10, 100));
// console.log(Math.cos(0));
// console.log(Math.sin(0));
// console.log(Math.tan(0));
// console.log(Math.log(10));
// console.log(Math.log10(10));
// console.log(Math.pow(2, 3));
// console.log(Math.random());
// console.log(Math.round(5.544555549));
// console.log(Math.sqrt(25));
// console.log(Math.abs(-2));
// console.log(Math.floor(4.9));
// console.log(Math.ceil(4.1));
// console.log(Math.sign(-0));
// console.log(Math.sign('a'));


// ? Strings
// const greet = 'Hello \nWorld'
// console.log(greet);

// //! Query: get the character or character code at a particular string index. Methods include at(), charAt(), charCodeAt(), and codePointAt().

// const str = 'Hisham';
// let emoji = "💖";
// console.log(str.at(2));
// console.log(str.at(-2));
// console.log(str.charAt(1));
// console.log(str.charCodeAt(2));
// console.log(emoji.codePointAt(0));

// // ! Search: get information about a substring that conforms to a pattern, or test if a particular substring exists. Methods include indexOf(), lastIndexOf(), startsWith(), endsWith(), includes(), match(), matchAll(), and search()

// const string2 = 'Hello World';
// console.log(string2.indexOf('o'));
// console.log(string2.indexOf('World'));
// console.log(string2.indexOf('x'));

// console.log(string2.lastIndexOf('o'));

// console.log(string2.startsWith('Hello'));
// console.log(string2.startsWith('H'));

// console.log(string2.endsWith('World'));
// console.log(string2.endsWith('d'));

// console.log(string2.includes('Hello'));
// console.log(string2.includes('H'));

// console.log(string2.search('World'));

// let str = "Hello 123 world 456";
// console.log(str.match(/[a-zA-Z]+/g));
// console.log(str.match(/\d+/g));

// console.log(str.match(/hello/i));

// let str3 = "test1 test2 test3";
// let regex = /test(\d)/g;
// let matches = str3.matchAll(regex);

// for (let match of matches) {
//     console.log(match);
// }


//! Composition: combine strings into a longer string. Methods include padStart(), padEnd(), concat(), and repeat().

// let str = '1234'
// console.log(str.padStart(7, 0));

// let str2 = '1234'
// console.log(str.padEnd(7, 0));

// let str3 = "hisham ";
// let str4 = "shah";
// console.log(str3.concat(" ", str4, "!"));

// console.log(str3.repeat(4));


//! Decomposition: break a string into smaller strings. Methods include split(), slice(), substring(), substr(), trim(), trimStart(), and trimEnd().

// let str = "Hisham,Hammad,Alyan";
// console.log(str.split(","));

// console.log(str.slice(0, 4));

// console.log(str.substring(0, 4));

// let str2 = '   Hisham     '
// console.log(str2.trim())

// console.log(str2.trimStart())

// console.log(str2.trimEnd())
    






