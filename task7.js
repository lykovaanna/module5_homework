const arr = [33,2,8,0,15,null,'love'];
let other = 0;
let even = 0;
let odd = 0;

for (let i=0; i < arr.length; i++) {
  if ((arr[i] === 0) || (typeof(arr[i]) != 'number') || (arr[i] === null)) {
    other++;
  } else if (arr[i] % 2 === 0) {
    even++;
  } else {
    odd++;
  }
}

console.log(other);
console.log(even);
console.log(odd);