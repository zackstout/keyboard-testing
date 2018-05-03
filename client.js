
var left = ['q', 'w', 'e', 'r', 't', 'a', 's', 'd', 'f', 'g', 'z', 'x', 'c', 'v'];
var right = ['y', 'u', 'i', 'o', 'p', 'h', 'j', 'k', 'l', 'b', 'n', 'm'];

console.log(left.length + right.length);

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
