let col = document.querySelectorAll('.col');
let ranglar = ['red', 'yellow', 'blue', 'violet'];

for(let i = 0; i<=col.length; i++){
  col[i].onclick = function (){
    let rand = Math.floor(Math.random()*ranglar.length);
    this.style.background = ranglar[rand];
  }
}