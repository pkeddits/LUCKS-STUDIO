import React from 'react';
import { Scissors, Rat as Razor, Sparkles, Eye, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Scissors className="h-12 w-12" />,
      name: 'Corte Masculino',
      description: 'Corte personalizado com técnicas modernas e clássicas',
      price: 'R$ 45,00',
      duration: '45 min'
    },
    {
      icon: <Razor className="h-12 w-12" />,
      name: 'Barba Completa',
      description: 'Design, aparação e finalização com produtos premium',
      price: 'R$ 35,00',
      duration: '30 min'
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      name: 'Corte + Barba',
      description: 'Combo completo para um visual impecável',
      price: 'R$ 70,00',
      duration: '75 min'
    },
    {
      icon: <Palette className="h-12 w-12" />,
      name: 'Pigmentação',
      description: 'Cobertura de fios brancos com técnica avançada',
      price: 'R$ 80,00',
      duration: '60 min'
    },
    {
      icon: <Eye className="h-12 w-12" />,
      name: 'Design de Sobrancelha',
      description: 'Modelagem masculina para um olhar marcante',
      price: 'R$ 25,00',
      duration: '20 min'
    },
    {
      icon: <Sparkles className="h-12 w-12" />,
      name: 'Pacote Premium',
      description: 'Todos os serviços inclusos + relaxamento',
      price: 'R$ 150,00',
      duration: '120 min'
    }
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Nossos </span>
            <span className="text-yellow-500">Serviços</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto">
            Oferecemos uma gama completa de serviços masculinos com qualidade premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105 group"
            >
              <div className="text-yellow-500 mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-3 text-center">
                {service.name}
              </h3>
              <p className="text-gray-400 text-center mb-6">
                {service.description}
              </p>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-500 mb-2">
                  {service.price}
                </p>
                <p className="text-sm text-gray-400">
                  {service.duration}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;