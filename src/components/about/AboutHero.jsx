export default function AboutHero() {
  return (
    <section className="relative w-full h-[500px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/images/HeroSectionimage.jpg')",
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
        <h1
          className="text-white text-4xl md:text-5xl font-bold uppercase tracking-wide mb-4"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          ABOUT MOTORDEAL
        </h1>
      </div>
    </section>
  );
}