import fs from 'fs';

const tsCode = `
  {
    id: "2016-p1",
    category: "ESP",
    passageTitle: "English for Specific Purposes: Major Perspectives",
    passageText: "The field of English for specific purposes (ESP), which addresses the communicative needs and practices of particular professional or occupational groups, has developed rapidly in the past forty years to become a major force in English language teaching and research. ESP draws its strength from an eclectic theoretical foundation and a commitment to research-based language education which seeks to reveal the constraints of social contexts on language use and the ways learners can gain control over these (HYLAND, 2006, p.2).<br/><br/>Some of the major perspectives that currently influence ESP are: Needs analysis, Ethnography, Critical approaches, Contrastive rhetoric, Social constructionism, Discourse analysis.",
    source: "Hyland, 2006 (IFRS 2016)",
    examYear: 2016,
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
      }
    ]
  },
  {
    id: "2016-p2",
    category: "Methodologies",
    passageTitle: "L2 Learning Strategies",
    passageText: "L2 learning strategies are specific behaviors or thought processes that students use to enhance their own L2 learning (OXFORD, 2003, p. 8). Considering the six main categories of L2 learning strategies identified by Oxford (1990, apud OXFORD, 2003).",
    source: "Oxford, 2003 (IFRS 2016)",
    examYear: 2016,
    questions: [
      {
        id: "2016-p2-q29",
        text: "Identifying one's own learning style preferences and needs, planning for an L2 task, gathering and organizing materials are examples of:",
        options: [
          "a) Cognitive strategies",
          "b) Memory-related strategies",
          "c) Metacognitive strategies",
          "d) Affective strategies",
          "e) Social strategies"
        ],
        correctAnswer: 2,
        category: "Methodologies",
        explanation: "Metacognitive strategies involve planning, organizing, and evaluating one's own learning process."
      }
    ]
  },
  {
    id: "2020-p1",
    category: "Methodologies",
    passageTitle: "The Cognitive Approach",
    passageText: "The cognitive approach is a well known one among teachers and researchers of foreign languages. Concerning the principles of the four current approaches to language teaching that Celse-Murcia presents in her book Teaching English as a Second or Foreign Language, the cognitive approach stablishes that:",
    source: "Celse-Murcia, 2014 (IFSul 2020)",
    examYear: 2020,
    questions: [
      {
        id: "2020-p1-q28",
        text: "According to the cognitive approach:",
        options: [
          "a) The purpose of language (and thus the goal of language teaching and learning) is communication.",
          "b) Language acquisition occurs if and only if the learner receives and comprehends sufficient meaningful input.",
          "c) Learning a foreign language is a process of self-realization and of relating to other people.",
          "d) Language learning is rule-governed cognitive behavior (not habit formation).",
          "e) Language is a set of habits."
        ],
        correctAnswer: 3,
        category: "Methodologies",
        explanation: "The cognitive approach views language learning as a rule-governed cognitive behavior rather than mere habit formation."
      }
    ]
  }
`;

console.log(tsCode);
`;
fs.writeFileSync('temp_insert.js', tsCode);
