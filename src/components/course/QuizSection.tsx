'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/types'

interface QuizSectionProps {
  questions: QuizQuestion[]
  lessonSlug: string
  userId: string | null
  onComplete?: (score: number, total: number) => void
}

export default function QuizSection({ questions, onComplete }: QuizSectionProps) {
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null))
  const [submitted, setSubmitted] = useState(false)

  function selectAnswer(qIdx: number, optIdx: number) {
    if (submitted) return
    const next = [...answers]
    next[qIdx] = optIdx
    setAnswers(next)
  }

  function handleSubmit() {
    if (answers.some((a) => a === null)) return
    setSubmitted(true)
    const score = answers.filter((a, i) => a === questions[i].correctIndex).length
    onComplete?.(score, questions.length)
  }

  function handleReset() {
    setAnswers(Array(questions.length).fill(null))
    setSubmitted(false)
  }

  const score = submitted
    ? answers.filter((a, i) => a === questions[i].correctIndex).length
    : 0

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2">
        <span className="text-xl">🧠</span>
        <h3 className="text-lg font-bold text-white">Quiz de la lección</h3>
      </div>

      {submitted && (
        <div className={`rounded-xl p-4 text-center ${score === questions.length
          ? 'bg-green-900/40 border border-green-700'
          : score >= questions.length / 2
          ? 'bg-yellow-900/40 border border-yellow-700'
          : 'bg-red-900/40 border border-red-700'
        }`}>
          <p className="text-2xl font-bold text-white mb-1">{score} / {questions.length}</p>
          <p className="text-gray-300 text-sm">
            {score === questions.length
              ? '¡Perfecto! Dominaste esta lección 🎉'
              : score >= questions.length / 2
              ? '¡Bien hecho! Puedes repasar los errores y volver a intentarlo.'
              : 'Sigue estudiando, ¡puedes mejorar! Repasa la lección.'}
          </p>
        </div>
      )}

      {questions.map((q, qIdx) => {
        const selected = answers[qIdx]
        const isCorrect = submitted && selected === q.correctIndex
        const isWrong = submitted && selected !== null && selected !== q.correctIndex

        return (
          <div key={qIdx} className="bg-gray-800 rounded-xl p-5 space-y-3">
            <p className="text-white font-medium">
              <span className="text-yellow-400 mr-2">{qIdx + 1}.</span>
              {q.question}
            </p>

            <div className="space-y-2">
              {q.options.map((opt, oIdx) => {
                const isSelected = selected === oIdx
                const isCorrectOpt = submitted && oIdx === q.correctIndex

                let cls = 'border border-gray-600 bg-gray-700 text-gray-200 hover:border-gray-500'
                if (isSelected && !submitted) cls = 'border border-yellow-400 bg-yellow-400/10 text-white'
                if (isCorrectOpt && submitted) cls = 'border border-green-500 bg-green-500/20 text-green-300'
                if (isSelected && isWrong) cls = 'border border-red-500 bg-red-500/20 text-red-300'

                return (
                  <button
                    key={oIdx}
                    onClick={() => selectAnswer(qIdx, oIdx)}
                    disabled={submitted}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm transition-all ${cls} disabled:cursor-default`}
                  >
                    <span className="font-mono mr-2 text-gray-400">
                      {String.fromCharCode(65 + oIdx)}.
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>

            {submitted && selected !== null && (
              <div className={`text-sm rounded-lg px-3 py-2 ${isCorrect ? 'bg-green-900/30 text-green-300' : 'bg-red-900/30 text-red-300'}`}>
                {isCorrect ? '✓ ' + q.feedbackCorrect : '✗ ' + q.feedbackIncorrect}
              </div>
            )}
          </div>
        )
      })}

      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={answers.some((a) => a === null)}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Enviar respuestas
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg transition-colors"
          >
            Intentar de nuevo
          </button>
        )}
      </div>
    </div>
  )
}
