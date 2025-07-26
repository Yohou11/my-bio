import React from 'react';
import { Heart, Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              Mon Portfolio
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Passionné par la création d'expériences numériques exceptionnelles et l'innovation technologique.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Github size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors duration-200">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#hero" className="hover:text-white transition-colors duration-200">Accueil</a></li>
              <li><a href="#about" className="hover:text-white transition-colors duration-200">À propos</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors duration-200">Compétences</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors duration-200">Projets</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Développement Web</li>
              <li>Applications Mobile</li>
              <li>UI/UX Design</li>
              <li>Consulting Tech</li>
              <li>Formation</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 Mon Portfolio. Tous droits réservés.
            </p>
            <p className="text-gray-400 text-sm flex items-center">
              Fait avec <Heart size={16} className="text-red-500 mx-1" /> et beaucoup de café
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;