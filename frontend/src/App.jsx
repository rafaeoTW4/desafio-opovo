// src/App.jsx

import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import CourseInfoBar from './components/CourseInfoBar';
import AccordionSection from './components/AccordionSection';
import CoursesSection from './components/CoursesSection';
import InvestmentSection from './components/InvestmentSection';

// Dados para a primeira seção
const decisionInfoData = [
  { title: 'Competências que você vai desenvolver', content: <p className="text-gray-700 m-0">...</p> },
  { title: 'Para quem se destina', content: ( <p className="font-normal text-2xl leading-none text-[#1E1E1E] m-0">Esse curso é para você, que já concluiu ou está concluindo o ensino médio e quer se capacitar para entrar no mercado de trabalho. É gestor escolar e quer ampliar os seus conhecimentos a respeito dos processos realizados na secretaria escolar...</p> ) },
  { title: 'Quando será o pagamento...', content: <p className="text-gray-700 m-0">...</p> },
  { title: 'Quais são as condições...', content: <p className="text-gray-700 m-0">...</p> },
];

// Dados para a segunda seção
// Dentro de: src/App.jsx

const learningModulesData = [
  { 
    title: 'Módulo 1 - Secretaria escolar', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Secretaria escolar...</p> 
  },
  { 
    title: 'Módulo 2 - Redação oficial e informática', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Redação oficial e informática...</p> 
  },
  { 
    title: 'Módulo 3 - Estatística básica e indicadores educacionais', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Estatística básica e indicadores educacionais...</p> 
  },
  { 
    title: 'Módulo 4 - Planejamento, gestão e legislação educacional', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Planejamento, gestão e legislação educacional...</p> 
  },
  { 
    title: 'Módulo 5 - Funcionamento e organização da secretaria escolar', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Funcionamento e organização da secretaria escolar...</p> 
  },
  { 
    title: 'Módulo 6 - Legislação educacional', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Legislação educacional...</p> 
  },
  { 
    title: 'Módulo 7 - Estágio supervisionado', 
    content: <p className="text-gray-700 m-0">Aqui vai o conteúdo sobre Estágio supervisionado...</p> 
  },
];

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-uane-background">
      <Navbar />
      <HeroSection />
      <CourseInfoBar />
      <CourseInfoBar />
      
      <AccordionSection 
        sectionTitle="Informações para decidir"
        data={decisionInfoData}
        defaultOpenIndex={1}
      />

      <AccordionSection 
        sectionTitle="O que você vai aprender"
        data={learningModulesData}
      />
      <CoursesSection />
      <InvestmentSection />
    </div>
  );
}

export default App;