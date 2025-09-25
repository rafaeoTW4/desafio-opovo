import React from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import CourseList from './components/CourseList';
import Footer from './components/Footer';

const App = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Banner />
        <CourseList />
      </main>
      <Footer />
    </div>
  );
};

export default App;
