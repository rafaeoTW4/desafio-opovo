// src/components/HeroSection.jsx

import React from 'react';
import Tag from './Tag';
import UaneLogo from './UaneLogo';
import UFDRLogo from './UFDRLogo'; 


function HeroSection() {
    return (
        <section className='flex items-center justify-center w-full h-[558px] bg-uane-blue px-10 py-10'>
            
            {/* MUDANÇA PRINCIPAL AQUI: 'justify-between' virou 'justify-center' para agrupar as colunas */}
            <div className='w-full max-w-section-default flex items-center justify-center gap-10'>
                
                {/* --- Coluna da Esquerda --- */}
                <div className='w-[636px] flex flex-col  self-stretch'>
                    <div className='flex flex-col gap-2 '>
                        <div className='flex items-center gap-4'>
                            <Tag name="TÉCNICO" className="border-[#D0FBEB] text-[#D0FBEB]" />
                            <Tag name="TECNOLOGIA E PROFISSÃO" className="border-[#D0FBEB] text-[#D0FBEB]" />
                        </div>
                        <div>
                            <h1 className='text-white w-full font-bold text-[40px]'>Secretaria Escolar</h1>
                            <p className='text-white leading-6 text-[22px] font-light mt-4'>O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo o funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes, ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na sua capacitação e faça a diferença na gestão escolar!</p>
                        </div>
                    </div>

                    <div className='flex items-center gap-16 mt-8'>
                        <div className='flex items-center gap-6'>
                            <div>
                            
                                <div className='flex items-center gap-4'>
                                   <img src="/images/Barra_de_marcas.png" alt="" />
                                </div>
                            </div>
                        </div>
                        {/* ESTILO DO BOTÃO ATUALIZADO */}
                        <a href="#" className="bg-[#138E98] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition">
                            Faça sua matrícula
                        </a>
                    </div>
                </div>

                {/* --- Coluna da Direita --- */}
                <div className='w-[636px] h-[462px] rounded-2xl overflow-hidden'>
                    <img src="./course_photo.png" className='w-full h-full object-cover' alt="" />
                </div>

            </div>
        </section>
    );
}

export default HeroSection;