// User variables
const charDelay = 50;
const whitespaceDelay = 30;
const delayChar = "_";
const delayCharDelay = 400;
const newLineChar = "|";
const newLineDelay = 200;

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
        big.textContent = "";

        const chars = text.split("");
        let totalAdditionalDelay = 0;

        for (let i = 0; i < chars.length; ++i)
        {
            const isDelayChar = chars[i] === delayChar;
            const isNewLineChar = chars[i] === newLineChar;

            totalAdditionalDelay += isDelayChar ? delayCharDelay : 0;
            totalAdditionalDelay += chars[i].match(/\s+/gm) != null ? whitespaceDelay : 0;
            totalAdditionalDelay += isNewLineChar ? newLineDelay : 0;

            setTimeout(() =>
            {
                big.textContent += (isDelayChar || isNewLineChar ? "" : chars[i]) + (isNewLineChar ? "\r\n" : "");
                audio.currentTime = 0;
                audio.play().then(() => { if (i === chars.length - 1) resolve(); });
            }, charDelay * i + totalAdditionalDelay);
        }
    });
}