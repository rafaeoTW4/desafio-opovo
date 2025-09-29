import React from 'react';
import Navbar from './components/Navbar';
import IconAluno from './components/IconAluno';
import HeroSection from './components/HeroSection';
import CourseInfoBar from './components/CourseInfoBar';
import AccordionSection from './components/AccordionSection';

function App() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center bg-uane-background">
      <Navbar/>
      <HeroSection/>
      <CourseInfoBar/>
      <CourseInfoBar/>
      <AccordionSection/>
    </div>
  );
}

export default App;