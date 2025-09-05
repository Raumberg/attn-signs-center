"use client";

import React, { useEffect, memo } from "react";
import { motion } from "framer-motion";
import { JetBrains_Mono } from "next/font/google";
import ReactMarkdown from "react-markdown";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "700"] });

interface DocsPageClientProps {
  markdown: string;
  navItems: { id: string; label: string }[];
  currentSection: string;
  onSectionChange: (section: string) => void;
}

const DocsPageClient = memo(function DocsPageClient({ markdown, navItems, currentSection, onSectionChange }: DocsPageClientProps) {
  // Scroll to hash on mount (when user clicks sidebar link)
  useEffect(() => {
    if (window.location.hash) {
      const el = document.querySelector(window.location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  if (!markdown) {
    return (
      <div className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className={`text-gray-300 ${jetbrainsMono.className}`}>Loading documentation...</div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative z-10 pt-32 pb-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <nav className="sticky top-32 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onSectionChange(item.id)}
                className={`block w-full text-left px-3 py-2 rounded transition-colors duration-200 ${jetbrainsMono.className} ${
                  currentSection === item.id 
                    ? 'bg-white text-black' 
                    : 'text-gray-300 hover:text-white hover:bg-gray-800'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 prose prose-invert max-w-none">
          <ReactMarkdown
            components={{
              // Render fenced code blocks with SyntaxHighlighter
              pre({ children }) {
                const child = Array.isArray(children) ? children[0] : children;
                if (!child || typeof child !== "object") return <pre>{children}</pre>;

                const className: string = child.props?.className || "";
                const match = /language-(\w+)/.exec(className);
                const codeString = String(child.props?.children || "").replace(/\n$/, "");

                return (
                  <div className="code-block">
                    <SyntaxHighlighter
                      language={match ? match[1] : undefined}
                      style={vscDarkPlus}
                      customStyle={{ 
                        background: "#000", 
                        padding: "1rem", 
                        borderRadius: "0.5rem", 
                        overflowX: "auto",
                        color: "#ffffff" // Force white text
                      }}
                      codeTagProps={{
                        style: { 
                          background: "transparent",
                          color: "inherit"
                        }
                      }}
                    >
                      {codeString}
                    </SyntaxHighlighter>
                  </div>
                );
              },
              // eslint-disable-next-line @typescript-eslint/no-explicit-any
              code(props: any) {
                const { inline, children } = props;
                if (inline) {
                  return <code className="bg-gray-800 text-green-400 px-1 rounded text-sm">{children}</code>;
                }
                return <>{children}</>; // block code handled by pre renderer
              },
              h2({ children }) {
                const id = String(children).toLowerCase().replace(/[^a-z0-9]+/g, "-");
                return (
                  <motion.h2
                    id={id}
                    className="text-3xl font-bold mt-12 mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    {children}
                  </motion.h2>
                );
              },
              h3({ children }) {
                return <h3 className="text-2xl font-semibold mt-8 mb-3">{children}</h3>;
              },
              p({ children }) {
                return <p className={`text-gray-300 ${jetbrainsMono.className} leading-relaxed`}>{children}</p>;
              },
              li({ children }) {
                return <li className={`text-gray-300 ${jetbrainsMono.className}`}>{children}</li>;
              },
            }}
          >
            {markdown}
          </ReactMarkdown>
        </main>
      </div>
    </div>
  );
});

export default DocsPageClient;
