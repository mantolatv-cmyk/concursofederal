import { useState, useEffect } from 'react'
import { Card, Button, Badge, Progress, IconBadge } from '@/components/ui'
import { readingSectionsData } from '@/data/ifspExamBank'
import type { ReadingSection } from '@/data/ifspExamBank'
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  XCircle,
  AlertCircle,
  FileSignature,
  Target,
  Brain,
  BookText,
  PenLine,
  MessageCircleQuestion
} from 'lucide-react'

const categoryIcons: Record<string, React.ReactNode> = {
  ESP: <Target size={16} strokeWidth={2} />,
  Theories: <Brain size={16} strokeWidth={2} />,
  Methodologies: <BookText size={16} strokeWidth={2} />,
  Grammar: <PenLine size={16} strokeWidth={2} />
}

export function MockTestEmulator() {
  const [hasStarted, setHasStarted] = useState(false)
  const [currentSectionIdx, setCurrentSectionIdx] = useState(0)
  const [answers, setAnswers] = useState<Record<string, number>>({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [sections, setSections] = useState<ReadingSection[]>([])
  const [revealedVocab, setRevealedVocab] = useState<Set<string>>(new Set())

  // Flatten questions just to count the total for the progress/results
  const totalQuestions = sections.reduce((acc, sec) => acc + sec.questions.length, 0)

  useEffect(() => {
    // Shuffle sections and shuffle questions within sections
    const shuffledSections = [...readingSectionsData].sort(() => Math.random() - 0.5)
    const randomized = shuffledSections.map(sec => ({
      ...sec,
      questions: [...sec.questions].sort(() => Math.random() - 0.5)
    }))
    setSections(randomized)
  }, [])

  const toggleVocab = (word: string) => {
    setRevealedVocab(prev => {
      const newSet = new Set(prev)
      if (newSet.has(word)) newSet.delete(word)
      else newSet.add(word)
      return newSet
    })
  }

  const handleStart = () => setHasStarted(true)

  const handleSelectOption = (questionId: string, optIdx: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: optIdx }))
  }

  const handleSubmit = () => setIsSubmitted(true)

  const handleRetake = () => {
    setHasStarted(false)
    setIsSubmitted(false)
    setCurrentSectionIdx(0)
    setAnswers({})
    
    const shuffledSections = [...readingSectionsData].sort(() => Math.random() - 0.5)
    const randomized = shuffledSections.map(sec => ({
      ...sec,
      questions: [...sec.questions].sort(() => Math.random() - 0.5)
    }))
    setSections(randomized)
  }

  if (!hasStarted) {
    return (
      <div className="flex items-center justify-center min-h-[60vh] animate-fade-in">
        <Card className="max-w-xl text-center p-8 lg:p-12" glow="primary">
          <div className="flex justify-center mb-6">
            <IconBadge icon={<FileSignature size={28} />} color="primary" size="md" />
          </div>
          <h2 className="text-2xl font-bold mb-3">IFSP Reading Comprehension Exam</h2>
          <p className="text-text-muted mb-8">
            This module simulates the reading comprehension format of the EBTT exam. You will read {sections.length} academic texts and answer questions related to them.
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8 text-left">
            <div className="bg-surface-2 p-4 rounded-lg border border-border-default">
              <div className="text-text-muted text-xs mb-1 uppercase tracking-wider font-semibold">Reading Passages</div>
              <div className="text-lg font-bold text-text-primary">{sections.length} Texts</div>
            </div>
            <div className="bg-surface-2 p-4 rounded-lg border border-border-default">
              <div className="text-text-muted text-xs mb-1 uppercase tracking-wider font-semibold">Total Questions</div>
              <div className="text-lg font-bold text-text-primary">{totalQuestions} Items</div>
            </div>
          </div>
          <Button size="lg" className="w-full text-base" onClick={handleStart}>
            Start Mock Test
          </Button>
        </Card>
      </div>
    )
  }

  if (isSubmitted) {
    let correct = 0
    const categoryScores: Record<string, { correct: number; total: number }> = {
      ESP: { correct: 0, total: 0 },
      Theories: { correct: 0, total: 0 },
      Methodologies: { correct: 0, total: 0 },
      Grammar: { correct: 0, total: 0 }
    }

    sections.forEach(sec => {
      sec.questions.forEach(q => {
        const isCorrect = answers[q.id] === q.correctAnswer
        if (isCorrect) correct++
        if (categoryScores[q.category]) {
          categoryScores[q.category].total++
          if (isCorrect) categoryScores[q.category].correct++
        }
      })
    })

    const scorePct = totalQuestions > 0 ? Math.round((correct / totalQuestions) * 100) : 0

    return (
      <div className="space-y-8 animate-fade-in pb-20">
        <header className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-[26px] font-extrabold text-text-primary tracking-tight leading-tight">
              Test Results
            </h2>
            <p className="text-[13px] text-text-muted mt-1 leading-relaxed">
              Detailed performance breakdown and feedback based on your reading comprehension.
            </p>
          </div>
          <div className="flex gap-3">
            <Button variant="secondary" onClick={handleRetake}>Retake Test</Button>
          </div>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="flex flex-col items-center justify-center py-10" glow={scorePct >= 70 ? 'success' : 'primary'}>
            <div className="text-5xl font-black mb-2 text-text-primary">{scorePct}%</div>
            <div className="text-text-muted font-medium mb-6">Overall Score</div>
            <Badge variant={scorePct >= 70 ? 'success' : 'warning'} size="md">
              {correct} of {totalQuestions} Correct
            </Badge>
          </Card>
          
          <div className="md:col-span-2 grid grid-cols-2 gap-4">
            {Object.entries(categoryScores).map(([cat, stats]) => {
              const pct = stats.total > 0 ? Math.round((stats.correct / stats.total) * 100) : 0
              return (
                <Card key={cat} className="p-5 flex flex-col justify-center">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-text-muted">{categoryIcons[cat]}</span>
                    <span className="font-semibold text-sm">{cat}</span>
                  </div>
                  <div className="flex justify-between items-end mb-2">
                    <span className="text-2xl font-bold">{pct}%</span>
                    <span className="text-xs text-text-muted">{stats.correct}/{stats.total}</span>
                  </div>
                  <Progress value={pct} color={pct >= 70 ? 'success' : pct >= 50 ? 'warning' : 'danger'} />
                </Card>
              )
            })}
          </div>
        </div>

        <div className="space-y-12 mt-8">
          <h3 className="text-lg font-bold border-b border-border-default pb-3">Detailed Review by Passage</h3>
          
          {sections.map((sec, secIdx) => (
            <div key={sec.id} className="space-y-6">
              <Card className="bg-surface-2 border-border-strong p-6">
                <div className="flex items-center gap-2 mb-4 text-primary-400">
                  <BookText size={20} />
                  <h4 className="text-lg font-bold">Passage {secIdx + 1}: {sec.passageTitle}</h4>
                </div>
                <div 
                  className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed max-w-none text-sm"
                  dangerouslySetInnerHTML={{ __html: sec.passageText }}
                />
                {(sec.source || sec.examYear) && (
                  <div className="mt-6 text-sm text-text-muted italic flex justify-between items-center border-t border-border-strong pt-3">
                    <div>
                      {sec.examYear && <span className="font-bold text-primary-400">Prova: {sec.examYear}</span>}
                    </div>
                    <div>
                      {sec.source && <span>Source: {sec.source}</span>}
                    </div>
                  </div>
                )}

                {sec.vocabulary && sec.vocabulary.length > 0 && (
                  <div className="mt-6 border-t border-border-strong pt-5">
                    <h5 className="text-[12px] font-bold text-text-muted mb-3 uppercase tracking-wider">
                      Passage Glossary
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {sec.vocabulary.map((v, i) => (
                        <div key={i} className="px-3 py-1.5 rounded-md bg-surface-1 border border-border-subtle text-xs flex items-center gap-2">
                          <span className="text-primary-400 font-bold">{v.word}</span>
                          <span className="text-text-secondary">→ {v.translation}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>

              <div className="space-y-4 pl-4 md:pl-8 border-l-2 border-border-default">
                {sec.questions.map((q, qIdx) => {
                  const userAnswer = answers[q.id]
                  const isCorrect = userAnswer === q.correctAnswer
                  const isOmitted = userAnswer === undefined

                  return (
                    <Card key={q.id} className="border-border-subtle" hover={false} glass={false}>
                      <div className="flex items-start gap-4 mb-4">
                        <div className="mt-1">
                          {isCorrect ? (
                            <CheckCircle2 className="text-success-500" size={24} />
                          ) : isOmitted ? (
                            <AlertCircle className="text-warning-500" size={24} />
                          ) : (
                            <XCircle className="text-danger-500" size={24} />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-xs font-bold uppercase tracking-wider text-text-muted">Question {qIdx + 1}</span>
                            <Badge variant="outline" size="sm">{q.category}</Badge>
                          </div>
                          <p className="text-[15px] font-medium leading-relaxed mb-4">{q.text}</p>
                          
                          <div className="space-y-2 mb-4">
                            {q.options.map((opt, oIdx) => {
                              const isSelected = userAnswer === oIdx
                              const isActualCorrect = q.correctAnswer === oIdx
                              let optClass = "p-3 rounded-lg border text-sm transition-colors"
                              
                              if (isActualCorrect) {
                                optClass += " bg-success-muted border-success-500 text-success-50"
                              } else if (isSelected && !isCorrect) {
                                optClass += " bg-danger-muted border-danger-500 text-danger-50"
                              } else {
                                optClass += " bg-surface-1 border-border-default text-text-muted"
                              }

                              return (
                                <div key={oIdx} className={optClass}>
                                  {opt}
                                </div>
                              )
                            })}
                          </div>

                          <div className="bg-primary-muted/30 border border-primary-500/20 rounded-lg p-4 text-sm">
                            <span className="font-bold text-primary-400 mr-2">Explanation:</span>
                            <span className="text-text-secondary">{q.explanation}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  const currentSection = sections[currentSectionIdx]
  const answeredCount = Object.keys(answers).length

  return (
    <div className="max-w-4xl mx-auto pb-24 animate-fade-in">
      {/* Exam Header Pinned */}
      <div className="sticky top-0 z-10 bg-surface-0/80 backdrop-blur-md pb-6 pt-4 mb-2">
        <div className="flex items-center justify-between px-6 py-4 bg-surface-2 border border-border-default shadow-sm rounded-xl">
          <div className="flex items-center gap-4">
            <div className="font-bold text-lg">Text {currentSectionIdx + 1} of {sections.length}</div>
            <Badge variant="outline" size="sm" className="hidden sm:flex">
              {categoryIcons[currentSection.category]}
              <span className="ml-1">{currentSection.category}</span>
            </Badge>
          </div>
        </div>
      </div>

      {/* Reading Passage */}
      <Card className="mb-8 p-6 md:p-8 bg-surface-1 border-border-default">
        <h3 className="text-2xl font-bold mb-6 text-text-primary border-b border-border-default pb-4">
          {currentSection.passageTitle}
        </h3>
        <div 
          className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed max-w-none text-base"
          dangerouslySetInnerHTML={{ __html: currentSection.passageText }} 
        />
        {(currentSection.source || currentSection.examYear) && (
          <div className="mt-8 text-sm text-text-muted italic flex justify-between items-center border-t border-border-subtle pt-4">
            <div>
              {currentSection.examYear && <span className="font-bold text-primary-400">Prova: {currentSection.examYear}</span>}
            </div>
            <div>
              {currentSection.source && <span>Source: {currentSection.source}</span>}
            </div>
          </div>
        )}

        {currentSection.vocabulary && currentSection.vocabulary.length > 0 && (
          <div className="mt-8 border-t border-border-subtle pt-6">
            <h4 className="text-[13px] font-bold text-primary-400 flex items-center gap-2 mb-4 uppercase tracking-wider">
              <BookText size={15} />
              Key Vocabulary (Click to reveal)
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {currentSection.vocabulary.map((v, i) => {
                const isRevealed = revealedVocab.has(v.word)
                return (
                  <button
                    key={i}
                    onClick={() => toggleVocab(v.word)}
                    className={`px-3.5 py-2 rounded-lg border text-sm font-medium transition-all duration-fast flex items-center gap-2 outline-none focus-ring ${
                      isRevealed 
                        ? 'bg-primary-muted border-primary-500/30' 
                        : 'bg-surface-2 border-border-strong hover:bg-surface-3 hover:border-border-focus cursor-pointer'
                    }`}
                  >
                    <span className={isRevealed ? "text-primary-400 font-bold" : "text-text-primary"}>
                      {v.word}
                    </span>
                    {isRevealed && (
                      <span className="text-text-secondary animate-fade-in font-normal">
                        → {v.translation}
                      </span>
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        )}
      </Card>

      {/* Open Questions for Practice */}
      {currentSection.openQuestions && currentSection.openQuestions.length > 0 && (
        <div className="mb-8 space-y-6">
          <h4 className="text-lg font-bold text-primary-400 flex items-center gap-2">
            <MessageCircleQuestion size={20} />
            Open Questions for Practice
          </h4>
          <Card className="p-6 bg-surface-1 border-border-default">
            <div className="space-y-6">
              {currentSection.openQuestions.map((oq, idx) => (
                <div key={idx} className="flex gap-3">
                  <div className="mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary-muted text-primary-500 flex items-center justify-center text-xs font-bold">
                    {idx + 1}
                  </div>
                  <p className="text-[15px] font-medium text-text-primary leading-relaxed">{oq}</p>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* Questions List */}
      <div className="space-y-6">
        <h4 className="text-lg font-bold text-primary-400 flex items-center gap-2">
          <PenLine size={20} />
          Multiple Choice Questions
        </h4>
        
        {currentSection.questions.map((q, qIdx) => (
          <Card key={q.id} className="p-6 bg-surface-1 border-border-default">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="default" size="sm">Q{qIdx + 1}</Badge>
            </div>
            <p className="text-lg font-medium leading-relaxed mb-6 text-text-primary">
              {q.text}
            </p>
            
            <div className="space-y-3">
              {q.options.map((opt, oIdx) => {
                const hasAnswered = answers[q.id] !== undefined
                const selected = answers[q.id] === oIdx
                const isActualCorrect = q.correctAnswer === oIdx
                
                let btnClass = "w-full text-left p-4 rounded-xl border transition-all duration-fast flex items-start gap-4 outline-none focus-ring "
                let iconClass = "mt-0.5 w-5 h-5 rounded-full border-2 flex-shrink-0 flex items-center justify-center transition-colors "
                let textClass = "text-[15px] leading-relaxed "

                if (hasAnswered) {
                  btnClass += "cursor-default "
                  if (isActualCorrect) {
                    btnClass += "bg-success-muted/20 border-success-500/50 shadow-[0_0_15px_rgba(0,255,136,0.1)]"
                    iconClass += "border-success-500 text-success-500 bg-success-500/20"
                    textClass += "text-success-50 font-medium"
                  } else if (selected) {
                    btnClass += "bg-danger-muted/20 border-danger-500/50"
                    iconClass += "border-danger-500 text-danger-500 bg-danger-500/20"
                    textClass += "text-danger-50 font-medium"
                  } else {
                    btnClass += "bg-surface-0 border-border-default opacity-50"
                    iconClass += "border-border-strong text-transparent"
                    textClass += "text-text-muted"
                  }
                } else {
                  btnClass += "cursor-pointer bg-surface-0 border-border-strong hover:border-border-focus hover:bg-surface-2"
                  iconClass += "border-text-muted"
                  textClass += "text-text-secondary"
                }

                return (
                  <button
                    key={oIdx}
                    onClick={() => { if (!hasAnswered) handleSelectOption(q.id, oIdx) }}
                    className={btnClass}
                    disabled={hasAnswered}
                  >
                    <div className={iconClass}>
                      {hasAnswered ? (
                        isActualCorrect ? <CheckCircle2 size={14} strokeWidth={3} /> : (selected ? <XCircle size={14} strokeWidth={3} /> : null)
                      ) : (
                        null
                      )}
                    </div>
                    <span className={textClass}>
                      {opt}
                    </span>
                  </button>
                )
              })}
            </div>

            {answers[q.id] !== undefined && (
              <div className="mt-6 bg-primary-muted/20 border border-primary-500/30 rounded-xl p-5 text-sm animate-fade-in shadow-glow-primary">
                <div className="flex items-center gap-2 mb-2">
                  <Brain size={18} className="text-primary-400" />
                  <span className="font-bold text-primary-400 text-base">Explanation</span>
                </div>
                <span className="text-text-secondary leading-relaxed text-[15px]">{q.explanation}</span>
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-surface-0/90 backdrop-blur-md border-t border-border-default md:left-[264px]">
        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="hidden sm:flex items-center gap-4">
            <div className="text-sm font-medium text-text-muted">
              Answered: <span className="text-text-primary">{answeredCount}</span> / {totalQuestions}
            </div>
            <div className="w-32 h-2 bg-surface-2 rounded-full overflow-hidden">
              <div 
                className="h-full bg-primary-500 transition-all duration-500"
                style={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              />
            </div>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <Button
              variant="secondary"
              onClick={() => setCurrentSectionIdx(prev => Math.max(0, prev - 1))}
              disabled={currentSectionIdx === 0}
              className="flex-1 sm:flex-none"
            >
              <ChevronLeft size={18} className="mr-1" /> Prev Text
            </Button>
            
            {currentSectionIdx < sections.length - 1 ? (
              <Button
                variant="primary"
                onClick={() => setCurrentSectionIdx(prev => Math.min(sections.length - 1, prev + 1))}
                className="flex-1 sm:flex-none"
              >
                Next Text <ChevronRight size={18} className="ml-1" />
              </Button>
            ) : (
              <Button
                variant="success"
                onClick={handleSubmit}
                className="flex-1 sm:flex-none"
              >
                Submit Exam <CheckCircle2 size={18} className="ml-1" />
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
