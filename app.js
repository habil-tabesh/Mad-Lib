console.log('app.js is connected')

function createParagraph() {
    console.log("create paragraph has been logged")
    var wordOne = document.getElementById("text1").value;
    var wordTwo = document.getElementById("text2").value;
    var wordThree = document.getElementById("text3").value;
    var wordFour = document.getElementById("text4").value;
    var wordFive = document.getElementById("tex5").value;
    var wordSix = document.getElementById("text6").value;
    var wordSeven = document.getElementById("text7").value;
    var wordEight = document.getElementById("text8").value;
    var wordNine = document.getElementById("text9").value;
    var wordTen = document.getElementById("text10").value;
    var wordEleven = document.getElementById("text11").value;
    var wordTwelve = document.getElementById("text12").value;
    var wordThirteen = document.getElementById("text13").value;
    

    console.log(wordOne,wordTwo,wordThree,wordFour,wordFive,wordSix,wordSeven,wordEight,wordNine,wordTen,wordEleven,wordTwelve,wordThirteen)

    var paragraph = "<p> Dear "+wordOne+", The first time I saw you my heart "+wordTwo+" with joy. We were in "+wordThree+" class and you raised you "+wordFour+" to ask a question. Your voice sounded like "+wordFive+". Then I noticed your "+wordSix+" "+wordSeven+". It is so "+wordEight+"! Overall, I "+wordNine+" you. I would tell you who I am but I'm too "+wordTen+". Just know that the "+wordEleven+" you reciece on Valentine's Day is from me. I hope you think it's "+wordTwelve+"      Love,        Your "+wordThirteen+" Admirer </p>"

    console.log(paragraph);

    document.getElementById("answer").innerHTML = paragraph;
}