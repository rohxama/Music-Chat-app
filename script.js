// Add an audio element to the HTML
var audioElement = new Audio('videoplayback.mp3'); 

// Add a function to start the timer for playing audio
var audioTimeout;
function startAudioTimer() {
    clearTimeout(audioTimeout); 
    audioTimeout = setTimeout(function() {
        audioElement.play();
    }, 5000); 
}

function botReply(responseMessage) {
    var defaultState = $("#main-container").html();

    $("#main-container").html(defaultState + "<div class=\"bubble bot-output currentMessage\">" + responseMessage + "</div></br>");

    $(".currentMessage").hide().delay(850).fadeIn();
    $(".currentMessage").removeClass("currentMessage");

    startAudioTimer(); // Start or reset the audio timer on bot reply
}

var processMessage = "";

function botAlgorithm(processMessage) {
    if ((processMessage.indexOf("hello") >= 0)  || (processMessage.indexOf("hey") >= 0 || (processMessage.indexOf("hi") >= 0) || (processMessage.indexOf("??") >= 0 ) ) ){
        var greeting = [
            "Heyyy",
            "Han jee jaan",
            "HELLO! ",
            "Same to you kakay💖"
            
        ];
        var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
        botReply(randomGreeting);
    }

    if ( (processMessage.indexOf("hm") >= 0 ) || (processMessage.indexOf("hn") >= 0 )  || (processMessage.indexOf("hmm") >= 0 ) ) {
        var feeling = [
            "Yawr janu🙏",
            "Itni dair naraz",
            "you are my love jaan 💯",
            "Abhi tk naraz hai",
            "It's ok",
            "Maan jawo itni mehnat kee hai",
            "dekho mn nay kya banaya hai"
        ];
        var randomFeeling = feeling[Math.floor(Math.random() * feeling.length)];
        botReply(randomFeeling);
    }

    if ((processMessage.indexOf("sir") >= 0) || (processMessage.indexOf("jealousy") >= 0) || (processMessage.indexOf("possesive") >= 0)) {
        var greeting = [
            "Come on. I am all yours",
            "❤️",
            "I know  you are right but please ",
            "You are my only & only my jaan"
        ];
        var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
        botReply(randomGreeting);
    }

    if ((processMessage.indexOf("kya") >= 0) || (processMessage.indexOf("what") >= 0)) {
        var greeting = [
            "suno to sahi",
            "sunn zara❤️",
            "kasa laga",
            "mujey pta tu maan jaye gii"
        ];
        var randomGreeting = greeting[Math.floor(Math.random() * greeting.length)];
        botReply(randomGreeting);
    }

    if  ( (processMessage.indexOf("I love you") >= 0) || (processMessage.indexOf("love you") >= 0) || (processMessage.indexOf("bacha") >= 0) || (processMessage.indexOf("Jan") >= 0 )) {
        var goodbye = [
            "I love you too❤️",
            "I love you always❤️",
            "I love you forever❤️",
            "I am all yours and ily",
            "Janu I love you more than this whole world"
        ];
        var randomGoodbye = goodbye[Math.floor(Math.random() * goodbye.length)];
        botReply(randomGoodbye);
    }

}


$(document).ready(function() {
    $("#textbox").keypress(function(event) {
        if (event.which === 13) {
            if ($("#enter").prop("checked")) {
                $("#send").click();
                event.preventDefault();
            }
        }
    });

    $("#send").click(function() {
        var userMessage = $("#textbox").val();
        $("#textbox").val("");

        var defaultState = $("#main-container").html();

        $("#main-container").html(defaultState + "<div class=\"bubble user-input\">" + userMessage + "</div></br>");

        $("#main-container").scrollTop($("#main-container").prop("scrollHeight"));

        var forBotProcess = userMessage.toString().toLowerCase();

        botAlgorithm(forBotProcess);
    });
});
