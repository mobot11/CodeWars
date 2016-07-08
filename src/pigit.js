//switch the first and the last letter of a word in an array and add 'ay' to the ends

function pigIt(array) {
    array.map(function(word){
        var firstLetter = word[0];
        var lastLetter = word[word.length-1];
        word[0] = lastLetter;
        word[word.length-1] = firstLetter;
        word += 'ay';
        return word;
    });
    return array;
}


var words = ['test', 'yellow', 'building'];


console.log(pigIt(words));
