const screens = [
    {
        bigtext: "Hey!_ I'm Kim._|What's up?",
        option1: {
            text: "Not much,_ just playing this game.",
            bigtext: "Ah,_ nice._|I guess I should tell you more about myself.",
            option1text: "Sounds good.",
            option2text: "Uh... alright.",
        },
        option2: {
            text: "Well... I'm here aren't I?",
            bigtext: "Snarky,_ huh?",
            option1text: "Haha.",
            option2text: "Whatever."
        }
    },
    {
        bigtext: "Anyway,_ I make ends meet,_ but barely._ I have a daughter._|She's 6._|Who are you?",
        option1: {
            text: "Just some person.",
            bigtext: "Hey,_ that's cool.",
            option1text: "I guess...",
            option2text: "Ayup."
        },
        option2: {
            text: "Honestly,_ I don't know yet.",
            bigtext: "Deeeeeep.",
            option1text: "*laugh*",
            option2text: "Eat my shorts."
        }
    },
    {
        bigtext: "Anyway,_ I gotta go to my main job.",
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
            bigtext: "A guy got mad at me for messing up his coffee.|He called me a slur and left.",
            option1text: "HOLY HELL!",
            option2text: "Are you okay?"
        },
        option2: {
            text: "Doesn't it always?",
            bigtext: "A guy got mad at me for messing up his coffee.|He called me a slur and left.",
            option1text: "Jesus Christ,_ are you good?",
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
            option2text: "Are you still,_ like,_ dealing with that?"
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
        },
        smallerfont: true
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
            option2text: "Uhh,_ ok."
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
        bigtext: "Hey,_ sorry about a couple days ago.",
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
            option1text: "Haha,_ right on.",
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
            bigtext: "Well,_ __I,__",
            option1text: "Are you okay?",
            option2text: "What happened?"
        }
    },
    {
        bigtext: "Remember a week or so ago when I left abruptly?",
        option1: {
            text: "Yeah.",
            bigtext: "My friend overdosed.|__That's why I left._._._|To go see him in the hospital.",
            option1text: "Oh my god.",
            option2text: "..."
        },
        option2: {
            text: "Mhm.",
            bigtext: "My friend overdosed.|__That's why I left._._._|To go see him in the hospital.",
            option1text: "...",
            option2text: "Overdosed?"
        }
    },
    {
        bigtext: "He died today._|That's why I'm mentioning it now.",
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
            option1text: "How does it work,_ exactly?",
            option2text: "..."
        }
    },
    {
        bigtext: "It searches for people who need anything but more problems.|Namely,_ most marginalized groups.",
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
    },
    {
        bigtext: "Hey.",
        option1: {
            text: "Who are you?",
            bigtext: "I'm the narrator,_ duh.",
            option1text: "Ooooooh.",
            option2text: "Calm down,_ it wasn't that obvious."
        },
        option2: {
            text: "Hi.",
            bigtext: "Well...",
            option1text: "Well what?",
            option2text: "???"
        },
        narrator: true
    },
    {
        bigtext: "I'm here to tell you about Kim.",
        option1: {
            text: "What?",
            bigtext: "She omitted major parts of her life in your interactions._|Let's travel back in time and reintroduce you two.",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "What about Kim?",
            bigtext: "She omitted major parts of her life in your interactions._|Let's travel back in time and reintroduce you two.",
            option1text: "",
            option2text: ""
        },
        fadetoblack: true,
        narrator: true
    },
    {
        bigtext: "Yo.",
        option1: {
            text: "Hi...",
            bigtext: "What's wrong?",
            option1text: "Nothing.",
            option2text: "Just a bit out of it."
        },
        option2: {
            text: "Hello.",
            bigtext: "Who are you?",
            option1text: "Just a person.",
            option2text: "The coolest person ever."
        }
    },
    {
        bigtext: "Haha,_ gotcha.",
        option1: {
            text: "Who are you?",
            bigtext: "Well,_ let's get into it.",
            option1text: "*awkwardly laugh*",
            option2text: "Okay."
        },
        option2: {
            text: "What's up?",
            bigtext: "Not much,_ the same old.",
            option1text: "Tell me about yourself.",
            option2text: "*sit in awkward silence*"
        }
    },
    {
        bigtext: "There are some things you should know about me first,_ though.__|It's not bad,_ but it ties into my stories often.",
        option1: {
            text: "Like what?",
            bigtext: "Think it's best if I just run down a list real quick,_like_,_ before I get into it?",
            option1text: "Sure.",
            option2text: "That makes sense,_ I guess."
        },
        option2: {
            text: "Explain.",
            bigtext: "Think it's best if I just run down a list real quick,_ like,_ before I get into it?",
            option1text: "Screw it.",
            option2text: "Whatever you're comfortable with."
        }
    },
    {
        bigtext: "So._._._ I'm Kim.__|I was assigned male at birth but no longer identify as male.__|I do sex work as a second job in order to raise my daughter.",
        option1: {
            text: "Sex work?",
            bigtext: "Yeah.__|Nobody does it because it's fun or easy — it's neither of those things.__|But for a few reasons,_ finding steady employment isn't very viable.",
            option1text: "I see.",
            option2text: "I'm familiar."
        },
        option2: {
            text: "Assigned male at birth?",
            bigtext: "Yup!__|The trans experience is different for everyone,_ but for me it was debilitating amounts of pain not to transition.",
            option1text: "I see.",
            option2text: "I understand."
        },
        smallerfont: true,
    },
    {
        bigtext: "I know that's kind of jarring to some,_ but it's my life_ — the one I live every day_ — despite wishing things were different sometimes.",
        option1: {
            text: "Is life hard as a sex worker?",
            bigtext: "Too much sometimes._._._ Absolutely too much.__|It's why so many workers turn to drugs in order to just TOLERATE life.",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "Is life hard as a trans person?",
            bigtext: "Overwhelmingly so.__|In 2019 hate crimes related to gender-identity bias increased by 20% in the United States.",
            option1text: "",
            option2text: ""
        },
        smallerfont: true,
        fadetoblack: true
    },
    {
        bigtext: "Let me explain a few things that weren't very obvious in this story.__|For instance_,_ Kim's implied second job was sex work.",
        option1: {
            text: "Ooooh.",
            bigtext: "And that Kim and the police aren't friends due to sex worker's relationship with them.__|Also,_ 22% of trans people report experiencing police harassment.",
            option1text: "",
            option2text: ""
        },
        option2: {
            text: "Well,_ duh.",
            bigtext: "Well,_ did you know that the reason Kim and the police aren't friends was due to sex worker's relationship with them?__|Also,_ 22% of trans people report police harassment.",
            option1text: "",
            option2text: ""
        },
        smallerfont: true,
        narrator: true,
        fadetoblack: true
    }
];