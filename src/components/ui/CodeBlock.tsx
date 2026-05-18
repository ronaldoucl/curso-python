'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
  showCopy?: boolean
}

export default function CodeBlock({
  code,
  language = 'python',
  filename,
  showCopy = true,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const displayFilename =
    filename ??
    (language === 'python' ? 'main.py' : language === 'javascript' ? 'script.js' : `code.${language}`)

  return (
    <div className="rounded-xl overflow-hidden border border-gray-700 bg-code-bg my-4 shadow-lg shadow-black/30">
      {/* Editor header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-3">
          {/* Semáforo */}
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-danger/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-warning/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-success/70" />
          </div>
          {/* Filename */}
          <span className="text-gray-400 text-xs font-mono">{displayFilename}</span>
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-xs font-mono text-gray-500 hover:text-gray-200 transition-colors px-2 py-1 rounded hover:bg-gray-700"
          >
            {copied ? '✓ copiado' : 'copiar'}
          </button>
        )}
      </div>

      {/* Code body */}
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code className="font-mono text-gray-200">{formatCode(code, language)}</code>
      </pre>
    </div>
  )
}

function highlightPython(segment: string): string {
  return segment
    // f-strings (antes que strings comunes)
    .replace(/f(["'])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="text-emerald-400">$&</span>')
    // Strings normales
    .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="text-green-400">$&</span>')
    // Palabras clave Python
    .replace(/\b(def|class|return|if|elif|else|for|while|in|not|and|or|import|from|True|False|None|break|continue|pass|lambda|try|except|finally|with|as|raise|yield|async|await|global|nonlocal|del|assert)\b/g,
      '<span class="text-purple-400">$1</span>')
    // Builtins
    .replace(/\b(print|input|len|range|type|int|float|str|bool|list|dict|set|tuple|sum|min|max|sorted|enumerate|zip|map|filter|open|round|abs|all|any|vars|dir|help|id|hash|isinstance|issubclass|getattr|setattr|hasattr)\b/g,
      '<span class="text-blue-400">$1</span>')
    // Números
    .replace(/\b(\d+\.?\d*)\b/g,
      '<span class="text-orange-300">$1</span>')
    // Self
    .replace(/\bself\b/g,
      '<span class="text-red-400">self</span>')
}

function highlightJS(segment: string): string {
  return segment
    // Template literals (antes que strings comunes)
    .replace(/`(?:[^`\\]|\\.)*`/g,
      '<span class="text-emerald-400">$&</span>')
    // Strings
    .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,
      '<span class="text-green-400">$&</span>')
    // Palabras clave JS
    .replace(/\b(const|let|var|function|return|if|else|for|while|do|switch|case|break|continue|class|extends|new|this|typeof|instanceof|in|of|import|export|default|from|try|catch|finally|throw|async|await|yield|delete|void|null|undefined|true|false|static|get|set|super)\b/g,
      '<span class="text-purple-400">$1</span>')
    // Métodos y funciones globales comunes
    .replace(/\b(console|Math|JSON|Array|Object|String|Number|Boolean|Date|Promise|setTimeout|setInterval|clearTimeout|clearInterval|fetch|localStorage|sessionStorage|document|window|navigator)\b/g,
      '<span class="text-blue-400">$1</span>')
    // Números
    .replace(/\b(\d+\.?\d*)\b/g,
      '<span class="text-orange-300">$1</span>')
    // Arrow =>
    .replace(/=&gt;|=>/g, '<span class="text-purple-400">$&</span>')
}

function findCommentStart(line: string, isJS: boolean): number {
  let inStr = false
  let strChar = ''
  for (let i = 0; i < line.length; i++) {
    const ch = line[i]
    if (!inStr && (ch === '"' || ch === "'")) {
      inStr = true
      strChar = ch
    } else if (inStr && ch === strChar && line[i - 1] !== '\\') {
      inStr = false
    } else if (!inStr) {
      if (!isJS && ch === '#') return i
      if (isJS && ch === '/' && line[i + 1] === '/') return i
    }
  }
  return -1
}

function formatCode(code: string, language: string) {
  const isJS = language === 'javascript'
  const highlight = isJS ? highlightJS : highlightPython

  return code.split('\n').map((line, i) => {
    const commentIdx = findCommentStart(line, isJS)
    const codePart = commentIdx >= 0 ? line.slice(0, commentIdx) : line
    const commentPart = commentIdx >= 0 ? line.slice(commentIdx) : ''

    const formatted =
      highlight(codePart) +
      (commentPart ? `<span class="text-gray-500 italic">${commentPart}</span>` : '')

    return (
      <span key={i}>
        <span className="select-none text-gray-600 text-xs w-6 inline-block text-right mr-4 font-mono">
          {i + 1}
        </span>
        <span dangerouslySetInnerHTML={{ __html: formatted }} />
        {'\n'}
      </span>
    )
  })
}
