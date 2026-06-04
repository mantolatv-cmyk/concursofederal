import fs from 'fs';

const tsCode = `
  {
    id: "2017-p1",
    category: "Methodologies",
    passageTitle: "Task-Based Language Teaching Origins",
    passageText: "“Task-Based Language Teaching (TBLT) has its origin in a number of philosophical positions and empirical traditions in education, applied linguistics and psychology. These include experiential learning and humanistic education, learner-centered instruction, and process-oriented and analytical approaches to syllabus design” (CELCE-MURCIA, M.; BRINTON, D.; SNOW, M. Teaching English as a Second or Foreign Language. 4th Edition. Boston, USA: National Geographic Learning, 2013, p. 459).",
    source: "Celce-Murcia et al. (IFSul 2017)",
    examYear: 2017,
    questions: [
      {
        id: "2017-p1-q23",
        text: "Based on these authors, which of the following statements is NOT a conceptual underpinning to TBLT?",
        options: [
          "a) Learners are exposed to authentic listening and reading texts.",
          "b) Learners develop the ability to communicate in a language through using the language rather than studying and memorizing bits of the linguistic system.",
          "c) There is a focus on learning processes and strategies as well as on language content.",
          "d) Classroom language learning is not linked to learning outside the classroom."
        ],
        correctAnswer: 3,
        category: "Methodologies",
        explanation: "TBLT encourages connecting classroom learning to real-world language use outside the classroom, contradicting option (d)."
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
      }
    ]
  }
`;

console.log(tsCode);
`;
fs.writeFileSync('temp_insert_2017.js', tsCode);
