function promedio() {
  // Verificar todos los porcentajes
  var porcentajes = [
    verificar("porcentaje1"),
    verificar("porcentaje2"),
    verificar("porcentaje3"),
    verificar("porcentaje4"),
    verificar("porcentaje5"),
    verificar("porcentaje6"),
    verificar("porcentaje7"),
    verificar("porcentaje8"),
    verificar("porcentaje9"),
    verificar("porcentaje10"),
    verificar("pControl"),
  ];

  // Verificar todas las notas
  var notas = [
    verificar("nota1"),
    verificar("nota2"),
    verificar("nota3"),
    verificar("nota4"),
    verificar("nota5"),
    verificar("nota6"),
    verificar("nota7"),
    verificar("nota8"),
    verificar("nota9"),
    verificar("nota10"),
    verificar("promedioControl"),
  ];

  // Cálculo del promedio ponderado
  var sumaPesos = 0;
  var promedio = 0;

  for (var i = 0; i < notas.length; i++) {
    if (porcentajes[i] > 0) {
      promedio += parseFloat(notas[i]) * (parseFloat(porcentajes[i]) / 100);
      sumaPesos += parseFloat(porcentajes[i]);
    }
  }

  // Si los porcentajes no suman 100%, no calcular el promedio
  if (sumaPesos > 100) {
    alert("La suma de los porcentajes no puede exceder el 100%");
    return;
  }

  // Mostrar el promedio calculado
  document.getElementById("total").value = promedio.toFixed(2);

  // Cálculo para el examen final
  var nExamen = verificar("nExamen");
  var pExamen = verificar("pExamen");

  if (pExamen > 0) {
    var notaUno = (promedio * (100 - parseFloat(pExamen))) / 100;
    var final = (parseFloat(nExamen) * parseFloat(pExamen)) / 100 + notaUno;
    document.getElementById("pFinal").value = final.toFixed(2);

    // Nota que se necesita para aprobar
    var pExamenListo = parseFloat(pExamen) / 100;
    document.getElementById("notaQueNecesito").value = (
      (40 - promedio * (1 - pExamenListo)) /
      pExamenListo
    ).toFixed(2);
  }
}
