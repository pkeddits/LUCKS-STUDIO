import React from 'react';

const Hero = () => {
  const scrollToBooking = () => {
    const section = document.getElementById('booking');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop)',
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-4">
          <span className="text-white">Luck's Studio</span>
          <br />
          <span className="text-yellow-500">Barbearia</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-300 mb-2">Osasco - SP</p>
        <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Experiência premium em cortes e cuidados masculinos. 
          Onde estilo e tradição se encontram.
        </p>
        
        <button 
          onClick={scrollToBooking}
          className="bg-yellow-500 text-black px-8 py-4 text-lg font-bold rounded-lg hover:bg-yellow-400 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          Agendar Horário
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;