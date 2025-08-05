/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Faruq Lawal",
  title: "Hi all, I'm Faruq",
  subTitle: emoji(
    " An impact-driven Data Scientist 🧠 with hands-on experience building churn prediction tools, fraud detection systems, and data dashboards using Python, SQL, PowerBi and MLops tools"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Deelaw15",
  linkedin: "https://www.linkedin.com/in/faruq-lawal-710871266/",
  gmail: "lawalfaruq50@gmail.com",
  medium: "https://medium.com/@lawalfaruq50",
  stackoverflow: "https://stackoverflow.com/users/31158525/deelaw",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Data Scientist passionate about machine learning, MLOps, and building intelligent systems that drive business impact.",
  skills: [
    emoji(
      "🔍 Build predictive models using machine learning to solve real-world problems."
    ),
    emoji("⚙️ Deploy end-to-end ML workflows and model monitoring systems with MLOps best practices."),
    emoji("📊 Deliver actionable insights using Python, SQL, and dashboarding tools."
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python",
  },
  {
    skillName: "SQL",
    fontAwesomeClassname: "fas fa-database",
  },
  {
    skillName: "Scikit-learn",
    fontAwesomeClassname: "fas fa-brain", // for ML
  },
  {
    skillName: "TensorFlow",
    fontAwesomeClassname: "fas fa-network-wired",
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker",
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws",
  },
   {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node-js",
  },
  {
  skillName: "Power BI",
  fontAwesomeClassname: "fas fa-chart-bar",  // placeholder
},
{
  skillName: "Tableau",
  fontAwesomeClassname: "fas fa-chart-pie",  // placeholder
},
  {
    skillName: "Git",
    fontAwesomeClassname: "fab fa-git-alt",
  },
  {
    skillName: "Linux",
    fontAwesomeClassname: "fab fa-linux",
  },
  {
    skillName: "Streamlit",
    fontAwesomeClassname: "fas fa-code", // generic if icon not available
  },
  {
    skillName: "MLflow",
    fontAwesomeClassname: "fas fa-cogs", // generic
  }
],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "University of Portsmouth",
      logo: require("./assets/images/uopp.png"),
      subHeader: "Master of Science in Civil Engineering",
      duration: "September 2023 - May 2014",
      desc: "Leveraged data analytics to research fiber optics adoption in the construction industry, combining qualitative insights with quantitative analysis.",
      descBullets: [
        "Conducted and analyzed industry expert surveys using data visualization techniques to identify adoption trends",
        "Performed statistical analysis on survey responses to quantify implementation barriers and opportunities",
        "Created data-driven recommendations using charts and visualizations to communicate findings effectively"
      ]
    },
    {
      schoolName: "Osun State University",
      logo: require("./assets/images/osu.png"),
      subHeader: "Bachelor of Engineering in Civil Engineering",
      duration: "September 2014 - April 2019",
      desc: "Graduated in top 10% of class. Conducted research on soil improvement techniques through additive testing.",
      descBullets: [
        "Performed extensive soil testing to analyze the impact of various additives on soil properties",
        "Investigated soil stabilization methods and their effects on construction quality",
        "Applied data analysis to evaluate and compare different soil treatment approaches"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & ML", // Strong in core DS/ML skills
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "80%"  // PowerBI, Tableau, Streamlit expertise
    },
    {
      Stack: "MLOps & Cloud Infrastructure",
      progressPercentage: "60%"  // Docker, AWS, MLflow skills
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Freelance Data Scientist",
      company: "Self-Emloyed",
      companylogo: require("./assets/images/facebookLogo.png"),
      date: "April 2024 – Present",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      role: "Data Analyst",
      company: "Quantum Analytics",
      companylogo: require("./assets/images/quoraLogo.png"),
      date: "February 2023 – April 2024",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "DATA SCIENCE AND MACHINE LEARNING SOLUTIONS WITH BUSINESS IMPACT",
  projects: [
    {
      image: require("./assets/images/vodaphone.webp"),
      projectName: "Vodafone Customer Churn Prediction",
      projectDesc: "Developed an NLP-powered churn prediction system analyzing TrustPilot reviews. Built retention strategies using advanced ML techniques and deployed on HuggingFace.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Deelaw15/Vodaphone-Customer-Churn.git"
        },
        {
          name: "Live Demo",
          url: "https://huggingface.co/spaces/Deelaw15/SmartRetain"
        }
      ]
    },
    {
      image: require("./assets/images/construction.avif"),
      projectName: "Construction Delay Predictor",
      projectDesc: "Created a machine learning model to predict construction project delays. Built interactive dashboard using Streamlit for real-time delay risk assessment.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Deelaw15/Construction-Delay-Analysis.git"
        },
        {
          name: "Live Demo",
          url: "https://construction-delay-estimator.streamlit.app/"
        }
      ]
    },
    {
      image: require("./assets/images/fraud.jpg"),
      projectName: "Credit Card Fraud Detection",
      projectDesc: "Implemented end-to-end fraud detection system using SQL for data processing and PowerBI for real-time monitoring dashboards.",
      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/file/d/1nh1oj13aIOlJEqY830gNzkxU5iehYopz/view?usp=sharing"
        }
      ]
    },
    {
      image: require("./assets/images/british.png"),
      projectName: "British Airways Customer Insights",
      projectDesc: "End-to-end analysis from web scraping reviews to predictive modeling, delivering actionable customer insights.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Deelaw15/British-Airways.git"
        }
      ]
    }
  ],
  display: true
};;

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
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
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-7407-279197",
  email_address: "lawalfaruq50@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable,
  resumeSection
};
