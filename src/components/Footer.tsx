import React from 'react';
import { Scissors, Instagram, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-yellow-500/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Scissors className="h-8 w-8 text-yellow-500" />
              <span className="text-2xl font-bold text-white">Luck's Studio</span>
            </div>
            <p className="text-gray-400 mb-4">
              Barbearia premium em Osasco-SP. Experiência única em cortes e cuidados masculinos.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/lucksstudio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-yellow-500 transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Informações de Contato */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Informações</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-400">Osasco - SP</p>
                  <p className="text-sm text-gray-500">Região Central</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <p>Ter-Sex: 9h às 19h</p>
                  <p>Sábado: 8h às 18h</p>
                  <p>Dom-Seg: Fechado</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">Links Rápidos</h3>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Início
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Sobre
              </button>
              <button 
                onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Serviços
              </button>
              <button 
                onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-gray-400 hover:text-yellow-500 transition-colors"
              >
                Agendamento
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © {currentYear} Luck's Studio Barbearia. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Desenvolvido com 💛 para proporcionar a melhor experiência
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;