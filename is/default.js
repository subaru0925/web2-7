//答えを用意
ver number=Math.floor(Math.random()*3);
var aswer=parseInt(window.prompt('数あてゲーム。0～2の数字を入力してください！'));

var mesage;
if(answer===number){
message='あたり！';
}else if(answer<number){
message='残念！もっと大きいです';
}else if(number<answer){
message='残念！もっと小さいです';
}else{
message='0～3の数字を入れてください';
}

docment.getElementById('choice').textContent=message;
