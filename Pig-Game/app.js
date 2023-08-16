/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game.

*/

//Declaring variables for our project.
var scores, roundScore, activePlayer, gamePlaying, finalScore, value;
var scores, roundScore, activePlayer, gamePlaying, finalScore, value;

 
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamePlaying) {  
        value ? finalScore = value : finalScore = 20; 
        // 1) Random Number 
        var dice = Math.floor(Math.random() * 6) + 1;
        // console.log(dice);

        // 2) Display the result 
        var diceDom = document.querySelector('.dice');
        diceDom.style.display = 'block';
        diceDom.src = 'dice-' + dice + '.png';

        // 3) Update the round score if the rolled number was not a 1.
        if (dice !== 1) { 
            //Add score  
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;

        } else {
            //Next player  
            nextPlayer();
        }
    }
});

var dice, activePlayer, roundScore, domImg, scores, state;
scores = [0, 0];
roundScore = 0;
activePlayer = 0;

document.querySelector('.btn-roll').addEventListener('click', function () {
    if (state) {
        dice = Math.floor(Math.random() * 6) + 1;
        domImg = document.querySelector('.dice');
        domImg.style.display = 'block';
        domImg.src = 'dice-' + dice + '.png';
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
        }

        else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    scores[activePlayer] += roundScore;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    if (scores[activePlayer] >= 20) {
        document.querySelector('#name-' + activePlayer).textContent = 'winner';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        // document.querySelector('#current-'+activePlayer).textContent = '0';
        roundScore = 0;
        gamePlaying = false; 
    }
    else { 
        nextPlayer();

    }
});

// document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    roundScore = 0;
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init)

function init() {
    //Variables for our game.

    scores = [0, 0];
    activePlayer = 0; 
    roundScore = 0;
    gamePlaying = true;
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
}


  
  

// var Person = function(name,yearOfBirth,job) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.calculateAge = function(){
//         console.log(2016-this.yearOfBirth);
//     } 
// }

// var john = new Person('john',1990,'teacher');



// var name = 'Ahmad';
// 
// function printName() {
//     var name = 'mahmood';
//     console.log(this.name);
//     console.log(this.age);
// } 

// var printName = function () {
//     var name = 'mahmood';
//     console.log(this.name);
//     console.log(this.age);
// }
// printName();



// var Person = function (name, job, yearOfBirth) {
//     this.name = name;
//     this.job = job;
//     this.yearOfBirth = yearOfBirth;
// }

// Person.prototype.calculateAge = function () {
//     console.log(2020 - this.yearOfBirth);
// };

// Person.prototype.printName = function () {
//     console.log(this.name);
// }

// Person.prototype.fatherName = 'Abdul Karim';

// var john = new Person('john', 'Mechanic', 1990);
// john.calculateAge();
// console.log(john.fatherName);
// console.log(john);
// var jane = new Person('Jane', 'Musicion', 1998);
// jane.calculateAge();
// console.log(jane.fatherName);


// var mike = new Person('Mike', 'Soccer Player', 2000);
// mike.calculateAge();
// console.log(mike.fatherName);

//NOtes 
/**
 * Person's function contructor
 * object's function contructor
 * Creating an object with the function contructor
 * creating an object with Object.create() method.
 * A varaible that is assingend an aobject always holds a reference to the object.
 */


// var family = function(father,mother,sons,daughters){
//     this.father = father;
//     this.mother  = mother;
//     this.sons  = sons;
//     this.daughters = daughters;  
//     this.work = function() {
//         console.log("I work every day");
//     }
// }  



// family.prototype.work  = function() {
//     console.log(`Our father is ${this.father}`);
// };

// family.prototype.study = function() {
//     console.log(`${this.father} has ${this.sons} sons and they study at school`);
// }; 

// family.prototype.homeMaker = function() { 
//     console.log(`${this.father}'s wife is ${this.mother}`);
// }; 


// var john = new family('John','Milane',2,3);
// john.work();
// john.study();
// john.homeMaker();
// console.log(john);


