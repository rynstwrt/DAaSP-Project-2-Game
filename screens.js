const screens = [
    {
        bigtext: "Hey! I'm Kim.|What's up?",
        option1: {
            text: "Not much, just playing this game.",
            bigtext: "Ah, nice._|I guess I should tell you more about myself.",
            option1text: "Sounds good.",
            option2text: "Uh... alright.",
        },
        option2: {
            text: "Well... I'm here aren't I?",
            bigtext: "Snarky, huh?",
            option1text: "Haha.",
            option2text: "Whatever."
        }
    },
    {
        bigtext: "I make ends meet, but barely._ I have a daughter._|She's 6._|Who are you?",
        option1: {
            text: "Just some person.",
            bigtext: "Hey, that's cool.",
            option1text: "I guess...",
            option2text: "Ayup."
        },
        option2: {
            text: "Honestly, I don't know yet.",
            bigtext: "Deeeeeep.",
            option1text: "Lol.",
            option2text: "Eat my shorts."
        }
    },
    {
        bigtext: "Anyway, I gotta go to my main job.",
        option1: {
            text: "Lame.",
            bigtext: "I felt that.",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "Have fun!",
            bigtext: "Thanks!",
            option1text: "",
            option2text: ""
        },
        fadetoblack: true
    },
    {
        bigtext: "Work sucked today.",
        option1: {
            text: "Why?",
            bigtext: "A guy at work today got mad at me for messing up his coffee.|He called me a slur and left.",
            option1text: "HOLY SHIT!",
            option2text: "Are you okay?"
        },
        option2: {
            text: "Doesn't it always?",
            bigtext: "A guy got mad at me for messing up his coffee.|He called me a slur and left.",
            option1text: "Jesus Christ, are you good?",
            option2text: "Oh my god."
        }
    },
    {
        bigtext: "I'm fine_._._._|It's just that I was already tired to begin with.",
        option1: {
            text: "I'm so sorry.",
            bigtext: "It's okay.__ I've been through worse.",
            option1text: "You've been through worse?",
            option2text: "What happened in the past? If you don't mind me asking."
        },
        option2: {
            text: "Are you going to be okay?",
            bigtext: "Absolutely._|Nothing compared to stuff that's happened in the past.",
            option1text: "What happened in the past?",
            option2text: "Nothing compared to stuff from the past?"
        }
    },
    {
        bigtext: "My boss assaulted me.",
        option1: {
            text: "I'm so sorry.",
            bigtext: "Thank you.",
            option1text: "Can I ask what happened?",
            option2text: "Are you still, like, dealing with that?"
        },
        option2: {
            text: "How long ago was this?",
            bigtext: "Eight months ago.",
            option1text: "That recent!?",
            option2text: "Christ."
        }
    },
    {
        bigtext: "Yeah,_ I was working at a car dealership at the time.__|It started with inappropriate comments,_ then became physical.",
        option1: {
            text: "Did you call the police?",
            bigtext: "No.__|Police aren't my friends for a few reasons.__|They've done more harm than good for me in the past.",
            option1text: "I see.",
            option2text: "I hate the system."
        },
        option2: {
            text: "What did you do afterwards?",
            bigtext: "I requested to transfer,_ but my boss declined it._ So I quit.",
            option1text: "What an asshole.",
            option2text: "Good for you."
        }
    },
    {
        bigtext: "So_._._._ yeah.__|Anyway,_ ask me anything I guess.",
        option1: {
            text: "What color are your eyes?",
            bigtext: "Blue.",
            option1text: "Nice.",
            option2text: "Me too!"
        },
        option2: {
            text: "You implied you had a side job?",
            bigtext: "I'll explain later.",
            option1text: "Cool.",
            option2text: "Uhh, ok."
        }
    },
    {
        bigtext: "Oh,_ wait.__|I need to go...",
        option1: {
            text: "Okay.",
            bigtext: "Bye.",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "What happened?",
            bigtext: "I'll explain later._|I really have to go.",
            option1text: "",
            option2text: ""
        },
        fadetoblack: true
    },
    {
        bigtext: "Hey, sorry about a couple days ago.",
        option1: {
            text: "No worries.",
            bigtext: "Life's been crazy recently.",
            option1text: "Mood.",
            option2text: "Oh?"
        },
        option2: {
            text: "What happened?",
            bigtext: "I'll tell you later.",
            option1text: "Cool.",
            option2text: "Okay."
        }
    },
    {
        bigtext: "What have you been up to recently?",
        option1: {
            text: "The usual.",
            bigtext: "Hey!_ Stability is good.",
            option1text: "Haha, right on.",
            option2text: "*smile*"
        },
        option2: {
            text: "Just work pretty much.",
            bigtext: "Same.",
            option1text: "Bleh.",
            option2text: "One day my music career will blow up."
        }
    },
    {
        bigtext: "I'm tired.|__I think I'm going to take a nap.",
        option1: {
            text: "I might too.",
            bigtext: "Sweet dreams_|:)",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "See you!",
            bigtext: "Bye!",
            option1text: "",
            option2text: ""
        },
        fadetoblack: true
    },
    {
        bigtext: "I lied to you.",
        option1: {
            text: "Explain.",
            bigtext: "Well,_._._.",
            option1text: "Spit it out.",
            option2text: "Take your time."
        },
        option2: {
            text: "Uhh...",
            bigtext: "Well, __I,__",
            option1text: "Are you okay?",
            option2text: "What happened?"
        }
    },
    {
        bigtext: "Remember a week or so ago when I left abruptly?",
        option1: {
            text: "Yeah.",
            bigtext: "My friend overdosed.|__That's why I left. To go see him in the hospital.",
            option1text: "Oh my god.",
            option2text: "..."
        },
        option2: {
            text: "Mhm.",
            bigtext: "My friend overdosed.|__That's why I left_._._._|To go see him in the hospital.",
            option1text: "...",
            option2text: "Overdosed?"
        }
    },
    {
        bigtext: "He died today_._._.|That's why I'm mentioning it now.__|",
        option1: {
            text: "I'm so sorry.",
            bigtext: "Addiction sucks.",
            option1text: "Do you know from personal experience?",
            option2text: "It does."
        },
        option2: {
            text: "Are you okay?",
            bigtext: "Addiction sucks.",
            option1text: "Do you know from personal experience?",
            option2text: "It does."
        }
    },
    {
        bigtext: "I mean,_ most of my friends use.",
        option1: {
            text: "I'm so sorry for you.",
            bigtext: "Don't be.__|Be sorry for them.",
            option1text: "What do you mean?",
            option2text: "..."
        },
        option2: {
            text: "I'm so sorry for them.",
            bigtext: "Yeah,_ the way addiction works is awful.",
            option1text: "How does it work, exactly?",
            option2text: "..."
        }
    },
    {
        bigtext: "It searches for people who need anything but more problems.|Namely, most marginalized groups.",
        option1: {
            text: "That's awful.",
            bigtext: "Yeah.",
            option1text: "Anyway...",
            option2text: "..."
        },
        option2: {
            text: "Which groups primarily?",
            bigtext: "People of color,_ sex workers,_ and LGBTQ+ individuals mostly.",
            option1text: "I see.",
            option2text: "That's awful."
        }
    },
    {
        bigtext: "Today sucks.__|I'm going to lie down for a bit.",
        option1: {
            text: "That's completely understandable.",
            bigtext: "Bye.",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "Bye.",
            bigtext: "See you around.",
            option1text: "",
            option2text: ""
        },
        fadetoblack: true
    }
];



/*


{
    bigtext: "",
    option1: {
        text: "",
        bigtext: "",
        option1text: "",
        option2text: ""
    },
    option2: {
        text: "",
        bigtext: "",
        option1text: "",
        option2text: ""
    }
}


END PLANS:
    - explain narrator
    - explain the two jobs

    - workplace harassment statistic
    - explain why kim and police aren't friends
        - police and sex worker statistic
    - explain jeremy and sex worker attraction to drugs
        - use sw drug statistic
*/