 //Put files here that I need main to grab from

 var inquirer = require('inquirer');
 var request = require('request');

var Word = require('./word.js');
var prompt = require('prompt');

console.log("***************************************");

console.log(" Hangman!");
console.log("***************************************");
console.log("Theme Minnesota");
console.log("***************************************");
console.log("Guess a letter to a word that has to do with this Great state!");
console.log("-----------------------------");
prompt.start();



hangman = {
  
wordBank: ['minnesota', 'cold', 'nice', 'lakes', 'snow'],

  wordsWon: 0,
  guessesRemaining: 10,
  currentLtr: "_",
  
  startGame: function (wrd) {
    this.resetGuesses();
    this.currentLtr = new Word(this.wordBank[Math.floor(Math.random()* this.wordBank.length)]);
    this.currentLtr.getLet();
    this.promptUser();
  },

  resetGuesses: function(){
    this.guessesRemaining = 10;
  },

  promptUser: function(){
    var self = this;
    prompt.get(['guessLtr'], function(err, result){
      console.log("You guessed: " + result.guessLtr);
      var manyGuessed = self.currentLtr.checkLetter(result.guessLtr);

      if(manyGuessed ==0) {
        console.log("WRONG");
        self.guessesRemaining--;
        
      } else {
        console.log("CORRECT");
          if(self.currentLtr.findWord()){
            console.log("You won!");
            console.log("-------------------");
            return;
          }
      }

      console.log("Guesses remaining: " + self.guessesRemaining);
      console.log("-------------------");
      if((self.guessesRemaining > 0) && (self.currentLtr.found == false)){
        self.promptUser();
      }
      else if(self.guessesRemaining ==0){
        console.log("Game over. Correct Word ", self.currentLtr.target);
      } else {
        console.log(self.currentLtr.wordRender());
      }
    });

  }


};

hangman.startGame();