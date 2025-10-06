// src/components/CoursesSection.jsx

import React, { useState, useEffect, useRef } from 'react';
import Tag from './Tag';

// --- Seus componentes de ícone (ArrowLeftIcon, ArrowRightIcon) ---
const ArrowLeftIcon = () => { /* ...seu código svg... */ };
const ArrowRightIcon = () => { /* ...seu código svg... */ };

// --- Seu componente CourseCard ---
const CourseCard = ({ imageSrc, tags, title, author }) => { /* ...seu código do card... */ };

// --- Seção Principal de Cursos ---
function CoursesSection() {
  const scrollContainerRef = useRef(null);

  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // AQUI ESTÁ A URL FINAL DA SUA API
  const API_URL = 'http://192.168.220.4:3223/desafio-opovo/backend/api.php';

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
        console.error("Erro ao buscar dados da API:", error); // Adicionado para facilitar a depuração
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
        {error && <p className="text-center text-red-500">Erro ao carregar cursos: {error}</p>}
        {!isLoading && !error && (
          <div 
            ref={scrollContainerRef} 
            className="flex overflow-x-auto gap-6 scroll-smooth scrollbar-hide"
          >
            {courses.map((course, index) => (
              <CourseCard
                key={index}
                imageSrc={course.imageSrc} // Verifique se os nomes das chaves (imageSrc, tags, etc.)
                tags={course.tags}         // batem com o seu JSON
                title={course.title}
                author={course.author}
              />
            ))}
          </div>
        )}

        {!isLoading && !error && courses.length > 4 && (
          <>
            <button onClick={() => handleScroll(-350)} className="...">
              <ArrowLeftIcon />
            </button>
            <button onClick={() => handleScroll(350)} className="...">
              <ArrowRightIcon />
            </button>
          </>
        )}
      </div>
    </section>
  );
}

export default CoursesSection;