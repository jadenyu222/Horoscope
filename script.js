

var sign = ["Aquarius", "Pisces", "Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn"];
var minDay = [20, 19, 21, 20, 21, 21, 23, 23, 23, 23, 22, 22];
var days = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

var zodiacMessage = [
    ", you are a Aquarius! <br>you are an air sign, which means you are rational, social, and love communication and relationships with other people. <br>You are a thinker, friendly, intellectual, communicative and analytical. <br>You love philosophical discussions and enjoy giving advice, but you can also be very superficial",
    ", you are a Pisces! <br>You are a water sign, which means you are intuitive, emotional, and love profound conversations and intimacy. <br>You rarely do anything openly and are always there to support loved ones.",
    ", you are a Aries! <br>You are a fire sign, which means you tend to be passionate, dynamic, and temperamental.  You are quick to anger and quick to forgive. <br>You are adventurous with immense energy. you are physically very strong and you inspire others. <br>you are intelligent, self-aware, creative and idealistic people, always ready for action",
    ", you are a Taurus! <br>You are a earth sign, which means you are “grounded” and bring us down to earth. you are usually conservative and realistic, but you can also be very emotional. <br>You are connected to our material reality and can be turned to material goods. <br>you are practical, loyal and stable and you stick by your people through hard times.",
    ", you are a Gemeni! <br>you are an air sign, which means you are rational, social, and love communication and relationships with other people. <br>You are a thinker, friendly, intellectual, communicative and analytical. <br>You love philosophical discussions and enjoy giving advice, but you can also be very superficial",
    ", you are a Cancer! <br>You are a water sign, which means you are intuitive, emotional, and love profound conversations and intimacy. <br>You rarely do anything openly and are always there to support loved ones.",
    ", you are a Leo! <br>You are a fire sign, which means you tend to be passionate, dynamic, and temperamental.  You are quick to anger and quick to forgive. <br>You are adventurous with immense energy. you are physically very strong and you inspire others. <br>you are intelligent, self-aware, creative and idealistic people, always ready for action",
    ", you are a Virgo! <br>You are a earth sign, which means you are “grounded” and bring us down to earth. you are usually conservative and realistic, but you can also be very emotional. <br>You are connected to our material reality and can be turned to material goods. <br>you are practical, loyal and stable and you stick by your people through hard times.",
    ", you are a Libra! <br>you are an air sign, which means you are rational, social, and love communication and relationships with other people. <br>You are a thinker, friendly, intellectual, communicative and analytical. <br>You love philosophical discussions and enjoy giving advice, but you can also be very superficial",
    ", you are a Scorpio! <br>You are a water sign, which means you are intuitive, emotional, and love profound conversations and intimacy. <br>You rarely do anything openly and are always there to support loved ones.",
    ", you are a Sagittarius! <br>You are a fire sign, which means you tend to be passionate, dynamic, and temperamental.  You are quick to anger and quick to forgive. <br>You are adventurous with immense energy. you are physically very strong and you inspire others. <br>you are intelligent, self-aware, creative and idealistic people, always ready for action",
    ", you are a Capricorn! <br>You are a earth sign, which means you are “grounded” and bring us down to earth. you are usually conservative and realistic, but you can also be very emotional. <br>You are connected to our material reality and can be turned to material goods. <br>you are practical, loyal and stable and you stick by your people through hard times."
];

