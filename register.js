ifLoged = false;
ifAlreadyAffirmed = false;
userName = "";
userPassword = "";
canRegiste = false;
code0 = "";

function registerShow(){
    loginHide();
    createCode();
    canRegiste = false;
    document.getElementById('resetbut').click();
    document.getElementById('registerdiv').classList.remove('hide');
}

function registerHide() {
    document.getElementById('rm1').classList.add('hide');
    document.getElementById('rm2').classList.add('hide');
    document.getElementById('rm3').classList.add('hide');
    document.getElementById('rm4').classList.add('hide');
    document.getElementById('rm5').classList.add('hide');
    document.getElementById('rm6').classList.add('hide');
    document.getElementById('rm7').classList.add('hide');
    document.getElementById('rm8').classList.add('hide');
    document.getElementById('rm9').classList.add('hide');
    document.getElementById('rm10').classList.add('hide');
    document.getElementById('rm11').classList.add('hide');
    document.getElementById('rm13').classList.add('hide');
    canRegiste = false;
    document.getElementById('registerdiv').classList.add('hide');
}

function loginShow(){
    registerHide();
    ifLoged = false;
    document.getElementById('loginreset').click();
    document.getElementById('logindiv').classList.remove('hide');
}

function loginHide() {
    document.getElementById('r1').classList.add('hide');
    // document.getElementById('r2').classList.add('hide')
    document.getElementById('r3').classList.add('hide');
    document.getElementById('r4').classList.add('hide');
    document.getElementById('r5').classList.add('hide');
    document.getElementById('logindiv').classList.add('hide');
}

function loginAffirm() {

        document.getElementById('r1').classList.add('hide');
        // document.getElementById('r2').classList.add('hide')
        document.getElementById('r3').classList.add('hide');
        document.getElementById('r4').classList.add('hide');
        document.getElementById('r5').classList.add('hide');

    if(document.getElementById('login-username-input').value == ""){
        document.getElementById('r3').classList.remove('hide');
    }else if(document.getElementById('login-password-input').value == ""){
        document.getElementById('r4').classList.remove('hide');
    }else if(document.getElementById('login-username-input').value == "123"&document.getElementById('login-password-input').value == "123"){
        document.getElementById('r1').classList.remove('hide');
    }else if(document.getElementById('login-ic-input').value != code0 || document.getElementById('login-ic-input').value == ""){
        document.getElementById('r5').classList.remove('hide');
    }else {

        // document.getElementById('nav-notyet').classList.add('hide');
        // document.getElementById('nav-already').classList.remove('hide');
        userName = document.getElementById('login-username-input').value;
        userPassword = document.getElementById('login-password-input').value;
        loginHide();
        ifLoged = true;
        window.location.href="frontpage-registered.html";
        alert("登陆成功");
    }

}

function loginAffirmSpeP() {


    document.getElementById('r1').classList.add('hide');
    // document.getElementById('r2').classList.add('hide')
    document.getElementById('r3').classList.add('hide');
    document.getElementById('r4').classList.add('hide');
    document.getElementById('r5').classList.add('hide');

    if(document.getElementById('login-username-input').value == ""){
        document.getElementById('r3').classList.remove('hide');
    }else if(document.getElementById('login-password-input').value == ""){
        document.getElementById('r4').classList.remove('hide');
    }else if(document.getElementById('login-username-input').value == "123"&document.getElementById('login-password-input').value == "123"){
        document.getElementById('r1').classList.remove('hide');
    }else if(document.getElementById('login-ic-input').value != code0 || document.getElementById('login-ic-input').value == ""){
        document.getElementById('r5').classList.remove('hide');
    }else {

        // document.getElementById('nav-notyet').classList.add('hide');
        // document.getElementById('nav-already').classList.remove('hide');
        userName = document.getElementById('login-username-input').value;
        userPassword = document.getElementById('login-password-input').value;
        loginHide();
        ifLoged = true;
        window.location.href="specificdetailpage-registered.html";
        alert("登陆成功");
    }


}
function loginAffirmSearchP() {
    document.getElementById('r1').classList.add('hide');
    // document.getElementById('r2').classList.add('hide')
    document.getElementById('r3').classList.add('hide');
    document.getElementById('r4').classList.add('hide');
    document.getElementById('r5').classList.add('hide');

    if(document.getElementById('login-username-input').value == ""){
        document.getElementById('r3').classList.remove('hide');
    }else if(document.getElementById('login-password-input').value == ""){
        document.getElementById('r4').classList.remove('hide');
    }else if(document.getElementById('login-username-input').value == "123"&document.getElementById('login-password-input').value == "123"){
        document.getElementById('r1').classList.remove('hide');
    }else if(document.getElementById('login-ic-input').value != code0 || document.getElementById('login-ic-input').value == ""){
        document.getElementById('r5').classList.remove('hide');
    }else {
        // document.getElementById('nav-notyet').classList.add('hide');
        // document.getElementById('nav-already').classList.remove('hide');
        userName = document.getElementById('login-username-input').value;
        userPassword = document.getElementById('login-password-input').value;
        loginHide();
        ifLoged = true;
        window.location.href="searchpage-registered.html";
        alert("登陆成功");
    }


}

