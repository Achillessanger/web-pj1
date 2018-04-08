ifLoged = false;
ifAlreadyAffirmed = false;
userName = "";
userPassword = "";

function registerShow(){
    document.getElementById('registerdiv').classList.remove('hide');
}

function registerHide() {
    document.getElementById('registerdiv').classList.add('hide');
}

function loginShow(){
    document.getElementById('logindiv').classList.remove('hide');
}

function loginHide() {
    document.getElementById('logindiv').classList.add('hide');
    ifAlreadyAffirmed = false;
    document.getElementById('r1').classList.add('hide');
    document.getElementById('r2').classList.add('hide');
    document.getElementById('r3').classList.add('hide');
    document.getElementById('r4').classList.add('hide');
}

function loginAffirm() {
    if(ifAlreadyAffirmed){
        document.getElementById('r1').classList.add('hide');
        // document.getElementById('r2').classList.add('hide')
        document.getElementById('r3').classList.add('hide');
        document.getElementById('r4').classList.add('hide');
    }
    if(document.getElementById('login-username-input').value == ""){
        document.getElementById('r3').classList.remove('hide');
    }else if(document.getElementById('login-password-input').value == ""){
        document.getElementById('r4').classList.remove('hide');
    }else if(document.getElementById('login-username-input').value == "123"&document.getElementById('login-password-input').value == "123"){
        document.getElementById('r1').classList.remove('hide');
    }else {
        document.getElementById('nav-notyet').classList.add('hide');
        document.getElementById('nav-already').classList.remove('hide');
        userName = document.getElementById('login-username-input').value;
        userPassword = document.getElementById('login-password-input').value;
        loginHide();
        ifLoged = true;
        // document.getElementById('username').innerText = userName;
    }
    ifAlreadyAffirmed =true;
}

function refreshNavbar() {
    if(ifLoged){
        document.getElementById('nav-notyet').classList.add('hide')
        document.getElementById('nav-already').classList.remove('hide')
    }else {
        document.getElementById('nav-notyet').classList.remove('hide')
        document.getElementById('nav-already').classList.add('hide')
    }
}
function logout() {
    ifLoged = false;
    refreshNavbar()
}
