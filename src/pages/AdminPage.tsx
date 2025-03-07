import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Upload, Plus, X, Eye, ArrowLeft } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { PreviewModal } from '../components/PreviewModal';
import type { Organization, Repository, Mentor, SocialLinks } from '../types/organization';

interface AdminFormData {
  name: string;
  founder: string;
  shortDescription: string;
  description: string;
  logo: string;
  githubUrl: string;
  docsUrl: string;
  websiteUrl: string;
  socialLinks: SocialLinks;
  repositories: Repository[];
  mentors: Mentor[];
}

const initialFormData: AdminFormData = {
  name: '',
  founder: '',
  shortDescription: '',
  description: '',
  logo: '',
  githubUrl: '',
  docsUrl: '',
  websiteUrl: '',
  socialLinks: {},
  repositories: [],
  mentors: []
};

const emptyRepository: Repository = {
  id: '',
  name: '',
  techStack: [],
  url: ''
};

const emptyMentor: Mentor = {
  id: '',
  name: '',
  image: '',
  socialLinks: {}
};

export const AdminPage: React.FC = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<AdminFormData>(initialFormData);
  const [techStackInput, setTechStackInput] = useState('');
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [showPreviewDetails, setShowPreviewDetails] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSocialLinkChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [name]: value
      }
    }));
  };

  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should not exceed 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          logo: reader.result as string
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const addRepository = () => {
    setFormData(prev => ({
      ...prev,
      repositories: [...prev.repositories, { ...emptyRepository, id: crypto.randomUUID() }]
    }));
  };

  const removeRepository = (index: number) => {
    setFormData(prev => ({
      ...prev,
      repositories: prev.repositories.filter((_, i) => i !== index)
    }));
  };

  const handleRepositoryChange = (index: number, field: keyof Repository, value: string) => {
    setFormData(prev => ({
      ...prev,
      repositories: prev.repositories.map((repo, i) => 
        i === index ? { ...repo, [field]: value } : repo
      )
    }));
  };

  const addTechStack = (index: number) => {
    if (!techStackInput.trim()) return;
    setFormData(prev => ({
      ...prev,
      repositories: prev.repositories.map((repo, i) => 
        i === index ? { ...repo, techStack: [...repo.techStack, techStackInput.trim()] } : repo
      )
    }));
    setTechStackInput('');
  };

  const removeTechStack = (repoIndex: number, techIndex: number) => {
    setFormData(prev => ({
      ...prev,
      repositories: prev.repositories.map((repo, i) => 
        i === repoIndex ? 
        { ...repo, techStack: repo.techStack.filter((_, ti) => ti !== techIndex) } : 
        repo
      )
    }));
  };

  const addMentor = () => {
    setFormData(prev => ({
      ...prev,
      mentors: [...prev.mentors, { ...emptyMentor, id: crypto.randomUUID() }]
    }));
  };

  const removeMentor = (index: number) => {
    setFormData(prev => ({
      ...prev,
      mentors: prev.mentors.filter((_, i) => i !== index)
    }));
  };

  const handleMentorChange = (index: number, field: keyof Mentor | keyof SocialLinks, value: string) => {
    setFormData(prev => ({
      ...prev,
      mentors: prev.mentors.map((mentor, i) => 
        i === index ? 
        (field in mentor ? 
          { ...mentor, [field]: value } : 
          { ...mentor, socialLinks: { ...mentor.socialLinks, [field]: value } }
        ) : mentor
      )
    }));
  };

  const handleMentorImageUpload = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Image size should not exceed 2MB');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        handleMentorChange(index, 'image', reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/');
  };

  const previewOrganization: Organization = {
    id: crypto.randomUUID(),
    ...formData
  };

  return (
    <div className="min-h-screen bg-navy-900 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Projects
        </Link>

        <div className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl">
          <h1 className="text-3xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
            Admin Dashboard
          </h1>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Organization Information */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Organization Information
              </h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  {formData.logo && (
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg blur opacity-50" />
                      <img
                        src={formData.logo}
                        alt="Preview"
                        className="relative w-20 h-20 rounded-lg object-cover border-2 border-white/10"
                      />
                    </div>
                  )}
                  <div className="flex-1">
                    <label className="block text-sm font-medium text-gray-300">Organization Logo</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleLogoUpload}
                      className="mt-1 block w-full text-sm text-gray-400
                        file:mr-4 file:py-2 file:px-4
                        file:rounded-full file:border-0
                        file:text-sm file:font-semibold
                        file:bg-white/5 file:text-cyan-400
                        hover:file:bg-white/10
                        cursor-pointer"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Organization Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    maxLength={50}
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Founder Name</label>
                  <input
                    type="text"
                    name="founder"
                    value={formData.founder}
                    onChange={handleInputChange}
                    maxLength={40}
                    required
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">
                    Short Description (Max 200 characters)
                  </label>
                  <textarea
                    name="shortDescription"
                    value={formData.shortDescription}
                    onChange={handleInputChange}
                    maxLength={200}
                    required
                    rows={2}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Full Description</label>
                  <textarea
                    name="description"
                    value={formData.description}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>
              </div>
            </section>

            {/* Organization URLs */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Organization URLs
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-300">GitHub URL</label>
                  <input
                    type="url"
                    name="githubUrl"
                    value={formData.githubUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Documentation URL</label>
                  <input
                    type="url"
                    name="docsUrl"
                    value={formData.docsUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300">Website URL</label>
                  <input
                    type="url"
                    name="websiteUrl"
                    value={formData.websiteUrl}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                      focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                  />
                </div>
              </div>
            </section>

            {/* Social Links */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Social Links (Optional)
              </h2>
              <div className="space-y-4">
                {['github', 'linkedin', 'twitter', 'discord', 'gmail'].map((platform) => (
                  <div key={platform}>
                    <label className="block text-sm font-medium text-gray-300 capitalize">
                      {platform === 'gmail' ? 'Email' : platform} URL
                    </label>
                    <input
                      type={platform === 'gmail' ? 'email' : 'url'}
                      name={platform}
                      value={formData.socialLinks[platform] || ''}
                      onChange={handleSocialLinkChange}
                      className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                        focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* Repositories */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Repositories
                </h2>
                <motion.button
                  type="button"
                  onClick={addRepository}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Plus size={20} />
                  <span>Add Repository</span>
                </motion.button>
              </div>

              <div className="space-y-6">
                {formData.repositories.map((repo, index) => (
                  <div
                    key={repo.id}
                    className="p-4 bg-navy-800/50 rounded-xl border border-white/10 backdrop-blur-xl relative"
                  >
                    <motion.button
                      type="button"
                      onClick={() => removeRepository(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </motion.button>

                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300">Repository Name</label>
                        <input
                          type="text"
                          value={repo.name}
                          onChange={(e) => handleRepositoryChange(index, 'name', e.target.value)}
                          maxLength={50}
                          required
                          className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                            focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300">Repository URL</label>
                        <input
                          type="url"
                          value={repo.url}
                          onChange={(e) => handleRepositoryChange(index, 'url', e.target.value)}
                          required
                          className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                            focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300">Tech Stack</label>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {repo.techStack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-white/5 text-cyan-400 rounded-full text-sm flex items-center
                                border border-cyan-400/20"
                            >
                              {tech}
                              <button
                                type="button"
                                onClick={() => removeTechStack(index, techIndex)}
                                className="ml-2 text-cyan-400 hover:text-cyan-300"
                              >
                                <X size={14} />
                              </button>
                            </span>
                          ))}
                        </div>
                        <div className="flex mt-2">
                          <input
                            type="text"
                            value={techStackInput}
                            onChange={(e) => setTechStackInput(e.target.value)}
                            placeholder="Add technology..."
                            className="flex-1 rounded-l-lg bg-white/5 border border-white/10 text-white
                              focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                          />
                          <button
                            type="button"
                            onClick={() => addTechStack(index)}
                            className="px-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-r-lg
                              hover:shadow-[0_0_15px_rgba(56,189,248,0.3)] transition-shadow"
                          >
                            Add
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Mentors */}
            <section className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Mentors
                </h2>
                <motion.button
                  type="button"
                  onClick={addMentor}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  <Plus size={20} />
                  <span>Add Mentor</span>
                </motion.button>
              </div>

              <div className="space-y-6">
                {formData.mentors.map((mentor, index) => (
                  <div
                    key={mentor.id}
                    className="p-4 bg-navy-800/50 rounded-xl border border-white/10 backdrop-blur-xl relative"
                  >
                    <motion.button
                      type="button"
                      onClick={() => removeMentor(index)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="absolute top-2 right-2 text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={20} />
                    </motion.button>

                    <div className="space-y-4">
                      <div className="flex items-center space-x-4">
                        {mentor.image && (
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur opacity-50" />
                            <img
                              src={mentor.image}
                              alt={mentor.name}
                              className="relative w-20 h-20 rounded-full object-cover border-2 border-white/10"
                            />
                          </div>
                        )}
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-gray-300">Mentor Image</label>
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleMentorImageUpload(index, e)}
                            className="mt-1 block w-full text-sm text-gray-400
                              file:mr-4 file:py-2 file:px-4
                              file:rounded-full file:border-0
                              file:text-sm file:font-semibold
                              file:bg-white/5 file:text-cyan-400
                              hover:file:bg-white/10
                              cursor-pointer"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-300">Mentor Name</label>
                        <input
                          type="text"
                          value={mentor.name}
                          onChange={(e) => handleMentorChange(index, 'name', e.target.value)}
                          maxLength={50}
                          required
                          className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                            focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                        />
                      </div>

                      <div className="space-y-4">
                        {['github', 'linkedin', 'twitter', 'discord', 'gmail'].map((platform) => (
                          <div key={platform}>
                            <label className="block text-sm font-medium text-gray-300 capitalize">
                              {platform === 'gmail' ? 'Email' : platform} URL
                            </label>
                            <input
                              type={platform === 'gmail' ? 'email' : 'url'}
                              value={mentor.socialLinks[platform] || ''}
                              onChange={(e) => handleMentorChange(index, platform, e.target.value)}
                              className="mt-1 block w-full rounded-lg bg-white/5 border border-white/10 text-white
                                focus:ring-2 focus:ring-cyan-500 focus:border-transparent px-4 py-2"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4 pt-6">
              <motion.button
                type="button"
                onClick={() => setIsPreviewOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-2 bg-white/5 border border-white/10 rounded-lg text-white
                  hover:bg-white/10 transition-colors"
              >
                <Eye size={20} className="mr-2" />
                Preview
              </motion.button>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white
                  shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)]
                  transition-shadow"
              >
                <Upload size={20} className="mr-2" />
                Upload Organization
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      <PreviewModal
        isOpen={isPreviewOpen}
        onClose={() => {
          setIsPreviewOpen(false);
          setShowPreviewDetails(false);
        }}
        organization={previewOrganization}
        showDetails={showPreviewDetails}
        onToggleDetails={() => setShowPreviewDetails(!showPreviewDetails)}
      />
    </div>
  );
};