// for of

// ["", "", ""]
// [{}, {}, {}]

// for (const element of object) {   //* ye for of ka syntax hai **
    
// }

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


// console.log(map);

for (const key of map) {
    //  console.log(key);
}

for (const [key, value] of map) {  /// ye alag alag kar ke likhne ka tarika hai
    // console.log(key, ':-', value);
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {   *** for of se object iterate nahi ho pata***
//     console.log(key, ':-', value);
    
// }