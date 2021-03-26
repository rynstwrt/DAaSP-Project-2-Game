// Set the frame on the screen
function setFrame(bigtext, option1text, option2text)
{
    option1.style.animation = "";
    option2.style.animation = "";

    option1.textContent = option1text;
    option2.textContent = option2text;

    typeText(bigtext).then(() =>
    {
        option1.style.animation = "fadeIn .3s ease-in-out forwards";
        option2.style.animation = "fadeIn .3s ease-in-out forwards";
        isTyping = false;
    });
}


// Handle option clicks
let isSecondPart = true;
let screenIndex = 0;
function onOptionClick(isFirstOption)
{
    if (isTyping) return;

    if (screenIndex === screens.length)
    {
        // TODO: handle end of game here
        return;
    }

    const screen = screens[screenIndex];

    if (isSecondPart)
    {
        ++screenIndex;
        isSecondPart = false;
        const option = (isFirstOption) ? screen.option1 : screen.option2;
        setFrame(option.bigtext, option.option1text, option.option2text);
        return;
    }

    isSecondPart = true;
    setFrame(screen.bigtext, screen.option1.text, screen.option2.text);
}

option1.addEventListener("click", () => { onOptionClick(true); });
option2.addEventListener("click", () => { onOptionClick(false); });


// Handle on first load (click anywhere to begin)
// Sets up audio for texthandler to deal with.
const audio = new Audio("text.mp3");
audio.volume = .25;
document.body.addEventListener("click", () =>
{
    setFrame(screens[0].bigtext, screens[0].option1.text, screens[0].option2.text);
}, { once: true });