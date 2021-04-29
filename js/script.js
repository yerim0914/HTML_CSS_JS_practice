var button = document.getElementById('button');
var list = document.getElementById('list'); // ul

button.addEventListener('click', clickButton);

var cnt = 0;
function clickButton(){

    var text = document.getElementById('input').value;
    if(text == ""){
        alert("아무것도 입력되지 않았습니다.");
        return false;
    }
    var temp = document.createElement('li');
    temp.setAttribute("id", "li"+cnt);
    temp.innerHTML = text;
    temp.innerHTML += "<button class='btn' type='button' onclick='remove("+cnt+")'>삭제</button>"
    list.prepend(temp);
    cnt++;
    document.getElementById('input').value = "";
}

function remove(cn){
    var li = document.getElementById('li' +cn);
    list.removeChild(li);
}