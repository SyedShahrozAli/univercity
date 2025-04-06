function Vote(vote){

    vote = parseInt(vote);
    if(vote == 1){
        document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) + 1;
    }
    else if (vote == -1){
        document.getElementById('score').innerHTML = parseInt(document.getElementById('score').innerHTML) - 1;
    }

}
console.log("Vote function loaded");