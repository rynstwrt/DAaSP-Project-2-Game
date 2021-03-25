const screens = [
    {
        bigtext: "Hey, my name is Kim.",
        option1: {
            text: "This is the first option",
            bigtext: "Big text if you choose option 1",
            option1text: "Option 1 text if you choose option 1",
            option2text: "Option 2 text if you choose option 1"
        },
        option2: {
            text: "This is the 2nd option.",
            bigtext: "Big text if you choose option 2",
            option1text: "Option 1 text if you choose option 2",
            option2text: "Option 2 text if you choose option 2"
        }
    },
    {
        bigtext: "This is the screen AFTER the option click after the option click.",
        option1: {
            text: "This is the first option",
            bigtext: "Big text if you choose option 1",
            option1text: "Option 1 text if you choose option 1",
            option2text: "Option 2 text if you choose option 1"
        },
        option2: {
            text: "This is the 2nd option.",
            bigtext: "Big text if you choose option 2",
            option1text: "Option 1 text if you choose option 2",
            option2text: "Option 2 text if you choose option 2"
        }
    }
];


const bigText = document.getElementById("big-text");
const option1Elem = document.getElementById("option1");
const option2Elem = document.getElementById("option2");
let screenIndex = 0;
function loadScreen(screen)
{
    bigText.textContent = screen.bigtext;
    option1Elem.textContent = screen.option1.text;
    option2Elem.textContent = screen.option2.text;
}


loadScreen(screens[screenIndex]);
