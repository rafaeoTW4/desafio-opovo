// src/components/AccordionSection.jsx

import React, { useState } from 'react';

// --- Ícone da Seta (Chevron) ---
const ChevronIcon = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={4} stroke="currentColor" className={`w-[25px] h-auto transform transition-transform duration-300 ${className}`} >
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

// --- Item do Acordeão ---
const AccordionItem = ({ title, content, isOpen, onClick }) => {
  return (
    <div className="flex flex-col w-full bg-[#DFDFDF] rounded border-2 border-transparent hover:border-[#121E3E] transition-colors duration-300 group overflow-hidden">
      <button onClick={onClick} className={`flex w-full h-[60px] items-center justify-between px-6 text-left group-hover:text-[#121E3E] transition-colors duration-300 ${ isOpen ? 'text-[#121E3E]' : 'text-[#1F6482]' }`} >
        <span className="text-lg font-bold tracking-normal">{title}</span>
        <ChevronIcon className={isOpen ? 'rotate-180' : ''} />
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${ isOpen ? 'max-h-[1000px]' : 'max-h-0'}`}>
        <div className="bg-white p-6">
          {content}
        </div>
      </div>
    </div>
  );
};

// --- Seção Principal ---
function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(1);
  const handleItemClick = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const accordionData = [
    { title: 'Competências que você vai desenvolver', content: <p className="text-gray-700">Substitua este conteúdo...</p> },
    { title: 'Para quem se destina', content: ( <p className="font-normal text-2xl leading-none text-[#1E1E1E]"> Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar. Que deseja ter uma formação técnica para estar preparado(a) para realizar concurso público e atuar em escolas públicas ou privadas. </p> ) },
    { title: 'Quando será o pagamento da primeira mensalidade e a data de início do curso?', content: <p className="text-gray-700">Substitua este conteúdo...</p> },
    { title: 'Quais são as condições de pagamento e quais os descontos oferecidos?', content: <p className="text-gray-700">Substitua este conteúdo...</p> },
  ];

  return (
    <section className="w-full max-w-[1296px] pt-8 pb-16">
      <div className="flex items-center gap-4 mb-8">
        {/* AQUI ESTÁ A CORREÇÃO */}
        <div className="w-1.5 h-[34px] bg-[#138E98] rounded"></div>
        <h2 className="text-[28px] leading-[34px] font-bold text-gray-800">Informações para decidir</h2>
      </div>
      <div className="flex flex-col gap-4">
        {accordionData.map((item, index) => (
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