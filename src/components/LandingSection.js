'use client';

export default function LandingSection() {
  return (
    <section className="landing-section">
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold">Joro Sullivan Rakotoniaina</h1>
        <p className="text-xl md:text-2xl mt-4">"I believe technology is just a tool;
          what truly makes the difference is the vision behind it."</p>
        <a href={"#about"} className="mt-8 inline-block px-6 py-3 bg-accent text-white rounded-lg">
          Who Am I?
        </a>
      </div>
    </section>
  );
} 