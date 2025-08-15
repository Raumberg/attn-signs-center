"use client";

import ReactMarkdown from 'react-markdown';
import { JetBrains_Mono } from "next/font/google";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
});

interface MarkdownRendererProps {
  content: string;
}

export default function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className={`prose prose-invert prose-lg max-w-none ${jetbrainsMono.className}`}>
      <ReactMarkdown
        components={{
          // Custom heading styles
          h1: ({ children }) => (
            <h1 className="text-4xl font-bold mb-6 text-white border-b border-gray-700 pb-2">
              {children}
            </h1>
          ),
          h2: ({ children }) => (
            <h2 className="text-3xl font-bold mb-4 text-white mt-8">
              {children}
            </h2>
          ),
          h3: ({ children }) => (
            <h3 className="text-2xl font-bold mb-3 text-white mt-6">
              {children}
            </h3>
          ),
          h4: ({ children }) => (
            <h4 className="text-xl font-bold mb-2 text-white mt-4">
              {children}
            </h4>
          ),
          
          // Custom paragraph styles
          p: ({ children }) => (
            <p className="text-gray-300 mb-4 leading-relaxed">
              {children}
            </p>
          ),
          
          // Custom list styles
          ul: ({ children }) => (
            <ul className="list-disc list-inside mb-4 text-gray-300 space-y-1">
              {children}
            </ul>
          ),
          ol: ({ children }) => (
            <ol className="list-decimal list-inside mb-4 text-gray-300 space-y-1">
              {children}
            </ol>
          ),
          li: ({ children }) => (
            <li className="text-gray-300">
              {children}
            </li>
          ),
          
          // Custom code block styles
          code: ({ children, className }) => {
            const isInline = !className;
            if (isInline) {
              return (
                <code className="bg-gray-800 text-green-400 px-1 py-0.5 rounded text-sm">
                  {children}
                </code>
              );
            }
            return (
              <code className={`${className} block bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm`}>
                {children}
              </code>
            );
          },
          pre: ({ children }) => (
            <pre className="bg-gray-900 p-4 rounded-lg overflow-x-auto mb-4 border border-gray-700">
              {children}
            </pre>
          ),
          
          // Custom blockquote styles
          blockquote: ({ children }) => (
            <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-400 mb-4">
              {children}
            </blockquote>
          ),
          
          // Custom link styles
          a: ({ children, href }) => (
            <a 
              href={href} 
              className="text-blue-400 hover:text-blue-300 underline transition-colors duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              {children}
            </a>
          ),
          
          // Custom table styles
          table: ({ children }) => (
            <div className="overflow-x-auto mb-4">
              <table className="min-w-full border-collapse border border-gray-700">
                {children}
              </table>
            </div>
          ),
          th: ({ children }) => (
            <th className="border border-gray-700 px-4 py-2 text-left bg-gray-800 text-white font-bold">
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td className="border border-gray-700 px-4 py-2 text-gray-300">
              {children}
            </td>
          ),
          
          // Custom strong and emphasis styles
          strong: ({ children }) => (
            <strong className="text-white font-bold">
              {children}
            </strong>
          ),
          em: ({ children }) => (
            <em className="text-gray-200 italic">
              {children}
            </em>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
} 