// var Person = {
//     work: function() {
//         console.log("I work every day");
//     },
//     study: function() {
//         console.log("I study at school");
//     },
//     play: function() {
//         console.log("My favorite play is soccer");
//     }
// }

// var student = Object.create(Person);
// student.work();
// student.play();
// student.study();
// student.name ='Karim';
// student.job = 'Developer';
// student.age = 19;
// console.log(student.job);


// var yearsTwo = [1990, 1998, 1994, 1992, 1970];
// function calculateAges(arr, fn) {
//     var newAges = [];
//     for (var i = 0; i < arr.length; i++) {
//         newAges.push(fn(arr[i]));
//     }

//     return newAges;
// }

// function calculateAge(dateOfBirth) {
//     return 2020 - dateOfBirth;
// }

// var calculatedAges = calculateAges(yearsTwo, calculateAge);
// console.log(calculatedAges);


// function interviewQuestionFunction(job) {
//     if (job === 'teacher') {
//         return function (name) {
//             console.log("What do you teach, " + name);
//         }
//     } else if (job === 'designer') {
//         return function (name) {
//             console.log(name + ', Would you tell us what UX design is');
//         }
//     } else if (job === 'player') {
//         return function (name) {
//             console.log(name + ", Would tell us what do you play");
//         }
//     }
// }

// interviewQuestionFunction('teacher')('Ahmad');
// interviewQuestionFunction('designer')('Karim');
// interviewQuestionFunction('player')('Mahmood');


// var years = [1990, 2000, 2010, 1980, 1970];
// function arrayCalc(arr, fn) {
//     var arrres = [];
//     for (var i = 0; i < arr.length; i++) {
//         arrres.push(fn(arr[i]));
//     }
//     return arrres;
// }

// function calculateAge(age) {
//     return 2020 - age;
// }

// function isFullAge(age) {
//     return age > 18;
// }

// function maxHeartRate(age) {
//     return 206.9 - (0.65 * age);
// }




// var ages = arrayCalc(years, calculateAge);
// var legalAges = arrayCalc(ages, isFullAge);
// var heartRate = arrayCalc(ages, maxHeartRate);
// console.log(ages);
// console.log(legalAges);
// console.log(heartRate);

//Immediately invoked functions or IEFE.
// (function(name){
//     var score = 2323;
//     console.log("Your score is "+score);
// })('Karim')



// function retiremnet(retiremnetAge) {
//     var a = 'Your retiremnt age is';
//     return function (yearOfBirth) {
//         var age = 2020 - yearOfBirth;
//         console.log(retiremnetAge - age) + a;
//     }
// }
// retiremnet(66)(1990);

// function interview(job) {
//     return function (name) {
//         if (job === 'Designer') {
//             console.log(name + " would you explain us what ux is");
//         } else if (job === 'Teacher') {
//             console.log(`Dear ${name} what do you teach`);
//         } else if (job === 'Coder') {
//             console.log(name + ", Which language do you progarm with");
//         }
//     }
// }

// interview('Coder')('Karim');

//Wash your head in the morning 
//Activate your 1GB inernet package. 



// var john = {
//     name: 'John',
//     job: 'Developer',
//     age: 23,
//     work: function (hours) {
//         console.log(`${this.name} works for ${hours} hours in a day`);
//     },
//     study: function (hours) {
//         console.log(`${this.name} studies for ${hours} hours in a day`);
//     }
// }

// var Milanie = {
//     name: 'Milanies',
//     job: 'Designer',
//     age: 35
// }



// john.work.call(this,'Play','See');
// john.work.apply(this,['Variable','formal']);
// john.work.bind(this,'play')('see');
// john.work.call();
// hours.work.apply(this,'good','great');

// hours.work.apply(this,'play','see');
// hours.work.bind(this,'play');
// hours.work.bind(this,'play','see');






