var smallBox = document.getElementById('smallbox');
var mask = document.getElementById('mask');
var bigBox = document.getElementById('bigbox');
var bigPic = document.getElementById('bigpic');
var box = document.getElementById('smallbox');

smallBox.onmouseover = function (ev) {
    bigBox.style.display = "block";
    mask.style.display = "block";
}

smallBox.onmouseout = function (ev) {
    bigBox.style.display = "none";
    mask.style.display = "none";
}
smallBox.onmousemove = function (event) {
    var event = event || window.event;
    var pageX = event.pageX || event.clientX + document.documentElement.scrollLeft;
    var pageY = event.pageY || event.clientY + document.documentElement.scrollTop;
    var targetX = pageX - box.offsetLeft - mask.offsetWidth / 2;
    var targetY = pageY - box.offsetTop - mask.offsetHeight / 2;
    if (targetX < 0) {
        targetX = 0;
    }
    if (targetY < 0) {
        targetY = 0;
    }
    if (targetX > smallBox.offsetWidth - mask.offsetWidth) {
        targetX = smallBox.offsetWidth - mask.offsetWidth;
    }

    if (targetY > smallBox.offsetHeight - mask.offsetHeight) {
        targetY = smallBox.offsetHeight - mask.offsetHeight;
    }
    mask.style.left = targetX + "px";
    mask.style.top = targetY + "px";
    var bigToMove = bigPic.offsetWidth - bigBox.offsetWidth;
    var maskToMove = smallBox.offsetWidth - mask.offsetWidth;
    var rate = bigToMove / maskToMove;
    bigPic.style.left = -rate * targetX + "px";
    bigPic.style.top = -rate * targetY + "px";
}