// src/components/CoursesSection.jsx

import React from 'react';
import Tag from './Tag'; // 1. IMPORTAMOS SEU COMPONENTE TAG

// --- Ícone da Seta (Chevron para o link) ---
const ChevronRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#138E98" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
    </svg>
);

// --- Componente Reutilizável para o Card de Curso ---
// Substitua APENAS este sub-componente no seu arquivo CoursesSection.jsx

// Substitua APENAS este sub-componente no seu arquivo CoursesSection.jsx

const CourseCard = ({ imageSrc, tags, title, author }) => {
  return (
    <div className="rounded-lg overflow-hidden shadow-lg bg-uane-blue group h-[550px] flex flex-col">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-[306px] object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="p-3 text-white flex flex-col gap-4 flex-grow">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag 
              key={index} 
              name={tag} 
              className="border-white text-white text-[11px] uppercase px-0.5 py-0.5"
            />
          ))}
        </div>
        
        {/* TESTE 1 AQUI: text-2xl e leading-tight */}
        <h3 className="text-2xl leading-tight font-bold tracking-normal line-clamp-4">
            {title}
        </h3>
        
        <div className="border-t border-white/20 pt-4">
            <p className="text-sm text-white/70">{author}</p>
        </div>
      </div>
    </div>
  );
};

// --- O resto do componente CoursesSection continua igual ---
function CoursesSection() {
    // ... (Seu array coursesData)
    const coursesData = [
        { imageSrc: '/images/Curso_1.jpg', tags: ['EXTENSÃO', 'BEM-VIVER'], title: 'Educação Ambiental para um Presente Sustentável', author: 'Por Fundação Demócrito Rocha' },
        { imageSrc: '/images/Curso_2.jpg', tags: ['CURTA DURAÇÃO', 'TECNOLOGIA E PROFISSÃO'], title: 'Como Implementar a Política Municipal de Educação Ambiental', author: 'Por Daniel Pagliuca' },
        { imageSrc: '/images/Curso_3.jpg', tags: ['CURTA DURAÇÃO', 'BEM-VIVER'], title: 'Bullying: conhecer para combater', author: 'Por Grecianny Carvalho' },
        { imageSrc: '/images/Curso_4.jpg', tags: ['EXTENSÃO', 'BEM-VIVER'], title: 'Gestão Fiscal Interfederativa', author: 'Por Fundação Demócrito Rocha' },
    ];

    return (
        <section className="w-full max-w-[1296px] py-16">
            <a href="#" className="flex items-center gap-2 mb-8 w-fit group">
                <h2 className="text-4xl font-bold text-[#1E1E1E] group-hover:underline">Cursos</h2>
                <ChevronRightIcon />
            </a>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {coursesData.map((course, index) => (
                    <CourseCard key={index} {...course} />
                ))}
            </div>
        </section>
    );
}

export default CoursesSection;