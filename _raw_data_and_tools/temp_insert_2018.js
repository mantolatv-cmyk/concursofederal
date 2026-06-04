import fs from 'fs';

const tsCode = `
  {
    id: "2018-p1",
    category: "Theories",
    passageTitle: "Computer-Based Testing",
    passageText: "Recent years have seen a burgeoning of assessment in which the test-taker performs responses on a computer. Some computer-based tests (also known as 'computer assisted' or 'web-based' tests) are small scale 'home-grown' tests available on web sites. Others are standardized, large-scale tests in which thousands or even tens of thousands of test-takers are involved. Students receive prompts (or probes, as they are sometimes referred to) in the form of spoken or written stimuli from the computerized test and are required to type (or in some cases, speak) their responses. Almost all computer-based test items have fixed, closed-ended responses; however, tests like the Test of English as a Foreign Language (TOEFL) offer a written essay section that must be scored by humans (as opposed to automatic, electronic or machine scoring).<br/><br/>A specific type of computer-based test, a computer adaptive test, has been available for many years but has recently gained momentum. In a computer-adaptive test (CAT), each test-taker receives a set of questions that meet the test specifications and that are generally appropriate for his or her performance level. The CAT starts with questions of moderate difficulty. As test-takers answer each question, the computer scores the question and uses that information, as well as the responses to previous questions to determine which question will be presented next. As long as examinees respond correctly, the computer typically selects questions of greater or equal difficulty. Incorrect answers, however, typically bring questions of lesser or equal difficulty. The computer is programmed to fulfill the test design as it continuously adjusts to find questions of appropriate difficulty for test-takers at all performance levels. In CATs, the test-taker sees only one question at a time, and the computer scores each question before selecting the next one. As a result, test-takers cannot skip questions, and once they have entered and confirmed their answers, they cannot return to questions or to any earlier part of the test.",
    source: "H. Douglas Brown (IFMG 2018)",
    examYear: 2018,
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
  }
`;

console.log(tsCode);
`;
fs.writeFileSync('temp_insert_2018.js', tsCode);
