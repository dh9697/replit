export const name = "Tom";
export function printName() {
  console.log(name);
}
let deviceName; // 초기값은 설정안해도 됨, if문 안에서 값이 바뀌기 때문에 const가 아닌 let
export function getDevice(size){
  //if size가 400보다 작으면 deviceName은 모바일
  //if size가 400이상 800미만이면 deviceName은 테블릿
  //if size가 800이상이면 deviceName은 피씨
  if(size < 400){
    deviceName = "mobile";
  }else if(size >= 400 && size < 800){
    deviceName = "tablet";
  }else // if(size >= 800) // 
  {deviceName = "pc";
  }
  return deviceName;
}
// and === && / or === ||
// if(남자이고 && 키가 180이상) 
// if(남자거나 || 키가 180이상)
// if(true && false) === false
// if(true || false) === true
// if(false || true) === true

export function 입장확인(나이){
  const 제한나이 = 29; // 제한나이를 정해줌으로써 기준
  // if(나이가 제한나이보다 작으면){
  //   return true;
  // }else {
  //   return false;
  // }
  if(나이 < 제한나이){
    return true;
  }else{
    return false;
  }
}

export function isPositive(num){
  // assignment 와 equal 구분..
  let value;
  if(num > 0){
    value = true;
  }else if(num < 0){
    value = false;
  }
    return value;
}

export function getMaxNumber(x,y){
  if(x>y){
    return x;
  }else if(x<y){
    return y;
  }
}