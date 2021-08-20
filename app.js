function display(val) {
  document.getElementById("result").value+=val;
}
function erase() {
    document.getElementById("result").value="";
}
function cal() {
    let x=document.getElementById("result").value;
    let y=eval(x);
    document.getElementById("result").value = y;
}