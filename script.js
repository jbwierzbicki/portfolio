flexFont = function () {
    var divs = document.getElementsByClassName("flexFont");
    for(var i = 0; i < divs.length; i++) {
        var relFontsize = divs[i].offsetWidth*0.1647;
        divs[i].style.fontSize = relFontsize+'px';
    }
};

window.onload = function(event) {
    flexFont();
};
window.onresize = function(event) {
    flexFont();
};