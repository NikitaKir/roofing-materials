

$(document).ready(function(){
    $("#phone").mask("+7(999)999-99-99")
})

function validCheckbox() {
var chbox;
chbox=document.getElementById('checboxId');
	if (chbox.checked) {
        document.getElementById("personalArea").style.display="none"
		smoke.alert('Спасибо за заявку! <br> Мы вам обязательно перезвоним')}
	else{
		smoke.alert ('Вы не согласились с условиями <br> Политики конфиденциальности');
	}
    return
}

function valid(){
    var phone = document.getElementById("phone")

    if(phone == "")
    return false
}
