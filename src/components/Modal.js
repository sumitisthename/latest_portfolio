import React from 'react';

const Modal = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75">
      <div className="relative w-full max-w-3xl p-8 mx-4 bg-gray-900 rounded-lg">
        <button
          onClick={onClose}
          className="absolute top-0 right-0 m-4 text-2xl font-bold text-white"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold">{project.title}</h2>
        <p className="mt-4 text-gray-400">{project.description}</p>
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-4 px-4 py-2 font-bold text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Modal;
