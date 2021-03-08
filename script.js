let e = true;
function togglesection(){
    if(e == true){
        document.getElementById("toggle").style.display = "block";
        document.getElementById("explore").innerHTML = "Abandon";
        document.getElementById("bas").style.top = "1122px";
        e = false;   
    }
    else if(e == false){
        document.getElementById("toggle").style.display = "none";
        document.getElementById("explore").innerHTML = "Start exploring";
        document.getElementById("bas").style.top = "622px";
        e = true;   
    }
}
