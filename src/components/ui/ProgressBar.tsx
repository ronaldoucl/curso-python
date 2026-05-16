interface ProgressBarProps {
  completed: number
  total: number
  showLabel?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export default function ProgressBar({
  completed,
  total,
  showLabel = true,
  size = 'md',
}: ProgressBarProps) {
  const percentage = total > 0 ? Math.round((completed / total) * 100) : 0
  const heights = { sm: 'h-1', md: 'h-2', lg: 'h-3' }

  return (
    <div className="w-full">
      {showLabel && (
        <div className="flex justify-between text-xs text-gray-400 mb-2 font-mono">
          <span>{completed} de {total} lecciones</span>
          <span className="text-success font-semibold">{percentage}%</span>
        </div>
      )}
      <div className={`w-full bg-gray-800 rounded-full overflow-hidden ${heights[size]} border border-gray-700`}>
        <div
          className="bg-linear-to-r from-primary to-success rounded-full transition-all duration-700 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  )
}
