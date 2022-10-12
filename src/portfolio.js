/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Amey Bhilegaonkar",
  title: "Hey, I'm Amey!",
  subTitle: emoji(
    "Currently, pursuing my Masters of Computer Science with speciliaztion as Data Science at Arizona State University. I am a self taught Full Stack developer, with professional experience of 3+ years as a Data Engineer and a Data Analyst👨‍💻. I take great care in the User experience, Architecture, and Code Quality of the things I build."
  ),
  resumeLink:
    "https://drive.google.com/file/d/11TnaULAw5oGdR-_HzktPwwxXDf7I1slP/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ameygoes",
  linkedin: "https://www.linkedin.com/in/amey-bhilegaonkar/",
  gmail: "bhilegaonkar11@gmail.com",
  facebook: "https://www.facebook.com/amey.bhilegaonlar/",
  medium: "https://ameygoes.medium.com/",
  // stackoverflow: "",
  instagram: "https://instagram.com/ameygoes",
  twitter: "https://twitter.com/ameygoes",
  youtube: "https://www.youtube.com/c/ameygoes",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "I love to explore different technologies and solve complex problems. These are some of the technologies I have been exploring",
  skills: [
    // emoji(
    //   "⚡ Develop highly efficient Machine Learning models for Data Interpretation and Data Insights."
    // ),
    emoji(
      "⚡ Develop Highly Secure and Scalable Softwares"
    ),
    emoji(
      "⚡ Collaborate and Cross function across teams to develop High performance Data Pipelines and Data Analysis."
    ),
    emoji(
      "⚡ Automate Data, Machine Learning, and Deployment pipelines using Jenkins and DevOps"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

softwareSkills: [
  {
    skillName: "html-5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "css3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "sass",
    fontAwesomeClassname: "fab fa-sass"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "reactjs",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "nodejs",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "git",
    fontAwesomeClassname: "fab fa-git"
  },
  {
    skillName: "jenkins",
    fontAwesomeClassname: "fab fa-jenkins"
  },
  {
    skillName: "Databases",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "aws",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "linux",
    fontAwesomeClassname: "fab fa-linux"
  },
  {
    skillName: "java",
    fontAwesomeClassname: "fab fa-java"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Arizona State University",
      logo: require("./assets/images/asu.png"),
      subHeader: "Masters of Computer Science",
      duration: "2022 - 2024",
      desc:  "Key Courses and Acitivities:",

      descBullets: [
        "CSE 543: Info Assurance & Security",
        "CSE 575: Statistical Machine Learning",
        "CSE 594: Topic: Spatial Data Science and Engineering",
      ]
    },
    {
      schoolName: "Pune Institute of Technology",
      logo: require("./assets/images/PICTLogo.jpeg"),
      subHeader: "Bachelor of Engineering, Electronics and TeleCommunications Engineering",
      duration: "2015 - 2019",
      desc:  "Key Courses and Acitivities I had done:",

      descBullets: [
      "Fundamentals of Programming Langauge",
        "Data Structures and Algorithms",
        "OOP",
        "System Design",
        "Networking and Security",
        "Operating Systems",
        "Microcontrollers",
        "Android Development",
        "Machine Learning",
        "Artificial Intelligence",
        "Key Member of PICT Startup and Innovation Cell.",
        "Part of the College Badminton Team for 2 years.",
        "Won the Purushottam Karandak 2015 as Part of the College Theater Club.",
        "Won the Sanjeev Karandak in 2016 as Part of the College Theater Club. ",
        "Runner up in Firodiya Karandak 2017 as Part of the College Theater Club. ",
        "Represented College at Various Dance and Badminton Competitions for 3 years.",
      ]
    },
    {
      schoolName: "S.P. College Pune",
      logo: require("./assets/images/spclg.jfif"),
      subHeader: "Junior College",
      duration: "2013 - 2015",
      desc: "Activities I had done",
      descBullets: [
      "Won the Photography Competition.",
      "Implemented an Electronics Project using MUX and DEMUX",
      "Developed a prototype for Smart Traffic Control System.",]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend Programing", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Science",
      progressPercentage: "70%"
    },
    {
      Stack: "Cloud/DevOps",
      progressPercentage: "75%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [

    {
      role: "Data Analyst",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/SapientLogo.jpeg"),
      date: "Jan 2021 - July 2022",
      desc: "Responsibilities:",
      descBullets: [
        "Built an Automated Data Validation Module to verify Data flow, boosting efficiency by 30%",
        "Built an Automated Translation module using google translate API to translate business Data Dashboard into different languages, reducing manual efforts to 10%",
        "Constructed Data Ingestion pipelines to ETL the TBs of the file data to GCP’s BigQuery.",
        "Enhanced various modules by developing new a modularized code structure resulting in increased efficiency by 25%.",
        "Coordinated with Data scientists for data cleaning and variables selection.",
        "Single-handedly, initiated and built an Automated Data Validation Module from scratch to verify inflow, intermediate flow, and out-flow of the data.",
        "Built Airflow data ingestion pipelines to download over 25+ files of terabytes of data from Azure bucket, decompress the files and ingest the data in Google Cloud Platform’s BigQuery.",
        "Enhanced Email Notification, File Download, and Data Science modules resulting in increased efficiency of about 25%.",
        "Added Autonomous scalable DBT docs utility to have all the documentation related to database design and schema in user-defined language",
        "Added Authentication system to help manage user sign in, log in and signups",
        "Capabilities: Python, DBT, Airflow, Kubernetes, GCP, BigQuery, DataFlow, Cloud Storage, AI platform, Data Collection, Data Validation, Data Cleaning, Data Integration",

      ]
    },



    {
      role: "DevOps / Site Reliability Engineer",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/SapientLogo.jpeg"),
      date: "Sept 2020 - Jan 2021",
      desc: "Responsibilities:",
      descBullets: [
        "Completely re-designed the existing developer centric deployment into automated CICD using Jenkins for Containerized, Batch and Real-Time deployments, increasing efficiency by 45%.",
        "Developed Automatic Resource provisioning using Terraform in AWS",
        "Automated testing module using Python scripts.",
        "Re-designed and automated large scale, high-performance, scalable data pipelines using Jenkins for Containerized, Batch, and Real-Time deployments,\textbf{ increasing efficiency by around 45%.",
        "Automated Resource Provisioning using Terraform and Automated testing which saved manual efforts of about 40h/month saving costs of about $60K/month to the company",
        "Built and scheduled automated script for data quality checking and updating the existing records in the distributed database system on a scheduled basis."
      ]
    },

    {
      role: "Data Engineer",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/SapientLogo.jpeg"),
      date: "Sept 2019 - Sept-2020",
      desc: "Responsibilities:",
      descBullets: [
        "Built and Automated large-scale, high-performance, scalable databases capable of ETL processes using Cassandra and Spark which reduced manual efforts by 60%",
        "Translated business propositions into quantitative queries and collected and cleaned the necessary data.",
        "Maintained data pipeline up-time of 99.4% while ingesting streaming and transnational data across 8 different data sources Spark, S3, SQS, Java, Python.",
        "Automated Resource Provisioning and testing which saved manual efforts of about 40h/month saving costs of about $60K/month to the company",
        "Created Data Pipelines from various resources of Data from Datawarehouse to process and efficiently store the data into the backend.",
        "Re-designed the sink data service in a configurable way to output the data in different formats for different destinations.",
        "Provided support for Production tickets and Adhoc tickets",
        "Capabilities: Java, EC2, ECR, ECS, S3, SNS, VPC, DynamoDB, Scala, Cassandra, DevOps, Terraform, Apache Spark, Data Cleaning, Data Modeling, Data Visualization, Distributed Systems"
      ]
    },

    {
      role: "Software Development Engineer",
      company: "Publicis Sapient",
      companylogo: require("./assets/images/SapientLogo.jpeg"),
      date: "Jun 2019 – Sept 2019",
      desc: "Responsibilities:",
      descBullets: [
        "Built the UI for Login service",
        "Exposed and Routed APIs to various other services.",
        "Encryption and Decryption of PII data and passwords.",
        "Created an input data validation service, End User device information, and notification service.",
        "Git version controlling and Building Jenkins job to deploy the code."
      ]
    }
  ]
};



// Some big projects you have worked on

const bigProjects = {
  title: "Personal Projects",
  subtitle: "",
  projects: [
    {
      image: require("./assets/images/dbms.jpg"),
      projectName: "Placements Made Easy!",
      projectDesc: "An end to end solution for College Placements activitis to schdule, help, better manage the entire process with almost zero manual intervention.",
      footerLink: [
        {
          name: "Visit Website",
          // Need to update this once website is up and running
          url: "https://github.com/ameygoes/PlacementsMadeEasy"
        },
        {
          name: "See Code",
          url: "https://github.com/ameygoes/PlacementsMadeEasy"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/emoji.jpeg"),
      projectName: "Speech Emotion Recognition using NLP",
      projectDesc: "A speech Emotion recognizer for enhancing experience for wide range of Applications.",
      footerLink: [
        {
          name: "See Demo",
          url: "https://www.youtube.com/watch?v=yvxpxcncSGs"
        },
        {
          name: "See Code",
          url: "https://github.com/ameygoes/speech-emotion-recognition"
        }
        //  you can add extra buttons here.
      ]
    },

    {
      image: require("./assets/images/pythondjango.jpg"),
      projectName: "Python Django App",
      projectDesc: "Made Python Django App out of curiousity. Made a website to send data over APIs using Django Framewrok",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/ameygoes/Python-E2E-Django-App"
        },
        {
          name: "See Code",
          url: "https://github.com/ameygoes/Python-E2E-Django-App"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};


// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Associate Cloud Engineer",
      subtitle:
        "After having enough experience handson on GCP, I completed GCP - Associate Cloud Engineer Certification.",
      image: require("./assets/images/gcpLogo.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.credential.net/c799d945-5e89-47a3-845e-8b97575a8342"
        }
      ]
    },

    {
      title: "Python",
      subtitle: "Completed Python Learning Course and used the knowledge to apply to a Project.",
      image: require("./assets/images/python.png"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1_lDJPvdltRP5ksxiBxvnl7AzFlbp_qwJ/view?usp=sharing"},
        {
          name: "See Project",
          url: "https://github.com/ameygoes/PythonDSA"
        }
      ]
    },

    {
      title: "NPTEL: Introduction to Machine Learning",
      subtitle: "Completed my Introductory course to scratch the Surface of the Machine Learning. Learnt concepts and algorithms of ML.",
      image: require("./assets/images/NPTEL.jpg"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1vTMYjBPbHIUyscXs2RqCznob_syhrZtz/view?usp=sharing"
        }
      ]
    },
    {
      title: "Coursera: Machine learning",
      subtitle: "Completed Coursera Certification as a small step towards my dream as a Data Scientist.",
      image: require("./assets/images/ML.png"),
      footerLink: [
        {
          name: "View Certificate",
          url: "https://www.coursera.org/account/accomplishments/verify/5NA5TY6QLVHS"
        },
        {
          name: "View Assignments",
          url: "https://github.com/ameygoes/My-Machine-Learning-Courese"
        }

      ]
    },

    {
      title: "Deep Learning with Keras",
      subtitle: "Completed Certification from LinkedIn Learning Data Science Path for Deep Learning with Keras",
      image: require("./assets/images/ll.jpg"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1e-23ZtZAOWMFO19oXnra_IGG2cQjVxXA/view?usp=sharing"}
      ]
    },

    {
      title: "Deep Learning: Image Recognition",
      subtitle: "Started digging up more into Deep Learning: Image Recognition",
      image: require("./assets/images/ll.jpg"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1ZS1fnPy7wwlWghNoKHrR4LlSpqWhUHgE/view?usp=sharing"}
      ]
    },

    {
      title: "Deep Learning: Face Recognition",
      subtitle: "Successfully completed Deep Learning: Face Recogintion",
      image: require("./assets/images/ll.jpg"),
      footerLink: [
        {name: "Certification", url: "https://drive.google.com/file/d/1oydTfQAKX4j_lwkVk1fzo0jq-77F5Ehr/view?usp=sharing"}
      ]
    }


  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section
const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write about what I have learnt from life.",

  blogs: [
    {
      url: "https://ameygoes.medium.com/the-millennial-dilemma-the-quarter-life-crisis-1f47dfb89ed3",
      title: "The Millennial Dilemma: The Quarter Life Crisis",
      description:
        "Not being clear on your purpose. Not knowing where your professional- and private life are heading. Not being in a safe and secure environment anymore.?"
    },
    {
      url: "https://ameygoes.medium.com/imposter-syndrome-the-thought-do-i-deserve-this-f0602f990211",
      title: "Imposter Syndrome - Do I Deserve this?",
      description:
        "The idea that you’ve only succeeded due to luck, and not because of your talent or qualifications."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections
const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section
const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK CANDID ABOUT MYSELF, PEOPLES' LIFE AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/ameygoes/embed"
  ],
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Are you looking for a Full Stack or Data Scientist, Data Analyst or Data Engineer for your Organization? Shoot an Email here:",
  // number: "+91-3243454077",
  email_address: "bhilegaonkar11@gmail.com"
};

// Twitter Section
const twitterDetails = {
  userName: "ameygoes", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
