var menuContainer = document.getElementById("menu-container"); //elementa that contains the menu
var storyContainer = document.getElementById("story-container"); //element that contains the story of our game
var gameContainer = document.getElementById("game-container"); //element that contains our blackjackGame game
var settingsContainer = document.getElementById("settings-container"); //element that contains save/load buttons, as well as player data
var wholeGame = document.getElementById("whole-game");
var extraInformationContainer = document.getElementById("extra-information-container")
var extraInformation = document.getElementById("extra-information")


var hideShowSettings = document.getElementById("hide-show-settings");
var hideShowRules = document.getElementById("hide-show-BJ-rules");
var hideMenuContainer = document.getElementById("hide-show-menu-container")

var dayOfWeek = document.getElementById("day-of-week")
var characters = document.getElementById("characters")
var credits = document.getElementById("credits")
var charactersView = document.getElementById("charactersView")
var creditsView = document.getElementById("creditsView")


hideShowRules.classList.add("ninja");
var areSettingsShown = true;
var areRulesShown = true;
var isMenuShown = true;

extraInformationContainer.addEventListener("click", (e) => {
  if (e.target !== extraInformationContainer) return

  extraInformationContainer.classList.add("ninja")
})


characters.addEventListener("click", () => {
  if (extraInformationContainer.classList.contains("ninja")) {
    //Instantiate the page with the necessary information

    extraInformationContainer.classList.remove("ninja")
    charactersView.classList.remove("ninja")
    showCharactersView();
  } else{
    if(!creditsView.classList.contains("ninja")){
      creditsView.classList.add("ninja");
      charactersView.classList.remove("ninja")
    showCharactersView();
    } else {
    extraInformationContainer.classList.add("ninja")
    charactersView.classList.add("ninja")
  }
  }
})

credits.addEventListener("click", () => {
  if (extraInformationContainer.classList.contains("ninja")) {
    //Instantiate the page with the necessary information

    extraInformationContainer.classList.remove("ninja")
    creditsView.classList.remove("ninja")
    showCreditsView();
  } else{
    if(!charactersView.classList.contains("ninja")){
      charactersView.classList.add("ninja");
      creditsView.classList.remove("ninja")
      showCreditsView();
    } else {
      extraInformationContainer.classList.add("ninja")
    creditsView.classList.add("ninja")
    }
    
  }
})

var showCharactersView = function(){
  charactersView.querySelectorAll("*").forEach((n) => n.remove());


  for(var i = 0; i < charactersDescription.length; i++){
    currentCharacter = charactersDescription[i];

    var characterViewInstance = document.createElement("div");
    characterViewInstance.classList.add("characterView");
    var characterImageInstance = document.createElement("img");
    characterImageInstance.classList.add("characterViewImage");
    var characterNameInstance = document.createElement("p");
    characterNameInstance.classList.add("characterViewName")
    var characterDescriptionInstance = document.createElement("p");
    characterDescriptionInstance.classList.add("characterViewDescription")

    characterViewInstance.appendChild(characterImageInstance);
    characterViewInstance.appendChild(characterNameInstance);
    characterViewInstance.appendChild(characterDescriptionInstance);
    charactersView.appendChild(characterViewInstance)

    var activeDescription = currentCharacter.currentDescription;

    characterNameInstance.innerHTML = currentCharacter.characterName;
    characterDescriptionInstance.innerHTML = currentCharacter.description[activeDescription];
    characterImageInstance.src = currentCharacter.picture[activeDescription];



  }

}

var showCreditsView = function(){}



hideShowSettings.addEventListener("click", () => {
  if (areSettingsShown) {
    settingsContainer.classList.add("ninja");
    wholeGame.style.height = "95vh";
    hideShowSettings.src = "./images/Misc/upButtonWhite.png";
    areSettingsShown = false;
  } else {
    settingsContainer.classList.remove("ninja");
    wholeGame.style.height = "88vh";
    hideShowSettings.src = "./images/Misc/downButtonWhite.png";
    areSettingsShown = true;
  }
});

hideShowRules.addEventListener("click", () => {
   storyContainer.classList.add("ninja");
   if (areRulesShown) {
    hideShowRules.src = "./images/Misc/rightButtonWhite.png";
    areRulesShown = false;
  } else {
    storyContainer.classList.remove("ninja");
    hideShowRules.src = "./images/Misc/leftButtonWhite.png";
    areRulesShown = true;
  }
});

hideMenuContainer.addEventListener("click", () => {
  menuContainer.classList.add("ninja")
  if(isMenuShown){
    hideMenuContainer.src = "./images/Misc/rightButtonWhite.png"
    isMenuShown = false;
  } else {
    menuContainer.classList.remove("ninja")
    hideMenuContainer.src = "./images/Misc/leftButtonWhite.png"
    isMenuShown = true;
  }
})
// hideMenuContainer.click()


//object that contains the player data, this is the data that is saved and loaded during the game.
var playerSettings = {
  playerName: null,
  playerCash: null,
  emperorPoints: 0,
  pageArrivedAt: null,
};

var charactersDescription = [
  {characterName: "LadyLuck" ,
  characterId : 0,
  currentDescription : 1,
  description : {
    0: "",
    1: "first description of LadyLuck",
    2: "second description of LadyLuck"
  } ,
  picture : {
    0 : "",
    1: "./images/Lady Luck/LadyLuck03.jpg"
  }
  
  }
]

// pages of the story, each page has page contents, the type of each content is given by number
// 0 for text
// 1 for images
// 2 for buttons
// 3 for text inputs
// 5 for chat boxes
// The buttons are subdivided by button type:
// 0 for closing game
// 1 for changing pages
// 2 to go to a page with a blackjack game
// 3 for external links
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
      },
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

