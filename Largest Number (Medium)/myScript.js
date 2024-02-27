/*Largest Number: (Medium)
Task: Given a list of non-negative integers, arrange them such that they form the largest possible number.*/

const largestNumber = (array) => {
    const numStrings = array.map(String); //แปลงเป็น srting ก่อนเพื่อจะได้นำไปใช้กับ method localeCompare ได้
    const sortedArray = numStrings.sort(compareNumber);
    const largest = sortedArray.join(''); //ใช้ join เพื่อจะให้สมาชิกใน array เรียงติดกัน
    return largest;
}

function compareNumber(a, b) { //นำ array[a]+array[b] และ array[b]+array[a] เพื่อนำมาเปรียบเทียบ อย่างเช่น a=30, b=3 ก็จะได้ 303 กับ 330 ดังนั้น 330 > 303 ก็จะสามรถเรียงจากมากที่สุดไปน้อยได้
    const first = a + b; 
    const second = b + a;
    return second.localeCompare(first); //method localeCompare จะเปรียบเทียบ string โดย return -1 หาก a มาก่อน b, return 1 หาก b มาก่อน a, ruturn 0 หาก a และ b เท่ากัน 
}

function getInputNumber() {
    let inputNumber = prompt("Please enter number separated by commas (ex: 10,11,12):",""); //ใช้ prompt เพื่อรับเลขชุดมา
    let array = inputNumber.split(",").map(Number); 
    let result = largestNumber(array); //เรียกใช้ function largestNumber โดยส่ง argument array ไป

    alert(`Input: ${inputNumber}, Output: ${result}`);
    console.log(result);
}

getInputNumber();