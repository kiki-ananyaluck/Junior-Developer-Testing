/*Custom Sort Function (Easy)
Task: Write a JavaScript function that sorts an array of numbers in ascending order, but places all odd numbers before even numbers.*/

const sortedNumber = (array) => {
    const odds = [];
    const evens = [];

    //ใช้ for loop ในการแยกเลขคู่กับเลขคี่ หากเลขนั้นหาร 2 ลงตัว มีเศษเป็น 0 ก็ให้เป็นในตัวแปลใหม่ที่ชื่อว่า evens หากหารไม่ลงตัวก็ให้ไปเก็บไว้ใน odds
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            evens.push(array[i]);

        } else {
            odds.push(array[i]);
        }
    }

    //หลังจากแยกเลขคี่เลขคู่แล้ว ก็นำไปเรียงจากมากไปน้อย โดยใช้ method sort โดยใช้ฟังก์ชันเปรียบเทียบ
    const sortedOdds = odds.sort(compareNumber);
    const sortedEvens = evens.sort(compareNumber);

    return sortedOdds.concat(sortedEvens);
}

// รับ parameter 2 ตัว ให้นำมาลบกันและ return ค่าออกมา หากมีค่าน้อยกว่าศูนย์ คือ a มาก่อน b แต่ถ้ามีค่ามากกว่าศูนย์ คือ b มาก่อน a 
function compareNumber(a, b) {
    return a - b;
}

function getInputNumber() {
    let inputNumber = prompt("Please enter number separated by commas (ex: 5,6,7):", ""); //ใช้ prompt เพื่อรับเลขชุดมา
    let array = inputNumber.split(",").map(Number); //ใช้ method split เพื่อแยกข้อความที่รับมาและแปลงจาก string เป็น number โดยใช้ method map เพื่อลูปแปลงที่ละตัวให้ครบ

    let result = sortedNumber(array); //เรียกใช้ function ในการแยกเลขคู่กับเลขคี่ และ เรียงเลขจากมากไปน้อย และนำมาเก็บไว้ในตัวแปลที่ชื่อว่า result

    alert(`Input: ${array}, Output: ${result}`); //แสดงผลหน้า browser
    console.log(array, result); //แสดงผลใน console
}

getInputNumber();