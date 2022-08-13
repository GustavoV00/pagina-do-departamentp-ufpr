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

function createStudentsObjectArray(rawXml) {
  const xml = parseXML(rawXml);
  let str;
  const ID_CURSO_ALUNO = [...xml.find("ID_CURSO_ALUNO")];
  const MATR_ALUNO = [...xml.find("MATR_ALUNO")];
  const ID_VERSAO_CURSO = [...xml.find("ID_VERSAO_CURSO")];
  const NOME_ALUNO = [...xml.find("NOME_ALUNO")];
  const COD_CURSO = [...xml.find("COD_CURSO")];
  const NOME_CURSO = [...xml.find("NOME_CURSO")];
  const NUM_VERSAO = [...xml.find("NUM_VERSAO")];
  const ID_CURRIC_ALUNO = [...xml.find("ID_CURRIC_ALUNO")];
  const ID_ATIV_CURRIC = [...xml.find("ID_ATIV_CURRIC")];
  const ANO = [...xml.find("ANO")];
  const MEDIA_FINAL = [...xml.find("MEDIA_FINAL")];
  const SITUACAO_ITEM = [...xml.find("SITUACAO_ITEM")];
  const SITUACAO = [...xml.find("SITUACAO")];
  const COD_ATIV_CURRIC = [...xml.find("COD_ATIV_CURRIC")];
  const NOME_ATIV_CURRIC = [...xml.find("NOME_ATIV_CURRIC")];
  const CREDITOS = [...xml.find("CREDITOS")];
  const CH_TOTAL = [...xml.find("CH_TOTAL")];
  const ID_LOCAL_DISPENSA = [...xml.find("ID_LOCAL_DISPENSA")];
  const CONCEITO = [...xml.find("CONCEITO")];
  const ID_NOTA = [...xml.find("ID_NOTA")];
  const ID_ESTRUTURA_CUR = [...xml.find("ID_ESTRUTURA_CUR")];
  const DESCR_ESTRUTURA = [...xml.find("DESCR_ESTRUTURA")];
  const FREQUENCIA = [...xml.find("FREQUENCIA")];
  const MEDIA_CREDITO = [...xml.find("MEDIA_CREDITO")];
  const SITUACAO_CURRICULO = [...xml.find("SITUACAO_CURRICULO")];
  const SIGLA = [...xml.find("SIGLA")];

  for (let i = 0; i < ID_CURSO_ALUNO.length; i++) {
    STUDENTS.push({
      ID_CURSO_ALUNO: ID_CURSO_ALUNO[i].innerHTML,
      MATR_ALUNO: MATR_ALUNO[i].innerHTML,
      ID_VERSAO_CURSO: ID_VERSAO_CURSO[i].innerHTML,
      NOME_ALUNO: NOME_ALUNO[i].innerHTML,
      COD_CURSO: COD_CURSO[i].innerHTML,
      NOME_CURSO: NOME_CURSO[i].innerHTML,
      NUM_VERSAO: NUM_VERSAO[i].innerHTML,
      ID_CURRIC_ALUNO: ID_CURRIC_ALUNO[i].innerHTML,
      ID_ATIV_CURRIC: ID_ATIV_CURRIC[i].innerHTML,
      ANO: ANO[i].innerHTML,
      MEDIA_FINAL: MEDIA_FINAL[i].innerHTML,
      SITUACAO_ITEM: SITUACAO_ITEM[i].innerHTML,
      SITUACAO: SITUACAO[i].innerHTML,
      COD_ATIV_CURRIC: COD_ATIV_CURRIC[i].innerHTML,
      NOME_ATIV_CURRIC: NOME_ATIV_CURRIC[i].innerHTML,
      CREDITOS: CREDITOS[i].innerHTML,
      CH_TOTAL: CH_TOTAL[i].innerHTML,
      ID_LOCAL_DISPENSA: ID_LOCAL_DISPENSA[i].innerHTML,
      CONCEITO: CONCEITO[i].innerHTML,
      ID_NOTA: ID_NOTA[i].innerHTML,
      ID_ESTRUTURA_CUR: ID_ESTRUTURA_CUR[i].innerHTML,
      DESCR_ESTRUTURA: DESCR_ESTRUTURA[i].innerHTML,
      FREQUENCIA: FREQUENCIA[i].innerHTML,
      MEDIA_CREDITO: MEDIA_CREDITO[i].innerHTML,
      SITUACAO_CURRICULO: SITUACAO_CURRICULO[i].innerHTML,
      SIGLA: SIGLA[i].innerHTML,
    });
  }
}

