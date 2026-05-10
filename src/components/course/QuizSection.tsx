'use client'

import { useState } from 'react'
import type { QuizQuestion } from '@/types'

interface QuizSectionProps {
  questions: QuizQuestion[]
  lessonSlug: string
  userId: string | null
  onComplete?: (score: number, total: number) => void
}

// Funciones de compatibilidad para soportar ambos formatos de quiz
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

function getRecommendation(score: number, total: number): { emoji: string; title: string; message: string; color: string } {
  const pct = total > 0 ? (score / total) * 100 : 0
  if (pct >= 80) {
    return {
      emoji: '🎉',
      title: '¡Excelente dominio!',
      message: 'Tienes un buen dominio de esta lección. ¡Continúa con la siguiente!',
      color: 'bg-green-900/40 border-green-700 text-green-300',
    }
  }
  if (pct >= 50) {
    return {
      emoji: '📖',
      title: '¡Bien, pero puedes mejorar!',
      message: 'Repasa los puntos clave y asegúrate de entender bien los conceptos antes de continuar.',
      color: 'bg-yellow-900/40 border-yellow-700 text-yellow-300',
    }
  }
  return {
    emoji: '💪',
    title: '¡No te desanimes!',
    message: 'Te recomendamos releer la lección completa antes de continuar. La práctica hace al maestro.',
    color: 'bg-red-900/40 border-red-700 text-red-300',
  }
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

  const recommendation = submitted ? getRecommendation(score, questions.length) : null
  const allAnswered = answers.every((a) => a !== null)

  return (
    <div className="space-y-6">
      {/* Cabecera del quiz */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-xl">🧠</span>
          <h3 className="text-lg font-bold text-white">Quiz de la lección</h3>
        </div>
        <span className="text-xs text-gray-500">{questions.length} preguntas</span>
      </div>

      {/* Resultado final */}
      {submitted && recommendation && (
        <div className={`rounded-xl p-5 border ${recommendation.color}`}>
          <div className="flex items-center gap-3 mb-2">
            <span className="text-3xl">{recommendation.emoji}</span>
            <div>
              <p className="font-bold text-white text-lg">
                {score} / {questions.length} correctas
              </p>
              <p className="font-semibold text-sm">{recommendation.title}</p>
            </div>
          </div>
          <p className="text-sm opacity-90">{recommendation.message}</p>
        </div>
      )}

      {/* Preguntas */}
      {questions.map((q, qIdx) => {
        const selected = answers[qIdx]
        const correctIdx = getCorrectIndex(q)
        const isCorrect = submitted && selected === correctIdx
        const isWrong = submitted && selected !== null && selected !== correctIdx

        return (
          <div key={qIdx} className="bg-gray-800 rounded-xl p-5 space-y-3">
            {/* Pregunta */}
            <div className="flex items-start gap-2">
              <span
                className={`shrink-0 font-bold text-sm w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                  submitted
                    ? isCorrect
                      ? 'bg-green-500 text-white'
                      : 'bg-red-500 text-white'
                    : 'bg-gray-700 text-yellow-400'
                }`}
              >
                {submitted ? (isCorrect ? '✓' : '✗') : qIdx + 1}
              </span>
              <p className="text-white font-medium leading-snug">{q.question}</p>
            </div>

            {/* Opciones */}
            <div className="space-y-2 ml-8">
              {q.options.map((opt, oIdx) => {
                const isSelected = selected === oIdx
                const isCorrectOpt = submitted && oIdx === correctIdx

                let cls =
                  'border border-gray-600 bg-gray-700 text-gray-200 hover:border-gray-500 hover:bg-gray-650'
                if (isSelected && !submitted)
                  cls = 'border border-yellow-400 bg-yellow-400/10 text-white'
                if (isCorrectOpt && submitted)
                  cls = 'border border-green-500 bg-green-500/20 text-green-300'
                if (isSelected && isWrong)
                  cls = 'border border-red-500 bg-red-500/20 text-red-300 line-through opacity-70'

                return (
                  <button
                    key={oIdx}
                    onClick={() => selectAnswer(qIdx, oIdx)}
                    disabled={submitted}
                    className={`w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${cls} disabled:cursor-default`}
                  >
                    <span className="font-mono mr-2 text-gray-400 text-xs">
                      {String.fromCharCode(65 + oIdx)}.
                    </span>
                    {opt}
                  </button>
                )
              })}
            </div>

            {/* Feedback por pregunta */}
            {submitted && selected !== null && (
              <div
                className={`ml-8 text-sm rounded-lg px-4 py-3 leading-relaxed ${
                  isCorrect
                    ? 'bg-green-900/30 border border-green-800 text-green-300'
                    : 'bg-red-900/30 border border-red-800 text-red-300'
                }`}
              >
                <span className="font-semibold mr-1">{isCorrect ? '✓ Correcto.' : '✗ Incorrecto.'}</span>
                {isCorrect ? getCorrectFeedback(q) : getIncorrectFeedback(q)}
              </div>
            )}
          </div>
        )
      })}

      {/* Botones de acción */}
      <div className="flex gap-3">
        {!submitted ? (
          <button
            onClick={handleSubmit}
            disabled={!allAnswered}
            className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 font-semibold px-6 py-2.5 rounded-lg transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            {allAnswered ? 'Enviar respuestas' : `Responde todas las preguntas (${answers.filter(a => a !== null).length}/${questions.length})`}
          </button>
        ) : (
          <button
            onClick={handleReset}
            className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2.5 rounded-lg transition-colors text-sm"
          >
            Intentar de nuevo
          </button>
        )}
      </div>
    </div>
  )
}
