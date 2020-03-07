const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

function decode(expr) {
    const ten = '10';
    const eleven = '11';
    const dot = '.';
    const dash = '-';
    const space = '**********';

    const splittedArray = expr.split('').map((el, indx) => {
        return (indx % 10 === 0 && indx !== 0) ? ',' + el : el;
    }).join('').split(',');

    const splittedArrayIntoNumbers = splittedArray.map((element) => {
        return element.split('').map((elm, indx) => {
            return (indx % 2 === 0 && indx !== 0 && elm !== '*') ? ',' + elm : elm;
        }).join('').split(',');
    });

    const dotsAndDashes = splittedArrayIntoNumbers.map((e) => {
        return e.map((em) => {
            if (em === ten) {
                return dot;
            }
            if (em === eleven) {
                return dash;
            }
            if (em === space) {
                return space;
            }
        }).join('');
    });

    return morseArray = dotsAndDashes.map((el) => {
        for (let letter in MORSE_TABLE) {
            if (letter === el) {
                return MORSE_TABLE[letter]
            }
        }
        if (el === space) {
            return ' '
        }
    }).join('');
}

module.exports = {
    decode
}