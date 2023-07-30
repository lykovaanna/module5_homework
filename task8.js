let map = new Map()

map.set('Ivan', '26 y.o.');
map.set(true, 'student');
map.set(1, '12 month');

for (let name of map.keys()) {
    console.log(`${name} - name`)
};

for (let value of map.values()) {
  console.log(`${value} - values`)
};