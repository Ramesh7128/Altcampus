let level = 3;
let sampleWords = ["abruptly", "absurd", "abyss", "affix", "askew", "avenue", "awkward", "axiom", "azure", "bagpipes", "bandwagon", "banjo", "bayou", "beekeeper", "bikini", "blitz", "blizzard", "boggle", "bookworm", "boxcar", "boxful", "buckaroo", "buffalo", "buffoon", "buxom", "buzzard", "buzzing", "buzzwords", "caliph", "cobweb", "cockiness", "croquet", "crypt", "curacao", "cycle", "daiquiri", "dirndl", "disavow", "dizzying", "duplex", "dwarves", "embezzle", "equip", "espionage", "euouae", "exodus", "faking", "fishhook", "fixable", "fjord", "flapjack", "flopping", "fluffiness", "flyby", "foxglove", "frazzled", "frizzled", "fuchsia", "funny", "gabby", "galaxy", "galvanize", "gazebo", "giaour", "gizmo", "glowworm", "glyph", "gnarly", "gnostic", "gossip", "grogginess", "haiku", "haphazard", "hyphen", "iatrogenic", "icebox", "injury", "ivory", "ivy",
    "jackpot", "jaundice", "jawbreaker", "jaywalk", "jazziest", "jazzy", "jelly", "jigsaw", "jinx",
    "jiujitsu", "jockey", "jogging", "joking", "jovial", "joyful", "juicy", "jukebox", "jumbo", "kayak", "kazoo", "keyhole", "khaki", "kilobyte", "kiosk", "kitsch", "kiwifruit", "klutz", "knapsack", "larynx", "lengths", "lucky", "luxury", "lymph", "marquis", "matrix", "megahertz", "microwave", "mnemonic", "mystify", "naphtha", "nightclub", "nowadays", "numbskull", "nymph", "onyx",
    "ovary", "oxidize", "oxygen", "pajama", "peekaboo", "phlegm", "pixel", "pizazz", "pneumonia", "polka", "pshaw", "psyche", "puppy", "puzzling", "quartz", "queue", "quips", "quixotic", "quiz",
    "quizzes", "quorum", "razzmatazz", "rhubarb", "rhythm", "rickshaw", "schnapps", "scratch", "shiv",
    "snazzy", "sphinx", "spritz", "squawk", "staff", "strength", "strengths", "stretch", "stronghold", "stymied", "subway", "swivel", "syndrome", "thriftless", "thumbscrew", "topaz", "transcript", "transgress", "transplant", "triphthong", "twelfth", "twelfths", "unknown", "unworthy", "unzip", "uptown", "vaporize", "vixen", "vodka", "voodoo", "vortex", "voyeurism", "walkway", "waltz", "wave", "wavy", "waxy",
    "wellspring", "wheezy", "whiskey", "whizzing", "whomever", "wimpy", "witchcraft", "wizard", "woozy", "wristwatch", "wyvern", "xylophone", "yachtsman", "yippee", "yoked", "youthful", "yummy", "zephyr", "zigzag", "zigzagging", "zilch", "zipper", "zodiac", "zombie"]

let hangman = {};

console.log(sampleWords.length);

function randomIndex(stringLength) {
    return Math.floor(Math.random() * stringLength);
}

function getWord() {
    let word = ''
    while (true) {
        word = sampleWords[randomIndex(sampleWords.length)];
        if (word.length > (level * 2)) {
            break;
        }
    }
    return word;
}

let word = getWord();
hangman['word'] = word;

function getRandomIndex() {
    let pendingIndex = [];
    while (pendingIndex.length < level) {
        let indexValue = randomIndex(word.length);
        if (!(pendingIndex.includes(indexValue)) && (indexValue != 0)) {
            pendingIndex.push(indexValue);
        }
    }
    return pendingIndex.sort();
}

let pendingIndex = getRandomIndex();
hangman['pendingIndex'] = pendingIndex;
hangman['completedIndex'] = [];
hangman['moves'] = 0;
hangman['time'] = 0;

function display() {
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
    if (hangman['pendingIndex'].length > 0) {
        document.getElementById(`div-${hangman['pendingIndex'][0]}-${word[hangman['pendingIndex'][0]]}`).classList.add('box-focus');
        document.getElementById('each-letter').focus();
        document.getElementById('each-letter').select();
    } else {
        let succesDiv = document.createElement('div');
        succesDiv.textContent = "Horray! Good save!";
        document.getElementById('each-letter').parentElement.replaceChild(succesDiv, document.getElementById('each-letter'));
    }

}

display();

document.getElementById('each-letter').addEventListener('keyup', function (event) {
    if (event.keyCode !== 13) {
        if (event.keyCode >=64 && event.keyCode <= 95) {
            document.getElementById('each-letter').value = event.key;
        }
    }
    if (event.keyCode == 13) {
        let letter = document.getElementById('each-letter').value;
        if (letter == word[hangman['pendingIndex'][0]]) {
            
            hangman['completedIndex'].push(hangman['pendingIndex'][0]);
            hangman['pendingIndex'].shift();
            // document.getElementById(`div-${hangman['pendingIndex'][0]}-${word[hangman['pendingIndex'][0]]}`).classList.add('box-focus');
            display()
        }
        document.getElementById('each-letter').value = '';
        hangman['moves'] += 1;
        console.log(hangman['moves']);
        if ((hangman['moves']) > 6) {
            let succesDiv = document.createElement('div');
            succesDiv.textContent = "Sad, your ignorance killed him!";
            document.getElementById('each-letter').parentElement.replaceChild(succesDiv, document.getElementById('each-letter'));
        }
    }
});

