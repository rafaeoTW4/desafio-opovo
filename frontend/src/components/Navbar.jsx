// src/components/Navbar.jsx

import React, { useState } from 'react';
import UaneLogo from "./UaneLogo";
import IconAluno from './IconAluno';

const MenuIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" /></svg> );
const CloseIcon = () => ( <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg> );

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="relative w-full z-20">
            <div className="flex h-[72px] w-full justify-center bg-uane-secondary px-4 sm:px-10">
                <div className="w-full max-w-section-default flex items-center justify-between">
                    <UaneLogo />
                    <nav className='hidden lg:flex items-center gap-10'>
                        <ul className="flex items-center gap-10">
                            <li className="text-uane-text text-xs font-bold leading-normal cursor-pointer hover:text-gray-300">CURSOS</li>
                            <li className="text-uane-text text-xs font-bold leading-normal cursor-pointer hover:text-gray-300">PROFESSORES</li>
                            <li className="text-uane-text text-xs font-bold leading-normal cursor-pointer hover:text-gray-300">SOBRE A UANE</li>
                            <li className="text-uane-text text-xs font-bold leading-normal cursor-pointer hover:text-gray-300">PARCERIAS</li>
                        </ul>
                        <div className="flex items-center gap-2">
                            <IconAluno/> <span className='uppercase text-uane-text text-xs font-bold'>portal do aluno</span>
                        </div>
                    </nav>
                    <div className="lg:hidden">
                        <button onClick={() => setIsMenuOpen(true)} className="text-white" aria-label="Abrir menu">
                            <MenuIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className={`fixed top-0 left-0 w-full h-screen bg-uane-blue z-50 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className='flex justify-between items-center h-[72px] px-4 sm:px-10 bg-uane-secondary'>
                    <UaneLogo />
                    <button onClick={() => setIsMenuOpen(false)} className='text-white' aria-label="Fechar menu">
                        <CloseIcon />
                    </button>
                </div>
                <nav className='flex flex-col items-center justify-center h-[calc(100vh-72px)] gap-8'>
                    <ul className="flex flex-col items-center gap-8">
                        <li className="text-white text-xl font-bold">CURSOS</li>
                        <li className="text-white text-xl font-bold">PROFESSORES</li>
                        <li className="text-white text-xl font-bold">SOBRE A UANE</li>
                        <li className="text-white text-xl font-bold">PARCERIAS</li>
                    </ul>
                    <div className="flex items-center gap-2 border-t border-white/20 pt-8 mt-8">
                        <IconAluno/> <span className='uppercase text-white text-xl font-bold'>portal do aluno</span>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Navbar;