"use client"

import { useState } from "react"

interface FAQItem {
  question: string
  answer: string
}

const faqData: FAQItem[] = [
  {
    question: "What is Mimicry and how does it work?",
    answer:
      "Mimicry is an innovative 1v1 competitive platform that combines artificial intelligence with strategic gameplay. Two participants engage in a structured challenge where one player can activate AI voice synthesis technology to replace their speech, while the other player attempts to detect the transition. The platform serves as an educational tool to enhance digital literacy and AI awareness in real-world scenarios.",
  },
  {
    question: "How does the voice cloning technology work?",
    answer:
      "Our proprietary voice synthesis system utilizes advanced machine learning algorithms to analyze and replicate human speech patterns from minimal audio samples. The technology processes acoustic characteristics, linguistic patterns, and vocal nuances to generate highly accurate voice replicas. All processing occurs locally on secure infrastructure, ensuring complete data privacy and protection of user information.",
  },
  {
    question: "Is this platform safe and ethically compliant?",
    answer:
      "Absolutely. Mimicry operates under strict ethical guidelines and is designed exclusively for educational and entertainment purposes. We implement comprehensive consent protocols, provide detailed privacy protections, and include extensive resources on responsible AI usage. The platform promotes awareness of AI capabilities while emphasizing the importance of ethical considerations in artificial intelligence applications.",
  },
  {
    question: "What professional skills can I develop through this platform?",
    answer:
      "Participants develop advanced critical thinking capabilities, enhanced pattern recognition skills, and improved analytical reasoning. The platform specifically trains users to identify subtle behavioral indicators, linguistic markers, and temporal patterns that distinguish human communication from AI-generated content. These competencies are increasingly valuable in professional environments where AI interaction is prevalent.",
  },
  {
    question: "What multiplayer options are available?",
    answer:
      "The platform offers flexible multiplayer configurations including private room creation for controlled environments, intelligent matchmaking systems that pair users with appropriate skill levels, and competitive tournament modes for advanced players. Additionally, we provide comprehensive training modules and practice environments to support skill development and strategic improvement.",
  },
  {
    question: "How does the performance analysis system work?",
    answer:
      "Our advanced analytics engine provides comprehensive post-game evaluations including detailed performance metrics, behavioral pattern analysis, and strategic effectiveness assessments. The system generates detailed reports on response timing, linguistic analysis, and detection accuracy, enabling users to identify areas for improvement and optimize their strategic approaches for enhanced performance.",
  },
]

function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (index: number) => {
    setOpenItems((prev) => (prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]))
  }

  return (
    <div className="w-full flex justify-center items-start">
      <div className="flex-1 px-4 md:px-12 py-16 md:py-20 flex flex-col lg:flex-row justify-start items-start gap-6 lg:gap-12">
        {/* Left Column - Header */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-start gap-4 lg:py-5">
          <div className="w-full flex flex-col justify-center text-[#49423D] font-semibold leading-tight md:leading-[44px] font-sans text-4xl tracking-tight">
            Frequently Asked Questions
          </div>
          <div className="w-full text-[#605A57] text-base font-normal leading-7 font-sans">
            Comprehensive information about our AI voice synthesis platform,
            <br className="hidden md:block" />
            detection methodologies, and ethical implementation standards.
          </div>
        </div>

        {/* Right Column - FAQ Items */}
        <div className="w-full lg:flex-1 flex flex-col justify-center items-center">
          <div className="w-full flex flex-col">
            {faqData.map((item, index) => {
              const isOpen = openItems.includes(index)

              return (
                <div key={index} className="w-full border-b border-[rgba(73,66,61,0.16)] overflow-hidden">
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full px-5 py-[18px] flex justify-between items-center gap-5 text-left hover:bg-[rgba(73,66,61,0.02)] transition-colors duration-200"
                    aria-expanded={isOpen}
                  >
                    <div className="flex-1 text-[#49423D] text-base font-medium leading-6 font-sans">
                      {item.question}
                    </div>
                    <div className="flex justify-center items-center">
                      <ChevronDownIcon
                        className={`w-6 h-6 text-[rgba(73,66,61,0.60)] transition-transform duration-300 ease-in-out ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </button>

                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="px-5 pb-[18px] text-[#605A57] text-sm font-normal leading-6 font-sans">
                      {item.answer}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
