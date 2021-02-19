console.log("Inicio de script");
setTimeout(() => {
  console.log("Primer timeOut");
}, 5000);
setTimeout(() => {
  console.log("Segundo timeOut");
}, 0);
setTimeout(() => {
  console.log("Tercer timeOut");
}, 0);

console.log("Fin de script");
