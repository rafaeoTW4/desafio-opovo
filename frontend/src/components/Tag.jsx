// src/components/Tag.jsx

import React from 'react';

function Tag({ name, className }) {
    return (
        
        <div className={`border-2 font-normal uppercase px-2 py-0.5 ${className}`}>
            {name}
        </div>
    );
}

export default Tag;