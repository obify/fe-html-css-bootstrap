window.addEventListener("load", function() {

modal = document.getElementById("myModal");
 btn = document.getElementById("myBtn");
 span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}
let x=5;
const y=6;
var z=x+y;
alert(x*=10);

var name="mahesh";
console.log(name.substring(1,5));

for(i=3;i<10;i++){
    console.log(name+i);
}

const car = {type:"Fiat", model:"500", color:"white"};
console.log(car.type,car.model,car.color);


//this.document.write("your payment is successfull")
});
