// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Arwins-code', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Personal Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 4, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Profesional Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'OCTO Mobile by CIMB Niaga',
          description:
            'This is digital banking in your hands. Now, everything is possible with OCTO Mobile. OCTO Mobile comes with many new features for convenience and ease of transactions. Starting from opening the first account without having to go to a branch, withdrawing and depositing cash without a card and various QR transaction promos at selected merchants or eCommerce.',
          imageUrl:
            'https://play-lh.googleusercontent.com/PEJTXcESMy_1XM_STfm-izSICWACEoMiiCxuYhDIoRZCrwPWkSkDt5fj7eabcxzTbJs=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=id.co.cimbniaga.mobile.android&pcampaignid=web_share',
        },
        {
          title: 'BTN Mobile',
          description:
            'Just one application for easy financial transactions, BTN now presents a mobile banking transaction application, namely BTN Mobile. BTN Mobile comes with a cheerful appearance with a new color combination providing refreshment and new experiences for customers. With various superior feature updates and presenting the BTN ecosystem You only need to have a BTN Batara savings account and enjoy the ease and comfort of banking transactions with the latest features.',
          imageUrl:
            'https://play-lh.googleusercontent.com/QiJbipAejp2KU5ni8dqfIrCpfys9RV4ogXJJ3vLLU5K4F1Jc8tK30ovPPSODHTfTe4Fi=s96-rw',
          link: 'https://play.google.com/store/apps/details?id=id.co.btn.mobilebanking.android&pcampaignid=web_share',
        },
        {
          title: 'LINE Bank',
          description:
            'Seeking for a different way of banking? Introducing LINE Bank by Hana Bank – banking apps that is transforming everyday life banking experience. Open an account in minutes, get LINE Friends character Debit Card, and easily monitor your transaction via LINE Bank Official Account notification.',
          imageUrl:
            'https://play-lh.googleusercontent.com/FOr8x6Sp-uhkY_QNvXAJ48jv0KniMLgSDWxlj6uH43OV81YkfmX_K3utHOsjvGTWaOhW=w480-h960-rw',
          link: 'https://play.google.com/store/apps/details?id=id.co.linebank&pcampaignid=web_share',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Arwinsyah Putra',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'arwinsyah-putra/',
    twitter: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
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
    email: 'arwinsyahputra22@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/uc?export=download&id=1bOvSfXZfqIDP0Q9zk34WM-xVvDtAxf1b', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Kotlin',
    'Android',
    'Java',
    'Javascript',
    'Jetpack Compose',
    'MAD',
    'Problem Solve',
    'Communication',
  ],
  experiences: [
    {
      company: 'PT Bank KEB Hana Indonesia',
      position: 'Android Developer',
      from: 'Nov 2023',
      to: 'Present',
      companyLink: 'https://www.hanabank.co.id/',
    },
    {
      company: 'PT. Infosys Solusi Terpadu',
      position: 'Android Developer',
      from: 'Oct 2018',
      to: 'Dec 2019',
      companyLink: 'https://www.ist.id/',
    },
    {
      company: 'Institut Teknologi PLN',
      position: 'Laboratory Assistant',
      from: 'May 2021',
      to: 'Nov 2023',
      companyLink: 'https://itpln.ac.id/',
    },
  ],
  certifications: [
    {
      name: 'Getting Started Programming with Kotlin',
      body: 
      'This class is aimed at those who want to learn the basics of the Kotlin programming language by referring to the international competency standards of Google Developers Authorized Training Partners. At the end of the class, students understand the basic concepts of programming languages, functional programming, and object-oriented programming (OOP) using Kotlin.',
      year: 'Jul 8, 2023',
      link: 'https://www.dicoding.com/certificates/N9ZO6N8QDXG5',
    },
    {
      name: 'Learn to Make Android Applications for Beginners',
      body: 
      'This class is aimed at beginners who want to start their careers in the Android Developer field by referring to Googles international competency standards. At the end of the class, students can create an Android application that can display lists and detailed data.',
      year: 'Oct 25, 2023',
      link: 'https://www.dicoding.com/certificates/QLZ9RGLE9P5D',
    },
    {
      name: 'Learn Java Course',
      body: 
      '',
      year: 'Nov 2, 2022',
      link: 'https://www.codecademy.com/profiles/ArwinsyahPutra/certificates/d3f89367b558583e361640f778191345',
    },
    {
      name: 'Create REST APIs with Spring and Java Skill Path',
      body: 
      '',
      year: 'Dec 30, 2022',
      link: 'https://www.codecademy.com/profiles/ArwinsyahPutra/certificates/60f1edf0ac9368001c6025c4',
    },
  ],
  educations: [
    {
      institution: 'Institut Teknologi PLN',
      degree: 'Bachelors Degree of Computer Science',
      from: '2016',
      to: '2020',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
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
    defaultTheme: 'cupcake',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

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
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
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
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
