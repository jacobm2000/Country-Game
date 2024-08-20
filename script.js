var numGuesses=0
var g= document.getElementById("guess")
var guessBtn=document.getElementById("guessBtn")
var c;
var score=0
var scoreTxt=document.getElementById("score")



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
  
            
        }
       
        
       
    
    });
  }

guessBtn.onclick=function guess(){
if (g.value===c){
    alert("that is correct")
    numGuesses=0
    score+=1
    scoreTxt.textContent="Score: "+score
    g.value=""
    getCountry();
}
else{
    alert("incorrect")
    numGuesses+=1
    country.textContent=country.textContent+c[numGuesses]
}
if(numGuesses==3){
    alert("wrong the correct answeer is: " +c)
    numGuesses=0;
    g.value=""
    getCountry();
    
}
}

getCountry()
//guessBtn.onclick=guess(g)


