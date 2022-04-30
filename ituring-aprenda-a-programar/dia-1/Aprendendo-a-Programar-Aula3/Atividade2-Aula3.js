
let produtoA = {"nome": "camiseta", "valor": 100.00, "internacional": true};
let produtoB = {"nome": "perfume", "valor": 200.00, "internacional": true};
let produtoC = {"nome": "sandalia", "valor": 120.00, "internacional": false};
let valorA = 100.00
let valorB = 200.00
let valorC = 120.00
let impostoA = 0.20
let impostoB = 0.12

if (produtoA = "camiseta") {
    console.log("Camiseta")
    console.log("Internacional");
    console.log("Valor Total R$")
    console.log(valorA+(valorA*impostoA));
} else {
    console.log("Camiseta")
    console.log("Nacional");
    console.log("Valor Total R$")
    console.log(valorA+(valorA*impostoB)); 
}
if (produtoB = "perfume") {
    console.log ("Perfume")
    console.log("Internacional");
    console.log("Valor Total R$")
    console.log(valorB+(valorB*impostoA));
} else {
    console.log ("Perfume")
    console.log("Nacional");
    console.log("Valor Total R$");
    console.log(valorB+(valorB*impostoB));
}
if (produtoC = "sandalia") {
    console.log ("Sandália")
    console.log("Nacional");
    console.log("Valor Total R$"); 
    console.log(valorC+(valorC*impostoB));
}
 else {
    console.log ("Sandália")
    console.log("Internacional");
    console.log("Valor Total R$");
    console.log(valorB+(valorB*impostoA));
} 