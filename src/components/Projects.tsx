import React from 'react';
import { ExternalLink, Github, Eye } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "E-commerce Modern",
      description: "Une plateforme e-commerce complète avec panier, paiements et gestion des commandes. Interface moderne et expérience utilisateur optimisée.",
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "Node.js", "Stripe", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord interactif pour visualiser des données complexes avec des graphiques en temps réel et des filtres avancés.",
      image: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React", "D3.js", "TypeScript", "Firebase"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "App Mobile Fitness",
      description: "Application mobile pour le suivi des entraînements avec planification personnalisée et suivi des progrès.",
      image: "https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["React Native", "Expo", "SQLite", "Charts"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Portfolio Créatif",
      description: "Site portfolio pour un artiste avec galerie interactive, animations fluides et système de commande intégré.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Next.js", "Framer Motion", "Sanity", "Vercel"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Plateforme Learning",
      description: "Plateforme d'apprentissage en ligne avec cours vidéo, quiz interactifs et suivi de progression des étudiants.",
      image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Vue.js", "Laravel", "MySQL", "AWS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Tool de Productivité",
      description: "Application de gestion de tâches avec collaboration en temps réel, notifications et synchronisation multi-appareils.",
      image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=800",
      tags: ["Svelte", "Socket.io", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Mes Projets
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez quelques-unes de mes réalisations récentes qui reflètent ma passion pour l'innovation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 right-4 flex space-x-2">
                    <a
                      href={project.liveUrl}
                      className="flex-1 bg-white/90 backdrop-blur-sm text-gray-800 px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-white transition-colors duration-200"
                    >
                      <Eye size={16} />
                      <span>Voir</span>
                    </a>
                    <a
                      href={project.githubUrl}
                      className="flex-1 bg-gray-800/90 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center justify-center space-x-1 hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 text-xs font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            <span>Voir tous mes projets</span>
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;