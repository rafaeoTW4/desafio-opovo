// src/components/AccordionSection.jsx

import React, { useState } from 'react';

// --- Ícone da Seta (Chevron) --- (Seu código)
const ChevronIcon = ({ className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 28 24" 
    strokeWidth={4}
    stroke="currentColor"
    className={`w-10 h-auto transform transition-transform duration-300 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// --- Item do Acordeão Reutilizável (AJUSTADO) ---
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="flex flex-col w-full bg-[#DFDFDF] rounded border-2 border-transparent hover:border-[#121E3E] transition-colors duration-300 group overflow-hidden">
      <button
        onClick={onClick}
        // MUDANÇA: Altura fixa (h-[60px]) e justify-between REMOVIDOS. Adicionado py-4 e gap-4.
        className={`flex w-full items-center text-left gap-4 px-4 lg:px-6 py-4 group-hover:text-[#121E3E] transition-colors duration-300 ${
          isOpen ? 'text-[#121E3E]' : 'text-[#1F6482]'
        }`}
      >
        {/* MUDANÇA: 'flex-grow' REMOVIDO */}
        <span className="text-lg lg:text-2xl font-bold tracking-normal">
          {title}
        </span>
        {/* MUDANÇA: Adicionado 'ml-auto' para empurrar a seta para a direita */}
        <ChevronIcon className={`flex-shrink-0 ml-auto ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        <div className="bg-white p-4">
          {content}
        </div>
      </div>
    </div>
  );
};


// --- Seção Principal (sem alterações) ---
function AccordionSection({ sectionTitle, data, defaultOpenIndex = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);
  const handleItemClick = (index) => { /* ... */ };

  return (
    <section className="w-full pt-8 pb-16 px-4 md:px-2 lg:px-10">
      <div className="w-full max-w-[1296px] mx-auto">
        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-[34px] bg-[#138E98] rounded"></div>
          <h2 className="text-2xl lg:text-[28px] leading-[34px] font-bold text-gray-800">{sectionTitle}</h2>
        </div>
        <div className="flex flex-col gap-4">
          {data.map((item, index) => (
            <AccordionItem key={index} {...item} isOpen={openIndex === index} onClick={() => handleItemClick(index)} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default AccordionSection;