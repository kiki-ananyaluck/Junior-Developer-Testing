/*Sum of All Primes: (Easy)
Task: Write a JavaScript function that takes a number n and returns the sum of all prime numbers up to and including n.*/


//function ในการหาจำนวนเฉพาะ
const findPrimes = (num) => {
    const primes = [];

    findPrime:
    for (let i = 2; i <= num; i++) {
        for (let j = 2; j <= Math.sqrt(i); j++) {            //loop ใหการหาจำนวนเฉพาะ ใช้ method ในการหารูทเพื่อลดเวลาในการเช็คเงื่อนไข  ซึ่งหากนำเลขมาหารกันในแต่ละรอบ 
            if (i % j === 0) continue findPrime              //หากหารกันลงตัวมีเศษเป็น 0 แปลว่าเลขตัวนั้นไม่ใช่จำนวนเฉพาะ เพราะมีตัวอื่นนอกจาก 1 และตัวมันเองหารได้ ก็ใช้คำสั้ง continue เพื่อไปทำ for loop ที่ชื่อว่า findPrime ได้เลย     
        }
        primes.push(i);
    }
    return primes;
}

//function ในการหาผลรวมของสมาชิกใน array prime 
const sumPrime = (array) => {
    let sum = 0;

    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    return sum;
}


function getInputNumber() {
    let n = +prompt("Please enter number (ex: 10):", ""); //รับเลขมาใช้ prompt ใส่เครื่องหมาย + เพื่อแปลงจาก string เป็น number
    let prime = findPrimes(n); //เรียกใช function ในการหาจำนวนเฉพาะ
    let result = sumPrime(prime); //เรียกใช function ในการหาผลรวม

    alert(`Input: ${n}, Output: ${result}`);
    console.log(prime, result);
}

getInputNumber();