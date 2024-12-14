import { Code2, Fingerprint, LineChart, Lock, Rocket, Shield } from 'lucide-react';

export const services = [
  {
    title: 'Custom Development',
    description: 'Tailored solutions built with cutting-edge technologies to meet your specific business needs.',
    icon: Rocket,
    color: 'blue',
    features: ['Modern Tech Stack', 'Scalable Architecture', 'Performance Optimized']
  },
  {
    title: 'Security Solutions',
    description: 'Enterprise-grade security implementations to protect your valuable digital assets.',
    icon: Shield,
    color: 'green',
    features: ['End-to-end Encryption', 'Penetration Testing', 'Security Audits']
  },
  {
    title: 'Data Analytics',
    description: 'Transform your raw data into actionable insights with advanced analytics solutions.',
    icon: LineChart,
    color: 'purple',
    features: ['Real-time Analytics', 'Custom Dashboards', 'Predictive Models']
  },
  {
    title: 'Identity Management',
    description: 'Robust authentication and authorization systems for seamless user management.',
    icon: Fingerprint,
    color: 'orange',
    features: ['SSO Integration', 'Role-based Access', 'Multi-factor Auth']
  },
  {
    title: 'API Development',
    description: 'Design and implementation of scalable APIs that power your applications.',
    icon: Code2,
    color: 'pink',
    features: ['RESTful Services', 'GraphQL', 'API Documentation']
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital infrastructure.',
    icon: Lock,
    color: 'red',
    features: ['Threat Detection', 'Vulnerability Assessment', 'Security Training']
  }
];