// john.work.call(Milanie, 5);
// john.study.call(Milanie, 6);
// var arr = [5, 6];
// john.work.apply(Milanie, arr);
// 
// var Besmellah = {
//     name: 'Besmellah',
//     job: 'Developer',
//     age: 25,
//     play: function() {
//         console.log("I play soccer once in a weak");
//     },
//     work : function() {
//         console.log("I work in my favorite company");
//     },
//     stay : function() {
//         console.log("Mostly I like to stay at the company");
//     }
// }

// Besmellah.stay();
// I play two times in a day.
// We like to see you at home .
// john.work.bind(john, 5)(5);
// john.work.bind(Milanie, 4)(6);
// We want to be at home.


// var john = {
//     name: 'john',
//     age: 23,
//     job: 'Teacher',
//     presentaion: function (style, timeOfDay) {
//         if (style === 'formal') {
//             console.log(` Good ${timeOfDay}
//              ladies and gentlements!
//              I'm  ${this.name} and 
//              I am a ${this.job} and 
//              I am ${this.age} years old`);
//         } else if (style === 'friendly') {
//             console.log(` Hey What's up?
//             I'm  ${this.name} 
//             and I'm a ${this.job} 
//             and I'm ${this.age} years old
//             `);
//         }
//     }

// }


// var Emily = {
//     name: "Emilay",
//     age: 25,
//     job: 'Designer'
// }

//  john.presentaion('formal','morning');
//    console.log(testCall);

// var johnFormal =    john.presentaion.bind(Emily, 'friendly');
// johnFormal('afternoon');


// var years = [1990, 1998, 2010, 1979, 1995];
// function arrayCalc(arr, fn) {
//     var newArray = [];
//     for (var i = 0; i < arr.length; i++) {
//         newArray.push(fn(arr[i]));
//     }

//     return newArray;
// }


// function calculateAge(el) {
//     return 2020 - el;
// }


// function isFullAge(el) {
//     return el >= 18;
// }


// var ages = arrayCalc(years, calculateAge);
// console.log(ages);
// var fullAges = arrayCalc(ages, isFullAge);
// console.log(fullAges);

// function ageCalculation(arr, fn) {
//     var newElements = [];

//     for (var i = 0; i < arr.length; i++) {
//         newElements.push(fn(arr[i]));
//     }

//     return newElements;
// }

// function calculateAge(age) {
//     return 2020 - age;
// }

// function legalAge(limit, age) {
//     return age >= limit;
// }


// var newAges = ageCalculation(years, calculateAge);
// console.log(newAges);

// var legalAges = ageCalculation(newAges, legalAge.bind(ageCalculation, 20));
// console.log(legalAges);


//Challenge Time 




// var questions = [
//     'What is the best porgramming language in the world',
//     'Where JS language is runned on',
//     'How do describe programming',
//     'Where is microsoft located',
//     'Where do you study CS',

// ];

// var randomNum = Math.floor(Math.random() * questions.length);
// var question = questions[randomNum];

// printQuestion(randomNum, question);
// var userValue = window.prompt();
// printRightWrong(randomNum, userValue);


// function printQuestion(randNum, Qu) {
//     if (randNum === 0) {
//         console.log(`
//         ${Qu}
//         1 : JS
//         2: Python
//         3: PHP 
//         `);

//     } else if (randNum === 1) {
//         console.log(`
//             ${Qu}
//             1: On Browser
//             2: On IDE
//         `);
//     } else if (randNum === 2) {
//         console.log(`
//         ${Qu}  
//         1: Tedios
//         2: Fun
//         3: Bored
//         `);
//     } else if (randNum === 3) {
//         console.log(`
//             ${Qu}
//             1: Iran
//             2: America
//             3: Tailand 
//         `);
//     } else if (randNum === 4) {
//         console.log(`
//             ${Qu}
//             1: At school
//             2: At University 
//             3: At home
//         `);
//     }
// }


