function check(){
return new Promise((resolve, reject) => {


},3000);

}



$( "#button" ).click(function() {
    alert("test");
    // document.querySelector(".spin").style.display ="none";
console.log($( "#spin" ))
var x = document.getElementById("spin");
if (x.style.display === "none") {
  x.style.display = "block";
} else {
  x.style.display = "none";
}
  });