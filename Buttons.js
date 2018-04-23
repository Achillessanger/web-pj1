function addToShoppingCart() {
    showAddtoSC();
    setTimeout(hideAddtoSC,500);
}
function showAddtoSC() {
    document.getElementById('addtoSC').classList.remove('hide');
}
function hideAddtoSC() {
    document.getElementById('addtoSC').classList.add('hide');
}

function tip() {
    showTip();
    setTimeout(hideTip,500);
}
function showTip() {
    document.getElementById('tip').classList.remove('hide');
}
function hideTip() {
    document.getElementById('tip').classList.add('hide');
}



function getTDs(obj) {
    var row = obj.parentNode.parentNode;
    //var row = document.getElementById('shoppinglisttab');  //只针对 row1这个元素的子节点查找
    cells = row.getElementsByTagName("td"); // 找到这个tr下的所有td，不能用childNodes 属性，部分浏览器不兼容
    // for(var i=0;i<cells.length;i++){
    //     alert("第"+(i+1)+"格的数字是"+cells[i].innerHTML);
    // }

  addTDs();
}
function addTDs() {
    var table2 = document.getElementById('deletedlisttab');
    var row2 = table2.insertRow(0);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);
    var cell5 = row2.insertCell(4);
    cell1.innerHTML = cells[0].innerHTML;
    cell2.innerHTML = cells[1].innerHTML;
    cell3.innerHTML = cells[2].innerHTML;
    cell4.innerHTML = cells[3].innerHTML;
    cell5.innerHTML = "<button class=\"blackbutton2\"onclick=\"restore(this);this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)\">RESTORE IT</button><a href=\"specificdetailpage-registered.html\"><button class=\"whitebutton2\">VIEW DETAILS</button></a>"
    cell1.className = "td1";
    cell2.className = "td2";
    cell3.className = "td3";
    cell4.className = "td4";
    cell5.className = "td5";
}
function restore(obj) {
    var row = obj.parentNode.parentNode;
    cells = row.getElementsByTagName("td");
    addTDs2();
}
function addTDs2() {
    var table2 = document.getElementById('shoppinglisttab');
    var row2 = table2.insertRow(0);
    var cell1 = row2.insertCell(0);
    var cell2 = row2.insertCell(1);
    var cell3 = row2.insertCell(2);
    var cell4 = row2.insertCell(3);
    var cell5 = row2.insertCell(4);
    cell1.innerHTML = cells[0].innerHTML;
    cell2.innerHTML = cells[1].innerHTML;
    cell3.innerHTML = cells[2].innerHTML;
    cell4.innerHTML = cells[3].innerHTML;
    cell5.innerHTML = "<button class=\"blackbutton2\" onclick=\"getTDs(this);this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode)\">DELETE IT</button><a href=\"specificdetailpage-registered.html\"><button class=\"whitebutton2\">VIEW DETAILS</button></a>"
    cell1.className = "td1";
    cell2.className = "td2";
    cell3.className = "td3";
    cell4.className = "td4";
    cell5.className = "td5";
}

function addMoney() {
    var previousMon = document.getElementById('balance').innerText;
    var mon = document.getElementById('chargeinput').value;
    document.getElementById('balance').innerText = (parseInt(previousMon)+parseInt(mon));
    // alert(document.getElementById('balance').innerText)
    hideCharge();
}
function showCharge() {
    document.getElementById('charge-pop').classList.remove('hide');
}

function hideCharge() {
    document.getElementById('charge-pop').classList.add('hide');
}