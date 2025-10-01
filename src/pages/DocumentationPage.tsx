import React from 'react';
import { motion } from 'framer-motion';
import { 
  FileText, 
  Code, 
  Users, 
  Folder, 
  Terminal, 
  Database, 
  Settings, 
  Globe,
  Github,
  BookOpen,
  Layers,
  Zap,
  Heart,
  Star,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

export const DocumentationPage: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const technologies = [
    { name: 'React 18', desc: 'Frontend framework with hooks and modern features', icon: Code },
    { name: 'TypeScript', desc: 'Type-safe JavaScript development', icon: FileText },
    { name: 'Tailwind CSS', desc: 'Utility-first CSS framework for styling', icon: Layers },
    { name: 'Framer Motion', desc: 'Production-ready motion library for React', icon: Zap },
    { name: 'React Router', desc: 'Client-side routing for single page applications', icon: ArrowRight },
    { name: 'Vite', desc: 'Fast build tool and development server', icon: Terminal },
    { name: 'Lucide React', desc: 'Beautiful & consistent icon library', icon: Star },
    { name: 'ESLint', desc: 'Static code analysis for code quality', icon: CheckCircle }
  ];

  const features = [
    {
      title: 'Organization Showcase',
      desc: 'Display open-source organizations with detailed profiles, founder information, and project repositories.',
      icon: Users
    },
    {
      title: 'Project Discovery',
      desc: 'Browse and search through various projects with filtering capabilities and technology stack information.',
      icon: Globe
    },
    {
      title: 'Interactive Cards',
      desc: 'Beautifully designed organization cards with hover effects and smooth animations.',
      icon: Layers
    },
    {
      title: 'Admin Panel',
      desc: 'Administrative interface for adding new organizations and managing content.',
      icon: Settings
    },
    {
      title: 'Responsive Design',
      desc: 'Fully responsive layout that works seamlessly across all device sizes.',
      icon: Terminal
    },
    {
      title: 'Community Focus',
      desc: 'Built to foster open-source collaboration and community engagement.',
      icon: Heart
    }
  ];



  return (
    <div className="min-h-screen bg-navy-900 text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-navy-900 via-navy-800 to-purple-900 py-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeInUp} className="text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full">
                <BookOpen className="w-16 h-16 text-cyan-400" />
              </div>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 text-transparent bg-clip-text mb-6">
              HelpOps Hub Documentation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Complete guide to understanding and contributing to the HelpOps Hub platform - 
              where DevOps meets open source collaboration.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Project Overview */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Terminal className="w-8 h-8 text-cyan-400 mr-3" />
            Project Overview
          </h2>
          <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl">
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              HelpOps Hub is a revolutionary platform that bridges the gap between DevOps practitioners and open-source collaboration. 
              Our mission is to create a centralized hub where organizations can showcase their DevOps projects, 
              share knowledge, and build a stronger community.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-3">🎯 Vision</h3>
                <p className="text-gray-300">
                  To become the go-to platform for DevOps professionals to discover, collaborate, 
                  and contribute to meaningful open-source projects.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-3">🚀 Mission</h3>
                <p className="text-gray-300">
                  Streamline workflows, enhance collaboration, and boost productivity through 
                  cutting-edge open-source solutions accessible to teams of all sizes.
                </p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Key Features */}
        <motion.section variants={staggerContainer} initial="initial" animate="animate" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="w-8 h-8 text-cyan-400 mr-3" />
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-navy-800/50 rounded-xl border border-white/10 p-6 backdrop-blur-xl hover:border-cyan-500/30 transition-colors"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg">
                    <feature.icon className="w-6 h-6 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Technology Stack */}
        <motion.section variants={staggerContainer} initial="initial" animate="animate" className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Code className="w-8 h-8 text-cyan-400 mr-3" />
            Technology Stack
          </h2>
          <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl">
            <p className="text-gray-300 mb-8 text-lg">
              Built with modern web technologies to ensure performance, scalability, and developer experience:
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-lg p-4 border border-white/5 hover:border-cyan-500/20 transition-colors"
                >
                  <div className="flex items-center mb-2">
                    <tech.icon className="w-5 h-5 text-cyan-400 mr-2" />
                    <h4 className="font-semibold text-white">{tech.name}</h4>
                  </div>
                  <p className="text-sm text-gray-400">{tech.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Project Structure */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Folder className="w-8 h-8 text-cyan-400 mr-3" />
            Project Structure
          </h2>
          <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">📁 Directory Overview</h3>
                <div className="space-y-3">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-4 border border-cyan-500/20">
                    <div className="flex items-center mb-2">
                      <Folder className="w-5 h-5 text-cyan-400 mr-2" />
                      <span className="font-semibold text-white">src/components/</span>
                    </div>
                    <p className="text-sm text-gray-300 ml-7">Reusable UI components (Navbar, Hero, Cards, etc.)</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-4 border border-purple-500/20">
                    <div className="flex items-center mb-2">
                      <Folder className="w-5 h-5 text-purple-400 mr-2" />
                      <span className="font-semibold text-white">src/pages/</span>
                    </div>
                    <p className="text-sm text-gray-300 ml-7">Main application pages (Projects, Admin, Documentation)</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg p-4 border border-green-500/20">
                    <div className="flex items-center mb-2">
                      <Folder className="w-5 h-5 text-green-400 mr-2" />
                      <span className="font-semibold text-white">src/types/</span>
                    </div>
                    <p className="text-sm text-gray-300 ml-7">TypeScript interfaces and type definitions</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🔧 Core Components</h3>
                <div className="space-y-3">
                  <div className="flex items-center p-3 bg-navy-700/50 rounded-lg border border-white/5">
                    <FileText className="w-5 h-5 text-cyan-400 mr-3" />
                    <div>
                      <span className="font-semibold text-white">App.tsx</span>
                      <p className="text-sm text-gray-400">Main app with routing and data management</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-navy-700/50 rounded-lg border border-white/5">
                    <Users className="w-5 h-5 text-purple-400 mr-3" />
                    <div>
                      <span className="font-semibold text-white">OrganizationCard.tsx</span>
                      <p className="text-sm text-gray-400">Interactive cards for organization display</p>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-navy-700/50 rounded-lg border border-white/5">
                    <Settings className="w-5 h-5 text-green-400 mr-3" />
                    <div>
                      <span className="font-semibold text-white">AdminPage.tsx</span>
                      <p className="text-sm text-gray-400">Content management and organization addition</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Data Models */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Database className="w-8 h-8 text-cyan-400 mr-3" />
            Data Models
          </h2>
          <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg p-6 border border-cyan-500/20">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">🏢 Organization Interface</h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-gray-300"><span className="text-cyan-400">id:</span> string</div>
                  <div className="text-gray-300"><span className="text-cyan-400">name:</span> string</div>
                  <div className="text-gray-300"><span className="text-cyan-400">founder:</span> string</div>
                  <div className="text-gray-300"><span className="text-cyan-400">description:</span> string</div>
                  <div className="text-gray-300"><span className="text-cyan-400">logo:</span> string</div>
                  <div className="text-gray-300"><span className="text-cyan-400">repositories:</span> Repository[]</div>
                  <div className="text-gray-300"><span className="text-cyan-400">mentors:</span> Mentor[]</div>
                  <div className="text-gray-300"><span className="text-cyan-400">socialLinks:</span> SocialLinks</div>
                </div>
              </div>
              <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">📚 Repository Interface</h3>
                <div className="space-y-2 text-sm font-mono">
                  <div className="text-gray-300"><span className="text-purple-400">id:</span> string</div>
                  <div className="text-gray-300"><span className="text-purple-400">name:</span> string</div>
                  <div className="text-gray-300"><span className="text-purple-400">techStack:</span> string[]</div>
                  <div className="text-gray-300"><span className="text-purple-400">url:</span> string</div>
                </div>
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-green-400 mb-3">👨‍💻 Mentor Interface</h4>
                  <div className="space-y-2 text-sm font-mono">
                    <div className="text-gray-300"><span className="text-green-400">id:</span> string</div>
                    <div className="text-gray-300"><span className="text-green-400">name:</span> string</div>
                    <div className="text-gray-300"><span className="text-green-400">image:</span> string</div>
                    <div className="text-gray-300"><span className="text-green-400">socialLinks:</span> SocialLinks</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Getting Started */}
        <motion.section {...fadeInUp} className="mb-20">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Zap className="w-8 h-8 text-cyan-400 mr-3" />
            Getting Started
          </h2>
          <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🛠️ Development Setup</h3>
                <div className="space-y-4">
                  <div className="bg-navy-700/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center mb-2">
                      <span className="bg-cyan-500 text-white text-xs px-2 py-1 rounded mr-3">1</span>
                      <span className="font-semibold text-white">Install Dependencies</span>
                    </div>
                    <code className="text-sm text-gray-300 bg-navy-600/50 px-3 py-2 rounded block">npm install</code>
                  </div>
                  <div className="bg-navy-700/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center mb-2">
                      <span className="bg-purple-500 text-white text-xs px-2 py-1 rounded mr-3">2</span>
                      <span className="font-semibold text-white">Start Development Server</span>
                    </div>
                    <code className="text-sm text-gray-300 bg-navy-600/50 px-3 py-2 rounded block">npm run dev</code>
                  </div>
                  <div className="bg-navy-700/50 rounded-lg p-4 border border-white/5">
                    <div className="flex items-center mb-2">
                      <span className="bg-green-500 text-white text-xs px-2 py-1 rounded mr-3">3</span>
                      <span className="font-semibold text-white">Build for Production</span>
                    </div>
                    <code className="text-sm text-gray-300 bg-navy-600/50 px-3 py-2 rounded block">npm run build</code>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white mb-4">🤝 Contributing</h3>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Fork the Repository</p>
                      <p className="text-sm text-gray-400">Create your own copy to work on</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-blue-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Create Feature Branch</p>
                      <p className="text-sm text-gray-400">Use descriptive branch names</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-purple-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-semibold text-white">Submit Pull Request</p>
                      <p className="text-sm text-gray-400">Follow our contribution guidelines</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Call to Action */}
        <motion.section {...fadeInUp} className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-xl border border-gradient-to-r border-cyan-500/30 p-12 backdrop-blur-xl">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full">
                <Heart className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Join the HelpOps Community</h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Ready to contribute to the future of DevOps? Join our growing community of developers, 
              contributors, and open-source enthusiasts.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="https://github.com/helpops-hub"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <Github className="w-5 h-5 mr-2" />
                View on GitHub
              </motion.a>
              <motion.a
                href="https://discord.com/invite/UWTrRhqywt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-shadow"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Discord
              </motion.a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};