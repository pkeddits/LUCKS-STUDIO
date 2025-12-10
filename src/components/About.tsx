import React from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: 'Qualidade Premium',
      description: 'Produtos e técnicas de alta qualidade para resultados excepcionais'
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: 'Profissionais Experientes',
      description: 'Equipe especializada com anos de experiência no mercado'
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: 'Pontualidade',
      description: 'Respeitamos seu tempo com horários marcados e atendimento ágil'
    },
    {
      icon: <Star className="h-8 w-8" />,
      title: 'Experiência Única',
      description: 'Ambiente sofisticado e atendimento personalizado para cada cliente'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Sobre a </span>
            <span className="text-yellow-500">Luck's Studio</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Na Luck's Studio Barbearia, oferecemos mais que um simples corte de cabelo. 
            Criamos uma experiência premium onde tradição e modernidade se encontram. 
            Nossa missão é proporcionar o melhor atendimento em um ambiente sofisticado 
            e acolhedor, garantindo que cada cliente saia renovado e confiante.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-yellow-500 mb-4 flex justify-center">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;