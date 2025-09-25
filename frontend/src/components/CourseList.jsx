import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CourseCard from './CourseCard';

const CourseList = () => {
  // ATENÇÃO: Substitua 'IP_DA_SUA_VM' pelo IP real da sua máquina virtual.
  const API_URL = 'http://192.168.220.4:3223/api.php'; 

  const [cursos, setCursos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(response => {
        setCursos(response.data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Erro ao buscar cursos. Verifique se o servidor PHP está rodando na VM e o IP está correto!", err);
        setError("Não foi possível carregar os cursos. Tente novamente mais tarde.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <p>Carregando lista de cursos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8 text-center text-red-500">
        <p>{error}</p>
      </div>
    );
  }

  return (
    <section id="cursos" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Nossos Cursos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cursos.map(curso => (
            <CourseCard key={curso.id} curso={curso} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseList;
