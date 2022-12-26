var year = new Date().getFullYear();
var month = new Date().getMonth();
var day = new Date().getDay();
const length = function (number) {
    return number.toString().length;
};

if (length(month) == 1) {
    month = "0" + month;
} else {
    month = month;
}
if (length(day) == 1) {
    day = "0" + day;
} else {
    day = day;
}

var time = year + "-" + month + "-" + day;

var input = document.getElementById("livedate");
input.setAttribute("value", time);
