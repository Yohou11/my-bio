import React from 'react';
import { Palette, Smartphone, Globe, Zap, Users, Trophy } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Globe,
      title: "Développement Web",
      description: "Création de sites web modernes et responsives avec les dernières technologies",
      percentage: 90,
      color: "blue"
    },
    {
      icon: Smartphone,
      title: "Apps Mobile",
      description: "Développement d'applications mobiles intuitives et performantes",
      percentage: 75,
      color: "purple"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Conception d'interfaces utilisateur élégantes et fonctionnelles",
      percentage: 85,
      color: "orange"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimisation et amélioration des performances des applications",
      percentage: 80,
      color: "green"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Travail en équipe et communication efficace avec les clients",
      percentage: 95,
      color: "pink"
    },
    {
      icon: Trophy,
      title: "Gestion de projet",
      description: "Planification et livraison de projets dans les délais impartis",
      percentage: 85,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "from-blue-500 to-blue-600 bg-blue-100 text-blue-600",
      purple: "from-purple-500 to-purple-600 bg-purple-100 text-purple-600",
      orange: "from-orange-500 to-orange-600 bg-orange-100 text-orange-600",
      green: "from-green-500 to-green-600 bg-green-100 text-green-600",
      pink: "from-pink-500 to-pink-600 bg-pink-100 text-pink-600",
      indigo: "from-indigo-500 to-indigo-600 bg-indigo-100 text-indigo-600"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes Compétences
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Un aperçu de mes domaines d'expertise et de mes passions professionnelles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${getColorClasses(skill.color).split(' ').slice(2).join(' ')} group-hover:scale-110 transition-transform duration-200`}>
                <skill.icon className="w-8 h-8" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-800 mb-3">{skill.title}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{skill.description}</p>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-gray-700">Niveau d'expertise</span>
                  <span className="text-sm font-bold text-gray-800">{skill.percentage}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full bg-gradient-to-r ${getColorClasses(skill.color).split(' ').slice(0, 2).join(' ')} transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Mes Outils Favoris</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Figma', 'Git', 'VS Code', 'Photoshop'].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 bg-gradient-to-r from-gray-100 to-gray-200 text-gray-700 rounded-full text-sm font-medium hover:from-blue-100 hover:to-purple-100 hover:text-blue-700 transition-all duration-200 cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;