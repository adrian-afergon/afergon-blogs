import * as React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { darcula } from 'react-syntax-highlighter/dist/cjs/styles/prism'

interface CodeBlockProps {
  language: string,
  value: string,
}

export const CodeBlock: React.FC<CodeBlockProps> = ({ language, value }) => (
  <SyntaxHighlighter language={language} style={darcula}>
    {value}
  </SyntaxHighlighter>
)
