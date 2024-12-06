const greeting = require('./getGreetings');  

const introducePerson = (name, age) => {
  const greetingMessage = greeting.getGreeting(name); 
  return `${greetingMessage}!! Happy ${age}th birthday Queen.`;
};

module.exports = { introducePerson };