// function refreshNavbar() {
//     if(ifLoged){
//         document.getElementById('nav-notyet').classList.add('hide')
//         document.getElementById('nav-already').classList.remove('hide')
//     }else {
//         document.getElementById('nav-notyet').classList.remove('hide')
//         document.getElementById('nav-already').classList.add('hide')
//     }
// }
function logout() {
    ifLoged = false;
    window.location.href="frontpage.html";
}

function c1() {
    var k1 = /[0-9]/;
    var k2 = /[a-z]/i;
    stringin1 = document.getElementById('in1').value;
    ifJudegedin1 = true;
    if(document.getElementById('in1').value == ""){
        document.getElementById('rm1').classList.add('hide');
        document.getElementById('rm2').classList.add('hide');
        document.getElementById('rm3').classList.remove('hide');
        canRegiste = false;
    }else if(document.getElementById('in1').value.length < 6 && document.getElementById('in1').value.length > 0){
        document.getElementById('rm3').classList.add('hide');
        document.getElementById('rm2').classList.add('hide');
        document.getElementById('rm1').classList.remove('hide');
        canRegiste = false;
    }else if(!(k1.test(stringin1)&& k2.test(stringin1))){
        document.getElementById('rm3').classList.add('hide');
        document.getElementById('rm1').classList.add('hide');
        document.getElementById('rm2').classList.remove('hide');
        canRegiste = false;
    }else {
        document.getElementById('rm1').classList.add('hide');
        document.getElementById('rm2').classList.add('hide');
        document.getElementById('rm3').classList.add('hide');
        canRegiste = true;
    }
}
function c2() {
    stringin2 = document.getElementById('in2').value;
    if(document.getElementById('in2').value == ""){
        document.getElementById('rm4').classList.add('hide');
        document.getElementById('rm5').classList.add('hide');
        document.getElementById('rm6').classList.remove('hide');
        canRegiste = false;
    }else if(document.getElementById('in2').value.length < 6 && document.getElementById('in2').value.length > 0){
        document.getElementById('rm6').classList.add('hide');
        document.getElementById('rm5').classList.add('hide');
        document.getElementById('rm4').classList.remove('hide');
        canRegiste = false;
    }else if(stringin1 == stringin2){
        document.getElementById('rm4').classList.add('hide');
        document.getElementById('rm6').classList.add('hide');
        document.getElementById('rm5').classList.remove('hide');
        canRegiste = false;
    }else {
        document.getElementById('rm4').classList.add('hide');
        document.getElementById('rm5').classList.add('hide');
        document.getElementById('rm6').classList.add('hide');
        canRegiste = true;
    }

}
function c3() {
    stringin3 = document.getElementById('in3').value;
    if(document.getElementById('in1').value==""&&document.getElementById('in2').value == ""){
        document.getElementById('rm7').classList.add('hide');
        canRegiste = false;
    }else if(!(stringin3 == stringin2)){
        document.getElementById('rm7').classList.remove('hide');
        canRegiste = false;
    }else {
        document.getElementById('rm7').classList.add('hide');
        canRegiste = true;
    }
}
function c4() {
    var k3 = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    stringin4 = document.getElementById('in4').value;
    if(stringin4 == ""){
        document.getElementById('rm9').classList.add('hide');
        document.getElementById('rm8').classList.remove('hide');
        canRegiste = false;
    }else if(!k3.test(stringin4)){
        document.getElementById('rm8').classList.add('hide');
        document.getElementById('rm9').classList.remove('hide');
        canRegiste = false;
    }else {
        document.getElementById('rm8').classList.add('hide');
        document.getElementById('rm9').classList.add('hide');
        canRegiste = true;
    }
}
function c5() {
    stringin5 = document.getElementById('in5').value;
    // var k4 = /^[0-9]+$/;
    var k4 = /^[\d]+$/;
    if(stringin5 == ""){
        document.getElementById('rm11').classList.add('hide');
        document.getElementById('rm10').classList.remove('hide');
        canRegiste = false;
    }else if(!(k4.test(stringin5)&& stringin5.length == 11)){
        document.getElementById('rm10').classList.add('hide');
        document.getElementById('rm11').classList.remove('hide');
        canRegiste = false;
    }else {
        document.getElementById('rm10').classList.add('hide');
        document.getElementById('rm11').classList.add('hide');
        canRegiste = true;
    }
}
function c13() {
    if(document.getElementById('in1').value == "123"){
        canRegiste=false;
        document.getElementById('rm1').classList.add('hide');
        document.getElementById('rm2').classList.add('hide');
        document.getElementById('rm3').classList.add('hide');
        document.getElementById('rm13').classList.remove('hide');
    }
}
function registeFrontP() {
    c1();
    c2();
    c3();
    c4();
    c5();
    c13()
    if(canRegiste){
        window.location.href="frontpage-registered.html";
        alert("注册成功");
    }
}
function registeSpeP() {
    c1();
    c2();
    c3();
    c4();
    c5();
    c13();
    if(canRegiste){

        window.location.href="specificdetailpage-registered.html";
        alert("注册成功");
    }
}
function registeSearchP() {
    c1();
    c2();
    c3();
    c4();
    c5();
    c13();
    if(canRegiste){
        window.location.href="searchpage-registered.html";
        alert("注册成功");
    }
}

