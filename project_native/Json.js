/*
    JSON มาจากคำว่า JavaScript Object Ntation เป็นรูปแบบของข้อความ ที่ใช้ในการ
    เก็บและส่งข้อมูล โดยมีคุณสมบัติพิเศษคือ อธิบายตัวเอง "self-describing" และ งานในการเข้าใจ
    มีตัวอย่างดัง ex1 
    //อธิบาย self-describing มีในข้อสอบ
{} = ตัวแปร object รูปแบบ name และ value 

    อะไรคือ JSON 
    - JSON เป็นรูปแบบข้อมูลที่มีขนาดเล็ก(เบา Lightweight) เหมาะสำหรับการแลกปลี่ยนข้อมูล
    - JSON เป็นข้อความเนื้อหาที่ถูกเขียนอยู่ในรูปแบบ Javascript Object notation
    - JSON ถูกใช้ในการ ส่งข้อมูลระหว่าง Comuters
    - JSON เป็นภาษาที่มีอิสระ คือ เป็นเพียงข้อความอยู่ในรูปแบบของ Javascript Object notation
    โดยมีภาษาโปรแกรมมิ่งอื่นๆอีกมากมายที่สามารถใช้งานและแปลงข้อมูลให้ออกมาอยู่ในรูปแบบ JSON

    ทำไมต้องใช้ JSON 
    เนื่องจากรูปแบบของ JSON มีความคล้ายในด้านภาษาเหมือนกับ code สำหรับในส่วน JavaScript Object
    ด้วยเหตุนี้ จึงทำให้ โปรแกรมภาษา Javascript มีความง่ายในการแปลงจาก JSON data ไปเป็น js object

*/

let ex1 = '{"name":"John","age":30,"car":null}'; // JSON ส่งข้อมูลเก็บข้อมูล name:value,name:value
let ex3 = {name:"John",age:30,car:null}; //ชื่อไม่ต้องใส่ double โข้ด  //JavaScript Object 
//ทำการ list ข้อแตกต่าง JSON and JavaScript Object  
// JSON อยู่ในข้อความ จะได้แปลงเป็น JavaScript Object 
/*
    javascript มี build in function (คือ function ที่ถูกสร้างมากับตัวภาษา ไม่จำเป็นต้องสร้างใช้งานเอง)
    ที่ใช้ในการแปลง JSON string ไปเป็น JS object คือ
        JSON.parse() 
*/
let textConvert = JSON.parse(ex1);
console.log(textConvert);
console.log(textConvert.age+15);
/*
    และมีฟังก์ชันที่ใช้แแปลงจาก JS object ไปเป็นข้อความ
    JSON.stringify()
*/
let test1 = JSON.stringify(ex3);
console.log(test1);

/*
JSON Sytax เป็น subset ของ JavaScript sytex โดยมีรูปแบบคือ

- ข้อมูลจะอยู่ในรูป name/value pair
- ข้อมูลจะขั้นด้วย comma (,) 
- ใช้ Curly braces ({}) เมื่อยู่ในรูป object 
- ใช้ Square bracket ([]) เมื่ออยู่ในรูป Array

    ค่าข้อมูลใน JSON สามารถเป็นได้ดังนี้ 
    - a string
    - a number
    - an object
    - an array
    - a boolean
    - null

    ความแต่งต่างระหว่าง JSON และ Object
    การเก็บ่า String ใน JSON จะต้องใช้ double quotes ขณะที่ js ใช้ single quotes ได้

    นอกจากนี้เราสาสมารถเขียน Js array ในรูปแบบ JSON โดยทำเหมือนกันกับ JS object 

*/

let ex4 = '["apple","banana","coconut"]';
const test2 = JSON.parse(ex4);
console.log(test2[1]);

//การใช้ array ใน object และ object ใน array

const cs65 = [
    {firstname:"jakkarin",
    lastname:"Mueangsong",
    age:19,
    sister:[
        {name:'karn',pet:["cat name pinky","dog name adam"]},
        {name:'dew',pet:["dog name blue"]}
        ]
    }
];
//หาวิธีดึงข้อมูลพวกนี้มาใช้ ข้อมูลเป็นชั้นๆ ต้องหาวิธีดึงมันออกมาใช้งาน
console.log(cs65);
console.log("firstname:"+cs65[0].firstname);
console.log("lastname:"+cs65[0].lastname);
console.log("age:"+cs65[0].age);
console.log("have sister 1:"+cs65[0].sister[0].name);
console.log("have sister 2:"+cs65[0].sister[1].name);
console.log("have sister 1:"+cs65[0].sister[0].pet[0]);
console.log("have sister 1:"+cs65[0].sister[0].pet[1]);
console.log("have sister 2:"+cs65[0].sister[1].pet[0]);