// function printRightWrong(randNum, value) {
//     if (randNum == 0 && value == 1) {
//         console.log("Correct Answer");
//     } else if (randNum == 1 && value == 1) {
//         console.log("Correct Answer");
//     } else if (randNum == 2 && value == 2) {
//         console.log("Correct Answer");
//     } else if (randNum == 3 && value == 2) {
//         console.log("Correct Answer");
//     } else if (randNum == 4 && value == 1) {
//         console.log("Correct Answer");
//     } else console.log("Wrong Answer");
// }


// function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// Question.prototype.displayQestion = function () {
//     console.log(this.question);
//     for (var i = 0; i < this.answers.length; i++) {
//         console.log(i + ' : ' + this.answers[i]);
//     }
// }


// Question.prototype.answer = function (ans) {
//     if (ans === this.correct) {
//         console.log("Correct Answer");
//     } else console.log("Wrong Answer");
// }

// var q1 = new Question('Is JS the best programming language in the world', ['Yes', 'No'], 0);
// var q2 = new Question('What is the name of this course\'s teacher', ['John', 'Jane', 'Jonas'], 2);
// var q3 = new Question('What does best describe coding', ['cool', 'fun', 'tedious', 'boring'], [1]);
// var q4 = new Question('What does JS stand for', ['Java and XML', 'Java Script', 'Machine Learning']);
// var questions = [q1, q2, q3, q4];

// var radNum = Math.floor(Math.random() * questions.length);
// questions[radNum].displayQestion();
// var answer = parseInt(prompt());
// questions[radNum].answer(answer);


// function Question(question, answers, correct) {
//     this.question = question;
//     this.answers = answers;
//     this.correct = correct;
// }

// Question.prototype.displayQuestion = function () {
//     console.log(this.question); 
//     for(var i = 0; i < this.answers.length; i++){
//         console.log(this.answers[i]);
//     } 
// }

// var q1 = new Question('What is the best programming language in the world',['Java','Java Script','Python'],'Java Script')
// var q2 = new Question('Is programming fun',['Yes','No'],'Yes');
// var q3 = new Question('Where do you learn programming',['At school','At home','At the universicy'],['At the university']);

// var questions = [q1,q2,q3];
// var randomNumber = Math.floor(Math.random() * questions.length);
// questions[randomNumber].displayQuestion();


// var Person = function (name, yearOfBirth, job, sleepingHours, tvHours, greeting) {
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
//     this.sleepingHours = sleepingHours;
//     this.tvHours = tvHours;
//     this.greeting = greeting;
// }

// Person.prototype.calculatAge = function () {
//     return 2020 - this.yearOfBirth;
// }

// Person.prototype.sleep = function () {
//     console.log(`${this.name} sleeps for ${this.sleepingHours} hours`);
// }

// Person.prototype.watchTv = function () {
//     console.log(`${this.name} watches TV for ${this.tvHours} hours every night`);
// }

// Person.prototype.eat = function () {
//     console.log(`${this.name} eats pizza and chicken`);
// }

// Person.prototype.country = 'Afghanistan';

// var mike = new Person('Mike', 1990, 'Designer', 8, 2, 'Hello');
// var jane = new Person('Jane', 1998, 'Developer', 7, 3, 'Hi');
// var jorger = new Person('Jorge', 1999, 'Analyzer', 6, 1.5, 'What\'s up');

// mike.learnEnglish = function () {
//     console.log(this.name + " studies English in Iqra Academy");
// } 

// console.log(jane.calculatAge());
// console.log(mike.calculatAge());
// console.log(jorger.calculatAge());

// mike.learnEnglish();
// mike.sleep();
// mike.watchTv();
// mike.eat();
// console.log('When greeting mike says ' + mike.greeting + ' !');
// console.log('Country :  ' + mike.country);

   

// var Animal = {
//     eat: function() {
//         console.log(this.name +" eats every day");
//     },

//     work : function() {
//         console.log(this.name +'does not work');
//     }
// }

// var properties = {
//     name: {value:'cat'},
//     category : {value: 'animal'}
// }     
   
// var cat =  Object.create(Animal,properties);
// cat.eat(); 
  




  






















