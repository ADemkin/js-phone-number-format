const formatText = (n) => {
    /* Format phone number from raw numbers
     * to more readable format
     * +7 (916) 123-45-67
     * ^  ^  ^  ^   ^  ^ ^
     * 1  4  7  10  14 17 18
     */
    const original = n
    if (n.length > 0 && !(n[0] === '8' | n[0] === '7')) return '+' + n
    n = (n.length > 0 & (n[0] === '8' | n[0] === '7')) ? '+7' + n.slice(1) : n
    // +7_
    n = (n.length > 2) ? n.slice(0,2) + '(' + n.slice(2) : n
    // +7(916
    n = (n.length > 6) ? n.slice(0,6) + ')' + n.slice(6) : n
    // +7(916)123
    n = (n.length > 10) ? n.slice(0,10) + '-' + n.slice(10) : n
    // +7(916)123-12
    n = (n.length > 13) ? n.slice(0,13) + '-' + n.slice(13) : n
    // +7(916)123-12-34
    n = (n.length > 16) ? '+' + original : n
    return n
};

const filterNumbers = (text) => {
    return text.replace(/\D/g, '');
};

const phoneInput = (event) => {
    const phoneInput = event.target;
    let text = phoneInput.value;
    text = filterNumbers(text);
    text = formatText(text);
    phoneInput.value = text
};

document.querySelector('input').addEventListener('input', phoneInput)
