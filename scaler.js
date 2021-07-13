function numToNote(num) {
    switch (num) {
        case 0:
            return 'A';
        case 1:
            return 'A#/Bb';
        case 2:
            return 'B';
        case 3:
            return 'C';
        case 4:
            return 'C#/Db';
        case 5:
            return 'D';
        case 6:
            return 'D#/Eb';
        case 7:
            return 'E';
        case 8:
            return 'F';
        case 9:
            return 'F#/Gb';
        case 10:
            return 'G';
        case 11: 
            return 'G#/Ab';
    } 
  }

// chooses a random number within the length of the interval list
function chooseInterval(intlist) {
    randomInterval = Math.floor(Math.random() * intlist.length);
    return randomInterval;
}

// chooses a random number 0-11
function chooseKey(){
    randomKey = Math.floor(Math.random() * 12);
    return randomKey;
}

// chooses a scale based on the chooseInterval return
function nameInterval(randomIn){
    switch (randomIn) {
        case 0:
            return 'Major';
        case 1:
            return 'Minor';
        case 2:
            return 'Dorian';
        case 3:
            return 'Phrygian';
        case 4:
            return 'Lydian';
        case 5:
            return 'Mixolydian';
        case 6:
            return 'Locrian';
        case 7:
            return 'Melodic Minor';
        case 8:
            return 'Lydian Augmented';
        case 9:
            return 'Lydian Dominant';
        case 10:
            return 'Altered';
        case 11:
            return 'Phrygian Dominant';
        case 12:
            return 'Harmonic Minor';
        case 13:
            return 'Pentatonic Minor';
    }
}

// intervals
majorInterval = [0, 2, 4, 5, 7, 9, 11, 12];
minorInterval = [0, 2, 3, 5, 7, 8, 10, 12];
dorianInterval = [0, 2, 3, 5, 7, 9, 10, 12];
phrygianInterval = [0, 1, 3, 5, 7, 8, 10, 12];
lydianInterval = [0, 2, 4, 6, 7, 9, 11, 12];
mixolydianInterval = [0, 2, 4, 5, 7, 9, 10, 12];
locrianInterval = [0, 1, 3, 5, 6, 8, 10, 12];

melodicMinorInterval = [0, 2, 3, 5, 7, 9, 11, 12];
lydianAugmentedInterval = [0, 2, 4, 6, 8, 9, 11, 12];
lydianDominantInterval = [0, 2, 4, 6, 7, 9, 10, 12];
alteredInterval = [0, 1, 3, 4, 6, 8, 10, 12];
phrygianDominantInterval = [0, 1, 4, 5, 7, 8, 10, 12];
harmonicMinorInterval = [0, 2, 3, 5, 7, 8, 11, 12];
pentatonicMinor = [0, 3, 5, 7, 10, 12];


INTERVAL_LIST = [majorInterval, minorInterval, dorianInterval, phrygianInterval,
lydianInterval, mixolydianInterval, locrianInterval, melodicMinorInterval, 
lydianAugmentedInterval, lydianDominantInterval, alteredInterval, phrygianDominantInterval,
harmonicMinorInterval, pentatonicMinor];


A = 0;
ASharp = 1;
B = 2;
C = 3;
CSharp = 4;
D = 5;
DSharp = 6;
E = 7;
F = 8;
FSharp = 9;
G = 10;
GSharp = 11;

const key = chooseKey();
// creates scale based on chosen key
const keyScale = [key, key, key, key, key, key, key, key];

// chooses random number based on length of INTERVAL_LIST
const randomIn = chooseInterval(INTERVAL_LIST);

// finds the scale associated with random number
const name = nameInterval(randomIn);


console.log(name, 'in the key of', numToNote(key));
for (i = 0; i < (INTERVAL_LIST[randomIn]).length; i++) {
    console.log(numToNote((keyScale[i] + INTERVAL_LIST[randomIn][i]) % 12));
}


// debug
// console.log("key scale = " + keyScale);
// console.log(randomIn);
// console.log(INTERVAL_LIST[randomIn]);
