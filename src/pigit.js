//switch the first and the last letter of a word in an array and add 'ay' to the ends

function pigIt(array) {

    var newArray = array.map(function(word) {
        var firstLetter = word[0];
        var lastLetter = word[word.length - 1];
        var newPig = word.slice(1, word.length - 1);
        newPig = lastLetter + newPig + firstLetter + 'ay';
        return newPig;
    });
    
return newArray;
}


var words = ['test', 'yellow', 'building'];

console.log(pigIt(words));
