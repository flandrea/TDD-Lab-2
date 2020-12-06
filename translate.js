function translate(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let newWord = "";
    let lowerCaseWord = word.toLowerCase();
    if (vowels.indexOf(lowerCaseWord[0]) > -1) {
        newWord = lowerCaseWord + "way";
        return newWord;
    } else {
        let firstVowel = lowerCaseWord.match(/[aeiou]/g) || 0;
        let vowel = lowerCaseWord.indexOf(firstVowel[0]);
        newWord = lowerCaseWord.substring(vowel) + lowerCaseWord.substring(0, vowel) + "ay";
        return newWord;
    }
}