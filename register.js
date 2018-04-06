ifLoged = false;
ifAlreadyAffirmed = false;

function registerShow(){
    document.getElementById('registerdiv').classList.remove('hide')
}

function registerHide() {
    document.getElementById('registerdiv').classList.add('hide');
}

function loginShow(){
    document.getElementById('logindiv').classList.remove('hide')
}

function loginHide() {
    document.getElementById('logindiv').classList.add('hide');
    ifAlreadyAffirmed = false;
    document.getElementById('r1').classList.add('hide')
    document.getElementById('r2').classList.add('hide')
    document.getElementById('r3').classList.add('hide')
    document.getElementById('r4').classList.add('hide')
}

function loginAffirm() {
    if(ifAlreadyAffirmed){
        document.getElementById('r1').classList.add('hide')
        document.getElementById('r2').classList.add('hide')
        document.getElementById('r3').classList.add('hide')
        document.getElementById('r4').classList.add('hide')
    }
    if(document.getElementById('login-username-input').value == ""){
        document.getElementById('r3').classList.remove('hide')
    }else if(document.getElementById('login-password-input').value == ""){
        document.getElementById('r4').classList.remove('hide')
    }else if(document.getElementById('login-username-input').value == "123"&document.getElementById('login-password-input').value == "123"){
        document.getElementById('r1').classList.remove('hide')
    }else {

    }
    ifAlreadyAffirmed =true;
}