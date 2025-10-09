// src/components/HeroSection.jsx

import React from 'react';
import Tag from './Tag';

function HeroSection() {
    return (
        <section className='flex justify-center w-full bg-uane-blue py-12'>
            
            <div className='w-full max-w-section-default flex flex-col lg:flex-row items-center justify-center gap-10 px-4'>
                
                {/* --- Coluna da Imagem --- */}
                {/* Largura total no mobile, 636px no desktop */}
                <div className='w-full lg:w-[636px] lg:h-[462px] rounded-2xl overflow-hidden order-1 lg:order-2'>
                    <img src="./course_photo.png" className='w-full h-full object-cover' alt="" />
                </div>

                {/* --- Coluna do Texto --- */}
                {/* Largura total no mobile, 636px no desktop */}
                <div className='w-full lg:w-[636px] flex flex-col gap-8 order-2 lg:order-1 mt-8 lg:mt-0'>
                    <div className='flex flex-col gap-6'>
                        <div className='flex items-center gap-4'>
                            <Tag name="TÉCNICO" className="border-white text-white" />
                            <Tag name="TECNOLOGIA E PROFISSÃO" className="border-white text-white" />
                        </div>
                        <div>
                            <h1 className='text-white w-full font-bold text-3xl lg:text-[40px]'>Secretaria Escolar</h1>
                            <p className='text-white leading-6 text-lg lg:text-[22px] font-light mt-4'>O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo o funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes, ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na sua capacitação e faça a diferença na gestão escolar!</p>
                        </div>
                    </div>

                    <div className='flex flex-col sm:flex-row items-center sm:justify-between gap-8 mt-4'>
                        <div className='flex items-center gap-6'>
                            <div>
                                <div className='flex items-center gap-4'>
                                    <img src="/images/Barra_de_marcas.png" alt="Logos de realização" />
                                </div>
                            </div>
                        </div>
                        <a href="#" className="bg-[#138E98] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transition w-fit text-center">
                            Faça sua matrícula
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default HeroSection;