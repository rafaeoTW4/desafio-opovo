// src/components/InvestmentSection.jsx

import React from 'react';

function InvestmentSection() {
  return (
    <section className="w-full max-w-[1296px] py-16">
      <div className="flex items-center gap-2 mb-8">
        <div className="w-1.5 h-[34px] bg-[#138E98] rounded"></div>
        <h2 className="text-[28px] leading-[34px] font-bold text-[#1E1E1E]">Investimento</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[324px]">
        
        {/* --- Card da Esquerda (Preço) --- */}
        <div className="bg-[#04254E] text-white rounded-lg p-10 flex flex-col items-center justify-center text-center gap-6">
          
          {/* MUDANÇA 1: Fonte diminuída de 'text-3xl' para 'text-[28px]' */}
          <p className="text-[28px]">
            3º lote: Total de R$ 2.835,35 <br />
            + Matrícula de R$ 70
          </p>
          
          {/* MUDANÇA 2: Margem diminuída de 'mt-8' para 'mt-4' */}
          <p className="text-5xl font-bold mt-4">
            Até 15X de R$ 189,02
          </p>
          
          <a href="#" className="bg-[#138E98] text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-opacity-90 transition">
            Faça sua matrícula
          </a>
        </div>

        {/* --- Card da Direita (Oferta OP+) --- */}
        <div className="bg-[#DFDFDF] rounded-lg p-8 flex flex-col items-center text-center gap-4">
          <img src="/images/OP+_logo.png" alt="OP+ Logo" className="h-16 mt-8" />
          <h3 className="text-2xl font-bold text-[#1E1E1E]">
            Ganhe acesso grátis por 90 dias.
          </h3>
          <p className="text-[#1E1E1E]">
            Reportagens & Colunistas; <br />
            Filmes & Séries; <br />
            Podcasts & Web Stories.
          </p>
          <a href="#" className="text-uane-secondary font-bold hover:underline mt-4">
            Conheça o OPOVO+
          </a>
        </div>

      </div>
    </section>
  );
}

export default InvestmentSection;