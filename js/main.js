// Funciones de botones
function boton1() {
  document.getElementById("notaa5").style.display = "table-row";
  document.getElementById("boton1").style.display = "none";
  document.getElementById("boton2").style.display = "table-row";
}

function boton2() {
  document.getElementById("notaa6").style.display = "table-row";
  document.getElementById("boton2").style.display = "none";
  document.getElementById("boton3").style.display = "table-row";
}

function boton3() {
  document.getElementById("notaa7").style.display = "table-row";
  document.getElementById("boton3").style.display = "none";
  document.getElementById("boton4").style.display = "table-row";
}

function boton4() {
  document.getElementById("notaa8").style.display = "table-row";
  document.getElementById("boton4").style.display = "none";
  document.getElementById("boton5").style.display = "table-row";
}

function boton5() {
  document.getElementById("notaa9").style.display = "table-row";
  document.getElementById("boton5").style.display = "none";
  document.getElementById("boton6").style.display = "table-row";
}

function boton6() {
  document.getElementById("notaa10").style.display = "table-row";
  document.getElementById("boton6").style.display = "none";
}

function botonControl1() {
  document.getElementById("promedioControles").style.display = "table-row";
  document.getElementById("botonControl1").style.display = "none";
}

function darExamen() {
  document.getElementById("notaExamen").style.display = "table-row";
  document.getElementById("darExamen").style.display = "none";
  document.getElementById("notaNecesito").style.display = "table-row";
}

// Funciones de promedio
function promedio() {
  var porcentaje1 = verificar("porcentaje1");
  var porcentaje2 = verificar("porcentaje2");
  var porcentaje3 = verificar("porcentaje3");
  var porcentaje4 = verificar("porcentaje4");
  var porcentaje5 = verificar("porcentaje5");
  var porcentaje6 = verificar("porcentaje6");
  var porcentaje7 = verificar("porcentaje7");
  var porcentaje8 = verificar("porcentaje8");
  var porcentaje9 = verificar("porcentaje9");
  var porcentaje10 = verificar("porcentaje10");
  var pControl = verificar("pControl");

  var nota1 = verificar("nota1");
  var nota2 = verificar("nota2");
  var nota3 = verificar("nota3");
  var nota4 = verificar("nota4");
  var nota5 = verificar("nota5");
  var nota6 = verificar("nota6");
  var nota7 = verificar("nota7");
  var nota8 = verificar("nota8");
  var nota9 = verificar("nota9");
  var nota10 = verificar("nota10");
  var promedioControl = verificar("promedioControl");

  var promedio = (document.getElementById("total").value =
    parseInt(nota1) * (parseInt(porcentaje1) / 100) +
    parseInt(nota2) * (parseInt(porcentaje2) / 100) +
    parseInt(nota3) * (parseInt(porcentaje3) / 100) +
    parseInt(nota4) * (parseInt(porcentaje4) / 100) +
    parseInt(nota5) * (parseInt(porcentaje5) / 100) +
    parseInt(nota6) * (parseInt(porcentaje6) / 100) +
    parseInt(nota7) * (parseInt(porcentaje7) / 100) +
    parseInt(nota8) * (parseInt(porcentaje8) / 100) +
    parseInt(nota9) * (parseInt(porcentaje9) / 100) +
    parseInt(nota10) * (parseInt(porcentaje10) / 100) +
    parseInt(promedioControl) * (parseInt(pControl) / 100));

  var nExamen = verificar("nExamen");
  var pExamen = verificar("pExamen");

  var notaUno = (promedio * (100 - parseInt(pExamen))) / 100;

  document.getElementById("pFinal").value =
    (parseInt(nExamen) * parseInt(pExamen)) / 100 + notaUno;

  var pPresenta = (100 - parseInt(pExamen)) / 100;
  var pExamenListo = parseInt(pExamen) / 100;
  var parte1 = 40 - parseInt(pPresenta) * parseInt(promedio);

  document.getElementById("notaQueNecesito").value =
    (40 - pPresenta * promedio) / pExamenListo;
}

// Funciones de validación
function validar() {
  var p1 = verificar("porcentaje1");
  var p2 = verificar("porcentaje2");
  var p3 = verificar("porcentaje3");
  var p4 = verificar("porcentaje4");
  var p5 = verificar("porcentaje5");
  var p6 = verificar("porcentaje6");
  var p7 = verificar("porcentaje7");
  var p8 = verificar("porcentaje8");
  var p9 = verificar("porcentaje9");
  var p10 = verificar("porcentaje10");
  var pC = verificar("pControl");

  document.getElementById("totalPorcentajes").value =
    parseInt(p1) +
    parseInt(p2) +
    parseInt(p3) +
    parseInt(p4) +
    parseInt(p5) +
    parseInt(p6) +
    parseInt(p7) +
    parseInt(p8) +
    parseInt(p9) +
    parseInt(p10) +
    parseInt(pC);

  var totalPorcentajes = document.getElementById("totalPorcentajes");

  if (totalPorcentajes.value > 100) {
    alert("Has sobrepasado el 100%");
    obj.style.borderColor = "#808080";
    return value;
  } else {
  }
}

function verificar(id) {
  var obj = document.getElementById(id);
  if (obj.value == "") value = "0";
  else value = obj.value;
  if (validate_importe(value)) {
    obj.style.borderColor = "#808080";
    return value;
  } else {
    obj.style.borderColor = "#f00";
    return 0;
  }
}

function validate_importe(value, decimal) {
  if (decimal == undefined) decimal = 0;

  if (decimal == 1) {
    var patron = new RegExp("^[0-9]+((,|.)[0-9]{1,2})?$");
  } else {
    var patron = new RegExp("^([0-9])*$");
  }

  if (value && value.search(patron) == 0) {
    return true;
  }
  return false;
}
