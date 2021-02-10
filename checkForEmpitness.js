function isEmpty (obj) {
  for (let value in obj) {
      return false;
  }
  return true;
}
let obj = {2}
console.log(isEmpty(obj));