//used to control the flow of the game
var gameManager = {
  //Initializes the variables at the beginning of a game
  loadInitializevariables: function () {
    playerSettings = {
      playerName: "",
      playerCash: 0,
      emperorPoints: 0,
      pageArrivedAt: 0,
    };
  },

  //loads/reloads the settings UI
  loadSettingsUI: function () {
    //removes all the elements currently in the settingsContainer
    settingsContainer.querySelectorAll("*").forEach((n) => n.remove());

    //Adds save/load buttons
    var saveLoadContainer = document.createElement("div");
    saveLoadContainer.style.display = "flex";
    saveLoadContainer.classList.add("save-load-container");
    //for the save button
    var saveContainer = document.createElement("div");
    saveContainer.classList.add("save-load-buttons");
    var saveImage = document.createElement("img");
    saveImage.src = "./images/Misc/saveIcon.png";
    saveContainer.appendChild(saveImage);
    saveContainer.addEventListener("click", gameManager.saveGame);

    //for the load button
    var loadContainer = document.createElement("div");
    loadContainer.classList.add("save-load-buttons");

    var inputFile = document.createElement("input");
    inputFile.setAttribute("type", "file");
    inputFile.id = "file-upload";

    inputFile.addEventListener("change", (event) => {
      var reader = new FileReader();
      reader.onload = (event) => {
        console.log(event.target.result);
        var obj = JSON.parse(event.target.result);
        playerSettings = obj;
        // console.log(playerSettings);

        //checks if the page we want to load doesn't not contain a BJ game, if it does we load the previous one
        const currentPage = storyPages.find(
          (page) => page.pageId === playerSettings.pageArrivedAt
        );
        if (currentPage.containsBJ) playerSettings.pageArrivedAt -= 1;

        gameManager.setPage(playerSettings.pageArrivedAt);
      };
      reader.readAsText(event.target.files[0]);
    });

    var loadLabel = document.createElement("label");
    loadLabel.htmlFor = "file-upload";
    loadLabel.id = "load-label";
    var loadImage = document.createElement("img");
    loadImage.src = "./images/Misc/loadIcon.png";
    loadLabel.appendChild(loadImage);

    loadContainer.appendChild(loadLabel);
    loadContainer.appendChild(inputFile);

    //append all children for the save/load buttons
    saveLoadContainer.appendChild(saveContainer);
    saveLoadContainer.appendChild(loadContainer);
    settingsContainer.appendChild(saveLoadContainer);

    //used to load the player settings UI
    //loads the player name
    var x = document.createElement("P");
    var t = document.createTextNode(playerSettings.playerName);
    x.appendChild(t);
    x.setAttribute("id", "player-name");
    x.classList.add("player-name");
    settingsContainer.appendChild(x);

    //loads the players current cash
    var x = document.createElement("P");
    var t = document.createTextNode("Cash: $" + playerSettings.playerCash);
    x.appendChild(t);
    x.setAttribute("id", "player-cash");
    x.classList.add("player-cash");
    settingsContainer.appendChild(x);

    //loads the player current emperor points
    var x = document.createElement("P");
    var t = document.createTextNode("EP: " + playerSettings.emperorPoints);
    x.appendChild(t);
    x.setAttribute("id", "emperorPoints");
    x.classList.add("emperorPoints");
    settingsContainer.appendChild(x);
  },

  startGame: function () {
    //function that gets called to start the game
    gameManager.loadInitializevariables();
    gameManager.loadSettingsUI(); //shows the settings of the player
    gameManager.setPage(playerSettings.pageArrivedAt);
  },

  //used to show content one by one, on each click of the player(needs fixing).
  showContent: function () {
    const currentPage = storyPages.find(
      (page) => page.pageId === playerSettings.pageArrivedAt
    );

    //variable used to show/hide continueText
    var continueText = document.getElementById("continueText");

    //Shows or hides the child elements of storyContainer
    var storyContents = storyContainer.children;
    for (var i = 0; i < storyContents.length; i++) {
      if (storyContents[i].classList.contains("ninja")) {
        //shows all the elements of the same type that are after the current element.
        for (var j = i + 1; j < storyContents.length - 1; j++) {
          if (
            currentPage.pageContent[i].contentType ==
            currentPage.pageContent[j].contentType
          ) {
            storyContents[j].classList.remove("ninja");
            continue;
          } else {
            break;
          }
        }

        //Show the last element and the continueText element
        storyContents[i].classList.remove("ninja");
        continueText.classList.remove("ninja");

        //if the element type is a button or a textInput show all elements after it
        if (
          storyContents[i].classList.contains("styling-buttons") ||
          storyContents[i].classList.contains("styling-textInput")
        ) {
          for (var j = i + 1; j < storyContents.length; j++) {
            storyContents[j].classList.remove("ninja");
          }
          //Hide the continueText element
          continueText.classList.add("ninja");
        }

        //scroll to the element position
        var topPos = storyContents[i].offsetTop;
        storyContainer.scrollTop = topPos;
        if (i == storyContents.length - 1) continueText.classList.add("ninja");
        break;
      }
    }
  },

  // function to load each page data
  setPage: function (pageID) {
    playerSettings.pageArrivedAt = pageID; //used to save the current page, in case player loads it
    gameManager.loadSettingsUI();

    console.log(
      "we are currently in page in the setPage function in page: " + pageID
    );
    // console.log(playerSettings);

    //clears the page, by removing all children of the previous story page.
    storyContainer.querySelectorAll("*").forEach((n) => n.remove());

    //loads a specific page
    const currentPage = storyPages.find((page) => page.pageId === pageID);
    if (currentPage.containsBJ !== null) {
      gameContainer.style.flex = currentPage.containsBJ ? "1" : "0";
      menuContainer.style.width = currentPage.containsBJ ? "0%" : "20%"
      if(currentPage.containsBJ){
        hideMenuContainer.classList.add("ninja")
      } else {
        hideMenuContainer.classList.remove("ninja")
      }
    } //hides the gameContainer if we won't be needing it.
    // storyContainer.style.flex = currentPage.containsBJ ? "0" : "1"; //hides the storyContainer if we won't be needing it.

    storyContainer.classList.remove("ninja");

    if (currentPage.containsBJ) {
      hideShowRules.classList.remove("ninja");
      hideShowRules.src = "./images/Misc/leftButtonWhite.png";
      areRulesShown = true;
    } else {
      hideShowRules.classList.add("ninja");
    }

    for (i = 0; i < storyPages[pageID].pageContent.length; i++) {
      //iterates through all the contents of a page
      var currentContent = storyPages[pageID].pageContent[i]; //gets the current content element
      //console.log(currentContent);

      switch (
        currentContent.contentType //depending on the content type we will be adding we used different instructions
      ) {
        case 0: //used to add text
          var x = document.createElement("P");
          // console.log(playerSettings.playerName);
          x.innerHTML = currentContent.text(x);
          x.setAttribute("id", "text" + currentContent.contentId);
          x.classList.add("styling-text");
          x.classList.add("ninja");
          x.classList.add("unselectable");
          storyContainer.appendChild(x);
          break;
        case 1: //used to add images
          var x = document.createElement("IMG");
          x.src = currentContent.imageSrc;
          x.setAttribute("id", "image" + currentContent.contentId);
          x.classList.add("styling-images");
          x.classList.add("ninja");
          x.classList.add("unselectable");
          storyContainer.appendChild(x);
          break;
        case 2: //used to add buttons
          var x = document.createElement("button");
          x.setAttribute("id", "button" + currentContent.contentId);
          x.innerHTML = currentContent.buttonLabel;
          x.classList.add("styling-buttons");
          x.classList.add("ninja");
          x.classList.add("unselectable");
          storyContainer.appendChild(x);
          currentContent.buttonFunction(x);
          break;
        case 3: //used to add user text-input
          var x = document.createElement("INPUT");
          x.setAttribute("type", "text");
          x.setAttribute("id", "textInput" + currentContent.contentId);
          x.classList.add("styling-textInput");
          x.classList.add("ninja");
          storyContainer.appendChild(x);
          x.defaultValue = currentContent.defaultTextValue;
          break;
        case 4:
          var x = document.createElement("div");
          x.classList.add("speech");
          x.classList.add("ninja");
          x.classList.add(currentContent.speakingCharacter);
          x.innerHTML = currentContent.text(x);
          var s = document.createElement("span");
          s.classList.add(currentContent.speakingCharacter);
          s.classList.add("avatar");
          var hr = document.createElement("hr");
          x.appendChild(s);
          x.appendChild(hr);
          x.classList.add("unselectable");
          storyContainer.appendChild(x);
          break;
        default:
          console.error(
            //outputs an error the content type is not one of the cases, which means there is something wrong with the story pages
            "Error in content" + currentContent.contentId + " in page" + pageID
          );
      }
    }

    //makes the first page ("Warning") or any BJ game page visible
    if (pageID == 0 || currentPage.containsBJ) {
      var storyContents = storyContainer.children;
      for (var i = 0; i < storyContents.length; i++) {
        storyContents[i].classList.remove("ninja");
      }
    }

    //Adds a blinking text at the end of the story-contents.
    if (pageID !== 0) {
      var x = document.createElement("P");
      x.innerText = "click to continue.....";
      x.setAttribute("id", "continueText");
      x.classList.add("styling-text");
      x.classList.add("ninja");
      x.classList.add("unselectable");
      x.classList.add("blink_me");
      storyContainer.appendChild(x);
    }

    storyContainer.scrollTop = 0; //makes sure the player is at the top of the page when the new page loads.
  },

  //saves the playerSettings in the dowload folder of the user as a json file.
  saveGame: function () {
    const a = document.createElement("a");
    const file = new Blob([JSON.stringify(playerSettings)], {
      type: "text/plain",
    });
    a.href = URL.createObjectURL(file);
    a.download = "BlackJackEmperorSave.json";
    a.click();
  },
};

