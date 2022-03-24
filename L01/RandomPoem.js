"use strict";
var RandomPoem;
(function (RandomPoem) {
    // Arrays with subjects, verb und object
    let subject = ["Rick", "Morty", "Summer", "Beth", "Jerry", "Meeseeks", "Poopy Butthole", "Birdperson"];
    let verb = ["eats", "curses", "laughs at", "watches", "travels to", "destroys", "loves", "flies to"];
    let object = ["Spagetti with Tomatosauce", "the equinox", "Butter", "another universe", "cream of Tartar", "Highway to hell", "Marvel", "Gravel"];
    console.log(subject);
    console.log(verb);
    console.log(object);
    // For-Schleife,that counts backwards through the arrays
    for (let i = subject.length; i >= 1; i--) {
        // Declare Variable that contains value of randomized Words
        let randomPoem;
        console.log(i);
    }
    ;
    function getVerse(_subject, _verb, _object) {
        let subjectEmpty = [];
        let verbEmpty = [];
        let objectEmpty = [];
        // Randomize Words in Array. Source: https://timonweb.com/javascript/how-to-get-a-random-value-from-a-javascript-array/#:~:text=Math.floor%20%28Math.random%20%28%29%20%2A%20colors.length%29%2C%20gives%20us%20a,index%20larger%20than%20the%20length%20of%20the%20array.
        let subjectRandom = Math.floor(Math.random() * subject.length);
        let verbRandom = Math.floor(Math.random() * verb.length);
        let objectRandom = Math.floor(Math.random() * object.length);
        return;
    }
    ;
})(RandomPoem || (RandomPoem = {}));
//# sourceMappingURL=RandomPoem.js.map