/*Sum Of Two in Array (Easy)
Task: Implement a JavaScript function that, given an array of integers and a target integer, 
returns whether any two integers in the array sum up to the target number.*/

//function ในการหา sum โดยใช้ for loop โดยรับ parameter 2 คือ array และ target หากมีเลข 2 ตำแหน่งใน array มาบวกกันแล้วได้เท่ากับเลข target ก็จะ return ค่า true ออกมา 
function sumOfTwoArray(array, target) {   
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === target) {
                return true;
            }
        }
    }
    return false;
}

function getInputNumber() {
    let inputArray = prompt("Please enter number separated by commas (ex: 2,3,4):", ""); //ใช้ prompt เพื่อรับเลขชุดมา
    let array = inputArray.split(",").map(Number); //ใช้ method split เพื่อแยกข้อความที่รับมาและแปลงจาก string เป็น number โดยใช้ method map เพื่อลูปแปลงที่ละตัวให้ครบ

    let inputTarget = +prompt("Please enter target number", ""); //รับเลข target และใส่ + หน้า prompt เพื่อแปลงค่าที่รับมาให้เป็นตัวเลข

    let result = sumOfTwoArray(array, inputTarget); //เรียกใช้ function ในการหาผลรวม และนำมาเก็บไว้ในตัวแปลที่ชื่อว่า result

    alert(`Input: ${array}, Output: ${result}`);
    
    //console.log(array); เอาไว้ check ว่าเก็บเป็น array จริงไหม
}

getInputNumber(); //เรียกใช้ fucntion getInputNumber 