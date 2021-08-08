let display = document.querySelector('.value')

function displayValue(value) {
    display.value += value;
}
function all_clear() {
    display.value = "";
}
function clear_() {
    display.value = display.value.substring(0,display.value.length-1)
}
function result() {
    if (display.value != "") {
        display.value = eval(display.value)
    }
}