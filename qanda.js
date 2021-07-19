
function nextQuestion() {
    var randoQ = questions[Math.floor(Math.random() * questions.length)]
    var title = document.querySelector('#ques')
    var choices = document.querySelector('.choices ul')

    title.textContent = randoQ.title
    choices.innerHTML = randoQ.choices.map(choices => `<li>${choices}</li>`).join('')
  }
  document.querySelector('#next-btn').addEventListener('click', nextQuestion)


  //Quiz Questions

  let questions = [
      {
      numb: 1,
      title:"In a Window event, which property will display a message and an 'OK' and a 'Cancel' button?",
      choices: [ "prompt()", "alert()", "confirm()", "getSelection()"],
      answer:"confirm()"
  },
      {
      numb: 2,
      title:"In the console, which object method outputs a message?",
      choices: [ "log()", "info()", "assert()", "clear()"],
      answer:"log()"
  },
      {
      numb: 3,
      title:"In Javascript, there are 7 primitive types of data. These include objects, strings, numbers, _______, undefined, ______ and ______.",
      choices: [ "symbols, functions, none", "text, operators, booleans", "symbols, data, null", "booleans, symbols, null"],
      answer:"booleans, symbols, null",
  },
      {
      numb: 4,
      title:"Which Global function converts a string to a number?",
      choices: [ "parseFloat()", "parseInt()", "Number()", "eval()"],
      answer:"parseInt()"
  },
      {
      numb: 5,
      title:"Which statement marks a block of statements to be executed depending on a condition?",
      choices: [ "if...else if...else", "for...in", "for...else", "try...catch...finally"],
      answer:"if...else if...else"
  },
      {
      numb: 6,
      title:"This statement declares a variable inside brackets {} scope.",
      choices: [ "const", "var", "break", "let"],
      answer:"let",
  },
      {
      numb: 7,
      title:"Which string method returns the character at a specified index?",
      choices: [ "match()", "indexOf()", "startsWith()", "charAt()"],
      answer:"charAt()",
  },
      {
      numb: 8,
      title:"In an array, this method joins 2 or more arrays, but does not change the existing arrays.",
      choices: [ "join()", "slice()", "concat()", "splice()"],
      answer:"concat()",
  }];
