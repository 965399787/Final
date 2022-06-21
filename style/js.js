var count = 0;
var audioPlay = document.getElementById("audioReveal");
var audioWinner = document.getElementById("audioClown");
var rowNum = document.querySelectorAll("td.row");
var rowElementClass = document.getElementsByClassName("row");
var rowElementId = document.getElementById("row");

//our lord and savior 'window.addeventlistener'
//selectTile now differenciated between generaltiles and the winnertile
//all thats left is randomization of the winner tile :|
function selectTile(){
    window.addEventListener('click', function (i) {
    if (i.target.className == 'row-safe') {
        i.target.className = 'row-safe-reveal';
        revealWinner();        
    }
    else {
    }
})
}

var random = Math.floor(Math.random()*256)+1;
const rowArray = new Array(rowElementClass.length);
// alert(rowArray.length);
for (let index = 0; index < rowArray.length ; index++) {
    rowArray[index] = index;

    if(rowArray[random] == index){
        document.getElementsByClassName("row")[random].outerHTML = "<td class = 'row-safe'></td>";
        // document.getElementsByClassName("row")[random].innerHTML = "your mom";
    }
}



function playReveal(){
    if(count == 0){
    count = 1 ;
        alert("Find Him");
        audioPlay.play();
        setTimeout(function playReveal()  {
        window.location.href = "file:///C:/Users/johnt/Downloads/Fart%20sound%20effect.mp3";
    }, 16000)}
    else{
        count = 0;
    }
}

function revealWinner(){
    audioWinner.play();
    setTimeout(function revealWinner()  {
    window.location.href = "file:///D:/RTC%202022/Front-End%20Web%20Development%202022/Final%20-%20Copy/winner.html";
}, 1500)

}


