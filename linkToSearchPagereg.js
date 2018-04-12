
document.getElementById('searchbar-input3').onkeydown=function(event){

    var e = event || window.event || arguments.callee.caller.arguments[0];
    var keywords = document.getElementById('searchbar-input3').value;
    if(e && e.keyCode==13){ // enter 键
        window.location='searchpage-registered.html';
        if(keywords == "123"){
            document.getElementById('no-search-result').classList.remove('hide');
            document.getElementById('artworksArea').classList.add('hide');
            document.getElementById('bottom-dir').classList.add('hide');
            document.getElementById('searchcontent').classList.add('hide');

        }else {
            document.getElementById('searchcontent').classList.remove('hide');
            document.getElementById('searchcontent').innerHTML=keywords;
            document.getElementById('no-search-result').classList.add('hide');
            document.getElementById('artworksArea').classList.remove('hide');
            document.getElementById('bottom-dir').classList.remove('hide');
        }
    }
};