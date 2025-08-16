import React from 'react';

const Hero = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-5xl font-bold md:text-7xl">
          Hello, I'm [Your Name]
        </h1>
        <p className="mt-4 text-lg md:text-2xl">
          A Passionate Web Developer
        </p>
        <a
          href="#projects"
          className="mt-8 px-8 py-3 font-bold text-white bg-red-600 rounded-md hover:bg-red-700"
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;
