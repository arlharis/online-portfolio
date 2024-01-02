// gitprofile.config.js

const config = {
  github: {
    username: 'arlharis', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'arlharis',
    twitter: '',
    mastodon: '',
    facebook: 'Lukman Imran',
    instagram: 'lukman.hzq',
    youtube: '', // example: 'pewdiepie'
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: '',
    website: '',
    phone: '',
    email: 'arlharis.sa@gmail.com',
  },
  resume: {
    fileUrl:
      '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'PHP',
    'Laravel',
    'CodeIgniter',
    'JavaScript',
    'jQuery',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
    'API Integration',
    'Payment Intregration (2C2P, Billplz, Stripe)',
    'CSS',
    'SCSS',
    'Bootstrap',
    'AWS',
  ],
  experiences: [
    {
      company: 'Changi Travel Services Pte Ltd',
      position: 'Web Developer',
      from: 'February 2023',
      to: 'Present',
      companyLink: 'https://sg.linkedin.com/company/changitravelservices',
    },
    {
      company: 'Novatis Resources Sdn Bhd',
      position: 'Freelance Web Developer',
      from: 'February 2023',
      to: 'June 2023',
      companyLink: 'https://www.novatis.com.my/novatis/',
    },
    {
      company: 'Novatis Resources Sdn Bhd',
      position: 'System Engineer',
      from: 'November 2021',
      to: 'January 2023',
      companyLink: 'https://www.novatis.com.my/novatis/',
    },
    {
      company: 'Pandan Digital (Rebrand as Elevate Academy of Technology & Innovation)',
      position: 'Software Engineer',
      from: 'August 2019',
      to: 'October 2021',
      companyLink: 'https://elevateacademy.my/',
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
      title: 'Travel Recommends (e-Commerce)',
      description:
        'Contribute in develop new features and maintain the system',
      imageUrl: 'https://travelrecommends.com//assets/images/favicon.ico',
      link: 'https://travelrecommends.com',
    },
    {
      title: 'Reporting & Maintainance System (NovaRMS) for NOVATIS',
      description:
        'Contribute in develop the in-house system called (NovaRMS) for reporting and maintaining works for KKFIR project',
      imageUrl: 'https://laravel.com/img/logomark.min.svg',
      link: 'http://kkfir.novatis.com.my:9090',
    },
    {
      title: 'AliveInvite (e-Commerce)',
      description:
        'Contribute in develop new features and maintain the system',
      imageUrl: 'https://www.aliveinvite.com/assets/logos/logo-aliveinvite-5124351ffde8c3ea98b7a1a9d472a4bb54d8174ca1e3abce70eada0541acc70b.png',
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
    defaultTheme: 'wireframe',

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
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
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
