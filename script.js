console.log("script revision 4032")
const style = document.getElementById("style")
var cookie = document.cookie
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

function switchTheme(){
  if (cookie.contains("oldcss")){
    cookie = "newcss, expires=Tue, 31 Dec 2999 11:59:59 UTC"
  }
  if (cookie.contains("newcss")){
    cookie = "oldcss, expires=Tue, 31 Dec 2999 11:59:59 UTC"
  }
}
function checkTheme(){
  if (cookie.contains("oldcss")){
    style.href = "old.css"
  }
  if (cookie.contains("new")){
    style.href = "style.css"
  }
}
checkTheme()
