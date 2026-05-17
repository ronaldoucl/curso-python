export interface QuizQuestion {
  question: string
  options: string[]
  // Formato nuevo (módulos 6+): correctAnswer es el texto exacto de la opción correcta
  correctAnswer?: string
  correctFeedback?: string
  incorrectFeedback?: string
  // Formato legado (módulos 1-5): compatibilidad hacia atrás
  correctIndex?: number
  feedbackCorrect?: string
  feedbackIncorrect?: string
}

export interface Lesson {
  slug: string
  title: string
  module: string
  moduleNumber: number
  order: number
  description: string
  explanation: string
  codeExample: string
  keyPoints: string[]
  exercise: {
    description: string
    hint: string
  }
  quiz: QuizQuestion[]
}

export interface Module {
  number: number
  title: string
  lessons: Lesson[]
  level?: 'básico' | 'intermedio' | 'practico' | 'nivel2'
}

export interface Profile {
  id: string
  full_name: string | null
  avatar_url: string | null
  created_at: string
}

export interface LessonProgress {
  id: number
  user_id: string
  course_slug: string
  lesson_slug: string
  completed: boolean
  completed_at: string | null
  created_at: string
}

export interface QuizAttempt {
  id: number
  user_id: string
  course_slug: string
  lesson_slug: string
  score: number
  total_questions: number
  created_at: string
}

export interface UserProgress {
  completedLessons: string[]
  quizAttempts: QuizAttempt[]
}

export interface Course {
  slug: string
  title: string
  shortTitle: string
  description: string
  level: string
  language: string
  status: 'available' | 'coming-soon'
  icon: string
  totalLessons: number
  modules: Module[]
  roadmap?: string[]
}

export interface CourseMeta {
  slug: string
  title: string
  shortTitle: string
  description: string
  level: string
  language: string
  status: 'available' | 'coming-soon'
  icon: string
  totalLessons: number
  totalModules: number
}
