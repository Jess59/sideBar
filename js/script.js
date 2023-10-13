let siOpen=false;

function displayRightBar () {

    if(siOpen) {
        //then open it
        document.getElementById("left").style.display = "block";
        siOpen=false;

    }
    else {//then close it
        document.getElementById("left").style.display= "none";
        siOpen=true;
    }
}

function closeBar () {
    document.getElementById("left").style.display= "none";
}

document.getElementById("close").addEventListener("click", closeBar);
document.getElementById("open").addEventListener("click", displayRightBar);