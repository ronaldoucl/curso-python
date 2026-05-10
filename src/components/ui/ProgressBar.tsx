interface ProgressBarProps {
  completed: number
  total: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function ProgressBar({ completed, total, showLabel = true, size = 'md' }: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0

  const heights = { sm: 'h-1.5', md: 'h-2.5', lg: 'h-4' }

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-sm text-gray-400 mb-1.5">
          <span>{completed} de {total} lecciones completadas</span>
          <span className="font-semibold text-yellow-400">{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-700 rounded-full overflow-hidden ${heights[size]}`}>
        <div
          className="bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
