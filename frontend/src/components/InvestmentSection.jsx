// src/components/InvestmentSection.jsx

import React from 'react';

function InvestmentSection() {
  return (
    // AQUI ESTÁ A ÚNICA MUDANÇA: 'sm:px-10' foi trocado por 'md:px-2 lg:px-10'
    <section className="w-full py-16 px-4 md:px-2 lg:px-10">
      <div className="w-full max-w-[1296px] mx-auto">

        <div className="flex items-center gap-2 mb-8">
          <div className="w-1.5 h-[34px] bg-[#138E98] rounded"></div>
          <h2 className="text-2xl lg:text-[28px] leading-[34px] font-bold text-[#1E1E1E]">Investimento</h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-6">
          
          <div className="w-full bg-[#04254E] text-white rounded-lg p-8 lg:p-10 flex flex-col items-center justify-center text-center gap-4 lg:gap-6">
            <p className="text-xl lg:text-2xl">
              3º lote: Total de R$ 2.835,35 <br />
              + Matrícula de R$ 70
            </p>
            <p className="text-4xl lg:text-5xl font-bold mt-4">
              Até 15X de R$ 189,02
            </p>
            <a href="#" className="bg-[#138E98] text-white font-bold py-3 px-10 rounded-full text-lg hover:bg-opacity-90 transition mt-4">
              Faça sua matrícula
            </a>
          </div>

          <div className="w-full bg-[#DFDFDF] rounded-lg p-8 flex flex-col items-center text-center gap-4">
            <img src="/images/OP+_logo.png" alt="OP+ Logo" className="h-12 lg:h-16 mt-4 lg:mt-8" />
            <h3 className="text-xl lg:text-2xl font-bold text-[#1E1E1E]">
              Ganhe acesso grátis por 90 dias.
            </h3>
            <p className="text-[#1E1E1E] text-sm lg:text-base">
              Reportagens & Colunistas; <br />
              Filmes & Séries; <br />
              Podcasts & Web Stories.
            </p>
            <a href="#" className="text-uane-secondary font-bold hover:underline mt-4">
              Conheça o OPOVO+
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}

export default InvestmentSection;