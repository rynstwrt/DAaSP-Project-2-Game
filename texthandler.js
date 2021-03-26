// User variables


const charDelay = 50;
const whitespaceDelay = 10;
const delayChar = "_";
const delayCharDelay = 400;
const newLineChar = "#";

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
            totalAdditionalDelay += chars[i].trim() === "" ? whitespaceDelay : 0;

            setTimeout(() =>
            {
                big.textContent += (isDelayChar || isNewLineChar ? "" : chars[i]) + (isNewLineChar ? "\r\n" : "");

                if (i === chars.length - 1)
                {
                    resolve();
                }
            }, charDelay * i + totalAdditionalDelay);
        }
    });
}