import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'IOVISION',
      position: 'Full Stack & DevOps Engineer',
      duration: 'Feb 2025 - juin 2025',
      location: 'Tunisia, Sfax',
      description: [
        'Provisioned Azure infrastructure (VMs, networks, security) using Terraform (IaC). ',
        'Automated deployments of Node.js, React, and PostgreSQL services using Ansible. ',
        'Secured CI/CD pipelines with GitHub Actions, including unit testing, static code analysis, and vulnerability scanning. ',
        'Integrated Grafana and Prometheus for system monitoring and performance tracking.'
      ],
      technologies: ['React', 'Node.js','PostgreSql' ,'Azure', 'Docker', 'Ansible', 'Terraform','GithubActions','DevSecOps','OWASP','SonarQube','Snyk','Trivy']
    },
    {
      company: 'ASM',
      position: 'Full Stack Developer',
      duration: 'Juil 2024 - Aug2024',
      location: 'Sfax, Tunisia',
      description: [
        'Developed a real-time chat application using Flutter and Spring Boot ',
        'Secured communication between mobile client and server, increasing data security by 25%.',
        'Optimized performance for a seamless user experience',
        'Managed user authentication and messaging logic with MongoDB'
      ],
      technologies: ['Flutter', 'SpringBoot',  'MongoDB', 'Jwt','RestAPI','Postman']
    },
    {
      company: 'TEKABDEV',
      position: 'DevOps Developer',
      duration: 'Juil 2023 - Sep 2023',
      location: 'Tunisia, Sfax',
      description: [
        'Built scalable web apps using Vue.js, NestJS, and Docker for containerized environments',
        'Developed custom CRUD functionalities for enterprise resource management',
        'Delivered intuitive, user-focused UI components to enhance usability',
        
      ],
      technologies: ['Vue.js', 'Nest.js', 'PostgreSql', 'prisma','RestAPI','Node.js',         // Environnement d'exécution backend
  'TypeScript', 'Swagger', 'Gitlab', 'Docker']
    },
     {
      company: 'INTEGRATION TECHNOLOGY',
      position: 'Full Stack Developer',
      duration: 'Feb 2022 - Juin 2022',
      location: 'Tunisia, Medenine',
      description: [
        'Led development of a web and mobile app supporting Covid-19 response efforts.',
        'Designed and built a location-based service to identify available oxygen devices in real time',
        'Developed an online contact service to aid communication for Covid-affected users',
        'Built a centralized dashboard '
        
      ],
      technologies: [
  'Flutter',          // Développement mobile cross-platform
  'Firebase',         // Authentification, base de données temps réel, cloud messaging
  'PHP',              // Développement backend
  'MySQL',            // Base de données relationnelle pour le backend PHP
  'Google Maps API',  // Localisation et services basés sur la géolocalisation
  'REST API',         // Communication entre l’application mobile/web et le backend
  'Git',              // Gestion de version
  'JSON',             // Format d’échange de données
]
    },
    {
      company: 'INTEGRATION TECHNOLOGY',
      position: 'Full Stack Developer',
      duration: 'Aug 2021 - Sep 2021',
      location: 'Tunisia, Medenine',
      description: [
        'Designed a user-friendly interface for reporting streetlight malfunctions',
        'Built a centralized dashboard showing real-time incident reports with geolocation data.',
        
        
      ],
      technologies: [
  'Java',                // Pour la logique métier ou une partie du backend
  'PHP',                 // Backend côté serveur
  'MySQL',               // Base de données relationnelle
  'HTML',                // Structure des pages web
  'CSS',                 // Mise en forme du front
  'JavaScript',          // Interactivité côté client
  'Google Maps API',     // Pour la géolocalisation des incidents
  'REST API',            // Communication entre front et back
  'Git',                 // Gestion de version
  'JSON',                // Échange de données
]

    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="experience">
      <div className="max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-4"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey through innovative companies and challenging projects
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600"></div>

          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-20 pb-16">
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-white shadow-lg"></div>

              <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.position}</h3>
                    <div className="flex items-center text-blue-600 mb-2">
                      <Building size={18} className="mr-2" />
                      <span className="font-semibold">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end text-gray-600">
                    <div className="flex items-center mb-1">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-2" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-2 mb-6">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="text-gray-700 flex items-start">
                      <span className="text-blue-500 mr-2 mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;