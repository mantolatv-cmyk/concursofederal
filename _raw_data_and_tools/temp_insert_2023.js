import fs from 'fs';

const tsCode = `
  {
    id: "2023-p1",
    category: "Theories",
    passageTitle: "O Leitor Ubíquo",
    passageText: "Do leitor movente, o leitor ubíquo herdou a capacidade de ler e transitar entre formas, volumes, massas, interações de forças, movimentos, direções, traços, cores, luzes que se acendem e se apagam, enfim esse leitor cujo organismo mudou de marcha, sincronizando-se ao nomadismo próprio da aceleração e burburinho do mundo no qual circula em carros, transportes coletivos e velozmente a pé.<br/><br/>Ao mesmo tempo em que está corporalmente presente, perambulando e circulando pelos ambientes físicos – casa, trabalho, ruas, parques, avenidas, estradas –, lendo os sinais e signos que esses ambientes emitem sem interrupção, esse leitor movente, sem necessidade de mudar de marcha ou de lugar, é também um leitor imersivo. Ao leve toque do seu dedo no celular, em quaisquer circunstâncias, ele pode penetrar no ciberespaço informacional, assim como pode conversar silenciosamente com alguém ou com um grupo de pessoas a vinte centímetros ou a continentes de distância. O que lhe caracteriza é uma prontidão cognitiva ímpar para orientar-se entre nós e nexos multimídia, sem perder o controle da sua presença e do seu entorno no espaço físico em que está situado.",
    source: "Revista Ensino Superior (Fundatec 2023)",
    examYear: 2023,
    questions: [
      {
        id: "2023-p1-q30",
        text: "Segundo a autora do texto, sobre o leitor ubíquo, analise as assertivas e marque a correta:",
        options: [
          "a) A autora afirma que a mente se adapta à multimodalidade inerente ao espaço de leitura do leitor ubíquo.",
          "b) O leitor ubíquo é capaz de ler um texto digital da mesma forma que lê um texto impresso, sem adaptações.",
          "c) A autora pressupõe que o sistema cognitivo sofre como resultado do espaço de leitura ubíqua.",
          "d) A leitura digital diminui a capacidade de transitar entre diferentes focos de atenção.",
          "e) O leitor movente precisa obrigatoriamente estar estático para se tornar imersivo."
        ],
        correctAnswer: 0,
        category: "Theories",
        explanation: "O texto descreve o leitor ubíquo como tendo uma 'prontidão cognitiva ímpar' capaz de processar informações de ordens diversas, adaptando sua mente à multimodalidade e a múltiplos focos simultâneos de leitura e interação."
      }
    ]
  }
`;

console.log(tsCode);
`;
fs.writeFileSync('temp_insert_2023.js', tsCode);
