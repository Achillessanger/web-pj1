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
