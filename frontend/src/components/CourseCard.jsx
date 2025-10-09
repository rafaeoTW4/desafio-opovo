// src/components/CourseCard.jsx

import React from 'react';
import Tag from './Tag';

const CourseCard = ({ imageSrc, tags, title, author }) => {
  return (
    
    <div className="w-[80%] sm:w-[45%] lg:w-1/4 flex-shrink-0 rounded-lg overflow-hidden shadow-lg bg-uane-blue group h-[550px] flex flex-col">
      <img 
        src={imageSrc} 
        alt={title} 
        className="w-full h-[306px] object-cover group-hover:scale-105 transition-transform duration-300" 
      />
      <div className="p-3 text-white flex flex-col gap-4 flex-grow relative">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Tag 
              key={index} 
              name={tag} 
              className="border-white text-white text-[11px] uppercase px-0.5 py-0.5"
            />
          ))}
        </div>
        <h3 className="text-2xl leading-tight font-bold tracking-normal line-clamp-4">
            {title}
        </h3>
        <div className="absolute bottom-3 left-3 right-3">
            <p className="text-base text-white/70">{author}</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;