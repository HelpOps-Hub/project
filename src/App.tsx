import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProjectsPage } from './pages/ProjectsPage';
import { OrganizationDetails } from './components/OrganizationDetails';
import { AdminPage } from './pages/AdminPage';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Footer } from './components/Footer';
import type { Organization } from './types/organization';

// Sample organizations data
const organizations: Organization[] = [
  {
    id: '1',
    name: 'HelpOps Hub',
    founder: 'Azfar Alam',
    description: 'HelpOps Hub is a groundbreaking platform that revolutionizes how organizations manage their operations. We provide cutting-edge open-source solutions that streamline workflows, enhance collaboration, and boost productivity. Our mission is to make enterprise-grade operations management accessible to teams of all sizes, fostering innovation and efficiency in the modern workplace.',
    shortDescription: 'Revolutionizing operations management through open source collaboration',
    logo: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=400&h=400&fit=crop',
    githubUrl: 'https://github.com/helpops-hub',
    docsUrl: 'https://docs.helpops-hub.com',
    websiteUrl: 'https://helpops-hub.com',
    socialLinks: {
      github: 'https://github.com/helpops-hub',
      linkedin: 'https://linkedin.com/company/helpops-hub',
      twitter: 'https://twitter.com/helpopshub',
      discord: 'https://discord.gg/helpops-hub',
      gmail: 'mailto:contact@helpops-hub.com'
    },
    repositories: [
      {
        id: '1',
        name: 'helpops-core',
        techStack: ['React', 'TypeScript', 'Node.js'],
        url: 'https://github.com/helpops-hub/helpops-core'
      },
      {
        id: '2',
        name: 'workflow-engine',
        techStack: ['Go', 'gRPC', 'PostgreSQL'],
        url: 'https://github.com/helpops-hub/workflow-engine'
      },
      {
        id: '3',
        name: 'analytics-dashboard',
        techStack: ['Vue.js', 'D3.js', 'GraphQL'],
        url: 'https://github.com/helpops-hub/analytics-dashboard'
      }
    ],
    mentors: [
      {
        id: '1',
        name: 'Azfar Alam',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        socialLinks: {
          github: 'https://github.com/azfaralam',
          linkedin: 'https://linkedin.com/in/azfaralam',
          twitter: 'https://twitter.com/azfaralam',
          gmail: 'mailto:azfar@helpopshub.com'
        }
      },
      {
        id: '2',
        name: 'Sarah Chen',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
        socialLinks: {
          github: 'https://github.com/sarahchen',
          linkedin: 'https://linkedin.com/in/sarahchen',
          gmail: 'mailto:sarah@helpops-hub.com'
        }
      }
    ]
  }
];

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-navy-900 text-white">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <ProjectsPage initialOrganizations={organizations} />
            </>
          } />
          <Route path="/admin/add" element={<AdminPage />} />
          <Route 
            path="/:organizationName" 
            element={<OrganizationDetails organization={organizations[0]} />}
          />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;