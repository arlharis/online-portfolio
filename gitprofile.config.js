// gitprofile.config.js

const config = {
  profile: {
    name: 'Lukman Imran',
    title: 'Software Engineer',
    avatar: '/avatar-logo-1.png',
    bio: 'I build and maintain enterprise travel-commerce platforms, internal product management systems, API integrations, pricing workflows, and production e-commerce systems across Laravel, Vue.js, CodeIgniter, MySQL, AWS, and mobile app maintenance.',
    location: 'Singapore / Malaysia',
    company: 'Changi Travel Services Pte Ltd',
  },
  github: {
    username: 'arlharis',
    sortBy: 'updated',
    limit: 0,
    exclude: {
      forks: true,
      projects: [],
    },
  },
  social: {
    linkedin: 'arlharis',
    twitter: '',
    mastodon: '',
    // facebook: 'Lukman Imran',
    instagram: 'lukman.hzq',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: 'arlharis-portfolio.netlify.app',
    phone: '',
    email: 'lukman.slwork@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'Laravel Nova',
    'CodeIgniter',
    'Vue.js',
    'JavaScript',
    'jQuery',
    'Bootstrap',
    'Tailwind CSS',
    'MySQL',
    'PostgreSQL',
    'REST API Development',
    'API Integration',
    'Payment Integration',
    'E-Commerce Systems',
    'Product Management Systems',
    'Pricing & Validation Workflows',
    'AWS',
    'AWS Lightsail',
    'Docker',
    'Linux Server Management',
    'Git',
    'Android App Maintenance',
    'Mobile App Upgrade',
  ],
  experiences: [
    {
      company: 'Changi Travel Services Pte Ltd',
      position: 'Software Engineer',
      from: 'January 2024',
      to: 'Present',
      companyLink: 'https://sg.linkedin.com/company/changitravelservices',
      technologies: [
        'Laravel',
        'Laravel Nova',
        'Vue.js',
        'CodeIgniter',
        'Bootstrap',
        'MySQL',
        'REST APIs',
        'AWS',
        'AWS Lightsail',
        'Android',
      ],
      description: [
        'Develop and maintain production travel e-commerce platforms including Travel Recommends Malaysia and Changi Recommends, supporting product listings, booking flows, pricing data, operational workflows, and production issue resolution.',
        'Maintain and enhance Travel Recommends Malaysia, a CodeIgniter and Bootstrap-based e-commerce platform hosted on AWS Lightsail, including API integrations, frontend updates, backend fixes, and platform stability improvements.',
        'Build and enhance internal admin tools for managing products, variants, units, pricing calendars, blackout rules, labels, product sub-types, media, activation workflows, and API-driven business operations.',
        'Supported mobile application maintenance by upgrading the Changi Mobile Android app target SDK to Android 15 / API Level 35 and preparing the app for release compliance.',
      ],
    },
    {
      company: 'Changi Travel Services Pte Ltd',
      position: 'Web Developer',
      from: 'February 2023',
      to: 'December 2023',
      companyLink: 'https://sg.linkedin.com/company/changitravelservices',
      technologies: ['PHP', 'Laravel', 'JavaScript', 'MySQL', 'API Integration'],
      description: [
        'Developed and maintained web-based systems supporting travel-commerce operations and internal business workflows.',
        'Worked on backend enhancements, frontend updates, API-related improvements, bug fixes, and production support tasks.',
      ],
    },
    {
      company: 'Novatis Resources Sdn Bhd',
      position: 'Freelance Web Developer',
      from: 'February 2023',
      to: 'June 2023',
      companyLink: 'https://www.novatis.com.my/novatis/',
      technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
      description: [
        'Supported web development and maintenance work for client-facing and internal systems.',
        'Delivered backend and frontend improvements, bug fixes, and system updates based on business requirements.',
      ],
    },
    {
      company: 'Novatis Resources Sdn Bhd',
      position: 'System Engineer',
      from: 'November 2021',
      to: 'January 2023',
      companyLink: 'https://www.novatis.com.my/novatis/',
      technologies: ['PHP', 'Laravel', 'MySQL', 'Linux', 'System Support'],
      description: [
        'Developed and maintained internal reporting and maintenance systems for operational tracking and project workflows.',
        'Handled system support, troubleshooting, database updates, and application maintenance.',
        'Worked with stakeholders to improve reporting flows and support day-to-day operational requirements.',
      ],
    },
    {
      company: 'Pandan Digital / Elevate Academy of Technology & Innovation',
      position: 'Software Engineer',
      from: 'August 2019',
      to: 'October 2021',
      companyLink: 'https://elevateacademy.my/',
      technologies: ['PHP', 'CodeIgniter', 'Laravel', 'MySQL', 'JavaScript'],
      description: [
        'Built and maintained web applications, backend modules, and database-driven systems.',
        'Worked on frontend and backend development, issue resolution, and feature implementation.',
        'Supported system improvements across education and training-related digital platforms.',
      ],
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Universiti Malaysia Sarawak',
      degree: 'Degree',
      from: '2015',
      to: '2019',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Enterprise Product Editor Platform',
      description:
        'Internal travel-commerce product management platform supporting products, variants, units, pricing calendars, blackout rules, media, labels, product sub-types, activation validation, and complex admin workflows. Worked across Laravel, Laravel Nova, Vue.js, and MySQL to improve reliability, validation logic, and operational efficiency.',
      imageUrl: '/cts-logo.png',
      link: 'https://travelrecommends.com',
    },
    {
      title: 'Travel Recommends Malaysia E-Commerce Platform',
      description:
        'Production travel e-commerce platform for Malaysia market operations. Maintained and enhanced a CodeIgniter and Bootstrap-based platform hosted on AWS Lightsail, including API integrations, product and booking-related workflows, frontend updates, backend fixes, bug resolution, and production support.',
      imageUrl: '/cts-logo.png',
      link: 'https://travelrecommends.com/my',
    },
    {
      title: 'Changi Recommends E-Commerce Platform',
      description:
        'Contributed to the maintenance and enhancement of a production travel e-commerce platform, including product data workflows, pricing-related handling, API integrations, operational issue fixes, and platform support on AWS infrastructure.',
      imageUrl: '/cts-logo.png',
      link: 'https://www.changirecommends.com/',
    },
    {
      title: 'Changi Mobile Android App Upgrade',
      description:
        'Handled mobile app maintenance and release-readiness work by upgrading the Changi Mobile Android application target SDK to Android 15 / API Level 35, supporting platform compliance and continued app availability.',
      imageUrl: '/cts-logo.png',
      link: 'https://www.changirecommends.com/',
    },
    {
      title: 'NovaRMS Reporting & Maintenance System',
      description:
        'Developed and maintained an internal reporting and maintenance system for operational tracking, issue reporting, and project workflow management. Worked on backend logic, database structures, user-facing modules, and system maintenance.',
      imageUrl: '/novatis-resources-logo.png',
      link: 'http://kkfir.novatis.com.my:9090',
    },
    {
      title: 'AliveInvite E-Commerce Platform',
      description:
        'Contributed to feature development and maintenance of an e-commerce platform, including backend enhancements, frontend updates, payment-related workflows, bug fixes, and platform stability improvements.',
      imageUrl: '/aliveinvite-logo.png',
      link: 'https://www.aliveinvite.com/',
    },
  ],
  // Display blog posts from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many posts to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'business',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      // 'light',
      // 'dark',
      // 'cupcake',
      // 'bumblebee',
      // 'emerald',
      'corporate',
      // 'synthwave',
      // 'retro',
      // 'cyberpunk',
      // 'valentine',
      // 'halloween',
      // 'garden',
      // 'forest',
      // 'aqua',
      // 'lofi',
      // 'pastel',
      // 'fantasy',
      // 'wireframe',
      // 'black',
      // 'luxury',
      // 'dracula',
      // 'cmyk',
      // 'autumn',
      'business',
      // 'acid',
      // 'lemonade',
      'night',
      // 'coffee',
      // 'winter',
      // 'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#2563eb',
      secondary: '#0f172a',
      accent: '#38bdf8',
      neutral: '#111827',
      'base-100': '#ffffff',
      '--rounded-box': '1rem',
      '--rounded-btn': '0.75rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a 
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,
};

export default config;
