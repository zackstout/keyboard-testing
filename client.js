
var left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v'];
var right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'b', 'n', 'm'];

var dvor_left = ['p', 'y', 'a', 'o', 'e', 'u', 'i', 'q', 'j', 'k'];
var dvor_right = ['f', 'g', 'c', 'r', 'l', 'd', 'h', 't', 'n', 's', 'x', 'b', 'm', 'w', 'v', 'z'];

console.log(dvor_left.length + dvor_right.length);

function onlyLeft(word) {
  for (var i=0; i < word.length; i++) {
    if (!left.includes(word[i])) {
      return false;
    }
  }
  return true;
}

function onlyRight(word) {
  for (var i=0; i < word.length; i++) {
    if (!right.includes(word[i])) {
      return false;
    }
  }
  return true;
}

// Using external text file:
var arr = text.split('\n');

var sample = ['hi', 'there', 'you', 'ass', 'silly', 'dog', 'man', 'who', 'is', 'my', 'friend'];
var leftArr = [];
var rightArr = [];
var ambiArr = [];

arr.forEach(word => {
  if (onlyLeft(word)) leftArr.push(word);
  else if (onlyRight(word)) rightArr.push(word);
  else ambiArr.push(word);
});

console.log(leftArr, rightArr, ambiArr);

// Find largest word in each set:
var leftMax = '';
var rightMax = '';

leftArr.forEach(word => {
  if (word.length > leftMax.length) leftMax = word;
});

rightArr.forEach(word => {
  if (word.length > rightMax.length) rightMax = word;
});

console.log(leftMax, rightMax);





function scrambleKeys() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  var left = [];
  var leftChosen = [];
  while (left.length < 13) {
    var index = Math.floor(Math.random() * alphabet.length);
    // Otherwise just try again (i.e. re-enter loop):
    if (!leftChosen.includes(index)) {
      leftChosen.push(index);
      left.push(alphabet[index]);
      alphabet.splice(index, 1);
    }
  }
  return {
    left: left,
    right: alphabet
  };
}

function checkOneHandWords(keyboard) {

}

var keyboard = scrambleKeys();
console.log(keyboard);



// $.ajax({
//   type: "GET",
//   url: "https://wordsapiv1.p.mashape.com/words?random=true"
// }).done(res => {
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });



// WORDS API LOOKS AWESOME FOR SHAKESPEARE, BETTER THAN SENTIMENT PACKAGE.










// chillin
