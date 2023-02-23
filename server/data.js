// How we are populating the database
const cards = [
  {
    name: "Webpack",
    packageName: "webpack",
    type: "Bundler",
    description:
      "Webpack is an open-source module bundler. It is made primarily for Javascript, but it can transform front-end assets such as HTML, CSS and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules",
    gitHubStars: 62.5,
    pros: [
      "Can handle all types of assets",
      "Dependencies are resolved during compilation, reducing the runtime size",
      "Loaders can preprocess files while compiling",
    ],
    cons: [
      "Steep learning curve",
      "Very susceptible to bundle size",
      "As project grows, bundle time increases",
    ],
    links: ["https://webpack.js.org/guides/getting-started/"],
  },
  {
    name: "Browserify",
    packageName: "browserify",
    type: "Bundler",
    description:
      "Browserify is a open-source Javascript bundler tool that allows developers to write and use Node.js-style modules that compile for use in the browser",
    gitHubStars: 14.3,
    pros: [
      "Easy to get started with",
      "Ideal for smaller projects",
      "Node-style Browser code",
    ],
    cons: ["Limited scope", "Very susceptible to bundle size"],
    links: ["https://github.com/browserify/browserify#usage"],
  },
  {
    name: "Vite",
    packageName: "vite",
    type: "Bundler",
    description:
      "Vite is a modern, fast tool for scaffolding and bundling projects. Vite takes advantage of the native ES modules.",
    gitHubStars: 53.1,
    pros: ["Extremely fast", "Works with multiple frameworks"],
    cons: [
      "Different tools are used for bundling development and production code",
      "ESbuild is used for development, while Rollup is used for production",
    ],
    links: ["https://vitejs.dev/guide/"],
  },
  {
    name: "Rollup",
    packageName: "rollup",
    type: "Bundler",
    description:
      "Rollup is a JavaScript module bundler that compiles multiple source files into a single bundle",
    gitHubStars: 23,
    pros: [
      "Multiple output files can be generated",
      "Has support for relative paths",
    ],
    cons: ["Only provides one feature, creating production bundles"],
    links: ["https://rollupjs.org/introduction/"],
  },
  {
    name: "Parcel",
    packageName: "parcel",
    type: "Bundler",
    description:
      "Parcel.js is an open-source bundler. It supports many popular languages and can also handle file types like images and fonts. It comes with a few extra tools built-in: a development server, diagnostics, and image compression.",
    gitHubStars: 42,
    pros: [
      "Zero configuration” approach",
      "After first bundle, subsequent builds are fast",
      "Compatible with react out of the box",
    ],
    cons: ["Takes a considerable amount of time to bundle initially"],
    links: ["https://en.parceljs.org/getting_started.html"],
  },
  {
    name: "MySQL",
    packageName: "mysql",
    type: "Database",
    description:
      "MySQL is an open-source relational database management system.",
    gitHubStars: 8.8,
    pros: [
      "Free",
      "It can run on different platforms like Linux, Solaris and Window",
      "Security",
    ],
    cons: [
      "Does not support very large databases",
      "Does not handle transactions very efficiently",
      "Does not have a good developing and debugging tool",
    ],
    links: ["https://dev.mysql.com/doc/"],
  },
  {
    name: "PostgreSQL",
    packageName: "postgresql",
    type: "Database",
    description:
      "PostgreSQL, also known as Postgres, is a free and open-source relational database management system. It supports both SQL and JSON for relational and non-relational queries for extensibility and SQL compliance",
    gitHubStars: 11.8,
    pros: [
      "Can run dynamic websites and web apps",
      "Highly fault-tolerant database",
    ],
    cons: [
      "Slower than MySQL",
      "Changes made for speed improvement requires more work than MySQL",
    ],
    links: ["https://www.postgresql.org/docs/current/index.html"],
  },
  {
    name: "Firebird",
    packageName: "firebird",
    type: "Database",
    description:
      "Firebird is an open-source SQL relational database management system that supports Linux, Microsoft, macOS and other Unix platforms",
    gitHubStars: 1,
    pros: ["Easy install", "High performance", "Excellent concurrency"],
    cons: ["Obsolete documentation"],
    links: ["https://firebirdsql.org/en/reference-manuals/"],
  },
  {
    name: "MongoDB",
    packageName: "mongodb",
    type: "Database",
    description:
      "MongoDB is a NoSQL database program that stores partially structured data in documents",
    gitHubStars: 23.3,
    pros: [
      "Offers high speed/performance",
      "Flexible",
      "Supports ad-hoc queries",
    ],
    cons: [
      "Does not support joins",
      "High reliance on good indexes",
      "High memory usage",
    ],
    links: ["https://www.mongodb.com/docs/"],
  },
  {
    name: "Redis",
    packageName: "redis",
    type: "Database",
    description:
      "Redis is an in-memory data structure store, using a distributed, in-memory key-value database, cache and message broker with optional durability.",
    gitHubStars: 22.2,
    pros: [
      "Offers high speed/performance",
      "Flexible data structures",
      "Has its own hashing technique",
    ],
    cons: [
      "Basic security",
      "Must deploy multiple instances of itself to achieve scalability",
    ],
    links: ["https://redis.io/docs/"],
  },
  {
    name: "Express JS",
    packageName: "express",
    type: "Server",
    description:
      "Express JS is a fast, free and high performing frontend and server-side web framework that is used for Node.js.",
    gitHubStars: 10.1,
    pros: ["Easy to learn", "Routing & templating", "Quick development"],
    cons: [
      "Event-driven nature",
      "Security",
      "Error messages are usually unhelpful",
    ],
    links: ["https://expressjs.com/en/starter/installing.html"],
  },
  {
    name: "Ruby on Rails",
    packageName: "ruby-on-rails",
    type: "Server",
    description:
      "Ruby on Rails is a server-side web application framework written in Ruby. ",
    gitHubStars: 52.3,
    pros: [
      "Time efficiency",
      "A great number of helpful libraries",
      "Huge and active community",
    ],
    cons: ["Shortage of flexibility", "Performance time"],
    links: ["https://guides.rubyonrails.org/getting_started.html"],
  },
  {
    name: "Django",
    packageName: "django",
    type: "Server",
    description:
      "Django is a free and open-source, Python-based web framework that follows the model-template-views architectural platform",
    gitHubStars: 68.9,
    pros: ["Community support", "Good documentation", "Security"],
    cons: ["Not good for simpler projects", "Can lead to slow websites"],
    links: ["https://docs.djangoproject.com/en/4.1/"],
  },
  {
    name: "Flask",
    packageName: "flask",
    type: "Server",
    description:
      "Flask is a micro web framework written in Python. It does not require tools or libraries",
    gitHubStars: 62,
    pros: ["Scalable", "Flexible", "Lightweight"],
    cons: ["Not a lot of tools", "Steep learning curve"],
    links: ["https://flask.palletsprojects.com/en/2.2.x/"],
  },
  {
    name: "Next.js",
    packageName: "next.js",
    type: "Server",
    description:
      "Next.js is open-source web development framework enabling React-based web application with server-side rendering and generating static websites.",
    gitHubStars: 101,
    pros: ["Great for user experience", "Community support"],
    cons: ["No built-in state manager", "Poor plugin ecosystem"],
    links: ["https://nextjs.org/docs/getting-started"],
  },
  {
    name: "React",
    packageName: "react",
    type: "Frameworks",
    description:
      "React.js is a library that allows developers to create reusable building blocks called components that can be used to build complex and interactive web applications.",
    gitHubStars: 202.6,
    pros: [
      "Re-utilizing components saves time",
      "Virtual DOM boosts performance",
      "Lots of support from open-source community",
    ],
    cons: [
      "Absence of documentation due to significant pace development",
      "Long learning curve due to JSX",
    ],
    links: ["https://beta.reactjs.org/learn"],
  },
  {
    name: "Angular",
    packageName: "angular",
    type: "Frameworks",
    description:
      "AngularJS is a framework that provides a more structured approach to building web applications. It uses a technique called two-way data binding to automatically update the interface whenever the data changes.",
    gitHubStars: 59.3,
    pros: ["Large ecosystem", "High performance", "Two-way data binding"],
    cons: [
      "Verbose language",
      "CLI documentation lacks details",
      "Steep learning curve",
    ],
    links: ["https://angular.io/guide/developer-guide-overview"],
  },
  {
    name: "Vue",
    packageName: "vue",
    type: "Frameworks",
    description:
      "Vue.js is a JavaScript library that helps developers build interactive and dynamic web applications. It provides a set of pre-built tools and functions to make it easier to create reusable components and manage complex user interfaces.",
    gitHubStars: 35.4,
    pros: [
      "Extensive and detailed documentation",
      "Easy to understand and learn",
      "Code reusability and simple integration",
    ],
    cons: [
      "Small number of tools and plugins",
      "Too flexible, which can lead to code inconsistencies",
    ],
    links: ["https://vuejs.org/guide/introduction.html"],
  },
  {
    name: "ember.js",
    packageName: "ember",
    type: "Frameworks",
    description:
      "Ember.js is a JavaScript framework used for building scalable web applications. It provides a lot of built-in features and conventions that make it easy to structure and organize large codebases.",
    gitHubStars: 22.4,
    pros: ["Well-managed", "Appropriate documentation", "Two-way data binding"],
    cons: [
      "Slow updates and challenging syntax",
      "Small community",
      "Steep learning curve",
    ],
    links: ["https://guides.emberjs.com/release/"],
  },
  {
    name: "Svelte",
    packageName: "svelte",
    type: "Frameworks",
    description:
      "Svelte is a modern JavaScript framework used for building web applications. It makes your applications faster and more efficient because code is compiled at build time, rather than at runtime. ",
    gitHubStars: 65.8,
    pros: [
      "No virtual DOM, increasing performance",
      "Less code required",
      "Improved reactivity ",
    ],
    cons: ["Lack of support", "Small community", "Lack of tooling"],
    links: ["https://beta.reactjs.org/learn"],
  },

  {
    name: "Tailwind",
    packageName: "tailwind",
    type: "Styling",
    description:
      "Tailwind CSS is a CSS framework that provides pre-defined CSS classes that can be applied directly to HTML elements to style them",
    gitHubStars: 65.3,
    pros: [
      "Fast CSS styling process",
      "Developer has complete control over styling",
      "Easier to maintain",
    ],
    cons: ["Increases size of HTML files", "Components are not provided"],
    links: ["https://tailwindcss.com/docs/installation"],
  },

  {
    name: "Bootstrap",
    packageName: "bootstrap",
    type: "Styling",
    description:
      "Bootstrap is a popular CSS framework that helps you design responsive and mobile-first websites quickly",
    gitHubStars: 162.0,
    pros: [
      "Automatically resizes images and elements",
      "Major components are drop-in ready",
      "Many templates are available",
    ],
    cons: ["Naming scheme can be confusing", "Less streamlined"],
    links: ["https://getbootstrap.com/docs/3.4/getting-started/"],
  },

  {
    name: "Material UI",
    packageName: "@mui/material",
    type: "Styling",
    description:
      "Material UI is a popular React component library that provides pre-built UI components based on Google's Material Design guidelines",
    gitHubStars: 84.7,
    pros: ["Pairs well with React", "Easy to use", "Good documentation"],
    cons: [
      "Lack of customization options",
      "Can slow down rendering times",
      "Can be buggy",
    ],
    links: ["https://mui.com/material-ui/getting-started/overview/"],
  },

  {
    name: "Semantic UI",
    packageName: "semantic-ui",
    type: "Styling",
    description:
      "Semantic UI is a popular front-end development framework that makes it easy to create modern and responsive user interfaces",
    gitHubStars: 50.4,
    pros: [
      "Very inuitive",
      "Lots of UI components available",
      "Detailed documentation",
    ],
    cons: ["Less browser compatibility", "Few updates"],
    links: ["https://semantic-ui.com/introduction/getting-started.html"],
  },

  {
    name: "Materialize",
    packageName: "materialize",
    type: "Styling",
    description:
      "Materialize CSS is a responsive front-end CSS framework that is based on Google's Material Design principles",
    gitHubStars: 38.8,
    pros: [
      "Modern look and design",
      "Large number of pre-designed UI components",
      "Intuitive",
    ],
    cons: [
      "Not compatible with older browsers",
      "Small community",
      "Create large CSS files",
    ],
    links: ["https://materializecss.com/getting-started.html"],
  },
];

module.exports = cards;
