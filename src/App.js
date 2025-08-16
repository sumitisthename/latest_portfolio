import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectCarousel from './components/ProjectCarousel';

function App() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Header />
      <Hero />

      {/* Projects Section */}
      <section className="p-8">
        <ProjectCarousel title="Featured Projects" projects={[]} />
        <ProjectCarousel title="Other Projects" projects={[]} />
      </section>

      {/* Footer */}
      <footer className="p-4 text-center">
        <p>&copy; 2024</p>
      </footer>
    </div>
  );
}

export default App;
