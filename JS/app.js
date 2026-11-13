function showToast(){
    document.getElementById("toast").innerHTML="Please book your IPL tickets!";
    document.getElementById("toast").style.visibility = "visible";
    setTimeout(function(){
        document.getElementById("toast").style.visibility="hidden";
    },3000);
}



