'use client'

import { useState } from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  showCopy?: boolean
}

export default function CodeBlock({ code, language = 'python', showCopy = true }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative group rounded-xl overflow-hidden border border-gray-700 bg-gray-950 my-4">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-gray-800 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-yellow-500 opacity-70" />
            <div className="w-3 h-3 rounded-full bg-green-500 opacity-70" />
          </div>
          <span className="text-gray-400 text-xs font-mono">{language}</span>
        </div>
        {showCopy && (
          <button
            onClick={handleCopy}
            className="text-xs text-gray-400 hover:text-white transition-colors px-2 py-1 rounded hover:bg-gray-700"
          >
            {copied ? '✓ Copiado' : 'Copiar'}
          </button>
        )}
      </div>

      {/* Code */}
      <pre className="overflow-x-auto p-4 text-sm leading-relaxed">
        <code className="text-gray-100 font-mono">{formatCode(code)}</code>
      </pre>
    </div>
  )
}

function formatCode(code: string) {
  return code.split('\n').map((line, i) => {
    const formatted = line
      .replace(/(#.*)$/g, '<span class="text-gray-500">$1</span>')
      .replace(/\b(def|class|return|if|elif|else|for|while|in|not|and|or|import|from|True|False|None|break|continue|pass|lambda|try|except|with|as|raise|yield)\b/g,
        '<span class="text-purple-400">$1</span>')
      .replace(/\b(print|input|len|range|type|int|float|str|bool|list|dict|set|tuple|sum|min|max|sorted|enumerate|zip|map|filter)\b/g,
        '<span class="text-blue-400">$1</span>')
      .replace(/(["'])(?:(?=(\\?))\2.)*?\1/g,
        '<span class="text-green-400">$&</span>')
      .replace(/\b(\d+\.?\d*)\b/g,
        '<span class="text-orange-400">$1</span>')

    return (
      <span key={i}>
        <span dangerouslySetInnerHTML={{ __html: formatted }} />
        {'\n'}
      </span>
    )
  })
}
