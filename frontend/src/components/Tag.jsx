// src/components/Tag.jsx

import React from 'react';

function Tag({ name, className }) {
    return (
        // AQUI ESTÁ A MUDANÇA: de 'text-xs' para 'text-sm'
        <div className={`border-2 font-normal text-sm uppercase px-2 py-0.5 ${className}`}>
            {name}
        </div>
    );
}

export default Tag;