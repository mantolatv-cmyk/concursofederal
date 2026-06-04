export interface GrammarTopic {
  id: string;
  title: string;
  ifspFocus: string;
  theory: string;
  textId: string;
  textExcerpt: string;
  analysis: string;
}

export const grammarBankData: GrammarTopic[] = [
  {
    id: "grammar-passive",
    title: "Passive Voice in Academic & Historical Contexts",
    ifspFocus: "A banca costuma pedir a reescrita de frases da voz ativa para a passiva (ou vice-versa) para testar o conhecimento estrutural e pragmático. O uso da voz passiva é cobrado como mecanismo de impessoalidade (objectivity) e alteração do foco informacional (Theme/Rheme).",
    theory: `
      <h3>Estrutura Básica</h3>
      <p>A voz passiva é formada por: <strong>Subject + verb to be + Past Participle (+ by agent)</strong>.</p>
      <ul>
        <li><em>Active:</em> The researcher analyzed the data.</li>
        <li><em>Passive:</em> The data was analyzed (by the researcher).</li>
      </ul>
      <h3>Pragmática (Por que usar?)</h3>
      <ol>
        <li><strong>Ocultar o Agente:</strong> Quando quem pratica a ação não é importante, é óbvio ou desconhecido.</li>
        <li><strong>Foco no Objeto (Theme):</strong> Para colocar a informação mais importante no início da frase.</li>
        <li><strong>Tom Acadêmico:</strong> Para manter a objetividade, removendo o "I" ou "We".</li>
      </ol>
    `,
    textId: "2016-p3",
    textExcerpt: "\"The purchase of Alaska was an unbelievable incident in history... The territory was monopolized by Russian fur companies.\"",
    analysis: `
      <p>Neste texto (<strong>The Transfer of Alaska</strong>), o autor descreve um evento histórico. A frase <em>"The territory was monopolized by Russian fur companies"</em> utiliza a voz passiva no passado (<strong>was monopolized</strong>).</p>
      <p><strong>Por que foi usada aqui?</strong> O foco do parágrafo é o "território" (Alaska). Ao usar a voz passiva, o território se torna o Sujeito (Theme) da oração, garantindo a coesão com a frase anterior que também falava sobre a compra do Alaska. O agente ("Russian fur companies") é mencionado no final (Rheme) como informação nova e secundária.</p>
    `
  },
  {
    id: "grammar-relative-clauses",
    title: "Relative Clauses: Defining vs. Non-Defining",
    ifspFocus: "A EBTT exige que o candidato saiba a diferença semântica quando se usa ou não vírgulas antes de um pronome relativo, e se o pronome pode ou não ser omitido na frase.",
    theory: `
      <h3>Defining Relative Clauses (Restritivas)</h3>
      <p>Restringem e definem o substantivo. Não usam vírgulas. O pronome <em>that</em> pode substituir <em>who/which</em>.</p>
      <p>Ex: <em>The app that we used is free.</em> (Pode-se omitir o "that" pois é objeto: <em>The app we used is free.</em>)</p>
      
      <h3>Non-Defining Relative Clauses (Explicativas)</h3>
      <p>Adicionam informação extra. <strong>Sempre usam vírgulas.</strong> O pronome <em>that</em> <strong>nunca</strong> pode ser usado, e o pronome nunca pode ser omitido.</p>
      <p>Ex: <em>My smartphone, which I bought last year, is broken.</em></p>
    `,
    textId: "2019-p1",
    textExcerpt: "\"Smartphones and tablets have a variety of built-in functions that support communication and multimedia use.\"",
    analysis: `
      <p>Nesta frase de <strong>Functions and Apps for Language Learning</strong>, temos uma <em>Defining Relative Clause</em> iniciada pelo pronome <strong>that</strong>.</p>
      <p>A oração <em>"that support communication..."</em> é essencial para definir quais "built-in functions" (funções embutidas) o autor está mencionando. Como o pronome "that" atua como sujeito do verbo "support", ele <strong>não pode ser omitido</strong>. Em uma questão do IFSP, eles poderiam perguntar se a substituição de "that" por "which" manteria a correção gramatical (Sim, manteria, pois restritivas aceitam ambos para coisas).</p>
    `
  },
  {
    id: "grammar-discourse-markers",
    title: "Discourse Markers & Textual Cohesion",
    ifspFocus: "Questões frequentes no IFSP pedem para o candidato substituir um conectivo por um sinônimo (ex: trocar 'However' por 'Nevertheless') ou identificar a relação lógica (Addition, Contrast, Cause, Result) que ele estabelece no texto.",
    theory: `
      <h3>Principais Conectores Acadêmicos</h3>
      <ul>
        <li><strong>Contrast / Concession:</strong> However, nevertheless, nonetheless, conversely, yet, despite, in spite of.</li>
        <li><strong>Addition:</strong> Furthermore, moreover, additionally, besides.</li>
        <li><strong>Cause / Reason:</strong> Due to, owing to, since, inasmuch as, given that.</li>
        <li><strong>Result:</strong> Therefore, consequently, thus, thereby, hence.</li>
      </ul>
      <p><em>Atenção gramatical:</em> "Despite" e "In spite of" são seguidos por substantivo ou verbo no gerúndio (-ing), enquanto "Although" é seguido por sujeito + verbo.</p>
    `,
    textId: "2023-p2",
    textExcerpt: "\"Because they are networked, they support peer collaboration and offer the opportunity to virtually bring into class individuals from outside.\"",
    analysis: `
      <p>No trecho retirado de <strong>Mobile Assisted Language Learning (MALL)</strong>, o conectivo subordinativo <strong>"Because"</strong> introduz uma oração de causa (reason).</p>
      <p><strong>Aplicação para o concurso:</strong> A banca poderia pedir a reescrita mantendo o mesmo sentido. Opções corretas incluiriam: <em>"Since they are networked..."</em> ou <em>"As they are networked..."</em>. Se a banca exigisse o uso de "Due to", a estrutura gramatical teria que mudar drasticamente para um sintagma nominal: <em>"Due to being networked..."</em> ou <em>"Due to their network capabilities..."</em>.</p>
    `
  },
  {
    id: "grammar-verb-tenses",
    title: "Verb Tenses: Simple Past vs. Present Perfect",
    ifspFocus: "A banca explora as nuances pragmáticas entre o Simple Past (ações finalizadas em tempos definidos) e o Present Perfect (ações iniciadas no passado com impacto no presente, ou experiências sem tempo definido).",
    theory: `
      <h3>Simple Past</h3>
      <p>Usado para relatar eventos históricos, pesquisas finalizadas e ações com tempo determinado (yesterday, in 2010, last week).</p>
      
      <h3>Present Perfect</h3>
      <p>Foca no resultado atual de uma ação passada ou na continuidade até o presente (recently, so far, since, for).</p>
      <p><em>Ex:</em> "Researchers <strong>have found</strong> that..." (impacto atual) vs. "Smith (2015) <strong>found</strong> that..." (estudo histórico/finalizado).</p>
    `,
    textId: "2022-p1",
    textExcerpt: "\"Three Habits My Family Started in the Pandemic that we want to Keep... February 25, 2022 began like most days, quiet and mundane.\"",
    analysis: `
      <p>No texto narrativo-pessoal <strong>Three Habits My Family Started...</strong>, notamos uma mistura interessante de tempos verbais. O título usa o <strong>Simple Past (Started)</strong> indicando que a ação de iniciar os hábitos ficou no passado (a pandemia), mas no presente eles querem mantê-los (<strong>want to Keep</strong>).</p>
      <p>Na introdução, o autor usa exclusivamente o Simple Past (<strong>began</strong>) para situar o leitor em um ponto exato e imutável do passado cronológico (25 de Fevereiro de 2022). O Present Perfect não poderia ser utilizado aqui pois a data especifica exatamente quando a ação aconteceu.</p>
    `
  },
  {
    id: "grammar-modals",
    title: "Modal Verbs: Deduction vs. Obligation",
    ifspFocus: "O IFSP frequentemente pede a substituição de modais sem alteração de sentido ou a identificação da função pragmática (ex: dedução lógica, obrigação, permissão, habilidade).",
    theory: `
      <h3>Funções dos Modais</h3>
      <ul>
        <li><strong>Must:</strong> Obrigação forte (You must stop) ou Dedução lógica quase certa (He must be tired).</li>
        <li><strong>Should / Ought to:</strong> Conselho ou expectativa.</li>
        <li><strong>Can / Could:</strong> Habilidade, possibilidade ou permissão.</li>
        <li><strong>May / Might:</strong> Probabilidade menor.</li>
      </ul>
      <p><em>Nota:</em> O passado dos modais de dedução é formado por <strong>Modal + have + Past Participle</strong> (ex: He must have forgotten).</p>
    `,
    textId: "2017-p2",
    textExcerpt: "\"children who are not given access to language in infancy or early childhood will never acquire language...\"",
    analysis: `
      <p>Nesta citação de <strong>The Critical Period Hypothesis</strong>, o uso de <strong>"will never acquire"</strong> expressa uma predição absoluta ou certeza sobre o futuro, funcionando como um modal de tempo futuro.</p>
      <p>A banca pode pedir para substituir "will" por outro verbo auxiliar ou modal que indique um grau de possibilidade, como "may never acquire" (que reduziria a certeza da hipótese) ou testar o entendimento condicional imposto pelo texto.</p>
    `
  },
  {
    id: "grammar-gerunds-infinitives",
    title: "Gerunds vs. Infinitives as Subjects/Objects",
    ifspFocus: "É comum a banca testar verbos que exigem gerúndio (enjoy, avoid, suggest) versus verbos que exigem infinitivo (decide, hope, plan), bem como o uso de gerúndios como sujeitos da oração.",
    theory: `
      <h3>Regras Principais</h3>
      <ol>
        <li><strong>Como Sujeito:</strong> O gerúndio (-ing) é frequentemente usado como sujeito da frase (ex: <em>Reading is fun</em>).</li>
        <li><strong>Após Preposições:</strong> Sempre usa-se gerúndio (ex: <em>interested in learning</em>).</li>
        <li><strong>Verbos Específicos:</strong> Alguns verbos mudam de sentido. Ex: <em>Stop smoking</em> (parar de fumar) vs <em>Stop to smoke</em> (parar o que estava fazendo para fumar).</li>
      </ol>
    `,
    textId: "2019-p2",
    textExcerpt: "\"TBL and PBL: Two Learner-Centred Approaches... Learning happens through using the language rather than studying and memorizing bits.\"",
    analysis: `
      <p>Nesta análise do texto de Metodologias (<strong>TBL and PBL</strong>), vemos múltiplos usos do gerúndio.</p>
      <p>A palavra <strong>"Learning"</strong> no início da frase funciona como um <strong>substantivo (sujeito)</strong> da oração. Mais adiante, os verbos <strong>"using"</strong>, <strong>"studying"</strong> e <strong>"memorizing"</strong> estão no gerúndio porque seguem preposições (<em>through</em> e <em>rather than</em>). A banca do IFSP frequentemente destaca esses termos com "-ing" e pergunta se eles funcionam como verbos no Present Continuous ou como substantivos verbais.</p>
    `
  },
  {
    id: "grammar-noun-phrases",
    title: "Complex Noun Phrases & Pre-modification",
    ifspFocus: "O candidato deve ser capaz de identificar o núcleo (head) do sintagma nominal (noun phrase) e todos os seus pré-modificadores (adjetivos, outros substantivos), essencial para a leitura instrumental.",
    theory: `
      <h3>Estrutura do Noun Phrase</h3>
      <p>Textos acadêmicos (e de bancas exigentes como o IFSP) empilham informações antes do substantivo principal para condensar o texto.</p>
      <p>Ex: <em>A high-performance digital language learning application</em>.</p>
      <ul>
        <li>O núcleo (head noun) é <strong>application</strong>.</li>
        <li>Tudo antes disso (high-performance, digital, language, learning) funciona como um longo adjetivo qualificando o aplicativo.</li>
      </ul>
    `,
    textId: "2018-p1",
    textExcerpt: "\"Computer-Based Testing... offers an efficient way for students to work with language.\"",
    analysis: `
      <p>No texto <strong>Computer-Based Testing</strong>, o próprio título é um Noun Phrase (Sintagma Nominal). O núcleo é <strong>"Testing"</strong> (Testagem/Provas), e <strong>"Computer-Based"</strong> é um adjetivo composto que o pré-modifica.</p>
      <p>A banca poderia isolar o termo "Computer-Based" e questionar sua formação sintática (substantivo + particípio passado formando um adjetivo), ou perguntar qual é o referente principal de um longo Noun Phrase no texto para testar a compreensão e habilidade de <em>skimming/scanning</em> da aluna.</p>
    `
  },
  {
    id: "grammar-collocations",
    title: "Lexical Collocations (Nouns + Verbs)",
    ifspFocus: "Nas questões de vocabulário e gramática, a EBTT adora testar o uso natural das palavras no inglês acadêmico (ex: 'do research' vs 'make research').",
    theory: `
      <h3>O que são Collocations?</h3>
      <p>São pares de palavras que soam "naturais" juntas no idioma. Não há uma regra gramatical estrita, é uma questão de uso e familiaridade.</p>
      <ul>
        <li><em>Correto:</em> make a decision, do homework, take an exam, bear the brunt.</li>
        <li><em>Incorreto:</em> do a decision, make homework, make an exam.</li>
      </ul>
    `,
    textId: "2025-p2",
    textExcerpt: "\"Collocations in Academic English... The results cast doubt on the initial hypothesis.\"",
    analysis: `
      <p>O texto <strong>Collocations in Academic English</strong> traz um exemplo claro da linguagem acadêmica: <strong>"cast doubt on"</strong> (lançar dúvida sobre).</p>
      <p>Na prova, uma questão de múltipla escolha poderia pedir para o candidato preencher a lacuna: <em>"The results _____ doubt on the hypothesis"</em> (A: put, B: throw, C: cast, D: give). A resposta certa só é deduzida pelo conhecimento prévio da <em>collocation</em> acadêmica "cast doubt". Focar nessas combinações no Mock Test é essencial para garantir as questões de uso do idioma.</p>
    `
  }
];
