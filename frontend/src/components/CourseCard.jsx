import React from 'react';

const CourseCard = ({ curso }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      <img src={curso.imagem_url} alt={`Imagem do curso de ${curso.nome}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{curso.nome}</h3>
        <p className="text-gray-600 text-sm">{curso.descricao}</p>
      </div>
    </div>
  );
};

export default CourseCard;
