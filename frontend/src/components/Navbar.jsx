// src/components/Navbar.jsx

import React from 'react';
import UaneLogo from "./UaneLogo";
import IconAluno from './IconAluno';

function Navbar() {
    return (
        <header className="flex h-[72px] w-full justify-center bg-uane-secondary px-18">
            <section className="w-full max-w-[1440px] flex items-center justify-between">
                <UaneLogo />
                <nav className='flex gap-10'>
                    <ul className="flex items-center gap-10">
                        <li className="text-uane-text text-xs font-bold leading-0">CURSOS</li>
                        <li className="text-uane-text text-xs font-bold leading-0">PROFESSORES</li>
                        <li className="text-uane-text text-xs font-bold leading-0">SOBRE A UANE</li>
                        <li className="text-uane-text text-xs font-bold leading-0">PARCERIAS</li>
                    </ul>
                    <div className="flex items-center gap-2">
                        <IconAluno/> <span className='uppercase text-uane-text text-xs font-bold'>portal do aluno</span>
                    </div>
                </nav>
            </section>
        </header>
    );
}



export default Navbar;