import React from 'react';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white text-4xl font-bold shadow-2xl">
            MP
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-500 bg-clip-text text-transparent leading-tight">
          Votre Nom
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-600 mb-4 font-light">
          Développeur • Créateur • Passionné
        </p>
        
        <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed">
          Bienvenue dans mon univers ! Je suis passionné par la création d'expériences numériques exceptionnelles 
          et j'adore transformer des idées en réalité à travers le code et le design.
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-12">
          <a href="#" className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-200 group">
            <Github className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </a>
          <a href="#" className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-200 group">
            <Linkedin className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </a>
          <a href="#" className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:shadow-xl hover:scale-110 transition-all duration-200 group">
            <Mail className="w-6 h-6 text-gray-600 group-hover:text-blue-600" />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            Voir mes projets
          </button>
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transform hover:scale-105 transition-all duration-200"
          >
            Me contacter
          </button>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="animate-bounce cursor-pointer group"
        >
          <ChevronDown className="w-8 h-8 text-gray-400 group-hover:text-blue-600 transition-colors duration-200" />
        </button>
      </div>
    </section>
  );
};

export default Hero;