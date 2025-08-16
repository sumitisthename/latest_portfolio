import React, { useRef } from 'react';
import ProjectCard from './ProjectCard';

const ProjectCarousel = ({ title, projects }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (current) {
      const scrollAmount = direction === 'left' ? -current.offsetWidth : current.offsetWidth;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <div className="relative">
        <button
          onClick={() => scroll('left')}
          className="absolute left-0 z-10 h-full px-4 text-4xl font-bold text-white bg-black bg-opacity-50 hover:bg-opacity-75"
        >
          ‹
        </button>
        <div
          ref={scrollRef}
          className="flex p-4 space-x-4 overflow-x-scroll overflow-y-hidden"
          style={{ scrollbarWidth: 'none', '-ms-overflow-style': 'none' }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <button
          onClick={() => scroll('right')}
          className="absolute right-0 z-10 h-full px-4 text-4xl font-bold text-white bg-black bg-opacity-50 hover:bg-opacity-75"
        >
          ›
        </button>
      </div>
    </div>
  );
};

export default ProjectCarousel;
