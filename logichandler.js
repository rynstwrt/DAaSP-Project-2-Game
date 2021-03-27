let shouldFadeIn = false;
const backgroundTransitionDelaySeconds = 1;
const backgroundTransitionSeconds = 2;

// Set the frame on the screen
function setFrame(bigtext, option1text, option2text, fadeToBlack=false)
{
    option1.style.animation = "";
    option2.style.animation = "";
    option1.textContent = option1text;
    option2.textContent = option2text;
    big.textContent = "";

    if (shouldFadeIn)
    {
        document.body.style.backgroundColor = "#FFFC00";
        shouldFadeIn = false;
        setTimeout(() =>
        {
            handleTypeText(bigtext, fadeToBlack);
            document.body.style.transition = "";
        }, 1000 * (backgroundTransitionSeconds));
    }
    else
    {
        handleTypeText(bigtext, fadeToBlack);
    }
}



// helper function for the setFrame function
function handleTypeText(bigtext, fadeToBlack)
{
    typeText(bigtext).then(() =>
    {
        if (fadeToBlack)
        {
            setTimeout(() =>
            {
                document.body.style.transition = `background-color ${backgroundTransitionSeconds}s ease-in-out`;
                document.body.style.backgroundColor = "black";
                setTimeout(() =>
                {
                    isTyping = false;
                    shouldFadeIn = true;
                    onOptionClick(true);
                }, (backgroundTransitionDelaySeconds + backgroundTransitionSeconds) * 1000);
            }, backgroundTransitionDelaySeconds * 1000);
        }
        else
        {
            option1.style.animation = "fadeIn .3s ease-in-out forwards";
            option2.style.animation = "fadeIn .3s ease-in-out forwards";
            isTyping = false;
        }
    });
}



// Handle option clicks
let isSecondPart = true;
let screenIndex = 14;
function onOptionClick(isFirstOption)
{
    if (isTyping || screenIndex === screens.length) return;

    const screen = screens[screenIndex];

    if (isSecondPart)
    {
        ++screenIndex;
        isSecondPart = false;
        const option = (isFirstOption) ? screen.option1 : screen.option2;
        setFrame(option.bigtext, option.option1text, option.option2text, screen.fadetoblack);
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
    setFrame(screens[screenIndex].bigtext, screens[screenIndex].option1.text, screens[screenIndex].option2.text);
}, { once: true });