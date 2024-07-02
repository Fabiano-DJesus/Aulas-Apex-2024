(function (v1,v2) {
   console.log("executou"); 
})()

setTimeout(function () {
    console.log("Escreve...");
}, 2000)

setInterval(function () {
    console.log("rodou");
}, 1000)