import React from 'react';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageSquare,
  Mail,
  ExternalLink,
  ArrowLeft,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Organization, Repository } from '../types/organization';

interface OrganizationDetailsProps {
  organization: Organization;
}

const SocialIcon = ({ url, icon: Icon, label }: { url?: string; icon: React.FC<any>; label: string }) => {
  if (!url) return null;
  
  return (
    <motion.a
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="p-3 bg-white/5 rounded-full hover:bg-white/10 transition-colors text-cyan-400"
      aria-label={label}
    >
      <Icon size={24} />
    </motion.a>
  );
};

const RepositoryCard: React.FC<{ repository: Repository }> = ({ repository }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    whileHover={{ y: -5 }}
    className="bg-navy-800/50 rounded-xl border border-white/10 p-6 backdrop-blur-xl
      hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300"
  >
    <div className="flex justify-between items-center mb-3">
      <h4 className="font-semibold text-lg text-white">{repository.name}</h4>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={repository.url}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white
          shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
          transition-all duration-300 flex items-center gap-2"
      >
        <ExternalLink size={16} />
        View Repo
      </motion.a>
    </div>
    <div className="flex flex-wrap gap-2">
      {repository.techStack.map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 bg-white/5 rounded-full text-sm text-cyan-400 border border-cyan-400/20"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
);

export const OrganizationDetails: React.FC<OrganizationDetailsProps> = ({ organization }) => {
  const [visibleRepos, setVisibleRepos] = React.useState(11);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-navy-900"
    >
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl mb-8">
          <div className="flex items-center gap-6 mb-6">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-50" />
              <img
                src={organization.logo}
                alt={`${organization.name} logo`}
                className="relative w-24 h-24 rounded-full object-cover border-2 border-white/10"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                {organization.name}
              </h1>
              <p className="text-gray-400">Founded by {organization.founder}</p>
            </div>
          </div>

          <p className="text-gray-300 mb-8">{organization.description}</p>

          <div className="flex gap-4">
            <SocialIcon url={organization.socialLinks.github} icon={Github} label="GitHub" />
            <SocialIcon url={organization.socialLinks.linkedin} icon={Linkedin} label="LinkedIn" />
            <SocialIcon url={organization.socialLinks.twitter} icon={Twitter} label="Twitter" />
            <SocialIcon url={organization.socialLinks.instagram} icon={Instagram} label="Instagram" />
            <SocialIcon url={organization.socialLinks.discord} icon={MessageSquare} label="Discord" />
            <SocialIcon url={organization.socialLinks.gmail} icon={Mail} label="Email" />
          </div>
        </div>

        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            {organization.name} Repositories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {organization.repositories.slice(0, visibleRepos).map((repo) => (
              <RepositoryCard key={repo.id} repository={repo} />
            ))}
          </div>
          {organization.repositories.length > visibleRepos && (
            <div className="text-center mt-8">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setVisibleRepos((prev) => prev + 11)}
                className="px-6 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white
                  shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
                  transition-all duration-300"
              >
                Load More Repositories
              </motion.button>
            </div>
          )}
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Mentors
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {organization.mentors.map((mentor) => (
              <motion.div
                key={mentor.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5 }}
                className="bg-navy-800/50 rounded-xl border border-white/10 p-6 backdrop-blur-xl
                  hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-50" />
                    <img
                      src={mentor.image}
                      alt={mentor.name}
                      className="relative w-16 h-16 rounded-full object-cover border-2 border-white/10"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{mentor.name}</h3>
                </div>
                <div className="flex gap-3">
                  <SocialIcon url={mentor.socialLinks.github} icon={Github} label="GitHub" />
                  <SocialIcon url={mentor.socialLinks.linkedin} icon={Linkedin} label="LinkedIn" />
                  <SocialIcon url={mentor.socialLinks.twitter} icon={Twitter} label="Twitter" />
                  <SocialIcon url={mentor.socialLinks.gmail} icon={Mail} label="Email" />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </motion.div>
  );
};