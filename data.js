// ===============================
// DADOS DO CHATBOT
// ===============================

export const perguntas = [
    "Para qual país você deseja viajar?",
    "Quantas pessoas vão viajar?",
    "Qual tipo de assento você prefere?",
    "Em qual dia da semana você quer viajar?",
    "Deseja incluir pacote turístico?"
];

export const palavrasChave = {
    destino: [
        "alemanha","germany",
        "russia",
        "turquia","turkey",
        "grecia","greece",
        "franca","france",
        "italia","italy",
        "espanha","spain",
        "portugal",
        "brasil","brazil",
        "estados unidos","eua","usa"
    ],

    pessoas: [
        "1","um","uma","one",
        "2","dois","duas","two",
        "3","tres","três","three",
        "4","quatro","four",
        "5","cinco","five"
    ],

    assento: [
        "normal","economico","economy",
        "standard","premium",
        "executivo","business",
        "vip","first class"
    ],

    dia: [
        "segunda","segunda-feira","monday",
        "terca","terça","tuesday",
        "quarta","quarta-feira","wednesday",
        "quinta","quinta-feira","thursday",
        "sexta","sexta-feira","friday",
        "sabado","sábado","saturday",
        "domingo","sunday"
    ],

    pacote: [
        "sim","s","yes","y","quero",
        "nao","não","n","no",
        "talvez","maybe"
    ]
};

// ordem das etapas (controla o fluxo)
export const etapas = [
    "destino",
    "pessoas",
    "assento",
    "dia",
    "pacote"
];