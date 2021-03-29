// User variables
let charDelay = 50;
const delayChar = "_";
let delayCharDelay = 300;
const newLineChar = "|";
let newLineDelay = 200;

// Internal variables
const big = document.getElementById("big-text");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");

// Typing function
let isTyping = false;
function typeText(text)
{
    return new Promise(resolve =>
    {
        isTyping = true;
        const chars = text.split("");
        let totalAdditionalDelay = 0;

        for (let i = 0; i < chars.length; ++i)
        {
            const isDelayChar = chars[i] === delayChar;
            const isNewLineChar = chars[i] === newLineChar;

            totalAdditionalDelay += isDelayChar ? delayCharDelay : 0;
            totalAdditionalDelay += isNewLineChar ? newLineDelay : 0;

            setTimeout(() =>
            {
                big.textContent += (isDelayChar || isNewLineChar ? "" : chars[i]) + (isNewLineChar ? "\r\n" : "");

                if (!isNewLineChar && chars[i] !== " " && !isDelayChar)
                {
                    audio.pause();
                    audio.currentTime = 0;
                    audio.play().then(() =>
                    {
                        // when text is done
                        if (i === chars.length - 1)
                        {
                            resolve();
                        }
                    });
                }
            }, charDelay * i + totalAdditionalDelay);
        }
    });
}