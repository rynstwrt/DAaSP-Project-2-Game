let shouldFadeIn = false;
const backgroundTransitionDelaySeconds = 1;
const backgroundTransitionSeconds = 2;
const narratorColor = "#FF6600";

// Set the frame on the screen
function setFrame(bigtext, option1text, option2text, fadeToBlack=false, isNarrator=false, smallerFont=false)
{
    option1.style.animation = "";
    option2.style.animation = "";
    option1.textContent = option1text;
    option2.textContent = option2text;
    big.textContent = "";

    if (smallerFont && !big.classList.contains("smaller-font"))
    {
        big.classList.add("smaller-font");
    }

    if (!smallerFont && big.classList.contains("smaller-font"))
    {
        big.classList.remove("smaller-font");
    }

    if (isNarrator && !option1.classList.contains("narrator-option"))
    {
        option1.classList.add("narrator-option");
        option2.classList.add("narrator-option");
    }

    if (!isNarrator && option1.classList.contains("narrator-option"))
    {
        option1.classList.remove("narrator-option");
        option2.classList.remove("narrator-option");
    }

    if (shouldFadeIn)
    {
        document.body.style.backgroundColor = isNarrator ? narratorColor : "#FFFC00";
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
let screenIndex = 0;
function onOptionClick(isFirstOption)
{
    if (isTyping) return;

    if (screenIndex === screens.length)
    {
        document.body.style.backgroundColor = "#505050";
        big.textContent = "";
        big.classList.remove("smaller-font");
        setTimeout(() =>
        {
            // type thank you message
            typeText("Hey,_ thanks for playing!").then(() =>
            {
                // show sources
                const sources = document.getElementById("sources");
                sources.style.transition = "opacity .5s ease-in-out";
                sources.style.pointerEvents = "all";
                sources.style.opacity = "1";
            });
        }, (backgroundTransitionSeconds + backgroundTransitionDelaySeconds) * 1000);
        return;
    }

    const screen = screens[screenIndex];

    if (isSecondPart)
    {
        ++screenIndex;
        isSecondPart = false;
        const option = (isFirstOption) ? screen.option1 : screen.option2;
        setFrame(option.bigtext, option.option1text, option.option2text, screen.fadetoblack, screen.narrator, screen.smallerfont);
        return;
    }

    isSecondPart = true;
    setFrame(screen.bigtext, screen.option1.text, screen.option2.text, false, screen.narrator, screen.smallerfont);
}

option1.addEventListener("click", () => { onOptionClick(true); });
option2.addEventListener("click", () => { onOptionClick(false); });



const smallTextMode = false;
const endingMode = true;

// Handle on first load (click anywhere to begin)
// Sets up audio for texthandler to deal with.
const audio = new Audio("text.mp3");
audio.volume = .25;
document.body.addEventListener("click", () =>
{
    if (endingMode)
    {
        screenIndex = screens.length - 1;
    }

    if (smallTextMode)
    {
        const screen = screens.filter(x => x.hasOwnProperty("smallerfont"))[0];
        setFrame(screen.bigtext, screen.option1.text, screen.option2.text, screen.fadetoblack, screen.narrator, screen.smallerfont)
        return;
    }

    const screen = screens[screenIndex];
    setFrame(screen.bigtext, screen.option1.text, screen.option2.text, screen.fadetoblack, screen.narrator, screen.smallerfont);
}, { once: true });