var code;
function createCode(){
    //首先默认code为空字符串
    code = '';
    //设置长度，这里看需求，我这里设置了4
    var codeLength = 4;
    var codeV = document.getElementById('code');
    //设置随机字符
    var random = new Array(0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R', 'S','T','U','V','W','X','Y','Z');
    //循环codeLength 我设置的4就是循环4次
    for(var i = 0; i < codeLength; i++){
        //设置随机数范围,这设置为0 ~ 36
        var index = Math.floor(Math.random()*36);
        //字符串拼接 将每次随机的字符 进行拼接
        code += random[index];
    }
    //将拼接好的字符串赋值给展示的Value
    codeV.value = code;
    code0 = code;
}


var funStatus = true;//无需手动设置，这是标记是否可以再次进行展开/收缩操作
var unfoldValue=10;//执行展开操作的像素数，越小越慢.并且不会因为数字过大超过设定的max高度而影响显示效果
var shrinkvalue=10;//执行收缩操作的像素数，越小越慢
var time=10;//多长时间操作一次，越小越快
var min=0;//收缩到多少像素的高度停止
var max = 50;//展开到多少像素高度停止

function HideAd(o){

    var timer = setInterval(function(){
        if(o.offsetHeight >= min + shrinkvalue ){
            o.style.height = o.offsetHeight - shrinkvalue + 'px';
            document.getElementById('btn').innerHTML="展开";
            funStatus = false;
        }
        else{
            o.style.height = min+'px';
            funStatus = true;
            clearInterval(timer);
        }
    }, time);
}
function ShowAd(o){

    var timer = setInterval(function(){
        if(o.offsetHeight + unfoldValue < max){
            o.style.height = (o.offsetHeight + unfoldValue) + 'px';
            document.getElementById('btn').innerHTML="收缩";
            funStatus = false;
        }
        else{
            o.style.height = max+'px';
            funStatus = true;
            clearInterval(timer);
        }
    },time);
}

function toogle()
{
    if(funStatus)
    {
        var o =document.getElementById('searchbar');
        if(o.offsetHeight >= max )
            HideAd(o);
        else
            ShowAd(o);
    }

}


document.getElementById('searchbar-input').onkeydown=function(event){
    var e = event || window.event || arguments.callee.caller.arguments[0];
    if(e && e.keyCode==13){ // enter 键
        if(document.getElementById('searchbar-input').value == "123"){
            document.getElementById('no-search-result').classList.remove('hide');
            document.getElementById('artworksArea').classList.add('hide');
            document.getElementById('bottom-dir').classList.add('hide');
            document.getElementById('searchcontent').classList.add('hide');
        }else {
            document.getElementById('searchcontent').classList.remove('hide');
            document.getElementById('searchcontent').innerHTML=document.getElementById('searchbar-input').value;
            document.getElementById('no-search-result').classList.add('hide');
            document.getElementById('artworksArea').classList.remove('hide');
            document.getElementById('bottom-dir').classList.remove('hide');
        }
    }
};