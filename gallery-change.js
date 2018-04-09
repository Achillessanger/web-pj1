var n = 3;
var clock;
window.onload=function (ev) { init();}
function init() {
    clock = window.setInterval(change,2000);
}
function change() {
    var obj = document.getElementById('gal');
    n++;
    if(n>=4){
        n=1;
    }
    obj.src="images/frontpage/gallery"+n+".jpg";
}
function stopChange() {
    window.clearInterval(clock);
}
function startChange() {
    clock = window.setInterval(change,2000)
}