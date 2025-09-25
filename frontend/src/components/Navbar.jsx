import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-2xl font-bold">UANE Cursos</a>
        <ul className="flex space-x-4">
          <li><a href="#cursos" className="hover:text-gray-400">Cursos</a></li>
          <li><a href="#contato" className="hover:text-gray-400">Contato</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
