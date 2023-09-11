console.log("script revision 4032")
var ttog = document.getElementById("DTog")
var uagent = navigator.userAgent
var usragntdisp = document.getElementById("usragent")
usragntdisp.innerHTML = uagent
if(uagent.includes("MSIE") || uagent.includes("MyPal")){ //like someone is gonna use Internet Explorer in 2023 or whatever god forsaken year it is lol
  console.log("Uh oh, Spaghetti-O's! It looks like you're trying to load this using a web browser from the ancient Greeks, imbecile. Next time, use a browser that's newer than the Chrome Dinosaur.")
}
function hehe(){
  
  window.alert("Why did you double click me!?");
  
}

function antifork(){
  if (document.location != "https://0d5da5c2-5d4d-4ea1-9608-606d6159d259.id.repl.co" || document.location != "https://unlocked-gamez-from-nxx99.nxx99.repl.co"){
    location.replace("uh-oh.html")
  }
}

/*function DTog(){
  if(ttog.checked == true){
    document.cookie = "dmode; max-age=3153600"
  } else {
    document.cookie = "lmode; max-age=3153600"
  }
  if(document.cookie=="light"){
     document.style-src = "style.css"
  }else{
     document.style-src="dark.css"
  }
}
window.setInterval(DTog, 100)
*/