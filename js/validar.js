function validar() {
  // Sumamos los porcentajes
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

  var totalPorcentajes = porcentajes.reduce(function (a, b) {
    return parseFloat(a) + parseFloat(b);
  }, 0);

  if (totalPorcentajes > 100) {
    alert("Has sobrepasado el 100%");
    return false;
  }

  return true;
}

function verificar(id) {
  var obj = document.getElementById(id);
  var value = obj.value === "" ? "0" : obj.value;

  // Validamos si es un número
  if (!validate_importe(value)) {
    obj.style.borderColor = "#f00"; // Color rojo si hay error
    return 0;
  }

  obj.style.borderColor = "#808080"; // Color gris si está correcto
  return value;
}

function validate_importe(value) {
  var patron = new RegExp("^([0-9]+([.,][0-9]+)?)$");
  return patron.test(value);
}
