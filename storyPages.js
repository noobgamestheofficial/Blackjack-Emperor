var storyPages = [
  //Json like object, that contains all tha pages data and their components
  {
    pageId: 0, //id of page, mainly used to navigate pages
    pageName: "Warning", //name of page, not used currently, but can be useful to mentally make sense of the game
    containsBJ: false, //shows if the current page will require us to show the blackjackGame game
    pageContent: [
      //contains data about a specific page, including its type, and specific data to each type
      {
        contentId: 0,
        contentType: 1, //0 for text, 1 for images/gifs, 2 for buttons, 3 for text inputs,
        imageSrc: "./images/Misc/Warning.jpg",
      },
      {
        contentId: 1,
        contentType: 0, //0 for text, 1 for images/gifs, 2 for buttons
        text: function (x) {
          return "This is an adult themed game, if you are not of a mature age, please don't continue.";
        },
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorRed");
          return "This game includes erotic content, mind-control, submission/domination themes, body-transformations, and Blackjack, if any of these topics offend you, it is best for you not to continue.";
        },
      },
      {
        contentId: 3,
        contentType: 2, //0 for text, 1 for images/gifs, 2 for buttons
        buttonLabel: "Continue",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(1);
          });
        },
      },
      {
        contentId: 4,
        contentType: 2, //0 for text, 1 for images/gifs, 2 for buttons, 3 for text inputs
        buttonLabel: "I am not 18 or older, or I do not wish to continue.",
        functionType: 0,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            window.close();
          });
        },
      },
    ],
  },
  {
    pageId: 1, //id of page, mainly used to navigate pages
    pageName: "LadyLuck first", //name of page, not used currently, but can be useful to mentally make sense of the game
    containsBJ: false, //shows if the current page will require us to show the blackjackGame game
    pageContent: [
      //contains data about a specific page, including its type, and specific data to each type
      {
        contentId: 0,
        contentType: 0, //0 for text, 1 for images/gifs, 2 for buttons,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return 'Lady Luck: \n\t\t\t"......So are you willing to take the risk?" ';
        },
      },
      {
        contentId: 1,
        contentType: 2,
        buttonLabel: "No, I don't even know what I am getting into",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(2);
          });
        },
      },
      {
        contentId: 2,
        contentType: 2,
        buttonLabel: "Yes, ..... let's see where this goes",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(3);
          });
        },
      },
    ],
  },
  {
    pageId: 2,
    pageName: "Game End - Dog Life",
    containsBJ: false,
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Lady Luck/ladyLuck02.jpg",
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return 'Lady Luck: \n\t\t\t" Wise choice, it is always better not to take risks, especially when your eternal soul is at stake. \n\t\t\tBecause you had such a shitty life, in your next I will make your reincarnation something more joyful and happy, like a cute domestic dog."';
        },
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          return "---Good End, A dog's Life---";
        },
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Misc/DomesticDog.gif",
      },
      {
        contentId: 4,
        contentType: 2,
        buttonLabel: "Start your dog life",
        functionType: 3,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            window.open(
              "https://store.steampowered.com/app/340340/Domestic_Dog/",
              "_blank"
            );
          });
        },
      },
      {
        contentId: 5,
        contentType: 2,
        buttonLabel: "Restart Game",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(0);
          });
        },
      },
    ],
  },
  {
    pageId: 3,
    pageName: "Lady Luck Second",
    containsBJ: false,
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Lady Luck/ladyLuck01.jpg",
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return 'Lady Luck: \n\t\t\t"Ohh, that is a really bold decision, it has been a long time since someone was crazy enough to risk it all." \n\t\t\t\n\t\t\t"I always liked the crazy bold types, the ones going all-in or nothing" \n\t\t\t\n\t\t\t"I will give you a gift to help you in your conquest, it will become your power and your trial since the only that you were good at in life was the game called blackjack, that will be your gift." \n\t\t\t\n\t\t\t"And remember, I smile upon you".';
        },
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "With that she kisses you, and everything around you fades away";
        },
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Lady Luck/ladyLuck02Blurry.jpg",
      },
      {
        contentId: 4,
        contentType: 2,
        buttonLabel: "Continue",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(4);
          });
        },
      },
    ],
  },
  {
    pageId: 4,
    pageName: "First Awakening",
    containsBJ: false,
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You open your eyes, with a feeling that an enormous amount of time had passed, maybe hours, maybe eyons";
        },
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          return 'You:\n\t\t\t".....What is happening? What did I just agree to? And most importantly, who even am I?....."';
        },
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You try to recollect your memories, trying to make heads or tails of your situation, when you can finally answer the last question";
        },
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          return 'You:\n\t\t\t"Ohh that is right.I am...."';
        },
      },
      {
        contentId: 4,
        contentType: 3,
        defaultTextValue: "Jack",
      },
      {
        contedId: 5,
        contentType: 2,
        buttonLabel: "Continue",
        functionType: 4,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            var y = document.getElementsByClassName("styling-textInput");
            playerSettings.playerName = y[0].value;
            gameManager.loadSettingsUI();
            gameManager.setPage(5);
          });
        },
      },
    ],
  },
  {
    pageId: 5,
    pageName: "First Awakening",
    containsBJ: false,
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You remember the sexy lady before mentioning something about blackjack, the names sounds very familiar, but when you try to recall the memory, your head starts pounding like a motherfucker, so much so, that feel your chest tighten as you become unable to breathe";
        },
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Misc/headache.gif",
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          return (
            playerSettings.playerName +
            ':\n\t\t\t"....fuck that, whatever situation I am in can wait, for now, I need to clear my head"'
          );
        },
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You look around the room to search for anything with some entertainment value when suddenly you feel something in your pockets.";
        },
      },
      {
        contentId: 4,
        contentType: 0,
        text: function (x) {
          playerSettings.playerCash = 150;
          gameManager.loadSettingsUI();
          return (
            playerSettings.playerName +
            ':\n\t\t\t"...Nice, I found $150 in my pocket, I have some money now and nowhere to spend it."'
          );
        },
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Looking closer at the banknotes, there seems to be something written the $50 one";
        },
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Misc/150dollarsKiss.jpg",
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          return (
            playerSettings.playerName +
            ':\n\t\t\t"How did this get into my pocket?"'
          );
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "With one more unanswered question to worry about, you keep looking around the room for anything to do.";
        },
      },
      {
        contentId: 9,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "The only things you can see with any entertainment value are a laptop and a phone.";
        },
      },
      {
        contentId: 10,
        contentType: 2,
        buttonLabel: "Pick up the laptop",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(6);
          });
        },
      },
      {
        contentId: 11,
        contentType: 1,
        imageSrc: "./images/Misc/Laptop01.png",
      },
      {
        contentId: 12,
        contentType: 2,
        buttonLabel: "Pick up the phone",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(6);
          });
        },
      },
      {
        contentId: 13,
        contentType: 1,
        imageSrc: "./images/Misc/Phone01.jpg",
      },
    ],
  },
  {
    pageId: 6,
    pageName: "Laptop/Phone",
    containsBJ: false,
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          return (
            playerSettings.playerName +
            ':\n\t\t\t"...Nothing like some porn to set my head straight."'
          );
        },
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Misc/porn01.gif",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Misc/porn02.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Misc/porn03.gif",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Misc/porn04.gif",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Misc/porn05.gif",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Misc/porn06.gif",
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "While clicking on different porn links you enter into stripchat.xxx, a website where you can chat with strippers, and pay them to strip";
        },
      },
      {
        contentId: 5,
        contentType: 2,
        buttonLabel: "Continue",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(7);
          });
        },
      },
    ],
  },
  {
    pageId: 7,
    pageName: "Stripchat",
    containsBJ: false,
    pageContent: [
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You enter Tricky's chatroom, she seems to be fully clothed.";
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/2.jpg",
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          return (
            playerSettings.playerName +
            ':\n\t\t\t"lucky me....., looks like the show is about to start"'
          );
        },
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Misc/dickPullout.gif",
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You start getting comfortable, ready to pull out your dick when you suddenly notice the chat that is going on in the chat section.";
        },
      },
      {
        contentId: 6,
        contentType: 4,
        speakingCharacter: "randomGuy1",
        text: function (x) {
          return '[random guy 1] "Fuck that is the fifth guy she robbed today, and she hasn\'t shown us even some tits yet."';
        },
      },
      {
        contentId: 7,
        contentType: 4,
        speakingCharacter: "randomGuy2",
        text: function (x) {
          return '[random guy 2] "Yeah, wtf, this is not why I am here."';
        },
      },
      {
        contentId: 8,
        contentType: 4,
        speakingCharacter: "randomGuy3",
        text: function (x) {
          return '[random guy 3] "Strip, or get the fuck out of this website, cunt."';
        },
      },
      {
        contentId: 9,
        contentType: 4,
        speakingCharacter: "randomGuy4",
        text: function (x) {
          return '[random guy 4] "I am out of here..."';
        },
      },
      {
        contentId: 10,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "Sorry guys, you know my rules, ;), I only strip when someone beats me in blackjack"';
        },
      },
      {
        contentId: 11,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "cheap losers not welcome."';
        },
      },
      {
        contentId: 12,
        contentType: 4,
        speakingCharacter: "randomGuy1",
        text: function (x) {
          return '[random guy 1] "You are cheating, there is no way you are not cheating, I am going to report you to the mods."';
        },
      },
      {
        contentId: 13,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "No I am not, you guys are just not kissed by luck"';
        },
      },
      {
        contentId: 14,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "To play send minimum 20$ ;)"';
        },
      },
      {
        contentId: 15,
        contentType: 0,
        text: function (x) {
          return (
            playerSettings.playerName +
            ":\n\t\t\tThere it is again, blackjack, it seems that anyway I turn I can't seem to get away from that game....."
          );
        },
      },
      {
        contentId: 16,
        contentType: 0,
        text: function (x) {
          return "\t\t\t    ...........................";
        },
      },
      {
        contentId: 17,
        contentType: 0,
        text: function (x) {
          return "\t\t\t    ...........................";
        },
      },
      {
        contentId: 18,
        contentType: 0,
        text: function (x) {
          return "\t\t\t    .....fuck it, its make or break, I am all-in.";
        },
      },
      {
        contentId: 19,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return (
            "[" + playerSettings.playerName + '] "Ok I am game, let\'s play"'
          );
        },
      },
      {
        contentId: 20,
        contentType: 4,
        speakingCharacter: "randomGuy3",
        text: function (x) {
          return '[random guy 3] "Don\'t bother dude, she is cheating, go spend your money on someone that will actually stip, and not just scam you."';
        },
      },
      {
        contentId: 21,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "alright, cutey, &hearts; let\'s start."';
        },
      },
      {
        contentId: 22,
        contentType: 2,
        buttonLabel: "Start blackjack game with Tricksy",
        functionType: 2,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            blackjackGame.init("Tricksy", 10, 9, 100);
            gameManager.setPage(8);
          });
        },
      },
    ],
  },
  {
    pageId: 8,
    pageName: "Game - Tricksy",
    containsBJ: true,
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Misc/rules1.png",
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Misc/rules2.png",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Misc/rules3.png",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Misc/rules4.png",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Misc/rules5.png",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Misc/rules6.png",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Misc/rules7.png",
      }
    ],
  },
  {
    pageId: 9,
    pageName: "Bad End, Eternal Sexual Torture",
    containsBJ: false,
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You suddenly fade into darkness, your sense of time and space vanish, as if they were never there, in fact all of your senses seem to not be presented.";
        },
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck:\n\t\t\t"So you have successfully lost my gift to you."`;
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Lady Luck/angry.jpg",
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Just as suddenly you see the lady wearing a slingshot bikini, however, instead of feeling aroused, you feel a sense of sheer and utter terror at her sight.";
        },
      },
      {
        contentId: 4,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck:\n\t\t\t"Well, you know what happens to those who fail, as per our contract, your eternal soul will be manhandled and abused by hell's succubi."`;
        },
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck:\n\t\t\t"In case you didn't know succubi, are a special type of devil, that like to get quite a bit rapey."`;
        },
      },
      {
        contentId: 6,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You stare in a mixture of disbelief and horror, gathering all your might together you manage to squeak out a single sentence.";
        },
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          return (
            playerSettings.playerName +
            `:\n\t\t\t"....I didn't....agree to this...."`
          );
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "She stares at you, eyes wild open.";
        },
      },
      {
        contentId: 9,
        contentType: 1,
        imageSrc: "./images/Lady Luck/angryEyes.jpg",
      },
      {
        contentId: 10,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck:\n\t\t\t"I made the risks very clear to you, I told you that only a crazy person would accept the deal, that your eternal soul would be at stake."`;
        },
      },
      {
        contentId: 11,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck:\n\t\t\t"I believe your exact words were "Yes, ..... let's see where this goes"."`;
        },
      },
      {
        contentId: 12,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck:\n\t\t\t"Anyway, have fun getting butt fucked for all eternity."`;
        },
      },
      {
        contentId: 13,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "With that you are sent to hell to be sexual tortured by succubi for the rest of eternity.";
        },
      },
      {
        contentId: 14,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture1.gif",
      },
      {
        contentId: 15,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture2.gif",
      },
      {
        contentId: 16,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture3.gif",
      },
      {
        contentId: 17,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture4.gif",
      },
      {
        contentId: 18,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture5.gif",
      },
      {
        contentId: 19,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture6.gif",
      },
      {
        contentId: 20,
        contentType: 1,
        imageSrc: "./images/badEnds/sexTorture7.gif",
      },
      {
        contentId: 21,
        contentType: 0,
        text: function (x) {
          return "--Bad End, Eternal Sexual Torture--";
        },
      },
      {
        contentId: 22,
        contentType: 2,
        buttonLabel: "Start from the beginning",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(0);
          });
        },
      },
    ],
  },
  {
    pageId: 10,
    pageName: "Tricksy Mind Control",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          playerSettings.emperorPoints += 10;
          gameManager.loadSettingsUI();
          x.classList.add("colorPlayer");
          return "Tricksy stares directly into the screen, you can see her eyes visibly shift in hue from brown to purple, a strange color.";
        },
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Tricksy/8.jpg",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/mc1.jpg",
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Suddenly an orgasmic feeling hits you, it seems a hundred times better than anything you can remember, although you can't remember much, you know for sure that this isn't normal, it feels like your very soul is orgasming like it is growing by absorbing something.";
        },
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Misc/soulOrgasm.gif",
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You sneak a peek at your screen, only to see tricksy breathing heavily, intensely looking at her screen, like she is waiting for something.";
        },
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/mc2.jpg",
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "A sudden realization hits you, You just ate Tricksy's soul.";
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You have no idea how or why, but you are sure that whatever happened, the end result is that Tricksy is now part of you.";
        },
      },
      {
        contentId: 9,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Although you are pretty sure of this, you decide to test it out, more for the fun it than for affirmation.";
        },
      },
      {
        contentId: 10,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return (
            "[" + playerSettings.playerName + '] "Tricksy I want you to...."'
          );
        },
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Play with your tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(11);
          });
        },
      },
      {
        contentId: 12,
        contentType: 2,
        buttonLabel: "Bring out a dildo and play with it.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(12);
          });
        },
      },
      {
        contentId: 13,
        contentType: 2,
        buttonLabel: "Finger your pussy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(13);
          });
        },
      },
      {
        contentId: 14,
        contentType: 2,
        buttonLabel: "Show us your ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(14);
          });
        },
      },
    ],
  },
  {
    pageId: 11,
    pageName: "Tricksy Mind Control - Tits",
    pageContent: [
      {
        contentId: 0,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return "[" + playerSettings.playerName + '] "Play with your tits."';
        },
      },
      {
        contentId: 1,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "Yes master."';
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/tits1.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/tits2.gif",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/tits3.gif",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/tits4.gif",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/tits5.gif",
      },
      {
        contentId: 7,
        contentType: 2,
        buttonLabel: "Bring out a dildo and play with it.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(12);
          });
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Finger your pussy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(13);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Show us your ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(14);
          });
        },
      },
      {
        contentId: 10,
        contentType: 2,
        buttonLabel: "Jerkoff to Tricksy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(15);
          });
        },
      },
    ],
  },
  {
    pageId: 12,
    pageName: "Tricksy Mind Control - Didlo",
    pageContent: [
      {
        contentId: 0,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return (
            "[" +
            playerSettings.playerName +
            '] "Bring out a dildo and play with it."'
          );
        },
      },
      {
        contentId: 1,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "I love my dildos."';
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo1.jpg",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo2.jpg",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo3.jpg",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo4.jpg",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo5.jpg",
      },
      {
        contentId: 7,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo6.jpg",
      },
      {
        contentId: 8,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo7.jpg",
      },
      {
        contentId: 9,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo8.jpg",
      },
      {
        contentId: 10,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo9.jpg",
      },
      {
        contentId: 11,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo10.jpg",
      },
      {
        contentId: 12,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo11.jpg",
      },
      {
        contentId: 13,
        contentType: 1,
        imageSrc: "./images/Tricksy/dildo12.jpg",
      },
      {
        contentId: 14,
        contentType: 2,
        buttonLabel: "Play with your tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(11);
          });
        },
      },
      {
        contentId: 15,
        contentType: 2,
        buttonLabel: "Finger your pussy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(13);
          });
        },
      },
      {
        contentId: 16,
        contentType: 2,
        buttonLabel: "Show us your ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(14);
          });
        },
      },
      {
        contentId: 17,
        contentType: 2,
        buttonLabel: "Jerkoff to Tricksy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(15);
          });
        },
      },
    ],
  },
  {
    pageId: 13,
    pageName: "Tricksy Mind Control - Finger pussy",
    pageContent: [
      {
        contentId: 0,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return "[" + playerSettings.playerName + '] "Finger your pussy."';
        },
      },
      {
        contentId: 1,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "Mmm........yes master."';
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy1.jpg",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy2.jpg",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy3.jpg",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy4.jpg",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy5.jpg",
      },
      {
        contentId: 7,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy6.jpg",
      },
      {
        contentId: 8,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy7.jpg",
      },
      {
        contentId: 9,
        contentType: 1,
        imageSrc: "./images/Tricksy/pussy1.gif",
      },
      {
        contentId: 10,
        contentType: 2,
        buttonLabel: "Play with your tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(11);
          });
        },
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Bring out a dildo and play with it.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(12);
          });
        },
      },
      {
        contentId: 12,
        contentType: 2,
        buttonLabel: "Show us your ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(14);
          });
        },
      },
      {
        contentId: 13,
        contentType: 2,
        buttonLabel: "Jerkoff to Tricksy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(15);
          });
        },
      },
    ],
  },
  {
    pageId: 14,
    pageName: "Tricksy Mind Control - Ass",
    pageContent: [
      {
        contentId: 0,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return "[" + playerSettings.playerName + '] "Show us your ass."';
        },
      },
      {
        contentId: 1,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "Here it is."';
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass2.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass2.jpg",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass3.jpg",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass4.jpg",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass5.jpg",
      },
      {
        contentId: 7,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass6.jpg",
      },
      {
        contentId: 8,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass7.jpg",
      },
      {
        contentId: 9,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass8.jpg",
      },
      {
        contentId: 10,
        contentType: 1,
        imageSrc: "./images/Tricksy/ass1.gif",
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Play with your tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(11);
          });
        },
      },
      {
        contentId: 12,
        contentType: 2,
        buttonLabel: "Bring out a dildo and play with it.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(12);
          });
        },
      },
      {
        contentId: 13,
        contentType: 2,
        buttonLabel: "Finger your pussy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(13);
          });
        },
      },
      {
        contentId: 14,
        contentType: 2,
        buttonLabel: "Jerkoff to Tricksy.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(15);
          });
        },
      },
    ],
  },
  {
    pageId: 15,
    pageName: "Tricksy Mind Control - Jerkoff",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You finish masturbating to Tricksy's hot show.";
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Misc/jerkoff.gif",
      },
      {
        contentId: 3,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "Anything else master?"';
        },
      },
      {
        contentId: 4,
        contentType: 4,
        speakingCharacter: "randomGuy2",
        text: function (x) {
          return '[random guy 2] "So hot, show us your ass."';
        },
      },
      {
        contentId: 5,
        contentType: 4,
        speakingCharacter: "randomGuy1",
        text: function (x) {
          return `[random guy 1] "You are a lucky bastard ${playerSettings.playerName}."`;
        },
      },
      {
        contentId: 6,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return `[${playerSettings.playerName}] "No that will be all for today."`;
        },
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Thinking for a second.......you figure that it might be handy to have an extra pair of hands after all, plus it would be nice to actually fuck an actual pussy for a change.";
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You take our your phone and check your current location.";
        },
      },
      {
        contentId: 9,
        contentType: 1,
        imageSrc: "./images/Misc/location.jpg",
      },
      {
        contentId: 10,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}:\n\t\t\t"looks like I live in Los Angeles, not too bad, but the rent is going to be a bitch."`;
        },
      },
      {
        contentId: 11,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return `[${playerSettings.playerName}] "Tricksy this is my location, I want you to come here as soon as possible."`;
        },
      },
      {
        contentId: 12,
        contentType: 4,
        speakingCharacter: "randomGuy3",
        text: function (x) {
          return `[random guy 3] "${playerSettings.playerName} tell her to choke on a dildo, she only listens to you man."`;
        },
      },
      {
        contentId: 13,
        contentType: 4,
        speakingCharacter: "Tricksy",
        text: function (x) {
          return '[Tricksy] "Master I live in Detroit, it would take me as much as 10 hours to be there."';
        },
      },
      {
        contentId: 14,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Well it's already late at night, if you tell her to come now, you will have a pleasant surprise tomorrow morning.";
        },
      },
      {
        contentId: 15,
        contentType: 4,
        speakingCharacter: "You",
        text: function (x) {
          return `[${playerSettings.playerName}] "Alright, I will be waiting for you."`;
        },
      },
      {
        contentId: 16,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "With that you shut your phone and drift off to sleep.";
        },
      },
      {
        contentId: 17,
        contentType: 2,
        buttonLabel: "Zzz.....",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(16);
          });
        },
      },
    ],
  },
  {
    pageId: 16,
    pageName: "Sleep Night 1",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          return ".....................";
        },
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          return ".....................";
        },
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"I see you made it past your first day, congratulations!"`;
        },
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return "You see Lady Luck smiling at you.";
        },
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Lady Luck/LadyLuck03.jpg",
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"..thanks I guess.."`;
        },
      },
      {
        contentId: 6,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"No need to be shy, you did really well today, most people lose their soul after the first trial.....but sooner or later everyone loses."`;
        },
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...did you just say... 'their soul'?"`;
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Of course silly, that's what you agreed to."`;
        },
      },
      {
        contentId: 9,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "A flash of memories suddently hits you as if they were repressed and finally violently let loose.";
        },
      },
      {
        contentId: 10,
        contentType: 1,
        imageSrc: "./images/Misc/memoryFlash.gif",
      },
      {
        contentId: 11,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You remember bits and pieces of your previous life.";
        },
      },
      {
        contentId: 12,
        contentType: 1,
        imageSrc: "./images/Misc/simpleHouse.jpg",
      },
      {
        contentId: 13,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You didn't have that much going on for you, all you owned was a simple house, nothing too fancy..";
        },
      },
      {
        contentId: 14,
        contentType: 1,
        imageSrc: "./images/Misc/highDebt.png",
      },
      {
        contentId: 15,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "But You were heavily in debt.";
        },
      },
      {
        contentId: 16,
        contentType: 1,
        imageSrc: "./images/Misc/shadyPeople.png",
      },
      {
        contentId: 17,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Debt owed to some shady people.";
        },
      },
      {
        contentId: 18,
        contentType: 1,
        imageSrc: "./images/Misc/blackJackLove.jpg",
      },
      {
        contentId: 19,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Debt owed by falling in love with blackjack....";
        },
      },
      {
        contentId: 20,
        contentType: 1,
        imageSrc: "./images/Misc/blackJackLose.jpg",
      },
      {
        contentId: 21,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "....but constantly losing each and every game.";
        },
      },
      {
        contentId: 22,
        contentType: 1,
        imageSrc: "./images/Misc/sleepFishes.jpg",
      },
      {
        contentId: 23,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "Until, those shady people had enough one day, and sent you on a very long diving trip.";
        },
      },
      {
        contentId: 24,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return "You remember very clearly the conversation you previously had with the lady.";
        },
      },
      {
        contentId: 25,
        contentType: 2,
        buttonLabel: "Continue",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(17);
          });
        },
      },
    ],
  },
  {
    pageId: 17,
    pageName: "Lady Luck - Initial conversation",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          storyContainer.style.backgroundColor = "grey";
          return "....................";
        },
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Is anyone there?"`;
        },
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Lady Luck/ladyLuck04.jpg",
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Hey there cutie, glad you are finally awake."`;
        },
      },
      {
        contentId: 4,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Who are you? and where am I?"`;
        },
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Don't you know that asking too many questions is really unattractive?"`;
        },
      },
      {
        contentId: 6,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...................."`;
        },
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"....Well silly, I am the lady of luck, Lady Luck as most people call me."`;
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"And you sir. have just died."`;
        },
      },
      {
        contentId: 9,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Quite a terrible death as well."`;
        },
      },
      {
        contentId: 10,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...................."`;
        },
      },
      {
        contentId: 11,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"..........I see...."`;
        },
      },
      {
        contentId: 12,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"It was a really terrible death indeed."`;
        },
      },
      {
        contentId: 13,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"We haven't had someone with such a horrible life for quite some time."`;
        },
      },
      {
        contentId: 14,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...so what now?...do I go to heaven or hell? Or is it reincarnation?"`;
        },
      },
      {
        contentId: 15,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Bingo, reincarnation it is."`;
        },
      },
      {
        contentId: 16,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Mmm, let's see....."`;
        },
      },
      {
        contentId: 17,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"....looks like, you are going to be reincarnated as a dog."`;
        },
      },
      {
        contentId: 18,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Not too bad beats being reincarnated as an insect."`;
        },
      },
      {
        contentId: 19,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Those guys come back to us almost as soon as we send them."`;
        },
      },
      {
        contentId: 20,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Sometimes I wonder why we even bother."`;
        },
      },
      {
        contentId: 21,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"So.....a dog?"`;
        },
      },
      {
        contentId: 22,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Is there any chance I can be reincarnated as a human?"`;
        },
      },
      {
        contentId: 23,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Well there is this one thing, I wouldn't recommend it though."`;
        },
      },
      {
        contentId: 24,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"It is quite risky."`;
        },
      },
      {
        contentId: 25,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"I am all ears."`;
        },
      },
      {
        contentId: 26,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"It involves a gamble, you will be reincarnated as the creature you wish for and given a tremendous amount of power."`;
        },
      },
      {
        contentId: 27,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Enough power to take over the cosmos, however, you will be betting your eternal soul if you fail."`;
        },
      },
      {
        contentId: 28,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...................."`;
        },
      },
      {
        contentId: 29,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"......that's a lot to take in."`;
        },
      },
      {
        contentId: 30,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"No matter, it is an option that everyone has, and I have to make sure you are aware of it."`;
        },
      },
      {
        contentId: 31,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"......So are you willing to take the risk?"`;
        },
      },
      {
        contentId: 32,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `While struggling to take in all the information dump you just received, there is one thought that is in the fore-front of your mind.`;
        },
      },
      {
        contentId: 33,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `No matter what happens, you are never going to be a loser again, even if it is at the cost of your soul.`;
        },
      },
      {
        contentId: 34,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Yes, ..... let's see where this goes."`;
        },
      },
      {
        contentId: 35,
        contentType: 1,
        imageSrc: "./images/Lady Luck/ladyLuck02.jpg",
      },
      {
        contentId: 36,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Ohh, that is a really bold decision, it has been a long time since someone was crazy enough to risk it all."`;
        },
      },
      {
        contentId: 37,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"I always liked the crazy bold types, the ones going all-in or nothing."`;
        },
      },
      {
        contentId: 38,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"I will give you a gift to help you in your conquest, it will become your power and your trial since the only that you were good at in life was the game called blackjack, that will 	be your gift."`;
        },
      },
      {
        contentId: 39,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"And remember, I smile upon you."`;
        },
      },
      {
        contentId: 40,
        contentType: 2,
        buttonLabel: "End flashback",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(18);
          });
        },
      },
    ],
  },
  {
    pageId: 18,
    pageName: "Sleep Night 1 - continued",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          storyContainer.style.backgroundColor = "black";
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"I see you have regained your memories."`;
        },
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Lady Luck/ladyLuck03.jpg",
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t".......yes....."`;
        },
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"...................."`;
        },
      },
      {
        contentId: 4,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...so, my eternal soul is at stake if I fail...., what does that mean?"`;
        },
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          return `Lady Luck looks at you with a sadistic smile.`;
        },
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Lady Luck/angryEyes.jpg",
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"It boils down to, don't lose all your money or you will spend the rest of eternity tortured by demons."`;
        },
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"....But blackjack is a game of chance, I am bound to lose some times. How long do I have to keep winning for?"`;
        },
      },
      {
        contentId: 9,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Everyone loses eventually......sometimes in their first day, their first week, their first year."`;
        },
      },
      {
        contentId: 10,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"There was this one guy who managed to use his power to keep winning for 10 million years, by the end he had an entire galaxy under his command, but he too lost eventually."`;
        },
      },
      {
        contentId: 11,
        contentType: 1,
        imageSrc: "./images/Misc/galaxy.gif",
      },
      {
        contentId: 12,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"...........I am fucked aren't I......"`;
        },
      },
      {
        contentId: 13,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"You agreed to all this."`;
        },
      },
      {
        contentId: 14,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"...................."`;
        },
      },
      {
        contentId: 15,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Cheer up, I happen to have 2 presents for you."`;
        },
      },
      {
        contentId: 16,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `You stare at her with distrust."`;
        },
      },
      {
        contentId: 17,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"First of all, let me teach you a way in which you can use the emperor's power to more easily help you win blackjack games."`;
        },
      },
      {
        contentId: 18,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"In any given round of a blackjack game, you can use your Emperor Points to increase or decrease your card count, if you still have EPs left."`;
        },
      },
      {
        contentId: 19,
        contentType: 1,
        imageSrc: "./images/Misc/EPtutorial.jpg",
      },
      {
        contentId: 19,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"This should help you a lot in tight spots or difficult games, but remember to use your points carefully, as they are difficult to gain."`;
        },
      },
      {
        contentId: 20,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"I see, this should give me more of a fighting chance."`;
        },
      },
      {
        contentId: 21,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorLadyLuck");
          return `Lady Luck: \n\t\t\t"Because you were such a good boy today, your second gift will be the pleasure of experiencing a blowjob directly form a godess, lucky you."`;
        },
      },
      {
        contentId: 22,
        contentType: 1,
        imageSrc: "./images/Lady Luck/blowjob01.jpg",
      },
      {
        contentId: 23,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `You vividly dream of Lady Luck sucking your dick, getting more and more aroused....`;
        },
      },
      {
        contentId: 24,
        contentType: 2,
        buttonLabel: "Continue",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(19);
          });
        },
      },
    ],
  },
  {
    pageId: 19,
    pageName: "Morning 1",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `....until you finally cum so hard, that you manage to wake yourself up, only to discover that you jizzed your briefs.`;
        },
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Misc/jizzBriefs.gif",
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Damn that felt great, almost makes you forget all of the shit I am in."`;
        },
      },
      {
        contentId: 3,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t".......Well, better go put on a new pair."`;
        },
      },
      {
        contentId: 4,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `As you are putting on a new pair of boxers you hear a knock on the door.`;
        },
      },
      {
        contentId: 5,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"That must be Tricksy, time to go have some fun with her."`;
        },
      },
      {
        contentId: 6,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `You open the door expecting Tricksy to be there.`;
        },
      },
      {
        contentId: 7,
        contentType: 1,
        imageSrc: "./images/Carley/01.jpg",
      },
      {
        contentId: 8,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `Instead, you are surprised by the sight of another woman, who seems to be a bit angry.`;
        },
      },
      {
        contentId: 9,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley: \n\t\t\t"Well, you finally answered the door."`;
        },
      },
      {
        contentId: 10,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley: \n\t\t\t"I have been knocking on your door for the last week."`;
        },
      },
      {
        contentId: 11,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"....How may I help you?"`;
        },
      },
      {
        contentId: 12,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley: \n\t\t\t"Don't play games with me, your rent has been due for a week, everyone else has paid but you."`;
        },
      },
      {
        contentId: 13,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley: \n\t\t\t"I am going to give you another week, and then call the police department to have you evicted."`;
        },
      },
      {
        contentId: 14,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `Figuring out that this must be your landlady, you decide to play it cool.`;
        },
      },
      {
        contentId: 15,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"There is no need for that, I was simply not in the house last week if you want I can give you my phone number so that you can more easily reach me next time."`;
        },
      },
      {
        contentId: 16,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley/Landlady: \n\t\t\t"Ok we can do that, but for now I need you to pay your rent for this month."`;
        },
      },
      {
        contentId: 17,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Can you just remind me exactly how much was the rent?"`;
        },
      },
      {
        contentId: 18,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley/Landlady: \n\t\t\t"$2500, now do you have that much, or do I need to get the LAPD involved?"`;
        },
      },
      {
        contentId: 17,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t".....I am afraid I don't have that much on me, but if you give me a couple of days I am sure I can scrap it together."`;
        },
      },
      {
        contentId: 18,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `She looks at you with a cold fury.`;
        },
      },
      {
        contentId: 19,
        contentType: 1,
        imageSrc: "./images/Carley/02.jpg",
      },
      {
        contentId: 20,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley/Landlady: \n\t\t\t"You have one week to the day, a day later will find you in a cell."`;
        },
      },
      {
        contentId: 21,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Ok, don't worry about it, I will have the money by then."`;
        },
      },
      {
        contentId: 22,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley/Landlady: \n\t\t\t"And one more thing, this is an apartment I am renting for one person only, any more than that, and I will have to raise my prices."`;
        },
      },
      {
        contentId: 23,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"What do you mean, I am living here alone."`;
        },
      },
      {
        contentId: 24,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley/Landlady: \n\t\t\t"Then who is she?"`;
        },
      },
      {
        contentId: 24,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `You stretch your neck behind the doorframe to see that she is pointing a finger directly at Tricksy, who seems to have been there for some time now.`;
        },
      },
      {
        contentId: 25,
        contentType: 1,
        imageSrc: "./images/Tricksy/fulldress1.jpg",
      },
      {
        contentId: 26,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Ohh, she is just a friend here on a quick visit."`;
        },
      },
      {
        contentId: 27,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorCarley");
          return `Carley/Landlady: \n\t\t\t"I hope so for your sake."`;
        },
      },
      {
        contentId: 28,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Ok, this is my phone number, call me whenever you need to."`;
        },
      },
      {
        contentId: 29,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `Carley takes your phone number, and calls it directly, confirming that it is authentic.`;
        },
      },
      {
        contentId: 30,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `With that  she storms out of the apartment building.`;
        },
      },
      {
        contentId: 31,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Well, it just keeps getting better and better."`;
        },
      },
      {
        contentId: 32,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Hey Tricksy, how was your flight? Have you been here a long time?"`;
        },
      },
      {
        contentId: 33,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorTricksy");
          return `Tricksy: \n\t\t\t"It was nice, I couldn't wait to see you."`;
        },
      },
      {
        contentId: 34,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorTricksy");
          return `Tricksy: \n\t\t\t"I was waiting outside your door for a few hours now, I didn't want to wake you up if you were sleeping."`;
        },
      },
      {
        contentId: 35,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Well that's a good girl, anyway come in."`;
        },
      },
      {
        contentId: 36,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `You lead Tricksy inside the apartment.`;
        },
      },
      {
        contentId: 37,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Should we have some fun?"`;
        },
      },
      {
        contentId: 38,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorTricksy");
          return `Tricksy: \n\t\t\t"Whatever you want master."`;
        },
      },
      {
        contentId: 39,
        contentType: 2,
        buttonLabel: "Fondle her tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(20);
          });
        },
      },
      {
        contentId: 40,
        contentType: 2,
        buttonLabel: "Have her give you a Titjob.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(21);
          });
        },
      },
      {
        contentId: 41,
        contentType: 2,
        buttonLabel: "Tell her to suck your dick.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(22);
          });
        },
      },
      {
        contentId: 42,
        contentType: 2,
        buttonLabel: "Fuck her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(23);
          });
        },
      },
      {
        contentId: 43,
        contentType: 2,
        buttonLabel: "Fuck her ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(24);
          });
        },
      },
    ],
  },
  {
    pageId: 20,
    pageName: "Tricksy Fondle Tits",
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Tricksy/fondleTits01.gif",
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Tricksy/fondleTits02.gif",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/fondleTits03.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/fondleTits04.gif",
      },
      {
        contentId: 4,
        contentType: 2,
        buttonLabel: "Have her give you a Titjob.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(21);
          });
        },
      },
      {
        contentId: 5,
        contentType: 2,
        buttonLabel: "Tell her to suck your dick.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(22);
          });
        },
      },
      {
        contentId: 6,
        contentType: 2,
        buttonLabel: "Fuck her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(23);
          });
        },
      },
      {
        contentId: 7,
        contentType: 2,
        buttonLabel: "Fuck her ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(24);
          });
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Cum on her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(25);
          });
        },
      },
    ],
  },
  {
    pageId: 21,
    pageName: "Tricksy  Titjob",
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob01.gif",
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob02.gif",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob03.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob04.gif",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob05.gif",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob06.gif",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/titjob07.gif",
      },
      {
        contentId: 7,
        contentType: 2,
        buttonLabel: "Fondle her tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(20);
          });
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Tell her to suck your dick.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(22);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Fuck her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(23);
          });
        },
      },
      {
        contentId: 10,
        contentType: 2,
        buttonLabel: "Fuck her ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(24);
          });
        },
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Cum on her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(25);
          });
        },
      },
    ],
  },
  {
    pageId: 22,
    pageName: "Tricksy blowjob",
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob01.gif",
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob02.gif",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob03.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob04.gif",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob05.gif",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob06.gif",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/blowjob.gif",
      },
      {
        contentId: 7,
        contentType: 2,
        buttonLabel: "Fondle her tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(20);
          });
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Have her give you a Titjob.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(21);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Fuck her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(23);
          });
        },
      },
      {
        contentId: 10,
        contentType: 2,
        buttonLabel: "Fuck her ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(24);
          });
        },
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Cum on her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(25);
          });
        },
      },
    ],
  },
  {
    pageId: 23,
    pageName: "Tricksy Sex",
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex01.gif",
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex02.gif",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex03.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex04.gif",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex05.gif",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex06.gif",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/sex07.gif",
      },
      {
        contentId: 7,
        contentType: 2,
        buttonLabel: "Fondle her tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(20);
          });
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Have her give you a Titjob.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(21);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Tell her to suck your dick.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(22);
          });
        },
      },
      {
        contentId: 10,
        contentType: 2,
        buttonLabel: "Fuck her ass.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(24);
          });
        },
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Cum on her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(25);
          });
        },
      },
    ],
  },
  {
    pageId: 24,
    pageName: "Tricksy Anal",
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal01.gif",
      },
      {
        contentId: 1,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal02.gif",
      },
      {
        contentId: 2,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal04.gif",
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal03.gif",
      },
      {
        contentId: 4,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal05.gif",
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal06.gif",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Tricksy/anal07.gif",
      },
      {
        contentId: 7,
        contentType: 2,
        buttonLabel: "Fondle her tits.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(20);
          });
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Have her give you a Titjob.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(21);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Tell her to suck your dick.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(22);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Fuck her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(23);
          });
        },
      },
      {
        contentId: 11,
        contentType: 2,
        buttonLabel: "Cum on her.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(25);
          });
        },
      },
    ],
  },
  {
    pageId: 25,
    pageName: "Casino 1",
    pageContent: [
      {
        contentId: 0,
        contentType: 1,
        imageSrc: "./images/Tricksy/cum.gif",
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `After cumming all over Tricksy you decide to let her have some much-deserved sleep.`;
        },
      },
      {
        contentId: 2,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `In the mean-time you decide to take a bus to your nearest casino, yesterday was lucky to just find someone who wanted to play blackjack online, but to find more blackjack dealers you figure you should go where they work.`;
        },
      },
      {
        contentId: 3,
        contentType: 1,
        imageSrc: "./images/Misc/casino.jpg",
      },
      {
        contentId: 4,
        contentType: 0,
        text: function (x) {
          x.classList.add("colorPlayer");
          return `You arrive at the casino and head straight for the blackjack tables, luckily there seems to be 2 dealers, and both of them have no one currently playing.`;
        },
      },
      {
        contentId: 5,
        contentType: 1,
        imageSrc: "./images/Ashley/2.jpg",
      },
      {
        contentId: 6,
        contentType: 1,
        imageSrc: "./images/Haley/2.jpg",
      },
      {
        contentId: 7,
        contentType: 0,
        text: function (x) {
          return `${playerSettings.playerName}: \n\t\t\t"Alright, I will have to clean them both out."`;
        },
      },
      {
        contentId: 8,
        contentType: 2,
        buttonLabel: "Go to the table with the blue jeans girl.",
        functionType: 2,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            blackjackGame.init("Ashley", 26, 9, 300);
            gameManager.setPage(8);
          });
        },
      },
      {
        contentId: 9,
        contentType: 2,
        buttonLabel: "Go to the table with the 4-eyes girl.",
        functionType: 2,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            blackjackGame.init("Haley", 26, 9, 300);
            gameManager.setPage(8);
          });
        },
      },
    ],
  },
  {
    pageId: 26,
    pageName: "End of Current Story.",
    pageContent: [
      {
        contentId: 0,
        contentType: 0,
        text: function (x) {
          playerSettings.emperorPoints += 25;
          gameManager.loadSettingsUI();
          return `--End of the current version, congratulations on making it this far, keep an eye out for future releases to come soon--`;
        },
      },
      {
        contentId: 1,
        contentType: 0,
        text: function (x) {
          return `If you enjoyed this game, please consider supporting me on patreon.`;
        },
      },
      {
        contentId: 2,
        contentType: 2,
        buttonLabel: "Go to Patreon.",
        functionType: 3,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            window.open("https://www.patreon.com/NoobGames18plus", "_blank");
          });
        },
      },
      {
        contentId: 3,
        contentType: 2,
        buttonLabel: "Restart Game.",
        functionType: 1,
        buttonFunction: function (x) {
          x.addEventListener("click", function () {
            gameManager.setPage(0);
          });
        },
      },
    ],
  },
];
