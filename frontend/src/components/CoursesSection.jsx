// src/components/CoursesSection.jsx

import React, { useRef } from 'react';
import Tag from './Tag';

// --- ÍCONE DA SETA (>) PARA O TÍTULO "CURSOS" --- (RE-ADICIONADO)
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#138E98" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

// --- ÍCONE DA SETA ESQUERDA (Seu código) ---
const ArrowLeftIcon = () => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M9.34638 13L3.3032 7.82013V6.17987L9.34638 1L10.7277 2.64026L5.54782 7.04318L10.7277 11.3597L9.34638 13Z" fill="#17254D"/>
    </svg>
  );
};

// --- ÍCONE DA SETA DIREITA (Seu código) ---
const ArrowRightIcon = () => {
  return (
    <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5.6536 13L11.6968 7.82013V6.17987L5.6536 1L4.27229 2.64026L9.45216 7.04318L4.27229 11.3597L5.6536 13Z" fill="#17254D"/>
    </svg>
  );
};

// --- Componente CourseCard (Seu código) ---
const CourseCard = ({ imageSrc, tags, title, author }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg bg-uane-blue group h-[550px] flex flex-col">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-[306px] object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="p-3 text-white flex flex-col gap-4 flex-grow relative">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag 
              key={index} 
              name={tag} 
              className="border-white text-white text-[11px] uppercase px-0.5 py-0.5"
            />
          ))}
        </div>
        <h3 className="text-2xl leading-tight font-bold tracking-normal line-clamp-4">
            {title}
        </h3>
        <div className="absolute bottom-3 left-3 right-3">
            <p className="text-base text-white/70">{author}</p>
        </div>
      </div>
    </div>
  );
};

// --- Seção Principal de Cursos ---
function CoursesSection() {
  const scrollContainerRef = useRef(null);

  const coursesData = [
    { imageSrc: '/images/Curso_1.jpg', tags: ['EXTENSÃO', 'BEM-VIVER'], title: 'Educação Ambiental para um Presente Sustentável', author: 'Por Fundação Demócrito Rocha' },
    { imageSrc: '/images/Curso_2.jpg', tags: ['CURTA DURAÇÃO', 'TECNOLOGIA E PROFISSÃO'], title: 'Como Implementar a Política Municipal de Educação Ambiental', author: 'Por Daniel Pagliuca' },
    { imageSrc: '/images/Curso_3.jpg', tags: ['CURTA DURAÇÃO', 'BEM-VIVER'], title: 'Bullying: conhecer para combater', author: 'Por Grecianny Carvalho' },
    { imageSrc: '/images/Curso_4.jpg', tags: ['EXTENSÃO', 'BEM-VIVER'], title: 'Gestão Fiscal Interfederativa', author: 'Por Fundação Demócrito Rocha' },
    { imageSrc: '/images/Curso_1.jpg', tags: ['NOVO'], title: 'Curso Adicional 5', author: 'Autor' },
    { imageSrc: '/images/Curso_2.jpg', tags: ['NOVO'], title: 'Curso Adicional 6', author: 'Autor' },
  ];

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-[1296px] py-16">
      {/* CABEÇALHO CORRIGIDO */}
      <a href="#" className="flex items-center gap-2 mb-8 w-fit group">
        <h2 className="text-4xl font-bold text-[#1E1E1E] group-hover:underline">Cursos</h2>
        <ChevronRightIcon />
      </a>

      <div className="relative">
        <div 
          ref={scrollContainerRef} 
          className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
        >
          {coursesData.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>

        <button 
          onClick={() => handleScroll(-350)} 
          className="absolute left-0 top-1/2 -translate-y-1/2 -ml-6 rounded-full shadow-md z-10 transition bg-white/50 hover:bg-[#80E3C7] w-12 h-24 flex items-center justify-center"
          aria-label="Rolar para esquerda"
        >
          <ArrowLeftIcon />
        </button>

        <button 
          onClick={() => handleScroll(350)} 
          className="absolute right-0 top-1/2 -translate-y-1/2 -mr-6 rounded-full shadow-md z-10 transition bg-white/50 hover:bg-[#80E3C7] w-12 h-24 flex items-center justify-center"
          aria-label="Rolar para direita"
        >
          <ArrowRightIcon />
        </button>
      </div>
    </section>
  );
}

export default CoursesSection;