var horoscope = [
    "Switzerland gave women the right to vote in the elections in 1990. As Venus passes an intense opposition with <br>your sign’s ruler at the beginning of this month, you will feel like everything is to be torn apart so you can be reborn <br>and finally turn to beauty and love that are to guide your way. You have been forcing yourself over <br>your limits, and this won’t be tolerated in the next couple of weeks.",
    "Pisces representatives who haven’t discovered their mission in life might be on a path to do so by the end <br>of this month. This is a time when Jupiter will slowly progress towards a fulfilling trine with Neptune, digging up all the <br>dirt that needs to be dealt with on your path to clearer vision and a sense of direction you wish to <br>find. Enjoy all challenges this month has to offer, knowing that they are there to lead the way and show you where you need to go.",
    "There are circumstances you won’t be able to avoid in the month of November, but with enough hard work and <br>dedication to goals you wish to achieve, you can still do a lot to feel good. Mars will remain in the sign of Libra and this <br>gives a constant focus on other people, those you consider to be your enemies as well as your spouse, <br>your partner, for those who have the potential to become one.",
    "London has about 20 hidden rivers running below it. The situation is similar in your emotional world and <br>romance seems to come into focus for a reason in lives of so many Taurus representatives in weeks to come. Past lovers could <br>return and love stories that are impossible to avoid come to life to pull you with their gravity and <br>make you unable to separate reason from destructive forces.",
    "With the start of November, you will still be buried in information that are too tempting to miss and too <br>challenging to hold on to. The moment is right for deep soulsearching and conversations that could present a turning point for <br>the course of your entire lifetime. Carefully pick out words you will use and allow emotions to show <br>even if you are feeling bruised and wish to protect yourself from pain.",
    "With so many entities in your fifth house, many Cancer representatives are in love or wildly attracted to <br>someone who might be out of reach or in a stable relationship. Things that are standing in your way might be easier to avoid <br>than seems possible, so open your heart and let emotions flow, allowing yourself to feel anything that <br>comes naturally at the moment.",
    "In the 18th century, about one fifth of all women in London were prostitutes. Family issues you need to <br>attend to are shady and your moral questionable at the time. Hold on to the sense of personal value and don’t let others take you <br>for granted or impose any form of emotional blackmail on you now that your sense of responsibility <br>is as strong as it is.",
    "Intellectual processes you are ready for are profound and magnificent, but might lack emotional clarity <br>and compassion. If you are a part of a team of any kind, be sure to feel the atmosphere before jumping in and respect those who <br>need help in their endeavors, however irritated you might get. You can do much more if you listen to <br>your deepest senses too, than if you rely solely on your brain.",
    "November is here to question your ambition to resolve problems from the past. Any issue you held on pause <br>for too long will bite back, show up only to slap you in the face, and remind you of demons you tried to bury in the sand. <br>You will feel angry and frustrated, to the point where you finally decide to turn your life around and take <br>responsibility for what you can do to make things better.",
    "Switzerland is the only country in the world that has enough nuclear fallout shelters to accommodate their <br>entire human population. As aggression tends to pile up in November, you will have to find ways to vent or you might get stuck <br>in conflicts that could escalate to the point of no return, without a shelter to crawl into. <br>Stay as tender as you can be, to yourself and other people in your life, realizing that time won’t move backwards.",
    "Mercury and the Sun will visit your sign in November, turning your focus to matters of self-expression and <br>socializing with the crowd that allows you to make progress instead of holding you back. As if the dark ages are finally over, <br>you will feel like the air is clearing up and you can breathe again, believing once again that everything <br>will turn out just fine if you only get your convictions in order.",
    "Mars loves you and with it, many young, energetic individuals who have troubling relationships holding them back. <br>With a chance to use this moment to get things in order and reach your goals with the help of other people, you should <br>be careful who you choose to accompany you in your travels and shine by your side on your path to greatness."
];

var imageArray = [
    { name: 'aquarius', image: 'aquarius.png' },
    { name: 'pisces', image: 'pisces.png' },
    { name: 'aries', image: 'aries.png' },
    { name: 'taurus', image: 'taurus.png' },
    { name: 'gemini', image: 'gemini.png' },
    { name: 'cancer', image: 'cancer.png' },
    { name: 'leo', image: 'leo.png' },
    { name: 'virgo', image: 'virgo.png' },
    { name: 'libra', image: 'libra.png' },
    { name: 'scorpio', image: 'scorpio.png' },
    { name: 'sagittarius', image: 'sagittarius.png' },
    { name: 'capricorn', image: 'capricorn.png' }
];







function checkDate(day, month){
    return ((day > 0) && (day < days[month]));
}



function determineSign(x, y) {
    if(y === 0){
        if(x >= minDay[y]){
            return y;
        }else{
            return 11;
        }
    }else {
        if (x >= minDay[y]) {
            return y;
        }else{
            return (y - 1);
        }
    }


}


function determineHoroscope(x){
return horoscope[x];
}
function determineImage(x){
return imageArray[x]
}

//<img src="img/aries.png">


function onSubmit(){
    var name = document.getElementById("name").value;
    var tempDay = document.getElementById("myField").value;
    var day = parseInt(tempDay);
    var tempMonth = document.getElementById("selectBox").value;
    var month = parseInt(tempMonth);
    var signLoc = determineSign(day, month);
    var result = ("Results: <br><img width=100 height=100 src='img/" +  imageArray[signLoc].image  +  "'> <br> " + name + zodiacMessage[signLoc] + "  <br> <br> <br>Your Horoscope is: <br>" + determineHoroscope(signLoc) + "<br>");
    console.log(result);
    if(checkDate(day, month) === true){
        return result;
    }else{
        return "You input an invalid date. Please put in a valid date and press 'Get My Horoscope!'";
    }



}


function tester() {
    console.log(onSubmit());
    document.getElementById("output").innerHTML = onSubmit();
}