import { perguntas, palavrasChave, etapas } from './data.js';

// ===============================
function normalizar(texto) {
    return texto.toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

// ===============================
let etapaIndex = 0;
const respostas = {};

// ===============================
const chat = document.getElementById("chat");
const input = document.getElementById("input");
const btnEnviar = document.getElementById("btnEnviar");

// ===============================
function adicionarMensagem(texto, tipo) {
    const div = document.createElement("div");
    div.classList.add("msg", tipo);
    div.textContent = texto;
    chat.appendChild(div);
    chat.scrollTop = chat.scrollHeight;
}

// ===============================
function validarResposta(resposta, chave) {
    return palavrasChave[chave]
        .some(p => resposta.includes(p));
}

// ===============================
function atualizarResumo() {
    etapas.forEach((etapa, i) => {
        const campo = document.getElementById("r" + i);
        if (campo && respostas[etapa]) {
            campo.textContent = respostas[etapa];
        }
    });
}

// ===============================
function enviar() {

    const respostaBruta = input.value.trim();
    const resposta = normalizar(respostaBruta);

    if (!resposta) return;

    adicionarMensagem(respostaBruta, "user");

    const chaveAtual = etapas[etapaIndex];

    if (validarResposta(resposta, chaveAtual)) {

        respostas[chaveAtual] = respostaBruta;
        atualizarResumo();
        etapaIndex++;

        if (etapaIndex < perguntas.length) {
            setTimeout(() => {
                adicionarMensagem(perguntas[etapaIndex], "bot");
            }, 400);
        } else {
            setTimeout(() => {
                adicionarMensagem("✅ Reserva concluída!", "bot");
            }, 400);
        }

    } else {
        adicionarMensagem("❌ Não entendi, tente novamente.", "bot");
    }

    input.value = "";
}

// ===============================
btnEnviar.addEventListener("click", enviar);

input.addEventListener("keypress", function(e) {
    if (e.key === "Enter") enviar();
});

// ===============================
adicionarMensagem(perguntas[etapaIndex], "bot");