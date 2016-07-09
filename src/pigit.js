//Move the first letter of each word to the end of it, then add 'ay' to the end of the word.



var testString = 'Pig latin is cool';

function pigIt( string ) {
    var stringArray = string.split(" ");
    var newArray = stringArray.map(function( word ) {
        var firstLetter = word[0];
        var newPig = word.slice( 1, word.length );
        newPig = newPig + firstLetter + 'ay';
        console.log( newPig );
        return newPig;
    });

    return newArray.join(" ");
}

pigIt(testString);
