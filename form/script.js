let today = new Date().toISOString().substr(0, 10);
document.querySelector("#livedate").value = today;

var submit = document.getElementById("submit")

submit.addEventListener("click" , () => {
 window.alert("data stored");
});