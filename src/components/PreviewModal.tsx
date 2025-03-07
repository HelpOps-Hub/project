import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { OrganizationCard } from './OrganizationCard';
import { OrganizationDetails } from './OrganizationDetails';
import type { Organization } from '../types/organization';

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  organization: Organization;
  showDetails: boolean;
  onToggleDetails: () => void;
}

export const PreviewModal: React.FC<PreviewModalProps> = ({
  isOpen,
  onClose,
  organization,
  showDetails,
  onToggleDetails,
}) => {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
            <h2 className="text-2xl font-bold">Preview Organization</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          <div className="p-8">
            {showDetails ? (
              <OrganizationDetails organization={organization} />
            ) : (
              <div className="max-w-md mx-auto">
                <OrganizationCard
                  organization={organization}
                  onViewDetails={onToggleDetails}
                  isPreview
                />
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};