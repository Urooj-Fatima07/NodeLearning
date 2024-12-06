const person = require('./person');
const math = require('./Math');  

const result = math.add(5, 3);   

const name = "SeathHeart";
const age = 20;

const message = person.introducePerson(name, age);  
console.log(message); 
console.log(`The sum is: ${result}`);