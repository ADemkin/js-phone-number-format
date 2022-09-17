const formatText = (n) => {
    /* Format phone number from raw numbers
     * to more readable format
     * +7 (916) 123-45-67
     * ^  ^  ^  ^   ^  ^ ^
     * 1  4  7  10  14 17 18
     */
    const original = n
    n = (n.length > 0 & (n[0] === '8' | n[0] === '7')) ? '+7 ' + n.slice(1) : n
    // +7_
    n = (n.length > 3) ? n.slice(0,3) + '(' + n.slice(3) : n
    // +7_(916
    n = (n.length > 6) ? n.slice(0,7) + ') ' + n.slice(7) : n
    // +7_(916)_123
    n = (n.length > 12) ? n.slice(0,12) + '-' + n.slice(12) : n
    // +7_(916)_123-12
    n = (n.length > 15) ? n.slice(0,15) + '-' + n.slice(15) : n
    // +7_(916)_123-12-34
    n = (n.length > 18) ? '+' + original : n
    return n
};

const filterNumbers = (text) => {
    return text.replace(/\D/g, '');
};

const phoneInput = (event) => {
    const phoneInput = event.target;
    let text = phoneInput.value;
    text = filterNumbers(text);
    // console.debug(event)
    // if (event.inputType === 'deleteContentBackward') {
    //     if (text.length == 1 || text.length === 4) {
    //         console.debug('length is 1 or 4', text, event)
    //         text = text.slice(0, text.length - 1)
    //         console.debug('new text', text)
    //     }
    // }
    // console.log(text)
    text = formatText(text);
    phoneInput.value = text
};
const phoneKeyDown = (event) => {
    // console.log(event)
    // const backspace = 8
    // if (event.keyCode = backspace) event.preventDefault()
}
document.querySelector('input').addEventListener('input', phoneInput)
document.querySelector('input').addEventListener('keydown', phoneKeyDown)
