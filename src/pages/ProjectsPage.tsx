import React, { useState } from 'react';
import { SearchBar } from '../components/SearchBar';
import { OrganizationCard } from '../components/OrganizationCard';
import { Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import type { Organization } from '../types/organization';

interface ProjectsPageProps {
  initialOrganizations: Organization[];
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({ initialOrganizations }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [organizations] = useState<Organization[]>(initialOrganizations);

  const filteredOrganizations = organizations.filter((org) =>
    org.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    org.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-navy-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
          >
            Projects & Organizations
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <Link
              to="/admin/add"
              className="flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg
                text-white shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                transition-shadow"
            >
              <Settings size={20} className="mr-2" />
              Admin Panel
            </Link>
          </motion.div>
        </div>

        <div className="mb-12">
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredOrganizations.map((org, index) => (
            <motion.div
              key={org.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <OrganizationCard organization={org} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};