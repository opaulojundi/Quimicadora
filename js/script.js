// script.js
const elementos = {
  "O": "Oxigênio",
  "C": "Carbono",
  "N": "Nitrogênio",
  "H": "Hidrogênio",
  "Na": "Sódio",
  "Mg": "Magnésio",
  "Cl": "Cloro",
  "P": "Fósforo",
  "K": "Potássio",
  "S": "Enxofre"
};

// Arquivo JSON com fórmulas e nomes (pode ser carregado de um arquivo externo com fetch)
const formulas = {
  "H2O": { "formula": "H2O", "nome": "Água" },
  "CO2": { "formula": "CO2", "nome": "Dióxido de carbono" },
  "NaCl": { "formula": "NaCl", "nome": "Cloreto de sódio" },
  "H2SO4": { "formula": "H2SO4", "nome": "Ácido sulfúrico" },
  "N2": { "formula": "N2", "nome": "Nitrogênio (gás)" },
  "O2": { "formula": "O2", "nome": "Oxigênio (gás)" },
  "CH4": { "formula": "CH4", "nome": "Metano" },
  "NaOH": { "formula": "NaOH", "nome": "Hidróxido de sódio" },
  "MgCl2": { "formula": "MgCl2", "nome": "Cloreto de magnésio" },
  "HCl": { "formula": "HCl", "nome": "Ácido clorídrico" },
  "H3PO4": { "formula": "H3PO4", "nome": "Ácido fosfórico" },
  "KCl": { "formula": "KCl", "nome": "Cloreto de potássio" },
  "SO2": { "formula": "SO2", "nome": "Dióxido de enxofre" },
  "NH3": { "formula": "NH3", "nome": "Amônia" },
  "C6H12O6": { "formula": "C6H12O6", "nome": "Glicose" },
  "CO": { "formula": "CO", "nome": "Monóxido de carbono" },
  "H2": { "formula": "H2", "nome": "Hidrogênio (gás)" },
  "Na2CO3": { "formula": "Na2CO3", "nome": "Carbonato de sódio" },
  "MgO": { "formula": "MgO", "nome": "Óxido de magnésio" },
  "Cl2": { "formula": "Cl2", "nome": "Cloro (gás)" },
  "P4": { "formula": "P4", "nome": "Fósforo branco" },
  "K2O": { "formula": "K2O", "nome": "Óxido de potássio" },
  "S8": { "formula": "S8", "nome": "Enxofre rômbico" }
};

function calcularFormula() {
  const atomos = {};
  
  // Coleta os valores dos campos de entrada
  atomos["O"] = parseInt(document.getElementById("oxigenio").value);
  atomos["C"] = parseInt(document.getElementById("carbono").value);
  atomos["N"] = parseInt(document.getElementById("nitrogenio").value);
  atomos["H"] = parseInt(document.getElementById("hidrogenio").value);
  atomos["Na"] = parseInt(document.getElementById("sodio").value);
  atomos["Mg"] = parseInt(document.getElementById("magnesio").value);
  atomos["Cl"] = parseInt(document.getElementById("cloro").value);
  atomos["P"] = parseInt(document.getElementById("fosforo").value);
  atomos["K"] = parseInt(document.getElementById("potassio").value);
  atomos["S"] = parseInt(document.getElementById("enxofre").value);

  // Gera a fórmula química ordenada pelos elementos especificados
  let formulaGerada = "";
  const ordemElementos = ["C", "H", "O", "N", "Na", "Mg", "Cl", "P", "K", "S"]; // Ordem para exibição

  for (const simbolo of ordemElementos) {
    if (atomos[simbolo] > 0) {
      formulaGerada += simbolo;
      if (atomos[simbolo] > 1) {
        formulaGerada += atomos[simbolo];
      }
    }
  }

  // Verifica se a fórmula existe no JSON
  const resultadoFormula = formulas[formulaGerada];

  if (resultadoFormula) {
    document.getElementById("formula").textContent = resultadoFormula.formula;
    document.getElementById("nome").textContent = resultadoFormula.nome;
  } else {
    document.getElementById("formula").textContent = formulaGerada || "Nenhuma fórmula gerada";
    document.getElementById("nome").textContent = "Fórmula não encontrada";
  }
}

function resetarCampos() {
  // Seleciona o formulário
  const formulario = document.getElementById("formulario");

  // Reseta todos os campos do formulário
  formulario.reset();

  // Limpa o resultado na tela
  document.getElementById("formula").textContent = "";
  document.getElementById("nome").textContent = "";

  // Mensagem visual opcional
  console.log("Campos resetados com sucesso!");
}

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js')
      .then(() => console.log("✅ Service Worker registrado"))
      .catch(err => console.log("❌ Erro ao registrar SW:", err));
  }