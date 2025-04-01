console.log("home.js loaded");


function displayItemToMain(article){
    var articleDiv = document.getElementById(article)
    document.getElementById("center-section").innerHTML = articleDiv.innerHTML
}