// Verifica os possíveis GRRs e coloca em uma lista de GRR
function possibleGRRs() {
  STUDENTS.forEach((student) => {
    if (GRR.indexOf(student.MATR_ALUNO) === -1) {
      GRR.push(student.MATR_ALUNO);
    }
  });
}

// Coloca os possíveis GRRs dentro do datalist
function putGrrsValuesOnList() {
  GRR.forEach((g) => {
    $("#datalistOptions").append(`<option value="${g}"></option>`);
  });
}

function filterChosenGRR(grr) {
  return STUDENTS.filter((student) => {
    return student.MATR_ALUNO === grr;
  });
}

function verifyIfIsTG(student) {
  const tg = student.DESCR_ESTRUTURA;
  if (tg === "Trabalho de Graduação I") return "TG 1";
  if (tg === "Trabalho de Graduação II") return "TG 2";
  return false;
}

function switchCaseForGradeEffects(sigla, materia) {
  switch (sigla) {
    case "Aprovado":
      $(materia).addClass("bg-success text-white");
      break;
    case "Reprovado":
    case "Rep. s/n":
    case "Repr. Freq":
      $(materia).addClass("bg-danger text-white");
      break;
    case "Cancelado":
      $(materia).addClass("bg-success text-white");
      break;
    case "Matricula":
      $(materia).addClass("bg-primary text-white");
      break;
    case "Equivale":
      $(materia).addClass("bg-warning text-white");
      break;
  }
}

function applyGradeEffects(studentsFiltered, codMaterias) {
  let mat1;
  studentsFiltered.forEach((student) => {
    const tg = verifyIfIsTG(student);
    for (let i = 0; i < codMaterias.length; i++) {
      mat1 = student.COD_ATIV_CURRIC;
      const mat2 = codMaterias[i].innerText;
      const sigla = student.SIGLA;
      if (mat1 === mat2 || tg === mat2) {
        switchCaseForGradeEffects(sigla, codMaterias[i]);
        break;
      }
    }
  });
}

function colorTheGrade(grr) {
  if (GRR.indexOf(grr) !== -1) {
    console.log("GRR EXISTE");
    const studentsFiltered = filterChosenGRR(grr);
    const materias = [...$(".codCourse")];
    applyGradeEffects(studentsFiltered, materias);
  } else {
    console.log("GRR Ñ EXISTE - FAZER ISSO AQUI UTILIZANDO UM ALERT");
  }
}

function clearGrade() {
  const materias = [...$(".codCourse")];
  materias.forEach((materia) => {
    $(materia).removeClass("bg-warning text-white");
    $(materia).removeClass("bg-primary text-white");
    $(materia).removeClass("bg-success text-white");
    $(materia).removeClass("bg-danger text-white");
  });
}

function changeGradeInfos(e) {
  const grr = $("input").val();
  clearGrade();
  colorTheGrade(grr);
}

const GRR = [];
const STUDENTS = [];
const GRRSIZE = 11;
async function main() {
  // console.log("INICIANDO O PROJETO");
  const xml = await readXMLDoc();
  createStudentsObjectArray(xml);
  possibleGRRs();
  putGrrsValuesOnList();
  // console.log(STUDENTS);
}
