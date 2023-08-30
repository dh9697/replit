// 재활용, 일을 나눠서 가능
import {printName, name, getDevice, 입장확인, isPositive, getMaxNumber} from "./script.js"
// printName();

// console.log(name);
// printName('steve');

// const device = getDevice(800);
// console.log(device);

// const 입장가능 = 입장확인(28);
// console.log(입장가능);

// const returnValue = isPositive(0);
// console.log(returnValue);
// if(returnValue가 undefined라면){
//   //0 실행코드 - 예외상황 코드는 일반적인 코드보다 위에 있어야 함
// }
// if(returnValue){
//   //양수 실행코드
// }
// if(!returnValue){
//   //음수 실행코드
// }

const maxNumber = getMaxNumber(5,8);
console.log(maxNumber);