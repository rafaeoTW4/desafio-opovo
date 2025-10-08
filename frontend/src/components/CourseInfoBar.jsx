// src/components/CourseInfoBar.jsx

import React from 'react';

const InfoBlock = ({ label, value }) => (
  <div className="flex flex-col items-center text-center gap-2">
    <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</span>
    <span className="text-3xl font-light text-gray-900">{value}</span>
  </div>
);

function CourseInfoBar() {
  return (
    <section className="w-full flex justify-center py-8">
      {/* A ÚNICA MUDANÇA ESTÁ AQUI, na classe de padding (px) */}
      <div className="w-full max-w-[1296px] px-4 md:px-2 lg:px-10">
        <div className="grid grid-cols-2 gap-4 md:flex md:items-center md:justify-around">
          <InfoBlock label="Carga Horária" value="1.500 horas" />
          <InfoBlock label="Conteúdo" value="7 módulos" />
          <InfoBlock label="Período de Acesso" value="15 meses" />
          <InfoBlock label="Modalidade" value="EAD" />
        </div>
      </div>
    </section>
  );
}

export default CourseInfoBar;