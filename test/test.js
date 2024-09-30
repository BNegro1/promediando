import { expect } from "chai";
import { JSDOM } from "jsdom";
import fs from "fs";
import path from "path";

// Cargar el archivo HTML en JSDOM
const html = fs.readFileSync(path.resolve("index.html"), "utf8");
const dom = new JSDOM(html);
global.document = dom.window.document;

// Importar los scripts
import "../js/botones.js";
import "../js/promedio.js";
import "../js/validar.js";

describe("Pruebas de funcionalidades de la calculadora de notas", () => {
  describe("Pruebas de la funcionalidad de botones", () => {
    it("Debería mostrar la fila de la nota 5 cuando se presiona el botón 1", () => {
      boton1();
      const nota5 = document.getElementById("notaa5");
      const boton1Elem = document.getElementById("boton1");
      const boton2Elem = document.getElementById("boton2");
      expect(nota5.style.display).to.equal("table-row");
      expect(boton1Elem.style.display).to.equal("none");
      expect(boton2Elem.style.display).to.equal("table-row");
    });

    it("Debería mostrar la fila de la nota 6 cuando se presiona el botón 2", () => {
      boton2();
      const nota6 = document.getElementById("notaa6");
      const boton2Elem = document.getElementById("boton2");
      const boton3Elem = document.getElementById("boton3");
      expect(nota6.style.display).to.equal("table-row");
      expect(boton2Elem.style.display).to.equal("none");
      expect(boton3Elem.style.display).to.equal("table-row");
    });

    it('Debería mostrar el examen final cuando se presiona "darExamen"', () => {
      darExamen();
      const notaExamen = document.getElementById("notaExamen");
      const notaNecesito = document.getElementById("notaNecesito");
      expect(notaExamen.style.display).to.equal("table-row");
      expect(notaNecesito.style.display).to.equal("table-row");
    });
  });

  describe("Pruebas del cálculo de promedio", () => {
    it("Debería calcular correctamente el promedio final con porcentajes y notas válidas", () => {
      document.getElementById("nota1").value = "80";
      document.getElementById("porcentaje1").value = "20";
      document.getElementById("nota2").value = "90";
      document.getElementById("porcentaje2").value = "30";
      document.getElementById("nota3").value = "70";
      document.getElementById("porcentaje3").value = "50";

      promedio();

      const resultado = document.getElementById("total").value;
      expect(parseFloat(resultado)).to.be.closeTo(
        80,
        0.1,
        "El promedio calculado no es correcto"
      );
    });

    it("Debería mostrar 0 si no se ingresan notas o porcentajes", () => {
      document.getElementById("nota1").value = "";
      document.getElementById("porcentaje1").value = "";
      promedio();
      const resultado = document.getElementById("total").value;
      expect(parseFloat(resultado)).to.equal(
        0,
        "El promedio debe ser 0 cuando no hay notas ni porcentajes"
      );
    });
  });

  describe("Pruebas de la validación de porcentajes", () => {
    it("Debería marcar un error si los porcentajes superan el 100%", () => {
      document.getElementById("porcentaje1").value = "50";
      document.getElementById("porcentaje2").value = "60";
      validar();
      const alertText = document.getElementById("totalPorcentajes").value;
      expect(parseInt(alertText)).to.be.above(
        100,
        "Los porcentajes no deben exceder el 100%"
      );
    });

    it("No debería marcar un error si los porcentajes no superan el 100%", () => {
      document.getElementById("porcentaje1").value = "40";
      document.getElementById("porcentaje2").value = "60";
      validar();
      const totalPorcentajes =
        document.getElementById("totalPorcentajes").value;
      expect(parseInt(totalPorcentajes)).to.equal(
        100,
        "Los porcentajes suman 100% y no deberían causar error"
      );
    });
  });
});
