import React from 'react';
import { motion } from 'framer-motion';
import { Github, FileText, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Organization } from '../types/organization';

interface OrganizationCardProps {
  organization: Organization;
  onViewDetails?: () => void;
  isPreview?: boolean;
}

export const OrganizationCard: React.FC<OrganizationCardProps> = ({
  organization,
  onViewDetails,
  isPreview = false
}) => {
  const ViewDetailsButton = isPreview ? 'button' : Link;
  const viewDetailsProps = isPreview
    ? { onClick: onViewDetails }
    : { to: `/${organization.name.toLowerCase().replace(/\s+/g, '-')}` };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="group relative bg-navy-800/50 rounded-xl border border-white/10 p-6 backdrop-blur-xl
        hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300"
    >
      <div className="flex items-center mb-4">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity" />
          <img
            src={organization.logo}
            alt={`${organization.name} logo`}
            className="relative w-12 h-12 rounded-full object-cover border-2 border-white/10"
          />
        </div>
        <div className="ml-4">
          <h3 className="text-xl font-bold text-white">{organization.name}</h3>
          <p className="text-sm text-gray-400 italic">By: {organization.founder}</p>
        </div>
      </div>

      <p className="text-gray-300 mb-6 line-clamp-2">{organization.shortDescription}</p>

      <div className="flex gap-3 mb-6">
        {organization.githubUrl && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={organization.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-cyan-400"
          >
            <Github size={20} />
          </motion.a>
        )}
        {organization.docsUrl && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={organization.docsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-purple-400"
          >
            <FileText size={20} />
          </motion.a>
        )}
        {organization.websiteUrl && (
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href={organization.websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-white/5 rounded-lg hover:bg-white/10 transition-colors text-blue-400"
          >
            <Globe size={20} />
          </motion.a>
        )}
      </div>

      <ViewDetailsButton
        {...viewDetailsProps}
        className="w-full py-2 px-4 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-medium
          shadow-[0_0_15px_rgba(56,189,248,0.2)] hover:shadow-[0_0_25px_rgba(56,189,248,0.4)]
          transition-all duration-300 text-center"
      >
        View Details
      </ViewDetailsButton>
    </motion.div>
  );
};