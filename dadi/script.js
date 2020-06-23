// Lancio dei dadi

// event listener sul bottone Lancia Dadi

document.getElementById("btn").addEventListener("click", function(){

  //genero due numeri casuali tra 1 e 6
  var dado1 = Math.floor(Math.random() * 6 + 1);
  var dado2 = Math.floor(Math.random() * 6 + 1);

  // stampo nell'html i risultati dei dai
  document.getElementById("dado1").innerHTML = dado1;
  document.getElementById("dado2").innerHTML = dado2;

  // con un if stabilisco chi ha vinto e creo un alert col messaggio di vittoria
  if (dado1 > dado2) {
    alert("Hai Vinto!!!");
  } else if (dado2 > dado1){
    alert("Mi dispiace. Ha vinto il computer!");
  } else{
    alert("Incredibile! Pareggio!!");
  }

})
