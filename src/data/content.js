export const NAV_ITEMS = ['about', 'projects', 'skills', 'experience', 'contact']

export const ROLES = [
  { label: 'Frontend Engineer',  color: '#0969DA', bg: '#DDF4FF',   border: '#54AEFF' },
  { label: 'Software Developer', color: '#8250DF', bg: '#F3F0FF',   border: '#BBA4FF' },
  { label: 'Project Manager',    color: '#1A7F37', bg: '#DAFBE1',   border: '#82E9A5' },
]

export const STATS = [
  { val: '3+',  lbl: 'Years of Experience' },
  { val: '6+',  lbl: 'Projects Delivered'  },
  { val: '20+', lbl: 'People Led'          },
]

export const WHAT_I_BUILD = [
  { color: '#0969DA', text: 'Scalable web applications & B2B platforms' },
  { color: '#8250DF', text: 'Internal enterprise tools & workflow automation' },
  { color: '#1A7F37', text: 'HR & workforce management systems' },
  { color: '#9E6A03', text: 'Data-driven reporting & analytics dashboards' },
]

export const PROJECTS = [
  {
    name: 'Bifrost',
    subtitle: 'Multi-Role B2B Commerce Platform',
    category: 'B2B Platform',
    period: '2023 — 2024',
    summary: 'Bifrost is a multi-role B2B commerce platform that enables distributors, buyers, warehouse operators, and drivers to manage the entire procurement and delivery lifecycle through a unified system.',
    bullets: [
      'Architected and built role-based experiences for buyers, distributors, sales teams, warehouse staff, drivers, and administrators.',
      'Developed complex order workflows including order creation, approval, fulfillment, delivery tracking, and status management.',
      'Implemented dashboards, reporting modules, invoice management, and advanced filtering capabilities for business operations.',
      'Built a scalable frontend architecture with reusable components and shared business logic across multiple user roles.',
      'Collaborated on product strategy, system design, and technical decisions from concept to production.',
    ],
    tech: ['React.js', '.NET Core', 'Tailwind CSS'],
    color: '#0969DA',
    bg: '#DDF4FF',
    border: '#54AEFF',
  },
  {
    name: 'Sales Management System',
    subtitle: 'Contract & Payment Platform for Property Sales',
    category: 'Enterprise SaaS',
    period: '2022 — 2023',
    summary: 'A contract and payment management platform for construction companies selling residential and commercial properties.',
    bullets: [
      'Built role-based interfaces for managing contracts, customers, properties, and payment plans.',
      'Implemented complex payment tracking workflows supporting flexible installment schedules and contract terms.',
      'Developed reporting and filtering tools to provide real-time visibility into sales performance and outstanding payments.',
      'Created reusable frontend components and data management patterns to support large-scale business operations.',
      'Collaborated on system architecture and product requirements from planning through deployment.',
    ],
    tech: ['React.js', '.NET Core', 'Tailwind CSS'],
    color: '#8250DF',
    bg: '#F3F0FF',
    border: '#BBA4FF',
  },
  {
    name: 'News Portal',
    subtitle: 'Full-Stack Publishing Platform',
    category: 'Full-Stack',
    period: '2024',
    summary: 'A production-style publishing platform consisting of a public news portal and a role-based editorial CMS for managing content, advertising, and analytics.',
    bullets: [
      'Built a full-stack content management system with article publishing workflows, role-based authentication, and editorial tools.',
      'Developed separate React applications for the public-facing news portal and the administrative dashboard.',
      'Implemented dynamic categories, navigation, advertising management, and content configuration without requiring deployments.',
      'Created analytics and reporting features to track article engagement and advertising performance.',
      'Containerized the entire platform using Docker, enabling reproducible deployments across environments.',
    ],
    tech: ['React.js', 'TypeScript', '.NET 8', 'SQL Server', 'Docker', 'Nginx'],
    color: '#1A7F37',
    bg: '#DAFBE1',
    border: '#82E9A5',
  },
  {
    name: 'File Management System',
    subtitle: 'Private Document Platform for Telecoms Contractor',
    category: 'Internal Tool',
    period: '2023',
    summary: 'A private document management platform developed for a telecommunications contractor to organize project documentation, contracts, invoices, and field-service records.',
    bullets: [
      'Designed and developed a hierarchical file management system supporting projects, nested folders, and document storage.',
      'Implemented role-based access control for administrators and field workers.',
      'Built secure file and project sharing functionality with configurable expiration dates and access windows.',
      'Developed advanced search and filtering capabilities to quickly locate projects, folders, and files.',
      'Enabled teams to manage contracts, invoices, installation reports, and photo documentation from a centralized platform.',
    ],
    tech: ['React.js', '.NET Core', 'SQL Server', 'Tailwind CSS'],
    color: '#9E6A03',
    bg: '#FFF8C5',
    border: '#F5C900',
  },
]

export const SKILLS = [
  { cat: 'Frontend',    color: '#0969DA', bg: '#DDF4FF', border: '#54AEFF', skills: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Next.js', 'Tailwind CSS'] },
  { cat: 'CMS & LMS',  color: '#8250DF', bg: '#F3F0FF', border: '#BBA4FF', skills: ['WordPress', 'Moodle'] },
  { cat: 'Backend',     color: '#1A7F37', bg: '#DAFBE1', border: '#82E9A5', skills: ['Node.js', '.NET Core', 'REST APIs'] },
  { cat: 'Database',    color: '#9E6A03', bg: '#FFF8C5', border: '#F5C900', skills: ['MSSQL', 'MySQL'] },
  { cat: 'Project Mgmt', color: '#BF3989', bg: '#FFD8EB', border: '#FF80C8', skills: ['Agile', 'Scrum', 'Team Leadership', 'Product Ownership', 'JIRA'] },
]

export const EXPERIENCE = [
  {
    role: 'Software Developer & Project Manager',
    company: 'Kosovo Advisory Products and Systems',
    companyNote: 'Affiliate of International Advisory Products and Systems · Virginia, USA',
    period: 'Mar 2023 — Mar 2026',
    type: 'Full-time · On-site',
    location: 'Prishtina, Kosovo',
    color: '#0969DA',
    products: ['TPMready', 'KAPcourse', 'KAPsurvey', 'KAPorg'],
    achievements: [
      'Owned TPMready (enterprise Third-Party Monitoring platform) from architecture through production — driving system design, full-stack development, and delivery.',
      'Contributed to KAPcourse (e-learning platform) as Project Manager and part-time developer, joining after the initial build was complete.',
      'Contributed to KAPsurvey and KAPorg across various development and coordination tasks.',
      'Built and managed a cross-functional team of 30+ people including developers, designers, DevOps engineers, and operations staff.',
      'Led full recruitment lifecycle: sourcing, interviewing, evaluating, and onboarding technical and non-technical hires.',
      'Developed landing pages, web applications, and internal tooling across both products.',
      'Drafted contracts, established operational workflows, and drove strategic decisions as the de-facto head of the affiliate.',
    ],
  },
  {
    role: 'Intern Software Developer',
    company: 'Primex EU',
    companyNote: 'Fushe Kosove, Kosovo',
    period: 'Oct 2022 — Dec 2022',
    type: 'Internship · On-site',
    color: '#1A7F37',
    products: ['Homeface (E-Commerce)', 'Internal Tools Web App'],
    achievements: [
      'Developed and maintained web applications using PHP/Laravel and Vue.js.',
      'Performed server maintenance, monitored critical services, and managed backup jobs using VEEAM.',
      'Handled database operations including data updates and schema work in MSSQL.',
      'Conducted documentation and code analysis across existing codebases.',
    ],
  },
]
