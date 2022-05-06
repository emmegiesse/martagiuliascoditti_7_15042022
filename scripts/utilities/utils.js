// Butons
function launchButton(btn, open, close, hiddenPart) {
    btn.addEventListener('click', () => {
        this.displayBtn(btn);
        this.hideArrow(open);
        this.displayHidden(hiddenPart);
    });

    close.addEventListener('click', () => {
        this.hideButtonsOnClick(btn, open, hiddenPart);
    })
}

function hideButtonsOnClick(btn, open, hiddenPart) {
    this.hideBtn(btn);
    this.displayArrow(open);
    this.hideHidden(hiddenPart);
}

function displayBtn(btn) {
    return btn.style.width = "35rem";
}

function hideBtn(btn) {
    return btn.style.width = "11rem";
}

function displayArrow(open) {
    return open.style.display = 'block';
}

function hideArrow(open) {
    return open.style.display = 'none';
}

function displayHidden(hiddenPart) {
    return hiddenPart.style.display = 'block';
}

function hideHidden(hiddenPart) {
    return hiddenPart.style.display = 'none';
}