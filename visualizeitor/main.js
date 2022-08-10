"use strict";

function verifyIfJqueryWorks() {
  window.onload = function () {
    if (window.jQuery) {
      // jQuery is loaded
      alert("Yeah!");
    } else {
      // jQuery is not loaded
      alert("Doesn't Work");
    }
  };
}

/**********************************************************************/

async function readXMLDoc() {
  let url = "./xml/alunos.xml";
  const xml = await fetch(url)
    .then((response) => response.text())
    .then((xml) => {
      return xml;
    });
  return xml;
}

function parseXML(xml) {
  const xmlDoc = $.parseXML(xml);
  const $xml = $(xmlDoc);
  return $xml;
}

function createGrrList(rawXml) {
  const xml = parseXML(rawXml);
  let str;
  let grrs = xml.find("MATR_ALUNO").text();
  for (let i = 0; i < grrs.length; i += GRRSIZE) {
    str = grrs.substring(i, i + GRRSIZE);
    if (GRR.indexOf(str) === -1) {
      GRR.push(str);
    }
  }
}

function putGrrsValuesOnList() {
  GRR.forEach((g) => {
    $("#datalistOptions").append(`<option value="${g}"></option>`);
  });
}

function colorTheGrade(grr) {
  if (GRR.indexOf(grr) !== -1) {
    console.log("GRR EXISTE");
  } else {
    console.log("GRR Ñ EXISTE - FAZER ISSO AQUI UTILIZANDO UM ALERT");
  }
}

function changeGradeInfos(e) {
  const grr = $("input").val();
  colorTheGrade(grr);
}

const GRR = [];
const GRRSIZE = 11;
async function main() {
  console.log("INICIANDO O PROJETO");
  const xml = await readXMLDoc();
  createGrrList(xml);
  putGrrsValuesOnList();
}
