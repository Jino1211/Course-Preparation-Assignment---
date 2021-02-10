function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof(obj[key]) === Number) {
            obj[key] *= 2;
        }
    }
}

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};
multiplyNumeric(menu)
  
console.log(menu);
