let randomColour = () => {
    let digits = '0123456789ABCDEF';
    let colourHex = '#';

    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * 16);
        colourHex += digits[randomIndex];
    }

    return colourHex

}