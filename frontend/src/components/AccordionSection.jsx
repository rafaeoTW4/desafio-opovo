// src/components/AccordionSection.jsx

import React, { useState } from 'react';

// --- Ícone da Seta (Chevron) --- (Sua versão com w-10)
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

// --- Item do Acordeão Reutilizável --- (Sua versão com todos os ajustes)
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="flex flex-col w-full bg-[#DFDFDF] rounded border-2 border-transparent hover:border-[#121E3E] transition-colors duration-300 group overflow-hidden">
      <button
        onClick={onClick}
        className={`flex w-full h-[60px] items-center justify-between pl-6 pr-6 text-left group-hover:text-[#121E3E] transition-colors duration-300 ${
          isOpen ? 'text-[#121E3E]' : 'text-[#1F6482]'
        }`}
      >
        {/* Usando o text-2xl que você definiu */}
        <span className="text-2xl font-bold tracking-normal flex-grow">
          {title}
        </span>
        <ChevronIcon className={`flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}
      >
        {/* Padding do conteúdo que você ajustou */}
        <div className="bg-white p-4">
          {content}
        </div>
      </div>
    </div>
  );
};


// --- Seção Principal ATUALIZADA para ser reutilizável ---
// As mudanças estão apenas aqui
function AccordionSection({ sectionTitle, data, defaultOpenIndex = null }) {
  const [openIndex, setOpenIndex] = useState(defaultOpenIndex);

  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  
  // O array de dados foi REMOVIDO daqui. Ele agora virá via props.

  return (
    <section className="w-full max-w-[1296px] pt-8 pb-16">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-1.5 h-[34px] bg-[#138E98] rounded"></div>
        {/* Título agora é uma prop */}
        <h2 className="text-[28px] leading-[34px] font-bold text-gray-800">{sectionTitle}</h2>
      </div>
      <div className="flex flex-col gap-4">
        {/* O .map() agora usa a prop 'data' */}
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={openIndex === index}
            onClick={() => handleItemClick(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default AccordionSection;