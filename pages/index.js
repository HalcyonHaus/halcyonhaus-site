import Head from "next/head";

export default function HomePage() {
  return (
    <div className="relative min-h-screen font-sans text-white">
      <Head>
        <title>Halcyon Haus</title>
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap" rel="stylesheet" />
      </Head>

      <div className="absolute inset-0 z-0 slideshow">
        <div className="absolute inset-0 bg-black opacity-40" />
      </div>

      <header className="absolute top-0 right-0 p-6 z-10 text-sm tracking-widest">
        <nav className="space-x-6 uppercase font-inter">
          <a href="#about" className="hover:underline">About Me</a>
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#shop" className="hover:underline">Shop My Home</a>
        </nav>
      </header>

      <div className="relative z-10 flex items-center justify-center h-screen text-center">
        <h1 className="text-white text-6xl md:text-8xl tracking-widest font-playfair">Halcyon Haus</h1>
      </div>

      <style jsx>{`
        .slideshow {
          background-image: url('/images/photo3.png');
          background-size: cover;
          background-position: center;
          animation: fade 12s ease-in-out infinite;
        }

        @keyframes fade {
          0%, 100% { opacity: 1; }
          33% { background-image: url('/images/photo1.png'); }
          66% { background-image: url('/images/photo2.png'); }
        }

        .font-playfair {
          font-family: 'Playfair Display', serif;
        }

        .font-inter {
          font-family: 'Inter', sans-serif;
        }
      `}</style>
    </div>
  );
}
