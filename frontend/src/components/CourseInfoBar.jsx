// src/components/CourseInfoBar.jsx

import React from 'react';

// Sub-componente (sem alterações)
const InfoBlock = ({ label, value }) => (
  <div className="flex flex-col items-center gap-2 text-center">
    <span className="text-[28px] font-bold text-[#999999] uppercase tracking-wider">{label}</span>
    <span className="text-[48px] font-light text-black">{value}</span>
  </div>
);

function CourseInfoBar() {
  return (
    // A única mudança foi remover as divs que representavam as linhas
    <div className="w-full max-w-[1296px] grid grid-cols-4 mt-16 py-6">
      
      <InfoBlock label="Carga Horária" value="1.500 horas" />
      <InfoBlock label="Conteúdo" value="7 módulos" />
      <InfoBlock label="Período de Acesso" value="15 meses" />
      <InfoBlock label="Modalidade" value="EAD" />

    </div>
  );
}

export default CourseInfoBar;