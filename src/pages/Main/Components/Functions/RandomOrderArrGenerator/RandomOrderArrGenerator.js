export function generateOrderedArr(min, max) {
  let newOrderedArr = [];
  for (let i = min; i < max; i++) {
    newOrderedArr.push(i);
  }
  return newOrderedArr;
}

export function generateRandomOrderArr(orderedArr) {
  let randomOrderArr = [];
  while (orderedArr.length !== 0) {
    let randIdx = Math.floor(Math.random() * orderedArr.length);
    let randNum = orderedArr[randIdx];
    orderedArr.splice(randIdx, 1);
    randomOrderArr.push(randNum);
  }
  return randomOrderArr;
}
