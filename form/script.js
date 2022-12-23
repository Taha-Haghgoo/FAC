let today = new Date().toISOString().substr(0, 10);
document.querySelector("#livedate").value = today;

var submit = document.getElementById("submit")

if(submit){
    submit.addEventListener("click" , () => {
      console.log("get")
    });
}
  // JQuery
  $(document).ready( function() {
    $('#liveDate').val(new Date().toDateInputValue());
  });
  
  // Pure JS
  document.getElementById('livedate').value = new Date().toDateInputValue();
  
  
  // Timezone support
  Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
  });