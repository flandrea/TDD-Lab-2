
describe ('translate', function() {
    // word starting with a
    it("word starting with a", function() {
        expect(translate('andrea')).toEqual('andreaway');
    })

    // word starting with e
    it("word starting with e", function() {
        expect(translate('emergency')).toEqual('emergencyway');
    })

    // word starting with u
    it("word starting with u", function() {
        expect(translate('under')).toEqual('underway');
    })

    // word starting with E converted to lowercase
    it("word starting with E", function() {
        expect(translate('energetic')).toEqual('energeticway');
    })

    // word starting with A converted to lowercase
    it("word starting with A", function() {
        expect(translate('alligator')).toEqual('alligatorway');
    })

    // word with one consonant before vowel
    it("word with one consonant before vowel", function() {
        expect(translate('lake')).toEqual('akelay');
    })

    // word with 2 consonant before vowel
    it("word with two consonant before vowel", function() {
        expect(translate('cranky')).toEqual('ankycray');
    })

    // word with three consonant before vowel
    it("word with three consonant before vowel", function() {
        expect(translate('thrasher')).toEqual('asherthray');
    })
})

