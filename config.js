module.exports = {
  pathPrefix: '',
  siteUrl: 'https://aishmittal.github.io',
  siteTitle: 'Aishwarya Mittal',
  siteDescription: 'Aishwarya Mittal Protfolio',
  author: 'Aishwarya Mittal',
  postsForArchivePage: 3,
  defaultLanguage: 'en',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://aishwaryamittal.disqus.com/embed.js',
  pages: {
    home: '/',
    blog: 'blog',
    projects: 'projects',
    contact: 'contact',
    // resume: 'resume',
    // tag: 'tags',
  },
  social: {
    github: 'https://github.com/aishmittal',
    facebook: 'https://www.facebook.com/aishhmittal',
    twitter: 'https://twitter.com/aishhmittal',
    instagram: 'https://www.instagram.com/aishmittal',
    linkedin: 'https://www.linkedin.com/in/aishwarya-mittal',
    rss: '/rss.xml',
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/38e0188d-a4ce-4005-92d4-937a06346be4',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || 'G-BHMP3CDF1R',
  tags: {
    javascript: {
      name: 'javascript',
      description: 'JavaScript is an object-oriented programming language used alongside HTML and CSS to give functionality to web pages.',
      color: '#f0da50',
    },
    nodejs: {
      name: 'Node.js',
      description: 'Node.js is a tool for executing JavaScript in a variety of environments.',
      color: '#90c53f',
    },
    typescript: {
      name: 'typescript',
      description: 'TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.',
      color: '#257acc',
    },
    reactjs: {
      name: 'reactjs',
      description: 'React is an open source JavaScript library used for designing user interfaces.',
      color: '#61dbfa',
    },
    gatsby: {
      name: 'Gatsby.js',
      description: 'A framework built over ReactJS to generate static page web application.  ',
      color: '#6f309f',
    },
    html: {
      name: 'HTML',
      description: 'A markup language that powers the web. All websites use HTML for structuring the content.',
      color: '#dd3431',
    },
    css: {
      name: 'css',
      description: 'CSS is used to style the HTML element and to give a very fancy look for the web application.',
      color: '#43ace0',
    },
    python: {
      name: 'python',
      description: 'A general purpose programming language that is widely used for developing various applications.',
      color: '#f9c646',
    },

  },
};
