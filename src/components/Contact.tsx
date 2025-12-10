import React from 'react';
import { MapPin, Clock, Instagram } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Entre em </span>
            <span className="text-yellow-500">Contato</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mb-8"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Endereço */}
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20 text-center">
            <div className="text-yellow-500 mb-4 flex justify-center">
              <MapPin className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Localização</h3>
            <p className="text-gray-300">
              Osasco - SP
              <br />
              Av. Diogo Antônio Feijó 974 / Osasco
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Endereço enviado via WhatsApp após agendamento
            </p>
          </div>

          {/* Horário */}
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20 text-center">
            <div className="text-yellow-500 mb-4 flex justify-center">
              <Clock className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Funcionamento</h3>
            <div className="text-gray-300 space-y-1">
              <p>Terça a Sexta: 9h às 19h</p>
              <p>Sábado: 8h às 18h</p>
              <p className="text-yellow-500">Domingo e Segunda: Fechado</p>
            </div>
          </div>

          {/* Instagram */}
          <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-yellow-500/20 text-center">
            <div className="text-yellow-500 mb-4 flex justify-center">
              <Instagram className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Instagram</h3>
            <p className="text-gray-300 mb-4">
              Acompanhe nossos trabalhos e novidades
            </p>
            <a 
              href="https://www.instagram.com/lucksstudio"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-yellow-500 text-black px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
            >
              @lucksstudio
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;