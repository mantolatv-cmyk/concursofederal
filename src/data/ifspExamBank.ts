export interface ExamQuestion {
  id: string
  category: 'ESP' | 'Theories' | 'Methodologies' | 'Grammar'
  text: string
  options: string[]
  correctAnswer: number
  explanation: string
}

export interface VocabularyWord {
  word: string
  translation: string
}

export interface ReadingSection {
  id: string
  category: 'ESP' | 'Theories' | 'Methodologies' | 'Grammar'
  passageTitle: string
  passageText: string
  source?: string
  examYear?: number
  vocabulary?: VocabularyWord[]
  openQuestions?: string[]
  questions: ExamQuestion[]
}

export const readingSectionsData: ReadingSection[] = [
  {
    id: "2022-p1",
    passageTitle: "Three Habits My Family Started in the Pandemic that we want to Keep",
    passageText: "1. One thing I didn’t fully acknowledge when these Covid forming they would turn out to be. I write and think about daily practices and habits often, but as my family and I went into lockdown two years ago, I did not fully consider how this necessary but radical shift in how we live, work and interact with others would shape us as individuals and as a society.<br/><br/>2. With nearly one million lives lost to Covid been staggering and heart - wrenching. Now, with the widespread availability of effective vaccines, some people are eager to move forward, some feel guilty or unsure about moving forward, and some think it’s still too early and risky to move forward.<br/><br/>3. Yet across the nation, it feels like things are changing. I don’t expect there to be a Covid victory parade anytime soon, and there is still work to do to fight Covid and prepare for potential future surges in the United States. But many people are returning to activities they have avoided for two years. The majority of American schools are back to in person instruction. Sports events, concerts and communal gatherings like church services and weddings are also increasingly being held in person. The Times’s David Leonhardt reported earlier this month that U.S. Covid rates have fallen 95 percent since mid January. Things seem to be going back to — well, I won’t call it a new normal, because we are all tired of that term. But we seem to be at an inflection point.<br/><br/>4. As we enter a new season, it is wise to take some time to think about the habits and practices we’ve picked up — however intentionally or unintentionally — over the past couple of years.<br/><br/>5. Many of us have developed habits of isolation and worry. These likely contribute to social crises like rises in murder, overdoses and traffic deaths. They also manifest themselves in more pedestrian ways, like increased loneliness, anxiety, social animosity and fatigue from constant risk calculation.<br/><br/>6. Yet I suspect most of us have also picked up some good habits and practices that we want to carry with us into the days ahead. Some of these may be related to disease prevention — like diligence about hand washing or wearing masks when traveling. Others may be unexpected gifts that emerged in these hard years that bring health, and even joy, in more holistic ways.<br/><br/>7. As I reflect on the past two years, I think of (at least) three practices that my family and I have taken up that I hope we continue. First, in the early days of the pandemic, when my family of five abruptly found ourselves crammed into a small house, we developed a practice of having tea around 4:30 each weekday afternoon. With cookies, Earl Grey, juice for the kids and sometimes a shot of bourbon for the adults, we talked about what worked and didn’t work that day. We would ask one another, “Who do you need to apologize to or reconcile with today?”<br/><br/>8. There were days we felt like sardines — crabby, stressed out, Zoom-depressed sardines. There were days when every single person in the family (except for the 5-month-old) had to say “I’m sorry for ...” or “I forgive you” to every other person in the family. I even had to apologize to the baby occasionally for losing my cool over a too-short nap.<br/><br/>9. This ritual helped our family to take responsibility for the ways we griped at, nipped at or yelled at one another, and to seek forgiveness. We knew that with so much time together in close quarters, if we let small resentments build, they’d soon be towering. So we made time to notice and repent for how we wounded one another, even in small and mundane ways. We would leave the tea feeling more connected, more tender toward one another, more able to offer and receive love, and more able to make it through the day.<br/><br/>10. As Covid precautions have changed, we have been less intentional about our reconciliation teas. But I hope to carry this practice and intentionality (intentionaliTEA?) with me even into this next normal. We don’t make purposeful time for reconciliation every day now, but I’d like to make it, at least, a weekly rhythm.<br/><br/>11. Second, a month or two into the pandemic, as it became clear that seeing people outside was a safer way to interact, we began to center our nights on our backyard firepit. We would invite people over and eat meals outside, socially distanced, around the fire. Sometimes we roasted marshmallows or hot dogs. Of course, I’ve hung out around fires before, but never as often as during Covid tide. It is a deeply human and humanizing activity. Our ancestors sat around fires for hundreds of thousands of years, but I had somehow lost this ancient custom.<br/><br/>12. My personal rediscovery of fire was a delight. I found again and again that something about those flickering flames brought easier connection with others. Sitting around a fire outside — as opposed to meeting in a restaurant, bar or even just inside my house — slowed us all down. The crackle and beauty of staring at a fire actually lowers blood pressure, according to a University of Alabama study. The warmth from the flames gave rise to laughter and vulnerability as smoke rose like incense into the night sky.<br/><br/>13. Twice in the last few weeks, we’ve had friends over in the evening. We were all fully vaccinated and, according to the C.D.C., it would have been quite safe to eat inside. But it was warm outside, with spring in Texas starting to bloom, so we hung out around the fire, just for the sheer pleasure of it.<br/><br/>14. Lastly, hiking had long been a favorite family activity, but Covid took it to a new level. With city playgrounds shut down and a longing to be out of the house, we bought a hiking pack to carry our baby with us and hit the trails. We are not hard-core. We have little kids who dawdle and backtrack and sometimes whine. At times it’s too hot. At times it’s too cold. At times we get 20 minutes into a hike and think, We should have just stayed home and watched TV.<br/><br/>15. But there are days when we leave the trails exhilarated, having seen something extraordinary or beautiful. Once, on a familiar trail, a small flood the week before left a new waterfall behind. Once we came across a natural pool where 100 baby frogs, each one as small as a thumbnail, were gleefully trying out their new legs. And my children swear they found a bigfoot track once. (I cannot confirm this sighting.) It’s always a risk heading out to the trail, which is why I’m glad it’s a habit that we formed. So I hope we keep this up, even now, when it’s more safe to be inside with other people again.",
    source: "Tish Harrison Warren, NY Times, 2022",
    examYear: 2022,
    category: "Theories",
    vocabulary: [
      { word: "Acknowledge", translation: "Reconhecer" },
      { word: "Staggering", translation: "Impressionante / Chocante" },
      { word: "Heart-wrenching", translation: "Desolador / Angustiante" },
      { word: "Surge", translation: "Surto / Aumento repentino" },
      { word: "Inflection point", translation: "Ponto de inflexão" },
      { word: "Holistic", translation: "Holístico / Integral" }
    ,
      { word: "Surges", translation: "Surtos / Aumentos rápidos" },
      { word: "Animosity", translation: "Animosidade / Hostilidade" },
      { word: "Diligence", translation: "Diligência / Zelo" },
      { word: "Crammed", translation: "Apertado / Espremido" },
      { word: "Reconcile", translation: "Reconciliar / Fazer as pazes" },
      { word: "Crabby", translation: "Ranzinza / Mal-humorado" },
      { word: "Resentments", translation: "Ressentimentos / Mágoas" },
      { word: "Mundane", translation: "Mundano / Banal" },
      { word: "Flickering", translation: "Cintilante / Tremeluzente" },
      { word: "Vulnerability", translation: "Vulnerabilidade" },
      { word: "Longing", translation: "Anseio / Desejo" },
      { word: "Exhilarated", translation: "Excitado / Animado" }
    ],
    openQuestions: [
      "In what ways did the pandemic unexpectedly create positive habits for the author's family?",
      "How do you interpret the phrase 'we are at an inflection point' in the context of the text?",
      "What is the author's stance on the new 'normal' versus the old 'normal'?"
    ],
    questions: [
      {
        id: "2022-p1-q26",
        text: "In the excerpts below, we have examples of Present Perfect, except:",
        options: [
          "a) “…The last two years have been staggering and heart - wrenching.”",
          "b) “…. But many people are returning to activities they have avoided for two years”",
          "c) “…It would have been quite safe to eat inside.”",
          "d) “…Many of us have developed habits of isolation and worry.”",
          "e) “…M y family and I have taken up that I hope we continue…”"
        ],
        correctAnswer: 4,
        category: "Grammar",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a E."
      },
      {
        id: "2022-p1-q27",
        text: "Passive voice is present in one of the following:",
        options: [
          "a) “… we developed a practice of having tea around 4:30 each weekday afternoon.”",
          "b) “…I even had to apologize to the baby occasionally for losing my cool over a too short nap.”",
          "c) “… Lastly, hiking had long been a favorite family activity, but Covid took it to a new level.”",
          "d) “…We would invite people over and eat meals outside, socially distanced, around fire.”",
          "e) “…like church services and weddings are also increasingly being held in person.”"
        ],
        correctAnswer: 4,
        category: "Grammar",
        explanation: "Option E contains the passive voice structure 'are being held'."
      },
      {
        id: "2022-p1-q30",
        text: "Considering the excerpts: 1. '...It´s a deeply human and humanizing...' 2. '...About those flickering flames brought...'. The words reflect the concept of:",
        options: [
          "a) Hyperbole.",
          "b) Metonymy.",
          "c) Antithesis.",
          "d) Alliteration.",
          "e) Anaphora."
        ],
        correctAnswer: 0,
        category: "Grammar",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a A."
      },
      {
        id: "2022-p1-newq",
        text: "Phrasal Verbs are in the sentences below, except:",
        options: [
          "a) “...Yet I suspect most of us have also picked up some good habits and practices...” (Paragraph 06).",
          "b) “...My family and I have taken up that I hope to continue...” (Paragraph 07).",
          "c) “... So, we hung out around the fire...” (Paragraph 13).",
          "d) “...More able to offer and receive love, and more able to make it through the day...” (Paragraph 09).",
          "e) “... With city playgrounds shut down and a longing to be out of the house...” (Paragraph 14)."
        ],
        correctAnswer: 1,
        category: "Grammar",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a B."
      }
    ]
  },
  {
    id: "2022-p2",
    passageTitle: "The Inescapable Exhaustion of Being the 'First' Black Woman",
    passageText: "I believe Judge Ketanji Brown Jackson is highly qualified to serve on the Supreme Court, but I’m also tired of celebrating long overdue firsts. by A’SHANTI GHOLAR MAR 21, 2022 GETTY IMAGES<br/><br/>1. February 25, 2022 began like most days, quiet and mundane. But as I headed to the dentist that Friday morning, my phone started chiming nonstop with text alerts: Judge Ketanji Brown Jackson had become the first Black woman nominated to the Supreme Court. Like many Black women across the country, I’d been waiting with anticipation for President Biden to name his pick to fill the vacancy left on the Court. Fast-forward to today, as the Senate Judiciary Committee begins its confirmation hearings for Jackson.<br/><br/>2. Our nation’s highest court has never benefited from the perspective of a Black woman, and this wasn’t set to change until recently. In the 232 years since the Supreme Court first convened in 1790, 115 justices have served on the bench. Of those, two have been Black men, four have been white women, and one, a Latina woman of color. That’s 108 white men. Having worked as a political strategist and activist for more than 15 years, I applaud Biden’s efforts to diversify the courts and celebrate Jackson’s historic nomination. But I’m also hyperaware that we still have a long way to go in terms of representation in our government. Honestly, a 'long way to go' is even a bit of an understatement.<br/><br/>3. Right now, there are no Black women in the U.S. Senate. None. There’s never even been a Black woman governor. Even more alarming, only 7% of all mayors in the top 100 most populous cities in the U.S. identify as Black women. Too often we are excluded from the decision-making rooms that impact us the most. We are living in a country with a representational government that does not actually reflect its people.<br/><br/>4. As I’ve learned throughout the years, a career in politics is designed very specifically for white men, making it exponentially more difficult for women of color to climb the ladder. I first joined Emerge, an organization that recruits and trains Democratic women to run for office in 2006, when I was the president of the Young Democrats of Nevada, secretary of the Nevada Democratic Party, and working for our only woman member of Congress at the time. I was one of only a handful of young Black women engaged in statewide politics and knew we needed more racial and gender representation. The majority of our elected officials and party leaders were older white men, and despite the Young Democrats of Nevada being formed in the 1960s, I was the first woman and woman of color to be elected president of the organization almost 40 years later. Forty years.<br/><br/>5. As one of the very few Black women in these roles, I knew I had to work much harder than my white colleagues to be recognized and taken seriously. Early on in my career, I realized that despite my love for politics, I would have to contend with systems and institutions that were built by people who did not look like me and deal with microaggressions and inappropriate comments from those around me who claimed to be progressive.<br/><br/>6. Doing this work, I also got a behind-the-scenes glimpse of the cultural and structural barriers Black women face while being elected into public office. They are often passed over by major donors and viewed as not being viable even when holding similar credentials as other candidates receiving those donations. In fact, large donors raised only a third of the funds for Black women’s campaigns compared to what they raised for white women in competitive primaries, according to an Open Secrets report. When I meet with Black women candidates and elected officials, I hear this from them directly.<br/><br/>7. Black women are also judged more on their appearance and presence instead of their policies and platforms. In 2016, I recall reading a story about a Georgia school teacher who called Michelle Obama a “gorilla” who “needs to focus on getting a total makeover (especially the hair)” on Facebook. Similarly, in 2017, Bill O’Reilly called Representative Maxine Waters’ hair a “James Brown wig.” To unpack this disproportionate criticism of Black women’s hair, I spoke with Ayanna Pressley, the first Black woman elected to represent Massachusetts in Congress, on my podcast The Brown Girls Guide to Politics. We bonded over our Senegalese twists, and she told me that while running for office she had many conversations about her hairstyles with her campaign vendors who “did not understand that everything a Black woman does, especially as a candidate, is considered political.” Pressley noted “they don’t understand the complexities and nuances of our hair.” Our conversation reminded me of when I became president of Emerge and was asked by someone if I would stop wearing my Senegalese twists and get a more “presidential” hairstyle. I simply replied, “I am the president of Emerge, thus this is presidential hair.”<br/><br/>8. Black women vying for public office should also expect to see conservative leaders perpetuating racism under the guise of qualifications and electability. Before Brown was even announced as the nominee, President Biden vowed that he would nominate a Black woman, which prompted backlash from Republicans like Senator Ted Cruz. He called the decision insulting, suggesting the president should nominate the most qualified candidate instead—insinuating that Black women are inherently unqualified. Fox News anchor Tucker Carlson also hopped on the racist bandwagon, questioning whether Jackson was one of the “top legal minds in the entire country.” As if a Harvard Law degree and more than eight years of experience on the federal bench is not enough, Carlson, who does not have any professional or educational background in law, demanded that we see Brown’s LSAT score. Carlson’s and Cruz’s ridiculous claims prove that qualifications aren’t the real issue at hand. Rather, they fear that a gender and racial shift in government might kill the old boys club that has existed in politics for centuries and perpetuated a system that benefits white men the most.<br/><br/>9. I know firsthand how Black women in government struggle to find mentorship and guidance on these unique challenges, and yet, they continue to blaze trails and break down barriers despite them. Think about it: In recent years, around the country and throughout various levels of government, Black women have made high-profile history. In the 2020 presidential election, Kamala Harris was elected as the first-ever Black, South Asian, and woman vice president. Last year, Kristen Clarke became the first Black woman to head the Department of Justice’s Civil Rights Division. Sändra Washington became the first Black lesbian on Lincoln, Nebraska’s city council in 2021. These women are giving way to a new generation of Black women leaders in politics, and I am thrilled to see the lived experiences of my community reflected in the members of our nation’s governing body. And although I will continue to celebrate Black women breaking the ubiquitous glass ceiling, I look forward to the day when we don’t have to celebrate their historic firsts.",
    source: "A'shanti Gholar, Cosmopolitan, 2022",
    examYear: 2022,
    category: "Theories",
    vocabulary: [
      { word: "Inescapable", translation: "Inescapável / Inevitável" },
      { word: "Exhaustion", translation: "Exaustão / Esgotamento" },
      { word: "Trailblazer", translation: "Pioneiro / Inovador" },
      { word: "Scrutiny", translation: "Escrutínio / Análise minuciosa" },
      { word: "Resilience", translation: "Resiliência / Capacidade de recuperação" },
      { word: "Burden", translation: "Fardo / Carga" },
      { word: "Underrepresented", translation: "Sub-representado" },
      { word: "Exponentially", translation: "Exponencialmente" },
      { word: "Handful", translation: "Punhado / Poucos" },
      { word: "Contend with", translation: "Lidar com / Enfrentar" },
      { word: "Microaggressions", translation: "Microagressões" },
      { word: "Glimpse", translation: "Vislumbre" },
      { word: "Viable", translation: "Viável" },
      { word: "Disproportionate", translation: "Desproporcional" },
      { word: "Vying", translation: "Competindo / Disputando" },
      { word: "Guise", translation: "Disfarce / Pretexto" },
      { word: "Ubiquitous", translation: "Ubíquo / Onipresente" }
    ],
    openQuestions: [
      "What does the author mean by the 'inescapable exhaustion of being the first'?",
      "According to the text, why is celebrating 'firsts' for Black women bittersweet?",
      "How does the appointment of Judge Ketanji Brown Jackson illustrate the broader theme of the article?"
    ],
    questions: [
      {
        id: "2022-p2-q31",
        text: "According to the text, choose an option that contains examples of nonverbal information:",
        options: [
          "a) Capital letters.",
          "b) Long paragraphs.",
          "c) Source.",
          "d) Picture.",
          "e) Quotation marks."
        ],
        correctAnswer: 2,
        category: "ESP",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a C."
      },
      {
        id: "2022-p2-q2",
        text: "The first paragraph implies that the author:",
        options: [
          "a) Is part of the group of black women interested in the future of the supreme court.",
          "b) Has no idea what has happened and why phone was ringing.",
          "c) Is a white woman against Biden’s decision.",
          "d) Would like to help the office.",
          "e) Is one of those who invaded the Capitol building in Washington DC on January 6th, 2021."
        ],
        correctAnswer: 2,
        category: "Theories",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a C."
      },
      {
        id: "2022-p2-q3",
        text: "In: “...we bonded over our Senegalese twists and she told me that while running for <span style=\"color: #10b981; font-weight: 600;\">office</span> she had many conversations...” (Paragraph 08). The word in bold means, in the context:",
        options: [
          "a) Her office in her house.",
          "b) The Podcast.",
          "c) The US Congress.",
          "d) Her doctor ́s office.",
          "e) Shanti ‘s office."
        ],
        correctAnswer: 4,
        category: "Theories",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a E."
      },
      {
        id: "2022-p2-q4",
        text: "In Paragraph 05, it seems that the author:",
        options: [
          "a) Knows everybody respects her at work.",
          "b) Doesn’t like to be a politician.",
          "c) Rejects the idea of working where she does.",
          "d) Has been treated in a sexist and disrespectful way at work.",
          "e) Never thought about being a politician."
        ],
        correctAnswer: 0,
        category: "Theories",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a A."
      },
      {
        id: "2022-p2-q5",
        text: "In “...I know firsthand how Black women in government struggle to find mentorship and guidance on these unique challenges, and yet, they continue to <span style=\"color: #10b981; font-weight: 600;\">blaze trails</span> and break down barriers despite ...” (Last Paragraph).<br/>The words in bold, in the context, mean:",
        options: [
          "a) Asking for.",
          "b) Talk to somebody.",
          "c) Listen carefully.",
          "d) Break the rules.",
          "e) Take the initiative."
        ],
        correctAnswer: 1,
        category: "Theories",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a B."
      },
      {
        id: "2022-p2-q6",
        text: "“No one ever complains about a speech being too short!” This famous quote belongs to Ira Hayes. From the given alternatives, choose the one which best expresses the given sentence from Hayes using indirect speech:",
        options: [
          "a) Ira Hayes had said, “No one ever complains about a speech being too short!”",
          "b) Ira Hayes says: “No one ever complains about a speech being too long!”",
          "c) Ira Hayes said that no one ever complains about a speech being too short.",
          "d) Ira Hayes once said it is better to talk less in when giving a speech.",
          "e) Ira Hayes is saying that no one ever complains about a speech being too short."
        ],
        correctAnswer: 2,
        category: "Grammar",
        explanation: "De acordo com o gabarito oficial, a alternativa correta é a C."
      }
    ]
  },
  {
    id: "2016-p1",
    category: "ESP",
    passageTitle: "English for Specific Purposes: Major Perspectives",
    passageText: "The field of English for specific purposes (ESP), which addresses the communicative needs and practices of particular professional or occupational groups, has developed rapidly in the past forty years to become a major force in English language teaching and research. ESP draws its strength from an eclectic theoretical foundation and a commitment to research-based language education which seeks to reveal the constraints of social contexts on language use and the ways learners can gain control over these (HYLAND, 2006, p.2).<br/><br/>Some of the major perspectives that currently influence ESP are: Needs analysis, Ethnography, Critical approaches, Contrastive rhetoric, Social constructionism, Discourse analysis.",
    source: "Hyland, 2006 (IFRS 2016)",
    examYear: 2016,
    vocabulary: [
      { word: "Eclectic", translation: "Eclético / Diversificado" },
      { word: "Commitment", translation: "Comprometimento / Empenho" },
      { word: "Constraints", translation: "Restrições / Limitações" },
      { word: "Settings", translation: "Configurações / Ambientes" }
    ,
      { word: "Inescapable", translation: "Inescapável / Inevitável" },
      { word: "Exhaustion", translation: "Exaustão / Esgotamento" },
      { word: "Trailblazer", translation: "Pioneiro / Inovador" },
      { word: "Scrutiny", translation: "Escrutínio / Análise minuciosa" },
      { word: "Resilience", translation: "Resiliência / Capacidade de recuperação" },
      { word: "Burden", translation: "Fardo / Carga" },
      { word: "Underrepresented", translation: "Sub-representado" }
    ,
      { word: "Emergence", translation: "Surgimento / Emergência" },
      { word: "Foreseeable", translation: "Previsível" },
      { word: "Undergo", translation: "Passar por / Submeter-se" },
      { word: "Distinctive", translation: "Distintivo / Peculiar" },
      { word: "Tailored", translation: "Feito sob medida / Adaptado" },
      { word: "Demands", translation: "Demandas / Exigências" }
    ],
    openQuestions: [
      "How does English for Specific Purposes (ESP) differ from General English teaching?",
      "What are the main challenges teachers face when designing an ESP course?",
      "Discuss the role of needs analysis in the context of the text."
    ],
    questions: [
      {
        id: "2016-p1-q28",
        text: "This perspective considers that the members of discourse communities and the physical settings in which they work (with detailed observations of behaviors together with interviews and the analysis of texts) are the two main focuses of study which may provide a fuller picture of what is happening. Which perspective is this?",
        options: [
          "a) Needs analysis",
          "b) Ethnography",
          "c) Critical approaches",
          "d) Contrastive rhetoric",
          "e) Social constructionism"
        ],
        correctAnswer: 1,
        category: "ESP",
        explanation: "Ethnography focuses on detailed observations of behaviors and settings of communities."
      },
      {
        id: "2016-p1-q29",
        text: "According to the passage, what is the primary focus of English for Specific Purposes (ESP)?",
        options: [
          "a) To teach general English grammar and vocabulary to young learners.",
          "b) To address the communicative needs and practices of particular professional or occupational groups.",
          "c) To prepare students exclusively for standardized English proficiency tests like TOEFL.",
          "d) To promote the reading of classic English literature.",
          "e) To develop native-like pronunciation in all learners."
        ],
        correctAnswer: 1,
        category: "ESP",
        explanation: "The text explicitly states that ESP 'addresses the communicative needs and practices of particular professional or occupational groups'."
      }
    ]
  },
  {
    id: "2023-p1",
    category: "Theories",
    passageTitle: "The Ubiquitous Reader",
    passageText: "From the moving reader, the ubiquitous reader inherited the capacity to read and transit among forms, volumes, masses, interactions of forces, movements, directions, traces, colors, lights that turn on and off, in short, this reader whose organism shifted gears, synchronizing with the nomadism inherent to the acceleration and buzz of the world in which they circulate in cars, public transport, and swiftly on foot.<br/><br/>At the same time that they are corporally present, wandering and circulating through physical environments – home, work, streets, parks, avenues, roads –, reading the signs and signals these environments emit without interruption, this moving reader, without the need to shift gears or change places, is also an immersive reader. At the light touch of their finger on a cell phone, under any circumstances, they can penetrate informational cyberspace, just as they can converse silently with someone or with a group of people twenty centimeters or continents away. What characterizes them is an unparalleled cognitive readiness to orient themselves among multimedia nodes and links, without losing control of their presence and their surroundings in the physical space where they are situated.",
    source: "Revista Ensino Superior (Fundatec 2023)",
    examYear: 2023,
    vocabulary: [
      { word: "Ubiquitous", translation: "Onipresente" },
      { word: "Wandering", translation: "Perambulando / Vagando" },
      { word: "Unparalleled", translation: "Ímpar / Sem igual" },
      { word: "Readiness", translation: "Prontidão" },
      { word: "Surroundings", translation: "Arredores / Entorno" }
    ,
      { word: "Fluctuating", translation: "Flutuante / Oscilante" },
      { word: "Inherent", translation: "Inerente / Intrínseco" },
      { word: "Pervasive", translation: "Penetrante / Disseminado" },
      { word: "Seamlessly", translation: "Perfeitamente / Sem interrupções" },
      { word: "Endeavor", translation: "Esforço / Empreendimento" }
    ],
    openQuestions: [
      "How has digital reading transformed our traditional understanding of reading habits?",
      "What are the main characteristics of a 'ubiquitous reader' according to the passage?",
      "Do you agree that ubiquitous reading fragments our attention? Why or why not?"
    ],
    questions: [
      {
        id: "2023-p1-q30",
        text: "According to the author of the text, regarding the ubiquitous reader, analyze the assertions and choose the correct one:",
        options: [
          "a) The author states that the mind adapts to the multimodality inherent in the reading space of the ubiquitous reader.",
          "b) The ubiquitous reader is capable of reading a digital text in the same way they read a printed text, without adaptations.",
          "c) The author assumes that the cognitive system suffers as a result of the ubiquitous reading space.",
          "d) Digital reading decreases the capacity to transition among different focuses of attention.",
          "e) The moving reader must mandatorily be static to become immersive."
        ],
        correctAnswer: 0,
        category: "Theories",
        explanation: "The text describes the ubiquitous reader as having an 'unparalleled cognitive readiness' capable of processing information of various orders, adapting their mind to multimodality and to multiple simultaneous focuses of reading and interaction."
      },
      {
        id: "2023-p1-q31",
        text: "According to the text, what is the main characteristic that defines the 'cognitive readiness' of the ubiquitous reader?",
        options: [
          "a) The inability to read long texts without getting distracted by the cell phone.",
          "b) The ability to orient themselves among multimedia nodes and links without losing control of the physical surroundings.",
          "c) The exclusive dependence on virtual environments to perform any reading.",
          "d) The need to be still and isolated to understand digital information.",
          "e) The preference for printed books over online texts."
        ],
        correctAnswer: 1,
        category: "Theories",
        explanation: "The text mentions that what characterizes the ubiquitous reader is an 'unparalleled cognitive readiness to orient themselves among multimedia nodes and links, without losing control of their presence and their surroundings in the physical space'."
      }
    ]
  },
  {
    id: "2018-p1",
    category: "Theories",
    passageTitle: "Computer-Based Testing",
    passageText: "Recent years have seen a burgeoning of assessment in which the test-taker performs responses on a computer. Some computer-based tests (also known as 'computer assisted' or 'web-based' tests) are small scale 'home-grown' tests available on web sites. Others are standardized, large-scale tests in which thousands or even tens of thousands of test-takers are involved. Students receive prompts (or probes, as they are sometimes referred to) in the form of spoken or written stimuli from the computerized test and are required to type (or in some cases, speak) their responses. Almost all computer-based test items have fixed, closed-ended responses; however, tests like the Test of English as a Foreign Language (TOEFL) offer a written essay section that must be scored by humans (as opposed to automatic, electronic or machine scoring).<br/><br/>A specific type of computer-based test, a computer adaptive test, has been available for many years but has recently gained momentum. In a computer-adaptive test (CAT), each test-taker receives a set of questions that meet the test specifications and that are generally appropriate for his or her performance level. The CAT starts with questions of moderate difficulty. As test-takers answer each question, the computer scores the question and uses that information, as well as the responses to previous questions to determine which question will be presented next. As long as examinees respond correctly, the computer typically selects questions of greater or equal difficulty. Incorrect answers, however, typically bring questions of lesser or equal difficulty. The computer is programmed to fulfill the test design as it continuously adjusts to find questions of appropriate difficulty for test-takers at all performance levels. In CATs, the test-taker sees only one question at a time, and the computer scores each question before selecting the next one. As a result, test-takers cannot skip questions, and once they have entered and confirmed their answers, they cannot return to questions or to any earlier part of the test.",
    source: "H. Douglas Brown (IFMG 2018)",
    examYear: 2018,
    vocabulary: [
      { word: "Burgeoning", translation: "Em rápido crescimento" },
      { word: "Standardized", translation: "Padronizado" },
      { word: "Prompts", translation: "Comandos / Estímulos" },
      { word: "Closed-ended", translation: "Fechado (sem múltiplas interpretações)" },
      { word: "Adaptive", translation: "Adaptativo" }
    ,
      { word: "Automated", translation: "Automatizado" },
      { word: "Equivalency", translation: "Equivalência" },
      { word: "Constraints", translation: "Restrições / Limitações" },
      { word: "Implementation", translation: "Implementação" },
      { word: "Feasible", translation: "Viável / Possível" },
      { word: "Logistics", translation: "Logística" }
    ],
    openQuestions: [
      "What are the main advantages of Computer-Based Testing mentioned in the text?",
      "How does the text address the issue of test security in digital environments?",
      "What are the potential drawbacks of transitioning from paper to computer-based testing?"
    ],
    questions: [
      {
        id: "2018-p1-q16",
        text: "According to Brown, computer-based testing, with or without CAT technology, offers advantages. All of the following options present some of these advantages, EXCEPT:",
        options: [
          "a) Practice for upcoming high-stakes standardized tests.",
          "b) Large-scale standardized tests that can be administered easily to thousands of test-takers at many different stations, then scored electronically.",
          "c) The human interaction element (specially in oral production) is absent.",
          "d) Classroom-based testing.",
          "e) Self-directed testing on various aspects of a language (vocabulary, grammar, discourse, one or all of the four skills, etc.)."
        ],
        correctAnswer: 2,
        category: "Theories",
        explanation: "The absence of human interaction is generally considered a disadvantage of computer-based testing, not an advantage."
      },
      {
        id: "2018-p1-q17",
        text: "According to him, which among the following alternatives CANNOT be considered a disadvantage of computer-based testing?",
        options: [
          "a) The multiple-choice format preferred for most computer-based tests contains the usual potential for flawed item design.",
          "b) Lack of security and the possibility of cheating are inherent in classroom-based, unsupervised computerized tests.",
          "c) Occasional 'home-grown' quizzes that appear on unofficial websites may be mistaken for validated assessments.",
          "d) Some individualization, in the case of CATs.",
          "e) Open-ended responses are less likely to appear because of the need for human scorers."
        ],
        correctAnswer: 3,
        category: "Theories",
        explanation: "Individualization, as seen in CATs adapting to the learner's level, is a core advantage of computer adaptive tests, not a disadvantage."
      }
    ]
  },
  {
    id: "2017-p2",
    category: "Theories",
    passageTitle: "The Critical Period Hypothesis",
    passageText: "Chomsky's ideas are often linked to the Critical Period Hypothesis (CPH), the hypothesis that animals, including humans, are genetically programmed to acquire certain kinds of knowledge and skills at specific times in life. Based on Chomsky's theory, identify three correct statements from the four ones below, then choose the alternative in which those statements are all included.<br/><br/>I. Beyond those Critical Periods, it is not difficult or impossible to acquire those abilities.<br/>II. The CPH suggests that, regarding language, children who are not given access to language in infancy or early childhood will never acquire language if this deprivation goes on for a long time.<br/>III. The innatist perspective is partly based on the CPH theory.<br/>IV. It is difficult to find evidences against CPH, since nearly all children are exposed to language at an early age.",
    source: "IFSul 2017 Exam",
    examYear: 2017,
    vocabulary: [
      { word: "Hypothesis", translation: "Hipótese" },
      { word: "Genetically programmed", translation: "Geneticamente programado" },
      { word: "Deprivation", translation: "Privação" },
      { word: "Innatist", translation: "Inatista" },
      { word: "Exposed", translation: "Exposto" }
    ,
      { word: "Genetically", translation: "Geneticamente" },
      { word: "Exposure", translation: "Exposição" },
      { word: "Attainment", translation: "Alcançar / Obtenção" }
    ],
    openQuestions: [
      "Briefly explain the Critical Period Hypothesis (CPH) in your own words.",
      "How do Chomsky's ideas support the Innatist perspective on language acquisition?",
      "What happens if a child is not exposed to language during their early years, according to the hypothesis?"
    ],
    questions: [
      {
        id: "2017-p2-q29",
        text: "The only correct affirmatives are:",
        options: [
          "a) II, III and IV.",
          "b) I, II and III.",
          "c) I, III and IV.",
          "d) I, II and IV."
        ],
        correctAnswer: 0,
        category: "Theories",
        explanation: "Statement I is incorrect because the CPH precisely posits that beyond the critical period, it IS difficult or impossible to fully acquire those abilities. Statements II, III, and IV are correct reflections of the CPH and innatist perspective."
      },
      {
        id: "2017-p2-q30",
        text: "Based on the passage, the Critical Period Hypothesis (CPH) suggests that the acquisition of certain knowledge and skills is:",
        options: [
          "a) Completely dependent on formal classroom instruction.",
          "b) Impossible for animals, and only applicable to human beings.",
          "c) Genetically programmed to occur at specific times in life.",
          "d) A process that can occur equally well at any age.",
          "e) Dependent solely on the individual's motivation."
        ],
        correctAnswer: 2,
        category: "Theories",
        explanation: "The text defines CPH as the hypothesis that animals and humans are 'genetically programmed to acquire certain kinds of knowledge and skills at specific times in life'."
      }
    ]
  },
  {
    id: "2019-p1",
    category: "Methodologies",
    passageTitle: "Functions and Apps for Language Learning",
    passageText: "Smartphones and tablets have a variety of built-in functions that support communication and multimedia use. They offer an efficient way for students to work with language, whether written or spoken. Because they are networked, they support peer collaboration and offer the opportunity to virtually bring into class individuals from outside the classroom, including more proficient speakers. Some of the built-in capabilities that support text and media use include: note taking; photo capture and editing; audio and video playback, recording and editing; email; text messaging; web browsing.<br/><br/>In addition to the default functions and applications present in phones and tablets today, they also offer access to a large variety of third-party apps, which in fact is a major reason for smartphone popularity. Apps were available before the iPhone arrived in 2007, but were of minor importance and not widely used. Today, the Apple App Store and Google Play offer countless apps that can be easily added to phones to enhance their functionality. In contrast to traditional computer software, apps tend to be inexpensive, installed easily, and feature intuitive interfaces requiring minimal instructions for use.",
    source: "R. Godwin-Jones (IFPA 2019)",
    examYear: 2019,
    vocabulary: [
      { word: "Capabilities", translation: "Capacidades / Funcionalidades" },
      { word: "Enhance", translation: "Aprimorar / Melhorar" },
      { word: "Intuitive", translation: "Intuitivo" },
      { word: "Collaborative", translation: "Colaborativo" },
      { word: "Pre-installed", translation: "Pré-instalado" },
      { word: "Countless", translation: "Incontáveis / Inúmeros" }
    ],
    openQuestions: [
      "In what ways can smartphones and tablets enhance peer collaboration in language learning?",
      "How do mobile apps differ from traditional computer software according to the text?",
      "Explain the concept of 'cloud services' and its relevance to language learning apps."
    ],
    questions: [
      {
        id: "2019-p1-q21",
        text: "Analyze the sentences below and mark the correct alternative which refers to the topic or general idea of the text above.",
        options: [
          "a) English in the classroom.",
          "b) Social media.",
          "c) Teaching-learning using functions and apps.",
          "d) The use of functions and apps of mobiles devices in language learning.",
          "e) Functions and apps of mobile devices."
        ],
        correctAnswer: 3,
        category: "Methodologies",
        explanation: "The text focuses specifically on the use of functions and apps of mobile devices for the purpose of language learning."
      },
      {
        id: "2019-p1-q25",
        text: "In the sentence, 'Increasingly, apps are released as freemium', the word 'Increasingly' can be considered:",
        options: [
          "a) Prefixation, using the prefix In-, that changes from noun to adverb.",
          "b) Affixation, using the suffix -singly, changed from verb to adverb.",
          "c) Suffixation, using the suffix -gly, changed from adjective to adverb.",
          "d) Suffixation, using the suffixes -ing and -ly, changed from verb to adverb.",
          "e) Prefixation, using the prefix Increase, changed from verb to noun."
        ],
        correctAnswer: 3,
        category: "Methodologies",
        explanation: "Increasingly is formed by adding suffixes (-ing and -ly) to the verb 'increase'."
      },
      {
        id: "2019-p1-q24",
        text: "In the following paragraph 'One of the cautions in the use of third-party apps in the classroom is compatibility. While the most popular apps are normally available for both iOS and Android, this is not necessarily the case for all. Another consideration is cost: many apps are free, but some are not', the underlined word ('some') refers to:",
        options: [
          "a) Free",
          "b) Many",
          "c) Cost",
          "d) Consideration",
          "e) Apps"
        ],
        correctAnswer: 4,
        category: "Methodologies",
        explanation: "'Some' refers back to 'many apps', meaning some apps are not free."
      }
    ]
  },
  {
    id: "2016-p3",
    category: "Grammar",
    passageTitle: "The Transfer of Alaska",
    passageText: "The transfer of Alaska from Russia to the United States formed one of those unbelievable incidents of history because by 1867, Russia was nervously eager to get rid of it, while the United States, still recovering from the Civil War and immersed in the impending impeachment of President Johnson, refused to accept it on any terms.<br/><br/>At this impasse an extraordinary man monopolized center stage. He was not a Russian, a fact which would become important more than a century later, but a soi-disant baron of dubious background; half Austrian, half Italian, and a charmer who was picked up in 1841 for temporary duty representing Russia in the United States and who lingered there till 1868. In that time, Edouard de Stoeckl, parading himself as a nobleman, although no one could say for sure how or when or even if he had earned his title, became such an ardent friend of America that he married an American heiress and took upon himself the task of acting as marriage broker between Russia, which he called homeland, and the United States, his adopted residence.<br/><br/>He faced a most difficult task, for when the United States showed hesitancy about accepting Alaska, support for the sale withered in Russia, and later when Russia wanted to sell, half a dozen of the most influential American politicians led by Secretary of State William Seward of New York looked far into the future and saw the desirability of acquiring Alaska to serve as America's arctic bastion, yet the hard-headed businessmen in the Senate, the House and the general public opposed the purchase with all the scorn they could summon. 'Seward's Icebox' and 'Seward's Folly' were two of the gentler jibes. Some critics accused Seward of being in the pay of the Russians; others accused De Stoeckl of buying votes in the House. One sharp satirist claimed that Alaska contained nothing but polar bears and Eskimos, and many protested that America should not accept this useless, frozen domain even if Russia wanted to give it away.<br/><br/>Many pointed out that Alaska had no wealth of any kind, not even reindeer, which proliferated in other northern areas, and experts affirmed that an arctic area like this could not possibly have any minerals or other deposits of value. On and on went the abuse of this unknown and somewhat terrifying land, and the castigations would have been comical had they not influenced American thinking and behavior and condemned Alaska to decades of neglect.<br/><br/>But an ingenious man like Baron de Stoeckl was not easily diverted from his main target, and with Seward's unflinching support and admirable statesmanship, the sale squeaked by with a favorable margin of one vote. By such a narrow margin did the United States come close to losing one of her potentially valuable acquisitions, but of course, had one viewed Alaska from the vantage point of frozen Fort Nulato in 1867, with the thermometer at minus-fifty-seven and about to be attacked by hostile Athapascans, the purchase at more than $7,000,000 would have seemed a poor bargain.<br/><br/>Now the comedy intensified, became burlesque, for although the U.S. Senate had bought the place, the U.S. House refused to appropriate the money to pay for it, and for many tense months the sale hung in the balance. When a favorable vote was finally taken, it was almost negated by the discovery that Baron de Stoeckl had disposed of $125,000 in cash for which he refused to give an accounting. Widely suspected of having bribed congressmen to vote for land that was obviously worthless, the baron waited until the sale was completed, then quietly slipped out of the country, his life's ambition having been achieved.<br/><br/>One congressman with a keen sense of history, economics and geopolitics said of the whole affair: 'If we were so eager to show Russia our appreciation of the help she gave us during the Civil War, why didn't we give her the seven million and tell her to keep her damned colony? It'll never be of any use to us.'",
    source: "James A. Michener, Alaska (IFRS 2016)",
    examYear: 2016,
    vocabulary: [
      { word: "Impasse", translation: "Impasse / Beco sem saída" },
      { word: "Ardent", translation: "Ardente / Fervoroso" },
      { word: "Castigations", translation: "Críticas severas / Repreensões" },
      { word: "Unflinching", translation: "Inabalável / Firme" },
      { word: "Burlesque", translation: "Burlesco / Absurdo" },
      { word: "Bribed", translation: "Subornou" }
    ,
      { word: "Capabilities", translation: "Capacidades / Funcionalidades" },
      { word: "Enhance", translation: "Aprimorar / Melhorar" },
      { word: "Intuitive", translation: "Intuitivo" },
      { word: "Collaborative", translation: "Colaborativo" },
      { word: "Pre-installed", translation: "Pré-instalado" },
      { word: "Countless", translation: "Incontáveis / Inúmeros" }
    ,
      { word: "Impending", translation: "Iminente / Prestes a acontecer" },
      { word: "Monopolized", translation: "Monopolizado" },
      { word: "Dubious", translation: "Duvidoso / Suspeito" },
      { word: "Lingered", translation: "Permaneceu / Demorou-se" },
      { word: "Hesitancy", translation: "Hesitação / Relutância" },
      { word: "Withered", translation: "Murchou / Enfraqueceu" },
      { word: "Bastion", translation: "Bastião / Fortaleza" },
      { word: "Proliferated", translation: "Proliferou / Multiplicou-se" },
      { word: "Statesmanship", translation: "Estadismo / Habilidade política" }
    ],
    openQuestions: [
      "Why was the transfer of Alaska considered an 'unbelievable incident' in history?",
      "What were the main criticisms American politicians had regarding the purchase of Alaska?",
      "How did Baron de Stoeckl manage to secure the sale despite strong opposition?"
    ],
    questions: [
      {
        id: "2016-p3-q34",
        text: "Considering the whole excerpt, it is possible to say that:",
        options: [
          "a) I, II and III are correct.",
          "b) only I and II are correct.",
          "c) only II and III are correct.",
          "d) only I is correct.",
          "e) only II is correct."
        ],
        correctAnswer: 1,
        category: "Grammar",
        explanation: "Statements I (the author uses irony) and II (describes the purchase process) are correct. Statement III is incorrect because 'One sharp satirist' and 'One congressman' are not the author's opinions — they are references to real historical figures."
      },
      {
        id: "2016-p3-q35",
        text: "The sentence 'But an ingenious man like Baron de Stoeckl was not easily diverted from his main target' (line 28) could be paraphrased only by the following sentence:",
        options: [
          "a) He would not take up his task easily.",
          "b) He would not get rid of his task easily.",
          "c) He would not look up his task easily.",
          "d) He would not give up his task easily.",
          "e) He would not blow up his task easily."
        ],
        correctAnswer: 3,
        category: "Grammar",
        explanation: "'Not easily diverted from his main target' means he would not give up (abandon) his task easily. 'Give up' = desistir, which matches the meaning of perseverance described in the text."
      },
      {
        id: "2016-p3-q37",
        text: "The sequence 'was not easily diverted' (line 28) presents the same passive voice structure in all of the following, EXCEPT for:",
        options: [
          "a) was picked up (line 7)",
          "b) was finally taken (line 36)",
          "c) was completed (line 39)",
          "d) was almost negated (line 36)",
          "e) was nervously eager (line 2)"
        ],
        correctAnswer: 4,
        category: "Grammar",
        explanation: "'Was nervously eager' is NOT passive voice — 'eager' is an adjective, not a past participle. 'Was' here functions as a linking verb, not an auxiliary for passive construction. All other options are genuine passive voice (was + past participle)."
      },
      {
        id: "2016-p3-q38",
        text: "The clauses 'the castigations would have been comical' and 'had they not influenced American thinking...' present the same grammatical relation as in:",
        options: [
          "a) 'then quietly slipped out of the country' and 'his life's ambition having been achieved'.",
          "b) 'had one viewed Alaska' and 'the purchase (...) would have seemed a poor bargain'.",
          "c) 'one sharp satirist claimed that Alaska' and 'and many protested that America'.",
          "d) 'if we were so eager to show Russia our appreciation' and 'why didn't we give her the seven million'.",
          "e) 'although the U.S. Senate had bought the place' and 'the U.S. House refused to appropriate the money to pay for it'."
        ],
        correctAnswer: 1,
        category: "Grammar",
        explanation: "Both the original and option (b) are Third Conditional (past unreal conditional) structures: 'would have been comical / had they not influenced' mirrors 'had one viewed Alaska / would have seemed a poor bargain'. The inverted 'had' replaces 'if' in formal English."
      },
      {
        id: "2016-p3-q39",
        text: "The word 'pay' may be both a noun, as in 'the pay' (line 19) and a verb, as in 'to pay' (line 35) without having to change its spelling. The same may occur to all the words below, EXCEPT for:",
        options: [
          "a) purchase (line 17)",
          "b) vote (line 30)",
          "c) sale (line 14)",
          "d) help (line 42)",
          "e) transfer (line 1)"
        ],
        correctAnswer: 2,
        category: "Grammar",
        explanation: "'Sale' is a noun only. The verb form is 'sell', not 'sale'. All others (purchase, vote, help, transfer) can function as both nouns and verbs without changing spelling."
      },
      {
        id: "2016-p3-q40",
        text: "Consider the statements below:\nI. The verbs 'claimed' (line 20), 'pointed out' (line 23), and 'affirmed' (line 24) are verbs of saying;\nII. The sentence 'Alaska contained nothing' (line 20) can be rewritten as 'Alaska did not contain anything';\nIII. The sentence 'Baron de Stoeckl had disposed of $125,000 in cash' (lines 37) means that the Baron won that sum of money only after the negotiations were finished.",
        options: [
          "a) only I is correct.",
          "b) only II is correct.",
          "c) only III is correct.",
          "d) only I and II are correct.",
          "e) only II and III are correct."
        ],
        correctAnswer: 3,
        category: "Grammar",
        explanation: "I is correct: 'claimed', 'pointed out', and 'affirmed' are all reporting/saying verbs. II is correct: 'contained nothing' = 'did not contain anything' (double negation equivalence). III is incorrect: 'disposed of' means he spent or got rid of the money, not that he won it."
      }
    ]
  },
  {
    id: "2019-p2",
    category: "Methodologies",
    passageTitle: "TBL and PBL: Two Learner-Centred Approaches",
    passageText: "Many newly qualified or inexperienced teachers tend to base their lesson planning on the traditional PPP approach (Presentation, Practice, Production). It is reliable and it is a valid framework around which to base a series of classroom activities. It is also usually the best way of covering all the lexical areas and grammar points in the course book or syllabus. All good and well. The problem is that PPP serves the teacher's needs but it is debatable whether or not it fulfills the needs of the learner. The language presented and practiced does not take into account the particular needs of each learner; the language content is decided by the coursebook and/or syllabus. For this reason, many teachers, having experimented with the PPP approach, turn to more learner-centred approaches where the needs of the learner are central to the lesson content. Two such approaches are TBL (Task-Based Learning) and PBL (Project-Based Learning).<br/><br/>In task-based learning, the central focus of the lesson is a task, not a grammar point or a lexical area, and the objective is not to 'learn the structure' but to 'complete the task'. Of course, to complete the task, learners will need to use the right language and communicate effectively. The language becomes an instrument of communication, whose purpose is to help complete the task successfully. The students can use whatever language they see fit to achieve the objective. Usually there is no 'correct answer' for a task outcome.<br/><br/>Generally, teachers using a TBL approach divide their task-based classes into three stages:<br/>Stage 1: The pre-task. The teacher introduces and defines the topic and engages students with situations/lexical areas/texts. This stage brings up language that may be useful.<br/>Stage 2: Students perform the task in pairs or groups. In this stage, mistakes are not important; the teacher provides support and monitors. The learners focus on communication, perhaps at the expense of accuracy, but this will be dealt with in the next stage.<br/>Stage 3: The teacher works on specific language points which come up in stage 2.",
    source: "Katherine Bilsborough (IFPA 2019)",
    examYear: 2019,
    vocabulary: [
      { word: "Debatable", translation: "Discutível / Questionável" },
      { word: "Learner-centred", translation: "Centrado no aluno" },
      { word: "Framework", translation: "Estrutura / Referencial" },
      { word: "At the expense of", translation: "Em detrimento de" },
      { word: "See fit", translation: "Achar adequado / Julgar apropriado" }
    ,
      { word: "Inexperienced", translation: "Inexperiente" },
      { word: "Syllabus", translation: "Conteúdo programático / Ementa" },
      { word: "Fulfils", translation: "Cumpre / Satisfaz" },
      { word: "Communicative", translation: "Comunicativo" },
      { word: "Outcome", translation: "Resultado / Desfecho" },
      { word: "Accuracy", translation: "Precisão / Exatidão" }
    ],
    openQuestions: [
      "What are the main limitations of the traditional PPP (Presentation, Practice, Production) approach?",
      "Describe the primary objective of a task in Task-Based Learning (TBL).",
      "How does the teacher's role change from Stage 1 to Stage 2 in a TBL lesson?"
    ],
    questions: [
      {
        id: "2019-p2-q17",
        text: "According to the text, the main problem with the PPP approach is that:",
        options: [
          "a) It does not cover grammar points effectively.",
          "b) It is not reliable for classroom planning.",
          "c) It serves the teacher's needs rather than the learner's needs.",
          "d) It prevents students from using language communicatively.",
          "e) It does not follow any syllabus or coursebook."
        ],
        correctAnswer: 2,
        category: "Methodologies",
        explanation: "The text explicitly states: 'The problem is that PPP serves the teacher's needs but it is debatable whether or not it fulfills the needs of the learner.'"
      },
      {
        id: "2019-p2-q18",
        text: "In Task-Based Learning (TBL), the central focus of the lesson is:",
        options: [
          "a) A grammar point or lexical area.",
          "b) The correct answer to a problem.",
          "c) A task that learners must complete.",
          "d) The teacher's presentation of new language.",
          "e) Accuracy in language production."
        ],
        correctAnswer: 2,
        category: "Methodologies",
        explanation: "The text states: 'the central focus of the lesson is a task, not a grammar point or a lexical area, and the objective is not to learn the structure but to complete the task.'"
      },
      {
        id: "2019-p2-q19",
        text: "During Stage 2 of TBL, the teacher's role is primarily to:",
        options: [
          "a) Correct all mistakes immediately.",
          "b) Present new grammar rules.",
          "c) Provide support and monitor the students.",
          "d) Assign grades based on accuracy.",
          "e) Explain vocabulary items in detail."
        ],
        correctAnswer: 2,
        category: "Methodologies",
        explanation: "The text states: 'In this stage, mistakes are not important; the teacher provides support and monitors. The learners focus on communication, perhaps at the expense of accuracy.'"
      }
    ]
  },
  {
    id: "2019-p3",
    category: "Theories",
    passageTitle: "The Importance of Motivation in L2 Learning",
    passageText: "Many first-time learners are faced with challenges in learning a second language. This can include many different variables, among which are motivation (intrinsic and extrinsic), lack of orientation, self-confidence, interest and practical goals/objectives. However, lack of orientation, self-confidence and interest are intertwined with the broader issue, which is motivation, and therefore they can be grouped and discussed under the umbrella of motivation.<br/><br/>The focus of this paper is on how learners' interests, goals and expectations towards learning English are linked to motivators. There is an extensive body of research on motivation in the classroom. My primary interest is to highlight the work of researchers who have done research on this field, coming up with some thoughts, as well as some of the most common strategies to be applied in the Cape Verdean context.<br/><br/>Accounting for my own experience, the thoughts of other educators, high school and the experiences of other students, one can say that besides the basic fear that all students have when learning a second language (language ego), which prevents them from speaking, there is a strong pessimism towards learning the English language. Such expressions include, 'I can't make it!', 'It's no use trying!', 'I'll never be able to speak English!'. These expressions inevitably lead one to think that these students lack motivation to learn.",
    source: "R. Bambirra (IFPA 2019)",
    examYear: 2019,
    vocabulary: [
      { word: "Intertwined", translation: "Entrelaçado / Interligado" },
      { word: "Umbrella", translation: "Guarda-chuva (aqui: conceito abrangente)" },
      { word: "Pessimism", translation: "Pessimismo" },
      { word: "Language ego", translation: "Ego linguístico" },
      { word: "Accounting for", translation: "Levando em conta" }
    ,
      { word: "Intrinsic", translation: "Intrínseco / Essencial" },
      { word: "Extrinsic", translation: "Extrínseco / Exterior" },
      { word: "Expectations", translation: "Expectativas" }
    ],
    openQuestions: [
      "How do intrinsic and extrinsic motivation differ, and why are they important in L2 learning?",
      "Explain the concept of 'language ego' and how it affects a student's ability to learn.",
      "What are some common pessimistic thoughts students have, and how do they reflect a lack of motivation?"
    ],
    questions: [
      {
        id: "2019-p3-q28",
        text: "According to the text, the variables that challenge L2 learners can ultimately be grouped under:",
        options: [
          "a) Self-confidence and practical goals.",
          "b) Orientation and language ego.",
          "c) Motivation.",
          "d) Intrinsic interest only.",
          "e) Fear and pessimism."
        ],
        correctAnswer: 2,
        category: "Theories",
        explanation: "The text states that lack of orientation, self-confidence and interest 'are intertwined with the broader issue, which is motivation, and therefore they can be grouped and discussed under the umbrella of motivation.'"
      },
      {
        id: "2019-p3-q29",
        text: "The word formation of 'Unfortunately' is best described as:",
        options: [
          "a) Prefix un- + fortunate + suffix -ly, changed from adjective to adverb.",
          "b) Prefix un- + fortune + suffix -ly, changed from noun to adverb.",
          "c) Prefix un- + fortunate + suffix -ly, changed from noun to adverb.",
          "d) Prefix un- + fortune + suffix -ately, changed from verb to adverb.",
          "e) Prefix un- + fortunate + suffix -ly, changed from verb to adjective."
        ],
        correctAnswer: 0,
        category: "Grammar",
        explanation: "'Unfortunately' is formed by: prefix 'un-' + adjective 'fortunate' + adverb suffix '-ly'. The suffix -ly transforms the adjective 'unfortunate' into the adverb 'unfortunately'."
      },
      {
        id: "2019-p3-q30",
        text: "The expression 'language ego' in the text refers to:",
        options: [
          "a) A student's pride in their first language.",
          "b) A psychological barrier that prevents learners from speaking in L2.",
          "c) The teacher's authority in the classroom.",
          "d) A method of teaching grammar through self-reflection.",
          "e) A learner's desire to impress others with their English skills."
        ],
        correctAnswer: 1,
        category: "Theories",
        explanation: "The text explains that 'language ego' is 'the basic fear that all students have when learning a second language, which prevents them from speaking.' This aligns with H. Douglas Brown's concept of language ego as a psychological barrier."
      }
    ]
  },
  {
    id: "2018-p2",
    category: "Methodologies",
    passageTitle: "Communicative Language Teaching (CLT)",
    passageText: "On the Communicative Language Teaching (CLT), Brown (2000) states that as the field of second language pedagogy has developed and matured over the past few decades, we have experienced a number of reactions and counter-reactions in methods and approaches to language teaching and observe the trends as they came and went.<br/><br/>As a definition of CLT, judge the following statements as true (T) or false (F):<br/>I. Language techniques are designed to engage learners in the pragmatic, authentic, functional use of language for meaningful purposes. Organizational language forms are not the central focus but rather aspects of language that enable the learner to accomplish those purposes.<br/>II. Fluency and accuracy are seen as complementary principles underlying writing techniques. At times fluency may have to take on more importance than accuracy in order to keep learners meaningfully engaged in language use.<br/>III. Classroom goals are focused on all of the components of communicative competence and not restricted to grammatical or linguistic competence.<br/>IV. In the communicative classroom, students ultimately have to use the language, productively and receptively, in unrehearsed contexts.",
    source: "H. Douglas Brown, 2000 (IFMG 2018)",
    examYear: 2018,
    vocabulary: [
      { word: "Matured", translation: "Amadureceu" },
      { word: "Pragmatic", translation: "Pragmático" },
      { word: "Unrehearsed", translation: "Não ensaiado / Espontâneo" },
      { word: "Complementary", translation: "Complementar" }
    ,
      { word: "Pedagogy", translation: "Pedagogia" },
      { word: "Meaningful", translation: "Significativo / Com sentido" },
      { word: "Receptively", translation: "Receptivamente" },
      { word: "Productively", translation: "Produtivamente" }
    ],
    openQuestions: [
      "What is the primary focus of language techniques in Communicative Language Teaching (CLT)?",
      "In CLT, how is the relationship between fluency and accuracy described?",
      "Why is it important for students to use the language in unrehearsed contexts?"
    ],
    questions: [
      {
        id: "2018-p2-q18",
        text: "Regarding Brown's definition of Communicative Language Teaching (CLT), the correct sequence of True (T) and False (F) is:",
        options: [
          "a) I-F  II-T  III-T  IV-F",
          "b) I-T  II-F  III-T  IV-T",
          "c) I-T  II-F  III-T  IV-F",
          "d) I-F  II-F  III-T  IV-T",
          "e) I-T  II-T  III-F  IV-F"
        ],
        correctAnswer: 1,
        category: "Methodologies",
        explanation: "I is TRUE (CLT focuses on pragmatic, functional use). II is FALSE (the original text says 'communicative techniques', not 'writing techniques'). III is TRUE (CLT targets all components of communicative competence). IV is TRUE (students use language in unrehearsed contexts)."
      }
    ]
  },
  {
    id: "2018-p3",
    category: "Theories",
    passageTitle: "Dynamic Teaching and the Approach-Practice Cycle",
    passageText: "Your approach to language pedagogy is not just a set of static principles; it is a dynamic composite of energies that changes (or should change, if you are a growing teacher) with your experiences in your own learning and teaching. The way you understand the language learning process — what makes for successful and unsuccessful learning — may change over the years, but it doesn't pay to be too smug. There is far too much that we do not know collectively about this process, and there are far too many new research findings pouring in for anyone to confidently assert that you know everything you already need to know about language and language learning.<br/><br/>The interaction between your approach and your classroom practice is the key to dynamic teaching. The best teachers always take a few calculated risks in the classroom, trying new activities here and there. The inspiration for such innovation comes from the approach level, but the feedback that they gather from actual implementation then informs their overall understanding of what good teaching is. Which, in turn, may give rise to new insight and more innovative possibilities, and the cycle continues.",
    source: "H. Douglas Brown, 2000 (IFMG 2018)",
    examYear: 2018,
    vocabulary: [
      { word: "Smug", translation: "Convencido / Presunçoso" },
      { word: "Pouring in", translation: "Chegando em grande quantidade" },
      { word: "Assert", translation: "Afirmar / Assegurar" },
      { word: "Calculated risks", translation: "Riscos calculados" },
      { word: "Give rise to", translation: "Dar origem a" }
    ,
      { word: "Dynamic", translation: "Dinâmico" },
      { word: "Composite", translation: "Composto / Mistura" },
      { word: "Innovation", translation: "Inovação" },
      { word: "Implementation", translation: "Implementação" },
      { word: "Insight", translation: "Percepção / Entendimento profundo" }
    ],
    openQuestions: [
      "According to the text, why is it dangerous for a teacher to become 'too smug' about their teaching approach?",
      "How does taking 'calculated risks' contribute to dynamic teaching?",
      "Explain the cycle of interaction between a teacher's approach and their classroom practice."
    ],
    questions: [
      {
        id: "2018-p3-q19",
        text: "According to Brown, choose the best option among the following statements:",
        options: [
          "a) One can assume that he/she knows everything needed about language and language learning.",
          "b) The interaction between the teacher's approach and his/her classroom practice is not the key to dynamic teaching.",
          "c) The best teachers do not take risks in classrooms.",
          "d) The author is not a believer of language pedagogy.",
          "e) The teacher's approach to language pedagogy must not be composed by undeviating principles."
        ],
        correctAnswer: 4,
        category: "Theories",
        explanation: "Brown states that approach is 'a dynamic composite' that 'changes', meaning it must NOT be composed of static/undeviating principles. All other options contradict the text directly."
      }
    ]
  },
  {
    id: "2018-p4",
    category: "Theories",
    passageTitle: "The Silent Period in Second Language Acquisition",
    passageText: "In the book The Study of Second Language Acquisition, Rod Ellis focuses on the process the learners pass through while learning and acquiring a second language. Based on what he states in his work, analyze the following statements:<br/><br/>I. In the case of L1 acquisition, children go through a lengthy period of listening to people talk to them before they produce their first words. This silent period is necessary for the young child needs to discover what language is and what it does.<br/>II. All learners go through a silent period, as Rod Ellis's study shows.<br/>III. The silent period provides learners with opportunities to prepare themselves for social use of the L2 by means of private speech, which they engage in while they are 'silent'.<br/>IV. Learners, particularly children, tend to begin speaking first in single words, then in short phrases, then in increasingly longer utterances, many of which are novel. However, the nature of this progression is not as well-defined as in L1 acquisition, perhaps because older learners already have fully developed processing capacities.",
    source: "Rod Ellis (IFMG 2018)",
    examYear: 2018,
    vocabulary: [
      { word: "Lengthy", translation: "Longo / Prolongado" },
      { word: "Utterances", translation: "Enunciados / Falas" },
      { word: "Novel", translation: "Novo / Original (não repetido)" },
      { word: "Well-defined", translation: "Bem definido" }
    ,
      { word: "Acquiring", translation: "Adquirindo" },
      { word: "Progression", translation: "Progressão / Avanço" },
      { word: "Capacities", translation: "Capacidades" }
    ],
    openQuestions: [
      "What is the 'silent period' and why is it considered necessary in language acquisition?",
      "How does the silent period differ between L1 (first language) and L2 (second language) learners?",
      "Discuss the progression of speech from single words to longer utterances as described by Rod Ellis."
    ],
    questions: [
      {
        id: "2018-p4-q20",
        text: "Based on Rod Ellis's work on the Silent Period, the correct sequence is:",
        options: [
          "a) I-T  II-F  III-T  IV-T",
          "b) I-T  II-T  III-T  IV-T",
          "c) I-T  II-F  III-F  IV-T",
          "d) I-F  II-T  III-F  IV-F",
          "e) I-F  II-T  III-T  IV-F"
        ],
        correctAnswer: 0,
        category: "Theories",
        explanation: "I is TRUE (children listen before producing words). II is FALSE (Ellis shows not ALL learners go through a silent period — some start producing immediately). III is TRUE (private speech during silent period). IV is TRUE (progression from single words to longer utterances, less well-defined than L1)."
      }
    ]
  },
  {
    id: "2023-p2",
    category: "Methodologies",
    passageTitle: "Mobile Assisted Language Learning (MALL)",
    passageText: "Mobile Assisted Language Learning (MALL) consists of the use of mobile devices (e.g. smartphones, tablets) to assist language learning. Despite different definitions of MALL, researchers seem to agree on the following characteristics: students can study at any time and/or place; students can use different devices for continuity of study; students may have easier access to different sources of information; and students can adapt their study practices according to their routine.<br/><br/>Multimodality in language teaching refers to the utilization of different communication channels and sensory modes in teaching and learning. Multimodal genres are those in which meaning is created through the coordinated use of various semiotic modes, relying on the interplay among these modes to achieve their communicative purpose.",
    source: "Fundatec 2023",
    examYear: 2023,
    vocabulary: [
      { word: "Semiotic", translation: "Semiótico" },
      { word: "Interplay", translation: "Interação / Jogo entre elementos" },
      { word: "Continuity", translation: "Continuidade" },
      { word: "Sensory modes", translation: "Modos sensoriais" }
    ,
      { word: "Coordinated", translation: "Coordenado" },
      { word: "Utilization", translation: "Utilização / Uso" }
    ],
    openQuestions: [
      "What are the core characteristics of Mobile Assisted Language Learning (MALL)?",
      "How is multimodality defined in the context of language teaching?",
      "Give an example of how different sensory modes can interact to achieve a communicative purpose."
    ],
    questions: [
      {
        id: "2023-p2-q27",
        text: "About MALL (Mobile Assisted Language Learning), researchers seem to agree on the following characteristics, EXCEPT:",
        options: [
          "a) Students can study at any time and/or place.",
          "b) Students can use different devices for continuity of study.",
          "c) Students may have easier access to different sources of information.",
          "d) Students will automatically become independent and critical language users.",
          "e) Students can adapt their study practices according to their routine."
        ],
        correctAnswer: 3,
        category: "Methodologies",
        explanation: "The text lists four agreed-upon characteristics of MALL. Option (d) — 'automatically become independent and critical language users' — is NOT mentioned and represents an exaggerated claim not supported by the text."
      },
      {
        id: "2023-p2-q28",
        text: "Mark the correct alternative about the concept of multimodality in language teaching:",
        options: [
          "a) The use of a translanguaging repertoire in the language classroom.",
          "b) The incorporation of various teaching methods in language instruction.",
          "c) The utilization of different communication channels and sensory modes in teaching and learning.",
          "d) The focus on forms on language teaching and learning.",
          "e) The focus on written and spoken language skills."
        ],
        correctAnswer: 2,
        category: "Methodologies",
        explanation: "The text defines multimodality as 'the utilization of different communication channels and sensory modes in teaching and learning', which matches option (c) exactly."
      },
      {
        id: "2023-p2-q29",
        text: "Mark the alternative that does NOT contain an example of a multimodal language lesson:",
        options: [
          "a) Students collaboratively produced essays depicting their life experiences of being refugees in Brazil, fleeing Venezuela.",
          "b) Immigrant students in Canada used digital storytelling software, Photo Story 3, along with music, to express their difficulties and emotions.",
          "c) Students used PowerPoint Presentations with writings and moving images to approach stereotypes and social issues.",
          "d) A lesson was designed using dual language texts, online translators, and visual aids to approach different learners who collaboratively wrote texts and got peer feedback.",
          "e) Students used digital media, such as Movie Maker and Audacity, to tell their own stories of unseen and unheard spaces."
        ],
        correctAnswer: 0,
        category: "Methodologies",
        explanation: "Option (a) describes only essay writing (a single mode — written text), with no mention of multiple semiotic modes (images, audio, video, etc.). All other options integrate multiple modes: digital storytelling + music, PowerPoint + images, translators + visuals, Movie Maker + Audacity."
      }
    ]
  },
  {
    id: "2025-p1",
    category: "Theories",
    passageTitle: "A Wave of African Pride Rises in the Caribbean",
    passageText: "Dr Ogbu opened Mama Chops, a West African takeaway in St. Ann, Jamaica, in 2022, after being incessantly asked by his students about African food. The business is thriving, Dr Ogbu tells the BBC, and not just because his food is popular. He explains that DNA testing has shown that we all have the same ancestral origin. So most of the food is similar, he explains. People across the Caribbean have been expressing their African heritage through food, clothing and travel, while governments and institutions from the continent are strengthening cultural and economic ties.",
    source: "BBC News (IFPE 2025)",
    examYear: 2025,
    vocabulary: [
      { word: "Incessantly", translation: "Incessantemente / Sem parar" },
      { word: "Thriving", translation: "Prosperando / Florescendo" },
      { word: "Ancestral", translation: "Ancestral" },
      { word: "Heritage", translation: "Herança / Patrimônio cultural" },
      { word: "Strengthening", translation: "Fortalecendo" }
    ,
      { word: "Institutions", translation: "Instituições" },
      { word: "Takeaway", translation: "Comida para levar / Restaurante delivery" }
    ],
    openQuestions: [
      "What motivated Dr. Ogbu to open a West African takeaway in Jamaica?",
      "How has DNA testing influenced the cultural identity of people in the Caribbean according to the text?",
      "In what ways are Caribbean people expressing their African heritage today?"
    ],
    questions: [
      {
        id: "2025-p1-q21",
        text: "Based on the text, it can be said that:",
        options: [
          "a) The text presents two directly related ideas about the takeaway's success.",
          "b) The text explains why Dr Ogbu decided to open the takeaway.",
          "c) The text presents a cause-and-outcome between knowing ancestral origins and acting on it.",
          "d) The text is suggesting that governments and institutions met after people expressed interest.",
          "e) The text describes a consequence rather than a reason."
        ],
        correctAnswer: 1,
        category: "Theories",
        explanation: "The text explicitly states Dr Ogbu opened the takeaway 'after being incessantly asked by his students about African food' — this is explaining WHY he decided to open it."
      }
    ]
  },
  {
    id: "2025-p2",
    category: "Grammar",
    passageTitle: "Collocations in Academic English",
    passageText: "Consider the following sentences with collocations in bold:<br/><br/>\"She cast doubt on the reliability of the witness's testimony.\"<br/>\"The company bore the brunt of the economic crisis.\"<br/>\"The scientist drew a distinction between correlation and causation.\"<br/>\"The lawyer raised an objection during the trial.\"",
    source: "IFPE 2025",
    examYear: 2025,
    vocabulary: [
      { word: "Cast doubt", translation: "Lançar dúvida" },
      { word: "Bore the brunt", translation: "Suportou o impacto mais forte" },
      { word: "Drew a distinction", translation: "Fez uma distinção" },
      { word: "Raised an objection", translation: "Fez uma objeção" }
    ,
      { word: "Testimony", translation: "Testemunho / Depoimento" },
      { word: "Reliability", translation: "Confiabilidade" },
      { word: "Correlation", translation: "Correlação" },
      { word: "Causation", translation: "Causalidade" },
      { word: "Objection", translation: "Objeção" }
    ],
    openQuestions: [
      "What does the collocation 'cast doubt on' mean in an academic context?",
      "Explain the difference between 'correlation' and 'causation' as used by the scientist.",
      "How does a company 'bear the brunt' of an economic crisis?"
    ],
    questions: [
      {
        id: "2025-p2-q33",
        text: "In the sentences, the collocations in bold can be best paraphrased respectively as:",
        options: [
          "a) create confusion; take partial advantage; show a comparison; made a complaint.",
          "b) spread misinformation; share responsibility; describe a situation; offered a suggestion.",
          "c) give evidence; resist external pressure; highlight a difference; presented a conclusion.",
          "d) express uncertainty; suffer the worst impact; point out a difference; make a formal protest.",
          "e) express uncertainty; enjoy the benefits; establish a norm; request permission."
        ],
        correctAnswer: 3,
        category: "Grammar",
        explanation: "'Cast doubt' = express uncertainty; 'bore the brunt' = suffered the worst impact; 'drew a distinction' = pointed out a difference; 'raised an objection' = made a formal protest. Option (d) matches all four paraphrases correctly."
      }
    ]
  }
]
