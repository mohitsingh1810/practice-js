// let a = 10;

// let b = 20;

// const sum = a + b;
// console.log(sum);
// sum = 5;
// console.log(sum);

// let x = "car";
// if(null){
//     console.log("hello");
// }
// else{
//     console.log("mohit");
// }


// let a = 0;
// let b = 1;

// let c = "mohit";
// let d = "ankit";



// if(a || b || (c == d) || (a == '1')) {
//     console.log("HII");
// }

// let str = "mohit";
// for(let i = 0; i<str.length; i++){
//     if(str[i] == 'h'){
//         continue;

//     }
//     console.log(str[i]);    
// }
let x = 'k';



// Count total vowels in a string

// function countVowel(str) {

//     // write your code

//     let count = 0;

//     for(let i = 0;i <str.length; i++){
//         if(str[i] == 'a'||str[i] == 'e'||str[i] == 'i'||str[i] == 'o'||str[i] == 'u'){
//             // count = count + 1;
//             count++;
//         }
//     }

//     return count;

// }

// let str = "Neeraj";

// let ans = countVowel(str);

// console.log(ans);


let arr = [70, 60, 50, 10, 20, 37, 90, 29, 57, 38, 95, 87, 63, 73, 81, 99, 50, 40];

// 90 + A GRADE
// 80 + B GRADE
// 60 + C GRADE
// 40 + D GRADE
// E - Fail

let a_grade = 0;
let b_grade = 0;
let c_grade = 0;
let d_grade = 0;
let e_grade = 0;

for(let i = 0; i<arr.length; i++){
    if(arr[i] >= 90){
        a_grade = a_grade + 1;
    }
    else if(arr[i] >= 80){
        b_grade = b_grade + 1;
    }
    else if(arr[i] >= 60){
        c_grade = c_grade + 1;
    }
    else if(arr[i] >= 40){
        d_grade = d_grade + 1;
    }
    else{
        e_grade = e_grade + 1;
    }
}
console.log(a_grade,b_grade,c_grade,d_grade,e_grade);

// for(let i = 0; i<arr.length; i++){
//     if(arr[i]<33){
//         console.log("fail");
//     }else{
//         console.log("pass");
//     }
// }