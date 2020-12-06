function translate(word) {
    let vowels = ['a', 'e', 'i', 'o', 'u','A', 'E', 'I', 'O', 'U'];
    let newWord = "";
    if (vowels.indexOf(word[0]) > -1) {
        newWord = word + "way";
        return newWord;
    } else {
        let firstVowel = word.match(/[aeiouAEIOU]/g) || 0;
        let vowel = word.indexOf(firstVowel[0]);
        newWord = word.substring(vowel) + word.substring(0, vowel) + "ay";
        return newWord;
    }
}