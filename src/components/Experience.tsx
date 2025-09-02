import React from 'react';
import { Calendar, MapPin, Building } from 'lucide-react';

const Experience = () => {
 const experiences = [
  {
    company: 'IOVISION',
    position: 'DevOps & Full Stack Engineer ',
    duration: 'Feb 2025 - Jun 2025',
    location: 'Sfax, Tunisia',
    description: [
      'Containerization of microservices using Docker & Docker Compose (multi-container setups, networks …)',
      'Provisioning of Microsoft Azure infrastructure (VMs, VNets, NSGs) with Terraform (IaC)',
      'Automation of microservices deployment (Node.js, React, PostgreSQL) with Ansible',
      'Design of manual test plans for front/back features',
      'API testing (Postman) and automated UI testing (Playwright)',
      'End-to-end QA lifecycle management (bugs, tracking, and resolution via Jira)',
      'Built CI/CD pipelines (GitHub Actions) including unit tests, SAST, DAST, and vulnerability scans resulting in a 40% reduction in production errors and a 30% acceleration of the deployment cycle',
      'System monitoring with Prometheus & Grafana (dashboards and metrics)'
    ],
    technologies: ['React', 'Node.js','PostgreSql','Azure','Docker','Ansible','Terraform','GithubActions','DevSecOps','OWASP','SonarQube','Snyk','Trivy']
  },
  {
    company: 'ASM',
    position: 'Full Stack Developer',
    duration: 'Jul 2024 - Aug 2024',
    location: 'Sfax, Tunisia',
    description: [
      'Developed a real-time chat application (Flutter + Spring Boot)',
      'Enhanced security (+25%) by securing API communication and user sessions',
      'Optimized the backend to reduce latency and improve user experience',
      'Managed MongoDB database for authentication and message storage'
    ],
    technologies: ['Flutter','SpringBoot','MongoDB','Jwt','RestAPI','Postman']
  },
  {
    company: 'TEKABDEV',
    position: 'Full Stack Developer',
    duration: 'Jul 2023 - Aug 2023',
    location: 'Sfax, Tunisia',
    description: [
      'Developed scalable web applications with Vue.js (frontend) and NestJS (backend), deployed in Docker containerized environments to ensure portability and performance',
      'Implemented complex business CRUD features for enterprise clients, optimizing process management and improving productivity',
      'Designed and integrated reusable and responsive UI components focused on user experience (UX), reducing development time and improving visual consistency of applications'
    ],
    technologies: ['Vue.js','Nest.js','PostgreSql','Prisma','RestAPI','Node.js','TypeScript','Swagger','Gitlab','Docker','Grafana','Prometheus']
  },
  {
    company: 'INTEGRATION TECHNOLOGY',
    position: 'Full Stack Developer',
    duration: 'Feb 2022 - Jun 2022',
    location: 'Medenine, Tunisia',
    description: [
      'Led development of a web and mobile app supporting Covid-19 response efforts',
      'Designed and built a location-based service to identify available oxygen devices in real time',
      'Developed an online contact service to facilitate communication for Covid-affected users',
      'Built a centralized dashboard'
    ],
    technologies: [
      'Flutter',          
      'Firebase',         
      'PHP',              
      'MySQL',            
      'Google Maps API',  
      'REST API',         
      'Git',              
      'JSON'
    ]
  },
  {
    company: 'INTEGRATION TECHNOLOGY',
    position: 'Full Stack Developer',
    duration: 'Aug 2021 - Sep 2021',
    location: 'Medenine, Tunisia',
    description: [
      'Designed a user-friendly interface for reporting streetlight malfunctions',
      'Built a centralized dashboard showing real-time incident reports with geolocation data'
    ],
    technologies: [
      'Java',
      'PHP',
      'MySQL',
      'HTML',
      'CSS',
      'JavaScript',
      'Google Maps API',
      'REST API',
      'Git',
      'JSON'
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