import React from 'react';
import Tag from './Tag';
import UFDRLogo from './UFDRLogo';



function HeroSection() {
    return (

        <section className='flex h-[558px] w-full justify-center bg-uane-blue px-18 py-10 gap-10'>
            <div className='w-[636px] flex flex-col'>
                <div className='flex items-center gap-4'>

                    <Tag name="TÉCNICO" className="border-[#D0FBEB] text-[#D0FBEB]" />
                    <Tag name="TECNOLOGIA E PROFISSÃO" className="border-[#D0FBEB] text-[#D0FBEB]" />

                </div>
                <div className='w-[636px]'>
                    <h1 className='text-uane-text w-[636px] font-bold text-[40px]'>Secretaria Escolar</h1>
                    <p className='text-uane-text leading-6 text-lg'>O(a) profissional em Secretaria Escolar é peça-chave para a gestão eficiente da escola, garantindo o funcionamento legal e organizado da instituição. Responsável por gerenciar a documentação dos estudantes, ele(a) também contribui para o alinhamento do currículo escolar com as necessidades reais dos alunos. Seja essencial para o sucesso da escola e para a formação de um ambiente educacional estruturado. Invista na sua capacitação e faça a diferença na gestão escolar!</p>

                </div>

            </div>
            <div className='w-[636px] h-[462px]'>
                <img src="./course_photo.png" className='object-cover' alt="" />
            </div>

        </section>

    )
}


export default HeroSection;