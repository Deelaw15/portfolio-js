/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000, // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true, // Set to false to use static SVG
};

const greeting = {
  username: "Faruq Lawal",
  title: "Hi all, I'm Faruq",
  subTitle: emoji(
    " An impact-driven Data Scientist 🧠 with hands-on experience building churn prediction tools, fraud detection systems, and data dashboards using Python, SQL, PowerBi and MLops tools"
  ),
  resumeLink: "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true, // Set false to hide this section, defaults to true
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
  display: true, // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "Data Scientist passionate about machine learning, MLOps, and building intelligent systems that drive business impact.",
  skills: [
    emoji("🔍 Build predictive models using machine learning to solve real-world problems."),
    emoji(
      "⚙️ Deploy end-to-end ML workflows and model monitoring systems with MLOps best practices."
    ),
    emoji("📊 Deliver actionable insights using Python, SQL, and dashboarding tools."),
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
      fontAwesomeClassname: "fas fa-chart-bar", // placeholder
    },
    {
      skillName: "Tableau",
      fontAwesomeClassname: "fas fa-chart-pie", // placeholder
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
    },
  ],
  display: true, // Set false to hide this section, defaults to true
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
        "Created data-driven recommendations using charts and visualizations to communicate findings effectively",
      ],
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
        "Applied data analysis to evaluate and compare different soil treatment approaches",
      ],
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Science & ML", // Strong in core DS/ML skills
      progressPercentage: "90%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Data Visualization",
      progressPercentage: "80%", // PowerBI, Tableau, Streamlit expertise
    },
    {
      Stack: "MLOps & Cloud Infrastructure",
      progressPercentage: "60%", // Docker, AWS, MLflow skills
    },
  ],
  displayCodersrank: false, // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Freelance Data Scientist",
      company: "Self-Employed",
      companylogo: require("./assets/images/freelancer.png"), // Update with appropriate logo
      date: "April 2024 – Present",
      desc: "Provide end-to-end data science solutions for clients across various industries, focusing on machine learning implementation and data-driven decision making.",
      descBullets: [
        "Developed and deployed customer churn prediction models using NLP and machine learning techniques",
        "Created interactive dashboards and visualizations using PowerBI and Streamlit for data-driven insights",
        "Implemented MLOps best practices using Docker and AWS for model deployment and monitoring",
        "Collaborated with clients to understand business requirements and deliver impactful solutions",
      ],
    },
    {
      role: "Data Analyst",
      company: "Quantum Analytics",
      companylogo: require("./assets/images/quantum.jpg"), // Update with appropriate logo
      date: "February 2023 – April 2024",
      desc: "Led data analysis initiatives and developed automated reporting solutions to drive business insights.",
      descBullets: [
        "Built and maintained SQL databases for efficient data processing and analysis",
        "Designed PowerBI dashboards for real-time monitoring of key business metrics",
        "Conducted statistical analysis to identify trends and patterns in business data",
        "Collaborated with cross-functional teams to implement data-driven solutions",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true, // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "SOME OF MY PROJECTS",
  projects: [
    {
      image: require("./assets/images/vodaphone.webp"),
      projectName: "Vodafone Customer Churn Prediction",
      projectDesc:
        "Developed an NLP-powered churn prediction system analyzing TrustPilot reviews. Built retention strategies using advanced ML techniques and deployed on HuggingFace.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Deelaw15/Vodaphone-Customer-Churn.git",
        },
        {
          name: "Live Demo",
          url: "https://huggingface.co/spaces/Deelaw15/SmartRetain",
        },
      ],
    },
    {
      image: require("./assets/images/construction.avif"),
      projectName: "Construction Delay Predictor",
      projectDesc:
        "Created a machine learning model to predict construction project delays. Built interactive dashboard using Streamlit for real-time delay risk assessment.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Deelaw15/Construction-Delay-Analysis.git",
        },
        {
          name: "Live Demo",
          url: "https://construction-delay-estimator.streamlit.app/",
        },
      ],
    },
    {
      image: require("./assets/images/fraud.jpg"),
      projectName: "Credit Card Fraud Detection",
      projectDesc:
        "Implemented end-to-end fraud detection system using SQL for data processing and PowerBI for real-time monitoring dashboards.",
      footerLink: [
        {
          name: "View Project",
          url: "https://drive.google.com/file/d/1nh1oj13aIOlJEqY830gNzkxU5iehYopz/view?usp=sharing",
        },
      ],
    },
    {
      image: require("./assets/images/british.png"),
      projectName: "British Airways Customer Insights",
      projectDesc:
        "End-to-end analysis from web scraping reviews to predictive modeling, delivering actionable customer insights.",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/Deelaw15/British-Airways.git",
        },
      ],
    },
  ],
  moreProjects: {
    title: "More Projects",
    link: "https://github.com/Deelaw15",
    buttonText: "View More Projects",
  },
  display: true,
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆"),
  subtitle:
    "Professional certifications and accomplishments that showcase my continuous learning journey",
  achievementsCards: [
    {
      title: "British Airways Data Science Job Simulation",
      subtitle:
        "Completed advanced data science simulation focusing on customer behavior analysis and predictive modeling",
      image: require("./assets/images/british.png"), // Add British Airways logo
      footerLink: [
        {
          name: "View Certificate",
          url: "YOUR_CERTIFICATE_LINK",
        },
      ],
      descBullets: [
        "Built predictive models achieving 80% accuracy for customer buying behavior",
        "Performed web scraping and analysis of customer review data",
        "Delivered data-driven insights for business decision making",
      ],
    },
    {
      title: "Quantum Analytics Data Analyst Professional Certificate",
      subtitle: "Comprehensive data analytics certification covering key industry tools",
      image: require("./assets/images/quantum.jpg"), // Add Quantum Analytics logo
      footerLink: [
        {
          name: "View Certificate",
          url: "YOUR_CERTIFICATE_LINK",
        },
      ],
      descBullets: [
        "Mastered Excel, SQL, and PowerBI for data analysis",
        "Developed expertise in data visualization techniques",
        "Applied analytical skills in real-world business scenarios",
      ],
    },
    {
      title: "IBM Data Analytics Basics",
      subtitle: "EdX E-learning certification in data analytics fundamentals",
      image: require("./assets/images/ibm.png"), // Add IBM logo
      footerLink: [
        {
          name: "View Certificate",
          url: "YOUR_CERTIFICATE_LINK",
        },
      ],
      descBullets: [
        "Data collection and cleaning methodologies",
        "Advanced visualization techniques",
        "Data interpretation and analysis",
      ],
    },
    {
      title: "Introduction to Modern AI",
      subtitle: "Cisco certification in artificial intelligence fundamentals",
      image: require("./assets/images/cisco.png"), // Add Cisco logo
      footerLink: [
        {
          name: "View Certificate",
          url: "YOUR_CERTIFICATE_LINK",
        },
      ],
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing Data Science Insights and Project Experiences",
  displayMediumBlogs: "false",
  blogs: [
    {
      url: "https://medium.com/@lawalfaruq50/improving-airline-bookings-through-predictive-analytics-39df4b3f4f29",
      title: "Improving Airline Bookings Through Predictive Analytics",
      description:
        "Analysis of airline customer behavior using predictive modeling to enhance booking rates and customer experience.",
    },
    {
      url: "https://medium.com/@lawalfaruq50/salary-prediction-with-machine-learning-analyzing-job-market-trends-using-glassdoor-data-6921796ae98b",
      title: "Salary Prediction with Machine Learning: Analyzing Job Market Trends",
      description:
        "Exploring salary trends and predictions using machine learning on Glassdoor dataset to understand job market dynamics.",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true, // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+44-7407-279197",
  email_address: "lawalfaruq50@gmail.com",
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false, // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

// Talk Section
const talkSection = {
  display: false, // Set to false to hide this section
};

// Podcast Section
const podcastSection = {
  display: false, // Set to false to hide this section
};

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
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection,
  talkSection, // Add this
  podcastSection, // Add this
};