var blackjackGame = {
  //variables that will be used to link to document objects
  dealerPicture: null,
  dealerCashText: null,
  gamesContainer: null,
  playButton: null,
  bettedAmmountInput: null,
  dealerCardsContainer: null,
  dealerScore: null,
  dealerScoreText: null,
  gameExplanationText: null,
  //variables to control dealer actions
  dealerName: null,
  dealerCash: null,
  dealerInitialCash: null,
  bettedInitialAmmount: null,
  //variables to control the flow of the game
  deckCards: [],
  dealerCards: [],
  playerCards: [],
  numberActiveGames: 0,
  pageIfWon: null,
  pageIfLost: null,

  //function called at the start of the game used to initialize the game
  init: function (dealer_name, page_if_won, page_if_lost, dealer_initial_cash) {
    //links all necessary variables to HTML document elements
    blackjackGame.dealerPicture = document.getElementById("dealerPicture");
    blackjackGame.gamesContainer = document.getElementById("gamesContainer");
    blackjackGame.playButton = document.getElementById("playButton");
    blackjackGame.dealerCashText = document.getElementById("dealerCashText");
    blackjackGame.bettedAmmountInput = document.getElementById(
      "bettedAmmountInput"
    );
    blackjackGame.dealerCardsContainer = document.getElementById(
      "dealerCardsContainer"
    );
    blackjackGame.dealerScoreText = document.getElementById("dealerScoreText");
    blackjackGame.gameExplanationText = document.getElementById(
      "gameExplanationText"
    );

    //sets functionality of play button, which is to start a new round of blackjack
    blackjackGame.playButton.addEventListener("click", blackjackGame.startGame);

    //initializes dealer and player cash variables as well as the betting ammount for the game.
    blackjackGame.dealerName = dealer_name;
    blackjackGame.dealerCash = dealer_initial_cash;
    blackjackGame.dealerInitialCash = dealer_initial_cash;
    blackjackGame.pageIfWon = page_if_won;
    blackjackGame.pageIfLost = page_if_lost;
    blackjackGame.bettedAmmountInput.defaultValue = 10;
    blackjackGame.gameExplanationText.innerHTML = "";

    //shows and hides game objects for the start of a game
    blackjackGame.gamesContainer.classList.add("ninja");
    blackjackGame.playButton.classList.remove("ninja");
    blackjackGame.dealerCardsContainer.classList.add("ninja");
    //updates UI of the dealer picture and the player dealer cash texts
    blackjackGame.setDealerPicture();
    blackjackGame.setPlayerDealerCashTexts();
  },

  startGame: function () {
    //functions used to set up a new round
    blackjackGame.dealerCards = [];
    blackjackGame.deckCards = [];
    blackjackGame.playerCards = [];
    blackjackGame.numberActiveGames = 0;
    blackjackGame.gameExplanationText.innerHTML = "";

    blackjackGame.getFreshDeck();
    blackjackGame.getInitialBet();
    blackjackGame.setupDealerHand();
    blackjackGame.addGame();
    blackjackGame.setupPlayerHands();
    //hides and shows elements of the game as needed
    blackjackGame.playButton.classList.add("ninja");
    blackjackGame.bettedAmmountInput.classList.add("ninja");
    blackjackGame.gamesContainer.classList.remove("ninja");
    blackjackGame.dealerCardsContainer.classList.remove("ninja");
  },

  getFreshDeck: function () {
    //Get 2 decks of cards in order 104 cards
    for (let k = 0; k < 2; k++) {
      for (let i = 0; i < 4; i++) {
        for (let j = 1; j < 14; j++) {
          //here we push an element to the deck made up of {s:i,n:j}

          let value = null;
          let symbol = null;

          switch (j) {
            case 1:
              value = "A";
              break;
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
            case 10:
              value = `${j}`;
              break;
            case 11:
              value = "J";
              break;
            case 12:
              value = "Q";
              break;
            case 13:
              value = "K";
              break;
          }

          switch (i) {
            case 0:
              symbol = "H";
              break;
            case 1:
              symbol = "D";
              break;

            case 2:
              symbol = "C";
              break;
            case 3:
              symbol = "S";
              break;
          }
          blackjackGame.deckCards.push({
            // Number
            // 1 = Ace
            // 2 to 10 = As-it-is
            // 11 = Jack
            // 12 = Queen
            // 13 = King
            n: value,
            // Shape
            // 0 = Heart
            // 1 = Diamond
            // 2 = Club
            // 3 = Spade
            s: symbol,
          });
        }
      }
    }

    //shuffle deck according to Fisher-Yates Algorithm
    for (let i = blackjackGame.deckCards.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * i);
      let temp = blackjackGame.deckCards[i];
      blackjackGame.deckCards[i] = blackjackGame.deckCards[j];
      blackjackGame.deckCards[j] = temp;
    }
  },
  getInitialBet: function () {
    //limits the initial bet to be between 5 and the cash that the dealer currently has, bet ammounts are multiple of 5
    blackjackGame.bettedAmmountInput.value =
      Math.floor(blackjackGame.bettedAmmountInput.value / 5) * 5;

    if (blackjackGame.bettedAmmountInput.value > playerSettings.playerCash)
      blackjackGame.bettedAmmountInput.value = playerSettings.playerCash;
    if (
      blackjackGame.bettedAmmountInput.value < 5 &&
      playerSettings.playerCash > 0
    )
      blackjackGame.bettedAmmountInput.value = 5;
  },

  setupDealerHand: function () {
    blackjackGame.draw(1);
    blackjackGame.draw(1);
    //load UI settings
    blackjackGame.setDealerCardsUI();
    blackjackGame.calculateHandScore(1);
  },

  //sets up player hand, by creating each element individually.
  setupPlayerHands: function () {
    //removes all previous children of the gamesContainer
    blackjackGame.gamesContainer
      .querySelectorAll("*")
      .forEach((n) => n.remove());
    //loops through all of player hands and creates the elements.
    for (let i = 0; i < blackjackGame.playerCards.length; i++) {
      var game = document.createElement("div");
      game.id = "game" + blackjackGame.playerCards[i].gameID;
      game.classList.add("game");
      blackjackGame.gamesContainer.appendChild(game);

      var cardsContainer = document.createElement("div");
      cardsContainer.classList.add("playerCardsContainer");

      var cards = document.createElement("div");
      cards.classList.add("playerCards");

      //creates cards for all the player hands
      for (var j = 0; j < blackjackGame.playerCards[i].gameCards.length; j++) {
        var image = document.createElement("img");
        image.classList.add("cards");
        image.src = `./images/cards/${blackjackGame.playerCards[i].gameCards[j].n}${blackjackGame.playerCards[i].gameCards[j].s}.png`;
        cards.appendChild(image);
      }

      cardsContainer.appendChild(cards);

      var PscoreContainer = document.createElement("div");
      PscoreContainer.classList.add("playerScoreContainer");

      var Pscore = document.createElement("p");
      Pscore.classList.add("playerScore");
      Pscore.innerHTML =
        "player points: " + blackjackGame.calculateHandScore(0, i);
      PscoreContainer.appendChild(Pscore);

      var EPButtonContainer = document.createElement("div");
      EPButtonContainer.classList.add("emperorPointsButtonsContainer");

      var EPupButton = document.createElement("button");
      EPupButton.classList.add("EPupButton");

      EPupButton.addEventListener("click", () => {
        playerSettings.emperorPoints--;
        blackjackGame.playerCards[i].addedEmperorPoints++;
        if (playerSettings.emperorPoints <= 0) {
          EPButtonContainer.classList.add("ninja");
        }
        Pscore.innerHTML =
          "player points: " + blackjackGame.calculateHandScore(0, i);
      });

      var EPdownButton = document.createElement("button");
      EPdownButton.classList.add("EPdownButton");

      EPdownButton.addEventListener("click", () => {
        playerSettings.emperorPoints--;
        blackjackGame.playerCards[i].addedEmperorPoints--;
        if (playerSettings.emperorPoints <= 0) {
          EPButtonContainer.classList.add("ninja");
        }
        Pscore.innerHTML =
          "player points: " + blackjackGame.calculateHandScore(0, i);
      });

      if (playerSettings.emperorPoints <= 0)
        EPButtonContainer.classList.add("ninja");

      EPButtonContainer.appendChild(EPupButton);
      EPButtonContainer.appendChild(EPdownButton);
      PscoreContainer.appendChild(EPButtonContainer);
      cardsContainer.appendChild(PscoreContainer);

      game.appendChild(cardsContainer);

      //bet container used to create betting chips for each game???????
      var betContainer = document.createElement("div");
      betContainer.classList.add("betContainer");
      var bettedChips = document.createElement("div");
      bettedChips.classList.add("bettedChips");

      //variables to know how many chip images of each type we will need to have
      var FHnumber = parseInt(
        Math.floor(blackjackGame.playerCards[i].betValue / 500)
      );
      var FHremainder = blackjackGame.playerCards[i].betValue % 500;
      var OHnumber = parseInt(Math.floor(FHremainder / 100));
      var OHremainder = FHremainder % 100;
      var TFnumber = parseInt(Math.floor(OHremainder / 25));
      var TFremainder = OHremainder % 25;
      var Fnumber = parseInt(Math.floor(TFremainder / 5));

      var fiveChipRack = document.createElement("div");
      fiveChipRack.classList.add("chipRack");
      for (var v = 0; v < Fnumber; v++) {
        var imageFiveChip = document.createElement("img");
        imageFiveChip.classList.add("chip");
        imageFiveChip.src = "./images/chips/5chip.png";
        fiveChipRack.appendChild(imageFiveChip);
      }

      //game elements used to make the chips and stack them
      var twentyfiveChipRack = document.createElement("div");
      if (TFnumber > 0) {
        twentyfiveChipRack.classList.add("chipRack");
        for (var v = 0; v < TFnumber; v++) {
          var imageTwentyFiveChip = document.createElement("img");
          imageTwentyFiveChip.classList.add("chip");
          imageTwentyFiveChip.src = "./images/chips/25chip.png";
          twentyfiveChipRack.appendChild(imageTwentyFiveChip);
        }
      }

      var onehundredChipRack = document.createElement("div");
      if (OHnumber > 0) {
        onehundredChipRack.classList.add("chipRack");
        for (var v = 0; v < OHnumber; v++) {
          var imageOneHundredChip = document.createElement("img");
          imageOneHundredChip.classList.add("chip");
          imageOneHundredChip.src = "./images/chips/100chip.png";
          onehundredChipRack.appendChild(imageOneHundredChip);
        }
      }

      var fivehundredChipRack = document.createElement("div");
      if (FHnumber > 0) {
        fivehundredChipRack.classList.add("chipRack");
        for (var v = 0; v < FHnumber; v++) {
          var imageFiveHundredChip = document.createElement("img");
          imageFiveHundredChip.classList.add("chip");
          imageFiveHundredChip.src = "./images/chips/500chip.png";
          fivehundredChipRack.appendChild(imageFiveHundredChip);
        }
      }

      bettedChips.appendChild(fiveChipRack);
      bettedChips.appendChild(twentyfiveChipRack);
      bettedChips.appendChild(onehundredChipRack);
      bettedChips.appendChild(fivehundredChipRack);

      var bettedAmmountText = document.createElement("p");
      bettedAmmountText.classList.add("bettedAmmountText");
      bettedAmmountText.innerText =
        "Bet: " + blackjackGame.playerCards[i].betValue;

      betContainer.appendChild(bettedChips);
      betContainer.appendChild(bettedAmmountText);

      game.appendChild(betContainer);

      // blackjackGame.setAvailableButtons(i);

      //container for all the buttons
      var buttonsContainer = document.createElement("div");
      buttonsContainer.classList.add("buttonsContainer");

      var hitButton = document.createElement("button");
      hitButton.classList.add("hitButton");
      hitButton.addEventListener("click", function () {
        blackjackGame.onHit(i);
      });
      hitButton.innerHTML = "Hit";

      var standButton = document.createElement("button");
      standButton.classList.add("standButton");
      standButton.addEventListener("click", function () {
        blackjackGame.onStand(i);
      });
      standButton.innerHTML = "Stand";

      var doubleDownButton = document.createElement("button");
      doubleDownButton.classList.add("doubleDownButton");
      doubleDownButton.addEventListener("click", function () {
        blackjackGame.onDoubleDown(i);
      });
      doubleDownButton.innerHTML = "Double Down";

      var splitButton = document.createElement("button");
      splitButton.classList.add("splitButton");
      splitButton.addEventListener("click", function () {
        blackjackGame.onSplit(i);
      });
      splitButton.innerHTML = "Split";

      var insuranceButton = document.createElement("button");
      insuranceButton.classList.add("insuranceButton");
      insuranceButton.addEventListener("click", function () {
        blackjackGame.onInsurance(i);
      });
      insuranceButton.innerHTML = "Insurance";

      var surrenderButton = document.createElement("button");
      surrenderButton.classList.add("surrenderButton");
      surrenderButton.addEventListener("click", function () {
        blackjackGame.onSurrender(i);
      });
      surrenderButton.innerHTML = "Surrender";

      //if a certain game has already ended don't show it
      if (blackjackGame.playerCards[i].hasGameEnded) {
        var hiddenButtons = blackjackGame.playerCards[i];
        hiddenButtons.canHit = false;
        hiddenButtons.canStand = false;
      }

      //shows/hides a specific games buttons
      if (!blackjackGame.playerCards[i].canHit) {
        hitButton.classList.add("ninja");
      } else {
        hitButton.classList.remove("ninja");
      }
      if (!blackjackGame.playerCards[i].canStand) {
        standButton.classList.add("ninja");
      } else {
        standButton.classList.remove("ninja");
      }
      if (!blackjackGame.playerCards[i].canDoubleDown) {
        doubleDownButton.classList.add("ninja");
      } else {
        doubleDownButton.classList.remove("ninja");
      }
      if (!blackjackGame.playerCards[i].canSplit) {
        splitButton.classList.add("ninja");
      } else {
        splitButton.classList.remove("ninja");
      }
      if (!blackjackGame.playerCards[i].canInsure) {
        insuranceButton.classList.add("ninja");
      } else {
        insuranceButton.classList.remove("ninja");
      }
      if (!blackjackGame.playerCards[i].canSurrender) {
        surrenderButton.classList.add("ninja");
      } else {
        surrenderButton.classList.remove("ninja");
      }

      buttonsContainer.appendChild(hitButton);
      buttonsContainer.appendChild(standButton);
      buttonsContainer.appendChild(doubleDownButton);
      buttonsContainer.appendChild(splitButton);
      buttonsContainer.appendChild(insuranceButton);
      buttonsContainer.appendChild(surrenderButton);

      game.appendChild(buttonsContainer);
    }
  },

  addGame: function () {
    blackjackGame.numberActiveGames++;
    blackjackGame.playerCards.push({
      gameID: blackjackGame.numberActiveGames - 1,
      canHit: true,
      canStand: true,
      canSurrender: true,
      canSplit: false,
      canDoubleDown: false,
      canInsure: false,
      isInsured: false,
      isStanding: false,
      hasGameEnded: false,
      betValue: blackjackGame.bettedAmmountInput.value,
      gameScore: null,
      gameCards: [],
      addedEmperorPoints: 0,
    });
    blackjackGame.draw(0, blackjackGame.numberActiveGames - 1);
    blackjackGame.draw(0, blackjackGame.numberActiveGames - 1);

    blackjackGame.setAvailableButtons(blackjackGame.numberActiveGames - 1);
  },
  removeGame: function (game, hasWon, cashBetted) {
    if (cashBetted == null)
      cashBetted = blackjackGame.playerCards[game].betValue;

    blackjackGame.playerCards[game].hasGameEnded = true;

    var allHandsFinished = 0;

    for (j = 0; j < blackjackGame.playerCards.length; j++) {
      if (blackjackGame.playerCards[j].hasGameEnded) {
        allHandsFinished++;
      }
      console.log(
        `player Cards[${j}].hasGameEnded`,
        blackjackGame.playerCards[j].hasGameEnded
      );
    }

    console.log("all hands finished: ", allHandsFinished);
    console.log("playerCards.length: ", blackjackGame.playerCards.length);

    if (blackjackGame.playerCards.length != 1) {
      if (hasWon) {
        playerSettings.playerCash += parseInt(cashBetted);
        blackjackGame.dealerCash -= parseInt(cashBetted);
      } else {
        playerSettings.playerCash -= parseInt(cashBetted);
        blackjackGame.dealerCash += parseInt(cashBetted);
      }

      blackjackGame.setupPlayerHands();
      blackjackGame.setPlayerDealerCashTexts();

      if (blackjackGame.playerCards.length == allHandsFinished) {
        if (hasWon) {
          playerSettings.playerCash += parseInt(cashBetted);
          blackjackGame.dealerCash -= parseInt(cashBetted);
          blackjackGame.gameExplanationText.innerHTML = "Player has Won";
        } else {
          if (cashBetted == 0) {
            blackjackGame.gameExplanationText.innerHTML = "Game is a tie";
          } else {
            playerSettings.playerCash -= parseInt(cashBetted);
            blackjackGame.dealerCash += parseInt(cashBetted);
            blackjackGame.gameExplanationText.innerHTML = "Dealer has Won";
          }
        }
        blackjackGame.playButton.classList.remove("ninja");
        blackjackGame.bettedAmmountInput.classList.remove("ninja");

        //hides the buttons container of the last active game
        blackjackGame.playerCards[game].canHit = false;
        blackjackGame.playerCards[game].canStand = false;
        blackjackGame.playerCards[game].canDoubleDown = false;
        blackjackGame.playerCards[game].canSplit = false;
        blackjackGame.playerCards[game].canSurrender = false;
        blackjackGame.playerCards[game].canInsure = false;

        blackjackGame.setupPlayerHands();
        blackjackGame.setPlayerDealerCashTexts();
      }
    } else {
      if (hasWon) {
        playerSettings.playerCash += parseInt(cashBetted);
        blackjackGame.dealerCash -= parseInt(cashBetted);
        blackjackGame.gameExplanationText.innerHTML = "Player has Won";
      } else {
        if (cashBetted == 0) {
          blackjackGame.gameExplanationText.innerHTML = "Game is a tie";
        } else {
          playerSettings.playerCash -= parseInt(cashBetted);
          blackjackGame.dealerCash += parseInt(cashBetted);
          blackjackGame.gameExplanationText.innerHTML = "Dealer has Won";
        }
      }
      blackjackGame.playButton.classList.remove("ninja");
      blackjackGame.bettedAmmountInput.classList.remove("ninja");

      //hides the buttons container of the last active game
      blackjackGame.playerCards[game].canHit = false;
      blackjackGame.playerCards[game].canStand = false;
      blackjackGame.playerCards[game].canDoubleDown = false;
      blackjackGame.playerCards[game].canSplit = false;
      blackjackGame.playerCards[game].canSurrender = false;
      blackjackGame.playerCards[game].canInsure = false;

      blackjackGame.setupPlayerHands();
      blackjackGame.setPlayerDealerCashTexts();
    }

    blackjackGame.setDealerPicture();
    blackjackGame.checkGameEnded();
  },

  DealerPlays: function () {
    if (blackjackGame.dealerCards.length == 2) {
      //shows the hidden dealer card and the score
      blackjackGame.dealerScoreText.innerHTML =
        "dealer points: " + blackjackGame.dealerScore;
      blackjackGame.dealerCardsContainer
        .querySelectorAll("img")
        .forEach((n) => n.remove());
      for (var i = 0; i < blackjackGame.dealerCards.length; i++) {
        var card = blackjackGame.dealerCards[i];
        var cardImage = document.createElement("img");
        cardImage.src = `./images/cards/${card.n}${card.s}.png`;
        cardImage.classList.add("cards");
        blackjackGame.dealerCardsContainer.appendChild(cardImage);
      }
    }

    //In here we assume that the game has not ended, and that all of the player games are standing, and that a blackjack has not happened
    if (blackjackGame.dealerScore < 17) {
      blackjackGame.draw(1);
      blackjackGame.calculateHandScore(1);
      blackjackGame.setDealerCardsUI();
      blackjackGame.DealerPlays();
    } else if (blackjackGame.dealerScore >= 17) {
      for (let i = 0; i < blackjackGame.playerCards.length; i++) {
        //checks if any Player blackjacks
        if (blackjackGame.playerCards[i].gameScore == 21) {
          if (blackjackGame.dealerScore == 21) {
            if (blackjackGame.playerCards[i].isInsured) {
              blackjackGame.removeGame(
                i,
                true,
                parseInt(
                  Math.floor(blackjackGame.playerCards[i].betValue * 0.66)
                )
              );
              blackjackGame.gameExplanationText.innerHTML = "Insurance Win.";
            } else {
              blackjackGame.removeGame(i, false, 0);
              blackjackGame.gameExplanationText.innerHTML = "Draw.";
            }
          } else if (blackjackGame.playerCards[i].gameCards.length == 2) {
            if (blackjackGame.playerCards[i].isInsured) {
              blackjackGame.removeGame(
                i,
                true,
                blackjackGame.playerCards[i].betValue
              );
              blackjackGame.gameExplanationText.innerHTML = "Even Money.";
            } else {
              blackjackGame.removeGame(
                i,
                true,
                blackjackGame.playerCards[i].betValue * 1.5
              );
              blackjackGame.gameExplanationText.innerHTML = "Blackjack!!!";
            }
          } else {
            blackjackGame.removeGame(
              i,
              true,
              blackjackGame.playerCards[i].betValue
            );
            blackjackGame.gameExplanationText.innerHTML = "Player Has Won!!!";
          }
        }

        //dealer has busted
        else if (blackjackGame.dealerScore > 21) {
          if (blackjackGame.playerCards[i].isInsured) {
            blackjackGame.removeGame(
              i,
              true,
              parseInt(Math.floor(blackjackGame.playerCards[i].betValue * 0.66))
            );
            blackjackGame.gameExplanationText.innerHTML =
              "Player Has Won, but was insured.";
          } else {
            blackjackGame.removeGame(
              i,
              true,
              blackjackGame.playerCards[i].betValue
            );
            blackjackGame.gameExplanationText.innerHTML = "Player Has Won!!!";
          }
        }

        //see who has more points
        //player wins
        else if (
          blackjackGame.playerCards[i].gameScore > blackjackGame.dealerScore
        ) {
          if (blackjackGame.playerCards[i].isInsured) {
            blackjackGame.removeGame(
              i,
              true,
              parseInt(Math.floor(blackjackGame.playerCards[i].betValue * 0.66))
            );
            blackjackGame.gameExplanationText.innerHTML =
              "Player Has Won, but was insured.";
          } else {
            blackjackGame.removeGame(
              i,
              true,
              blackjackGame.playerCards[i].betValue
            );
            blackjackGame.gameExplanationText.innerHTML = "Player Has Won!!!";
          }
        }
        //player loses
        else if (
          blackjackGame.playerCards[i].gameScore < blackjackGame.dealerScore
        ) {
          blackjackGame.removeGame(
            i,
            false,
            blackjackGame.playerCards[i].betValue
          );
          blackjackGame.gameExplanationText.innerHTML = "Player Has Lost";
        }
        //Game ended in a tie
        else {
          if (blackjackGame.playerCards[i].isInsured) {
            blackjackGame.removeGame(
              i,
              true,
              parseInt(Math.floor(blackjackGame.playerCards[i].betValue * 0.66))
            );
            blackjackGame.gameExplanationText.innerHTML = "Insurance Wins.";
          } else {
            blackjackGame.removeGame(i, false, 0);
            blackjackGame.gameExplanationText.innerHTML = "Draw.";
          }
        }
      }
    }
  },

  draw: function (target, game) {
    //target 0 is for player and 1 for dealer

    var card = blackjackGame.deckCards.pop();

    if (target) {
      blackjackGame.dealerCards.push(card);
    } else {
      blackjackGame.playerCards[game].gameCards.push(card);
    }
  },

  //functions that control the player decisions during each game
  onHit: function (game) {
    blackjackGame.draw(0, game);
    blackjackGame.setAvailableButtons(game);
    blackjackGame.setupPlayerHands();
    blackjackGame.setPlayerDealerCashTexts();
    blackjackGame.checkIfBusted(0, game);
  },
  onStand: function (game) {
    if (blackjackGame.numberActiveGames > 1) {
      blackjackGame.gameExplanationText.innerHTML =
        "One or more games standing, finish all games";
    }

    //hides the buttons container of the last active game
    blackjackGame.playerCards[game].canHit = false;
    blackjackGame.playerCards[game].canStand = false;
    blackjackGame.playerCards[game].canDoubleDown = false;
    blackjackGame.playerCards[game].canSplit = false;
    blackjackGame.playerCards[game].canSurrender = false;
    blackjackGame.playerCards[game].canInsure = false;

    blackjackGame.playerCards[game].isStanding = true;
    blackjackGame.setupPlayerHands();

    if (blackjackGame.checkAllGamesStanding()) {
      console.log("all games finished:", blackjackGame.checkAllGamesFinished());
      console.log("all games Standing:", blackjackGame.checkAllGamesStanding());
      blackjackGame.DealerPlays();
    }

    if (blackjackGame.checkAllGamesFinished()) {
      console.log("All games have indeed been finished");
      blackjackGame.DealerPlays();
    }
  },
  onDoubleDown: function (game) {
    blackjackGame.playerCards[game].betValue *= 2;
    blackjackGame.playerCards[game].canDoubleDown = false;
    blackjackGame.setupPlayerHands();
  },
  onSplit: function (game) {
    //a new game and a new hand are created
    blackjackGame.addGame();

    //a temporary object is used to switch the last card of the current game with the last card of the newly created one
    var temp = blackjackGame.playerCards[game].gameCards[1];
    blackjackGame.playerCards[game].gameCards[1] =
      blackjackGame.playerCards[game + 1].gameCards[1];
    blackjackGame.playerCards[game + 1].gameCards[1] = temp;
    blackjackGame.playerCards[game].canSplit = false;
    blackjackGame.playerCards[game + 1].canSplit = false;
    blackjackGame.setupPlayerHands();
  },
  onInsurance: function (game) {
    blackjackGame.playerCards[game].betValue *= 1.5;
    blackjackGame.playerCards[game].isInsured = true;
    blackjackGame.playerCards[game].canInsure = false;
    blackjackGame.setupPlayerHands();
  },
  onSurrender: function (game) {
    var lostAmmount = parseInt(
      Math.floor(blackjackGame.playerCards[game].betValue / 2)
    );
    blackjackGame.gameExplanationText.innerHTML = "Game Surrendered";
    blackjackGame.removeGame(game, false, lostAmmount);
  },

  //calculates the best possible score for each hand
  calculateHandScore: function (target, game) {
    // target 0 for player 1 for dealer, game is for the player's current active Hand
    if (target) {
      var score = 0;
      var aceCounter = 0;
      for (var i = 0; i < blackjackGame.dealerCards.length; i++) {
        card = blackjackGame.dealerCards[i];
        switch (card.n) {
          case "K":
          case "Q":
          case "J":
            score += 10;
            break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "10":
            score += parseInt(card.n);
            break;
          case "A":
            aceCounter++;
            break;
        }
      }
      if (aceCounter != 0) {
        var minmax = [];
        for (var elevens = 0; elevens <= aceCounter; elevens++) {
          var calc = score + elevens * 11 + (aceCounter - elevens);
          minmax.push(calc);
        }

        score = minmax[0];
        for (var i of minmax) {
          if (i > score && i <= 21) {
            score = i;
          }
        }
      }

      //here the dealer's hand score is also shown to the user, if we have more than 2 cards
      blackjackGame.dealerScore = score;
      if (blackjackGame.dealerCards.length == 2) {
        blackjackGame.dealerScoreText.innerHTML = "delaer points: ?";
      } else {
        blackjackGame.dealerScoreText.innerHTML =
          "dealer points: " + blackjackGame.dealerScore;
      }
    } else {
      //in case of player

      var score = 0;
      var aceCounter = 0;
      for (
        var i = 0;
        i < blackjackGame.playerCards[game].gameCards.length;
        i++
      ) {
        card = blackjackGame.playerCards[game].gameCards[i];
        switch (card.n) {
          case "K":
          case "Q":
          case "J":
            score += 10;
            break;
          case "1":
          case "2":
          case "3":
          case "4":
          case "5":
          case "6":
          case "7":
          case "8":
          case "9":
          case "10":
            score += parseInt(card.n);
            break;
          case "A":
            aceCounter++;
            break;
        }
      }
      if (aceCounter != 0) {
        var minmax = [];
        for (var elevens = 0; elevens <= aceCounter; elevens++) {
          var calc = score + elevens * 11 + (aceCounter - elevens);
          minmax.push(calc);
        }

        score = minmax[0];
        for (var i of minmax) {
          if (i > score && i <= 21) {
            score = i;
          }
        }
      }

      score += blackjackGame.playerCards[game].addedEmperorPoints;
      blackjackGame.playerCards[game].gameScore = score;
      return score;
    }
  },

  checkIfBusted: function (target, game) {
    if (target) {
    } else {
      if (blackjackGame.playerCards[game].gameScore > 21) {
        blackjackGame.gameExplanationText.innerHTML = "Player busted";
        blackjackGame.removeGame(
          game,
          false,
          blackjackGame.playerCards[game].betValue
        );
      }
    }
  },
  checkAllGamesStanding: function () {
    var allStanding = true;
    for (let i = 0; i < blackjackGame.playerCards.length; i++) {
      if (!blackjackGame.playerCards[i].isStanding) {
        allStanding = false;
      }
    }
    return allStanding;
  },
  checkAllGamesFinished: function () {
    var allFinished = 0;
    for (let i = 0; i < blackjackGame.playerCards.length; i++) {
      if (!blackjackGame.playerCards[i].hasGameEnded) {
        allFinished++;
      }
    }
    return allFinished == blackjackGame.playerCards.length - 1;
  },
  checkGameEnded: function () {
    if (playerSettings.playerCash <= 0) {
      blackjackGame.playButton.classList.add("ninja");
      blackjackGame.gameExplanationText.innerHTML =
        "You have lost, better luck next time.";
      gameManager.setPage(blackjackGame.pageIfLost);
    } else if (blackjackGame.dealerCash <= 0) {
      blackjackGame.playButton.classList.add("ninja");
      blackjackGame.gameExplanationText.innerHTML =
        "Congratulations, you have won!!!";
      gameManager.setPage(blackjackGame.pageIfWon);
    }
  },
  setAvailableButtons: function (game) {
    currentGame = blackjackGame.playerCards[game];

    if (currentGame.gameCards.length == 2) {
      if (blackjackGame.dealerCards[0].n == "A") currentGame.canInsure = true;

      if (currentGame.gameCards[0].n == currentGame.gameCards[1].n)
        currentGame.canSplit = true;

      if (
        parseInt(currentGame.gameCards[0].n) +
          parseInt(currentGame.gameCards[1].n) <=
        11
      )
        currentGame.canDoubleDown = true;

      if (
        currentGame.gameCards[0].n == "A" ||
        currentGame.gameCards[1].n == "A"
      )
        currentGame.canDoubleDown = true;
    } else {
      currentGame.canSplit = false;
      currentGame.canDoubleDown = false;
      currentGame.canSurrender = false;
    }
  },
  setDealerPicture: function () {
    switch (true) {
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/1.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.9 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/2.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.8 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.9:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/3.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.7 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.8:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/4.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.6 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.7:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/5.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.5 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.6:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/6.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.4 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.5:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/7.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.3 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.4:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/8.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.2 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.3:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/9.jpg";
        break;
      case blackjackGame.dealerCash > blackjackGame.dealerInitialCash * 0.1 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.2:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/10.jpg";
        break;
      case blackjackGame.dealerCash > 0 &&
        blackjackGame.dealerCash <= blackjackGame.dealerInitialCash * 0.1:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/11.jpg";
        break;
      default:
        blackjackGame.dealerPicture.src =
          "./images/" + blackjackGame.dealerName + "/2.jpg";
    }
  },
  setPlayerDealerCashTexts: function () {
    blackjackGame.dealerCashText.innerHTML =
      "Dealer Cash: $" + blackjackGame.dealerCash;
    gameManager.loadSettingsUI();
  },
  setDealerCardsUI() {
    blackjackGame.dealerCardsContainer
      .querySelectorAll("img")
      .forEach((n) => n.remove());

    for (var i = 0; i < blackjackGame.dealerCards.length; i++) {
      var card = blackjackGame.dealerCards[i];
      var cardImage = document.createElement("img");
      cardImage.src = `./images/cards/${card.n}${card.s}.png`;
      //if we only have 2 cards for the dealer hide the second card
      if (
        blackjackGame.dealerCards.length == 2 &&
        card == blackjackGame.dealerCards[1]
      ) {
        cardImage.src = "./images/cards/gray_back.png";
      }
      cardImage.classList.add("cards");
      blackjackGame.dealerCardsContainer.appendChild(cardImage);
    }
  },
};

// starts game on page load
window.addEventListener("load", gameManager.startGame);

storyContainer.addEventListener("click", gameManager.showContent);
