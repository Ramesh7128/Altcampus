"use strict";

let hangManExtension = (function() {
    let sampleWords = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy",
    "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx",
    "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx",
    "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz",
    "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv",
    "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy",
    "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"]

    let level = 3;
    let timeStart = false;
    let setTimeOutHandler = '';
    let hangman = {};
    hangman['timeMins'] = 0
    hangman['timeSeconds'] = 20;

    function randomIndex(stringLength) {
        return Math.floor(Math.random() * stringLength);
    }

    function getWord() {
        let word = '';
        while (true) {
            word = sampleWords[randomIndex(sampleWords.length)];
            if (word.length > (level * 2)) {
                break;
            }
        }
        return word;
    }

    function getRandomIndex(word) {
        let pendingIndex = [];
        while (pendingIndex.length < level) {
            let indexValue = randomIndex(word.length);
            if (!(pendingIndex.includes(indexValue)) && (indexValue != 0)) {
                pendingIndex.push(indexValue);
            }
        }
        return pendingIndex.sort();
    }

    function endGame() {
        let endDiv = document.createElement('div');
        endDiv.textContent = hangman['endGameMessage'];
        document.getElementById('hangman-graphic').appendChild(endDiv);
        document.getElementById('each-letter').style.visibility = 'hidden';
        console.log(hangman['endGameType'] != 'win');
        if (hangman['endGameType'] != 'win') {
            document.querySelector('#hangman-image img').setAttribute('src', `./img/hangman6.png`);
        } else {
            document.querySelector('#hangman-image img').setAttribute('src', `./img/hangmanwin.jpg`);
        }
        clearInterval(setTimeOutHandler);
    }

    function display(word='') {
        document.getElementById('game-word').innerHTML = '';
        for (let i = 0; i < word.length; i++) {
            let newdiv = document.createElement('div');
            newdiv.dataset.letter = word[i];
            newdiv.id = `div-${i}-${word[i]}`;
            if (hangman['completedIndex'].includes(i)) {
                newdiv.classList.add('completed-box');
            }
            newdiv.classList.add('letter-box');
            document.getElementById('game-word').appendChild(newdiv);

            let contentdiv = document.createElement('div');
            contentdiv.classList.add('content-div');
            if (!(hangman['pendingIndex'].includes(i))) {
                contentdiv.textContent = word[i];
            }
            document.getElementById(`div-${i}-${word[i]}`).appendChild(contentdiv);
        }
        
        // move this to another function.
        if (hangman['pendingIndex'].length > 0) {
            document.getElementById(`div-${hangman['pendingIndex'][0]}-${word[hangman['pendingIndex'][0]]}`).classList.add('box-focus');
            document.getElementById('each-letter').focus();
            document.getElementById('each-letter').select();
        }
        if (hangman['endGameCheck']) {
            endGame();
        }
    }

    function endGameConditions() {
        if (hangman['pendingIndex'].length == 0) {
            hangman['endGameCheck'] = true;
            hangman['endGameType'] = 'win';
            hangman['endGameMessage'] = 'Hooray! Good save!';
            return true;
        } else if ((hangman['moves']) >= 6) {
            let succesDiv = document.createElement('div');
            hangman['endGameCheck'] = true;
            hangman['endGameType'] = 'moves done';
            hangman['endGameMessage'] = 'Sad, your ignorance killed him!';
            return true;
        }
        hangman['endGameCheck'] = false;
        return false;
    }

    function timer() {
        let mins = hangman['timeMins'];
        let seconds = hangman['timeSeconds'];
        seconds =  (seconds -1);
        if (seconds < 1) {
            mins = mins - 1;
            seconds = 60;
        }
        if (mins < 0) {
            hangman['endGameCheck'] = true;
            hangman['endGameType'] = 'time done';
            hangman['endGameMessage'] = 'You could have been a litte quicker, a life was at stake!!';
            endGame();
        } else {
            hangman['timeDisplay'] = `Mins: ${mins}, secs: ${seconds}`;
            hangman['timeMins'] = mins;
            hangman['timeSeconds'] = seconds;
            document.getElementById('timer').textContent = hangman['timeDisplay'];
        }
    }

    function startGame() {
        let word = getWord();
        hangman['word'] = word;
        let pendingIndex = getRandomIndex(word);
        hangman['pendingIndex'] = pendingIndex;
        hangman['completedIndex'] = [];
        hangman['moves'] = 0;
        hangman['time'] = 0;
        display(word);
    }

    document.getElementById('each-letter').addEventListener('keyup', function (event) {
        if (event.keyCode !== 13) {
            if (event.keyCode > 64 && event.keyCode <= 95) {
                document.getElementById('each-letter').value = event.key;
            }
        }
        if ((event.keyCode == 13) && (hangman['pendingIndex'].length > 0)) {
            if (!(timeStart)) {
                console.log("timer", timeStart);
                (() => {
                    timeStart = true;
                    timer();
                    setTimeOutHandler = setInterval(timer,1000);
                })();
            }
            let letter = document.getElementById('each-letter').value;
            if (letter == hangman['word'][hangman['pendingIndex'][0]]) {
                hangman['completedIndex'].push(hangman['pendingIndex'][0]);
                hangman['pendingIndex'].shift();
                display(hangman['word'])
            } else {
                hangman['moves'] += 1;
                document.querySelector('#hangman-image img').setAttribute('src', `./img/hangman${hangman['moves']}.png`);
            }

            document.getElementById('moves').textContent = `Moves: ${hangman['moves']}`;
            document.getElementById('each-letter').value = '';
            
            if (endGameConditions()) {
                display(hangman['word']);
            }
        }
    });
    return {
        start: startGame
    }
})();
hangManExtension.start();
