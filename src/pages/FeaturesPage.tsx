import React from 'react';
import { motion } from 'framer-motion';
import { 
  GitBranch, 
  Users, 
  BarChart3, 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Code, 
  Target,
  Workflow,
  Database,
  Monitor,
  Boxes,
  BookOpen,
  MessageSquare,
  Award,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.FC<any>;
  title: string;
  description: string;
  features: string[];
  delay?: number;
}> = ({ icon: Icon, title, description, features, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className="bg-navy-800/50 rounded-xl border border-white/10 p-8 backdrop-blur-xl
      hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300 group"
  >
    <div className="flex items-center mb-6">
      <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4
        group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-shadow">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-xl font-bold text-white">{title}</h3>
    </div>
    <p className="text-gray-300 mb-6">{description}</p>
    <ul className="space-y-3">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start">
          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 mt-0.5 flex-shrink-0" />
          <span className="text-gray-300">{feature}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

const StatCard: React.FC<{
  number: string;
  label: string;
  delay?: number;
}> = ({ number, label, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.6, delay }}
    className="text-center"
  >
    <div className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
      {number}
    </div>
    <div className="text-gray-400 mt-2">{label}</div>
  </motion.div>
);

export const FeaturesPage: React.FC = () => {
  const coreFeatures = [
    {
      icon: Workflow,
      title: "DevOps Workflow Automation",
      description: "Streamline your entire DevOps pipeline with intelligent automation tools that reduce manual work and eliminate human errors.",
      features: [
        "Automated CI/CD pipeline orchestration",
        "Infrastructure as Code (IaC) management",
        "Deployment rollback and recovery systems",
        "Multi-environment configuration management",
        "Custom workflow builder with drag-and-drop interface"
      ]
    },
    {
      icon: GitBranch,
      title: "Open Source Collaboration",
      description: "Foster innovation through seamless open source contribution management and community-driven development.",
      features: [
        "GitHub integration for seamless collaboration",
        "Contribution tracking and recognition system",
        "Code review automation and quality checks",
        "Community mentor matching platform",
        "Open source project discovery and onboarding"
      ]
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics Dashboard",
      description: "Gain deep insights into your operations with comprehensive analytics and real-time monitoring capabilities.",
      features: [
        "Real-time performance metrics and KPIs",
        "Custom dashboard creation with D3.js visualizations",
        "Predictive analytics for resource planning",
        "Cost optimization recommendations",
        "Historical trend analysis and reporting"
      ]
    },
    {
      icon: Cloud,
      title: "Multi-Cloud Infrastructure",
      description: "Deploy and manage your applications across multiple cloud providers with unified control and monitoring.",
      features: [
        "AWS, Azure, GCP multi-cloud support",
        "Kubernetes cluster management and scaling",
        "Container orchestration and deployment",
        "Service mesh integration (Istio, Linkerd)",
        "Cloud cost monitoring and optimization"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Ensure your infrastructure meets the highest security standards with built-in compliance monitoring.",
      features: [
        "Automated security scanning and vulnerability detection",
        "Compliance monitoring (SOC 2, GDPR, HIPAA)",
        "Secret management and encryption",
        "Access control and role-based permissions",
        "Security incident response automation"
      ]
    },
    {
      icon: Monitor,
      title: "Real-time Monitoring",
      description: "Monitor your entire infrastructure stack with advanced alerting and incident management capabilities.",
      features: [
        "Application performance monitoring (APM)",
        "Infrastructure health monitoring",
        "Custom alerting rules and notifications",
        "Log aggregation and analysis",
        "SLA monitoring and reporting"
      ]
    }
  ];

  const platformFeatures = [
    {
      icon: Users,
      title: "Community Management",
      description: "Build and nurture vibrant open source communities with comprehensive management tools."
    },
    {
      icon: Code,
      title: "Code Quality Assurance",
      description: "Maintain high code standards with automated testing, linting, and quality gate enforcement."
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Efficiently manage and migrate data across different environments with zero downtime."
    },
    {
      icon: Boxes,
      title: "Microservices Architecture",
      description: "Design, deploy, and manage microservices with service discovery and load balancing."
    },
    {
      icon: Globe,
      title: "Global CDN Integration",
      description: "Optimize content delivery worldwide with intelligent caching and edge computing."
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Automatically optimize application performance with AI-driven recommendations."
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: "Faster Time to Market",
      description: "Reduce deployment time by 80% with automated pipelines and streamlined workflows."
    },
    {
      icon: Award,
      title: "Enterprise-Grade Reliability",
      description: "Achieve 99.9% uptime with robust monitoring and automated failover mechanisms."
    },
    {
      icon: BookOpen,
      title: "Learning & Development",
      description: "Access comprehensive documentation, tutorials, and mentorship programs."
    },
    {
      icon: MessageSquare,
      title: "24/7 Community Support",
      description: "Get help from our active community of DevOps experts and contributors."
    }
  ];

  return (
    <div className="min-h-screen bg-navy-900">
      {/* Hero Section */}
      <div className="relative overflow-hidden py-20 sm:py-32">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600"
            >
              Powerful Features for
              <br />
              Modern DevOps Teams
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-gray-400 max-w-3xl mx-auto"
            >
              Discover the comprehensive suite of tools and capabilities that make HelpOps-Hub the ultimate platform for DevOps automation, collaboration, and innovation.
            </motion.p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCard number="500+" label="Active Contributors" delay={0.1} />
          <StatCard number="50K+" label="Deployments Automated" delay={0.2} />
          <StatCard number="99.9%" label="Uptime Guarantee" delay={0.3} />
          <StatCard number="200+" label="Integrations Available" delay={0.4} />
        </div>
      </div>

      {/* Core Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Core Platform Features
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to build, deploy, and manage modern applications at scale
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {coreFeatures.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              features={feature.features}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>

      {/* Platform Features Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Additional Platform Capabilities
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Extended functionality to support every aspect of your DevOps journey
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platformFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-800/50 rounded-xl border border-white/10 p-6 backdrop-blur-xl
                hover:shadow-[0_0_25px_rgba(56,189,248,0.1)] transition-all duration-300 group"
            >
              <div className="flex items-center mb-4">
                <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4
                  group-hover:shadow-[0_0_20px_rgba(56,189,248,0.4)] transition-shadow">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{feature.title}</h3>
              </div>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Why Choose HelpOps-Hub?
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join thousands of teams who trust HelpOps-Hub for their DevOps needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex p-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mb-4
                shadow-[0_0_20px_rgba(56,189,248,0.3)]">
                <benefit.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
              <p className="text-gray-300">{benefit.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-4">
            Built with Modern Technologies
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Leveraging the latest and most reliable technologies in the DevOps ecosystem
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {['React', 'TypeScript', 'Node.js', 'Go', 'GraphQL', 'PostgreSQL', 'Docker', 'Kubernetes', 'AWS', 'Terraform', 'Prometheus', 'Grafana'].map((tech, index) => (
            <motion.div
              key={tech}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-navy-800/50 rounded-lg border border-white/10 p-4 text-center
                hover:shadow-[0_0_15px_rgba(56,189,248,0.1)] transition-all duration-300"
            >
              <span className="text-white font-medium">{tech}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500/10 to-purple-600/10 rounded-2xl border border-white/10 p-12 text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-6">
            Ready to Transform Your DevOps?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our community and start building the future of DevOps with open source collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.a
              href="https://github.com/helpops-hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium
                shadow-[0_0_15px_rgba(56,189,248,0.3)] hover:shadow-[0_0_25px_rgba(56,189,248,0.5)] transition-shadow"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </motion.a>
            <motion.a
              href="https://discord.gg/helpops-hub"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-3 rounded-full border border-gray-700 text-white font-medium
                hover:bg-white/5 transition-colors"
            >
              Join Community
            </motion.a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};