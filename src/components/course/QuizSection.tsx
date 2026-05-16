'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/types'

interface QuizSectionProps {
  questions: QuizQuestion[]
  lessonSlug: string
  userId: string | null
  onComplete?: (score: number, total: number) => void
}

function getCorrectIndex(q: QuizQuestion): number {
  if (q.correctIndex !== undefined) return q.correctIndex
  if (q.correctAnswer) {
    const idx = q.options.indexOf(q.correctAnswer)
    return idx >= 0 ? idx : 0
  }
  return 0
}

function getCorrectFeedback(q: QuizQuestion): string {
  return q.correctFeedback ?? q.feedbackCorrect ?? '¡Correcto!'
}

function getIncorrectFeedback(q: QuizQuestion): string {
  return q.incorrectFeedback ?? q.feedbackIncorrect ?? 'Respuesta incorrecta. Repasa la lección.'
}

type ScoreLevel = 'excellent' | 'good' | 'retry'

function scoreLevel(score: number, total: number): ScoreLevel {
  const pct = total > 0 ? (score / total) * 100 : 0
  if (pct >= 80) return 'excellent'
  if (pct >= 50) return 'good'
  return 'retry'
}

const SCORE_CONFIG = {
  excellent: {
    emoji: '🎉',
    title: '¡Excelente dominio!',
    message: 'Tienes un sólido control de este tema. ¡Continúa con la siguiente lección!',
    bar: 'bg-success',
    banner: 'bg-success/10 border-success/30 text-success',
  },
  good: {
    emoji: '📖',
    title: '¡Bien, puedes mejorar!',
    message: 'Repasa los puntos clave antes de continuar. Estás en buen camino.',
    bar: 'bg-warning',
    banner: 'bg-warning/10 border-warning/30 text-warning',
  },
  retry: {
    emoji: '💪',
    title: '¡No te desanimes!',
    message: 'Te recomendamos releer la lección completa. La práctica hace al maestro.',
    bar: 'bg-danger',
    banner: 'bg-danger/10 border-danger/30 text-danger',
  },
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
    const score = answers.filter((a, i) => a === getCorrectIndex(questions[i])).length
    onComplete?.(score, questions.length)
  }

  function handleReset() {
    setAnswers(Array(questions.length).fill(null))
    setSubmitted(false)
  }

  const score = submitted
    ? answers.filter((a, i) => a === getCorrectIndex(questions[i])).length
    : 0
  const allAnswered = answers.every((a) => a !== null)
  const level = submitted ? scoreLevel(score, questions.length) : null
  const config = level ? SCORE_CONFIG[level] : null
  const pct = questions.length > 0 ? Math.round((score / questions.length) * 100) : 0

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between border-b border-gray-700 pb-4">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center">
            <span className="text-primary text-xs">🧠</span>
          </div>
          <h3 className="text-gray-100 font-bold text-base">Quiz de la lección</h3>
        </div>
        <span className="font-mono text-xs text-gray-500">
          {questions.length} preg.
        </span>
      </div>

      {/* Resultado */}
      {submitted && config && (
        <div className={`rounded-xl border p-5 ${config.banner}`}>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{config.emoji}</span>
              <div>
                <p className="font-bold text-sm">{config.title}</p>
                <p className="text-xs opacity-80 mt-0.5">{config.message}</p>
              </div>
            </div>
            <div className="text-right shrink-0 ml-4">
              <p className="font-mono font-bold text-xl">{score}/{questions.length}</p>
              <p className="font-mono text-xs opacity-70">{pct}%</p>
            </div>
          </div>
          {/* Barra de score */}
          <div className="h-1.5 bg-black/20 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full transition-all duration-700 ${config.bar}`}
              style={{ width: `${pct}%` }}
            />
          </div>
        </div>
      )}

      {/* Preguntas */}
      {questions.map((q, qIdx) => {
        const selected = answers[qIdx]
        const correctIdx = getCorrectIndex(q)
        const isCorrect = submitted && selected === correctIdx
        const isWrong = submitted && selected !== null && selected !== correctIdx

        return (
          <div key={qIdx} className="bg-gray-900 border border-gray-700 rounded-xl p-5 space-y-3">
            {/* Pregunta */}
            <div className="flex items-start gap-3">
              <span className={`shrink-0 font-mono font-bold text-xs w-6 h-6 rounded-md flex items-center justify-center mt-0.5 border ${
                submitted
                  ? isCorrect
                    ? 'bg-success/15 text-success border-success/30'
                    : 'bg-danger/15 text-danger border-danger/30'
                  : 'bg-gray-800 text-gray-400 border-gray-600'
              }`}>
                {submitted ? (isCorrect ? '✓' : '✗') : qIdx + 1}
              </span>
              <p className="text-gray-100 font-medium text-sm leading-snug">{q.question}</p>
            </div>

            {/* Opciones */}
            <div className="space-y-2 ml-9">
              {q.options.map((opt, oIdx) => {
                const isSelected = selected === oIdx
                const isCorrectOpt = submitted && oIdx === correctIdx

                let cls = 'border border-gray-700 bg-gray-800 text-gray-300 hover:border-gray-500 hover:bg-gray-750 hover:text-gray-100'
                if (isSelected && !submitted)
                  cls = 'border border-primary bg-primary/10 text-gray-100'
                if (isCorrectOpt && submitted)
                  cls = 'border border-success bg-success/10 text-success'
                if (isSelected && isWrong)
                  cls = 'border border-danger bg-danger/10 text-danger line-through opacity-60'

                return (
                  <button
                    key={oIdx}
                    onClick={() => selectAnswer(qIdx, oIdx)}
                    disabled={submitted}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${cls} disabled:cursor-default`}
                  >
                    <span className="font-mono mr-2 text-xs opacity-60">
                      {String.fromCharCode(65 + oIdx)}.
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>

            {/* Feedback individual */}
            {submitted && selected !== null && (
              <div className={`ml-9 text-xs rounded-lg px-4 py-3 leading-relaxed border ${
                isCorrect
                  ? 'bg-success/8 border-success/20 text-success'
                  : 'bg-danger/8 border-danger/20 text-danger'
              }`}>
                <span className="font-semibold mr-1">
                  {isCorrect ? '✓ Correcto. ' : '✗ Incorrecto. '}
                </span>
                {isCorrect ? getCorrectFeedback(q) : getIncorrectFeedback(q)}
              </div>
            )}
          </div>
        )
      })}

      {/* Botones */}
      <div className="flex gap-3 pt-1">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="bg-primary hover:bg-primary-dark text-white font-semibold px-6 py-2.5 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed text-sm"
          >
            {allAnswered
              ? 'Verificar respuestas'
              : `Faltan ${answers.filter(a => a === null).length} respuestas`
            }
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="bg-gray-800 hover:bg-gray-750 border border-gray-700 text-gray-300 hover:text-gray-100 px-5 py-2.5 rounded-lg transition-all text-sm"
          >
            Intentar de nuevo
          </button>
        )}
      </div>
    </div>
  )
}
