carte = {
	
}
window.onscroll = function() {myFunction()};

function myFunction(e) {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        document.getElementById("logo").className = "hide";
    } else {
        document.getElementById("logo").className = "";
    }
}