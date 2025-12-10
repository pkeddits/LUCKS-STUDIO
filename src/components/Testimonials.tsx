import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Carlos Silva',
      text: 'Melhor barbearia de Osasco! Atendimento impecável e resultado sempre perfeito.',
      rating: 5
    },
    {
      name: 'Roberto Santos',
      text: 'Ambiente top, profissionais experientes. Virei cliente fiel da Luck\'s Studio.',
      rating: 5
    },
    {
      name: 'Felipe Oliveira',
      text: 'Qualidade premium! Sempre saio de lá me sentindo renovado e confiante.',
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">O que dizem nossos </span>
            <span className="text-yellow-500">Clientes</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20 hover:border-yellow-500/40 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="flex justify-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-500 fill-current" />
                ))}
              </div>
              <p className="text-gray-300 text-center mb-6 italic">
                "{testimonial.text}"
              </p>
              <p className="text-white font-bold text-center">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;