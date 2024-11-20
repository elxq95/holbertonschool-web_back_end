export default function appendToEachArrayValue(array, appendString) {
    const newArr = [];
    let index = 0;
  
    for (const value of array) {
      newArr[index] = appendString + value;
      index += 1;
    }
  
    return newArr;
  }