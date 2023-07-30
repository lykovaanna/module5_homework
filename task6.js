let arr = [33,33,31,2,0,8,15,74];

let sameArr = true;

for (let i=0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++){
     if (arr[i] !== arr[j]) {
       sameArr=false
     }
  }
}

if (sameArr) {
    console.log('Элементы массива одинаковые');
} else {
    console.log('Элементы массива разные');
}