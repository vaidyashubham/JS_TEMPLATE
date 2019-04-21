/* ES6 Collections */

/*
---------------------------------------------------------------------------------
                                Map Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
Map is a collection of keyed data items,just like an Object.
But the main difference is that Map allows keys of any type.

new Map() – creates the map.
map.set(key, value) – stores the value by the key.
map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
map.has(key) – returns true if the key exists, false otherwise.
map.delete(key) – removes the value by the key.
map.clear() – clears the map
map.size – returns the current element count.
map.keys() – returns the keys for iteration,
map.values() – returns the values for iteration,
map.entries() – returns the entries [key, value], it’s used by default in for..of.

 */

let techMap = new Map()
              .set(1,'HTML')
              .set(2,'CSS')
              .set(3,'JavaScript')
              .set(4,'JQuery')
              .set(5,'Bootstrap')
              .set(6,'Node JS');

console.log(techMap);

// get Key()
console.log(techMap.get(2));

// set Key
techMap.set(2,'React JS');
console.log(techMap);

// has key
console.log(`has key 3 ? ${techMap.has(3)}`);

// delete key
techMap.delete(2);
console.log(techMap);

// keys()
let output = 'Keys : ';
for(let key of techMap.keys()){
    output += `${key} `;
}
console.log(output);

// values()
output = 'Values : ';
for(let value of techMap.values()){
    output += `${value} `;
}
console.log(output);

// Entries
output = 'Entries : ';
for(let entry of techMap.entries()){
    output += `${entry[0]} => ${entry[1]} `;
}
console.log(output);

// clear()
techMap.clear();
console.log(techMap);

/*
---------------------------------------------------------------------------------
                                Set Collection in ECMAScript
---------------------------------------------------------------------------------
 */

/*
A Set is a collection of values, where each value may occur only once.

Set contains the following methods

new Set(iterable) – creates the set, optionally from an array of values (any iterable will do).
set.add(value) – adds a value, returns the set itself.
set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
set.has(value) – returns true if the value exists in the set, otherwise false.
set.clear() – removes everything from the set.
set.size – is the elements count.

 */

let techSet = new Set()
    .add('HTML')
    .add('HTML')
    .add('CSS')
    .add('CSS')
    .add('JavaScript')
    .add('JavaScript')
    .add('Bootstrap');
console.log(techSet);

// has
console.log(`Has HTML ? : ${techSet.has('HTML')}`);

// delete
techSet.delete('HTML');
console.log(techSet);

// size
console.log(`Size : ${techSet.size}`);

// clear
techSet.clear();
console.log(techSet);