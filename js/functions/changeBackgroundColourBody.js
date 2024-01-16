let changeBackgroundColourBody = () => {
    let newBackgroundColor = randomColour();
    p.innerText = newBackgroundColor;
    body.style.backgroundColor = newBackgroundColor;
}