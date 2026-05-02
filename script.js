var numGuesses=0
var g= document.getElementById("guess")
var guessBtn=document.getElementById("guessBtn")
var c;
var score=0
var scoreTxt=document.getElementById("score")
var streakTxt=document.getElementById("streak")
var resultTxt=document.getElementById("result")
var streak=0;


var map=document.getElementById("map")
function getCountry() {

   
    let country=document.getElementById("country")
    let pageNum=Math.floor(Math.random() *6)+1
    let reg=document.getElementById("reg")
    let cap=document.getElementById("cap")
    let incomeLevel=document.getElementById("incomeLevel")
    
    fetch("https://api.worldbank.org/v2/countries/?format=json&page="+pageNum).then(function(resp) {
        
        return resp.json()
    }).then(function(data) {
        l=data[1].length
        x=Math.floor(Math.random() *l)
        lat=data[1][x].latitude
        lon=data[1][x].longitude
        reg.textContent="Region: " +data[1][x].region.value
        cap.textContent="Capital City: " +data[1][x].capitalCity
        incomeLevel.textContent="Income Level: "+data[1][x].incomeLevel.value
        if(data[1][x].region.value ==="Aggregates"){
            getCountry()
        }
        else{
            country.textContent=data[1][x].name[0];
            c=data[1][x].name
            c=  c.split(/[,.(]/)[0];

            
        }
       
        
       
    
    });
  }

guessBtn.onclick=function guess(){
if (g.value.toLowerCase()===c.toLowerCase()){
    resultTxt.textContent="that is correct"
    numGuesses=0
    streak+=1
    score+=streak+1
    scoreTxt.textContent="Score: "+score
    streakTxt.textContent="Streak: "+streak
    g.value=""
    getCountry();
}
else{
     resultTxt.textContent="incorrect"
    numGuesses+=1
    country.textContent=country.textContent+c[numGuesses]
}
if(numGuesses==parseInt(c.length/2)){
    resultTxt.textContent="wrong the correct answer is: " +c
    streak=0;
    streakTxt.textContent="Streak: "+streak
    numGuesses=0;
    g.value=""
    
    
    getCountry();
    
}
}

getCountry()
//guessBtn.onclick=guess(g)


