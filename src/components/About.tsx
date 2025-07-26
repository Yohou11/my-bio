import React from 'react';
import { Heart, Code, Coffee, Music } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            À propos de moi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez mon parcours, mes passions et ce qui me motive chaque jour
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="prose prose-lg">
              <p className="text-gray-700 leading-relaxed">
                Salut ! Je suis un passionné de technologie avec une soif d'apprendre constante. 
                Mon parcours m'a mené à travers différents domaines, mais ma passion pour la création 
                et l'innovation reste au cœur de tout ce que je fais.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Que ce soit à travers le développement web, la photographie, ou mes autres hobbies,
                j'aime créer des expériences qui ont du sens et qui apportent de la valeur aux gens.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Quand je ne code pas, vous me trouverez probablement en train d'explorer de nouveaux
                endroit, d'écouter de la musique, ou de découvrir les dernières tendances tech.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">React</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium">Node.js</span>
              <span className="px-4 py-2 bg-green-100 text-green-800 rounded-full text-sm font-medium">UI/UX</span>
              <span className="px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">Photographie</span>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Code className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Développement</h3>
              <p className="text-sm text-gray-600">Création d'applications web modernes</p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Passion</h3>
              <p className="text-sm text-gray-600">Amour pour l'innovation et la créativité</p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Coffee className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Lifestyle</h3>
              <p className="text-sm text-gray-600">Équilibre entre travail et vie personnelle</p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all duration-300 hover:scale-105">
              <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-200">
                <Music className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Hobbies</h3>
              <p className="text-sm text-gray-600">Musique, photographie et voyages</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;