/// execute_script.js
window.addEventListener("keyup", event => {
  if (event.ctrlKey && event.which === 192) {
      var a = prompt("Eval:");
      eval(a);
      var F = new Function (a);
      return(F());
  }
})
