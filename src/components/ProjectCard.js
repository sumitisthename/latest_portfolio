import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <div className="flex-shrink-0 w-64 h-40 m-2 overflow-hidden transition-transform duration-300 transform bg-gray-800 rounded-lg shadow-lg cursor-pointer hover:scale-110 hover:z-10">
      <img
        src={project.imageUrl}
        alt={project.title}
        className="object-cover w-full h-full"
      />
      <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black to-transparent">
        <h3 className="text-lg font-bold text-white">{project.title}</h3>
      </div>
    </div>
  );
};

export default ProjectCard;
