// src/components/CoursesSection.jsx

import React, { useState, useEffect, useRef } from 'react';
import Tag from './Tag';
import CourseCard from './CourseCard';

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

// --- Seção Principal de Cursos ---
function CoursesSection() {
  const scrollContainerRef = useRef(null);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const API_URL = 'http://192.168.220.4:8000/api.php';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCourses(data);
      } catch (error) {
        setError(error.message);
        console.error("Erro ao buscar dados da API:", error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const handleScroll = (scrollOffset) => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: scrollOffset, behavior: 'smooth' });
    }
  };

  return (
    <section className="w-full max-w-[1296px] py-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-[#1E1E1E]">Cursos</h2>
      </div>

      <div className="relative">
        {isLoading && <p className="text-center">Carregando cursos...</p>}
        {error && <p className="text-center text-red-500">Erro: {error}</p>}
        {!isLoading && !error && (
          <div 
            ref={scrollContainerRef} 
            className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
          >
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                imageSrc={course.imageSrc}
                tags={course.tags}
                title={course.title}
                author={course.author}
              />
            ))}
          </div>
        )}

        {/* CÓDIGO DOS BOTÕES RESTAURADO AQUI */}
        {!isLoading && !error && courses.length > 4 && (
          <>
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
          </>
        )}
      </div>
    </section>
  );
}

export default CoursesSection;