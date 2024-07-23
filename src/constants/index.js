import project1 from "../assets/projects/project-1.png"
import project2 from "../assets/projects/project-2.png";

export const HERO_CONTENT = `I build scalable Java applications using Spring Boot and craft dynamic web experiences with React and Next.js. My technical skills extend to working with databases like MySQL, PostgreSQL, and MongoDB. I'm passionate about solving complex problems and always eager to explore new technologies. Explore my projects to see how I turn ideas into functional solutions!`;

export const ABOUT_TEXT = `I’m a third-year B.Tech CSE student with expertise in Java backend development using Spring Boot and web development. I’m skilled in creating scalable applications and dynamic web interfaces with React, Next.js, Node.js, and various databases. Passionate about solving complex problems and eager to contribute to innovative projects.`;

export const EXPERIENCES = [
  {
    year: "MAY'24 - JULY'24",
    role: "Backend Developer Intern",
    company: "Airtel Digital",
    description: `During my internship at Airtel Digital with the Xstream backend team, I developed an anomaly detection service for payments data. I designed features, debugged code, and collaborated with teams, successfully optimizing performance and improving code quality. This experience enhanced my problem-solving skills and highlighted the importance of efficient coding and teamwork.`,
    technologies: ["Java", "SpringBoot", "RestApis", "ElasticSearch","JIRA","GIT","Slack"],
  },
];

export const PROJECTS = [
  {
    title: "Simon Game",
    image: project1,
    description:
      "The Simon game is a memory challenge where players replicate increasingly long sequences of colored lights and sounds. Each successful attempt extends the sequence, testing the player’s memory and reaction skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://arpitrautela.github.io/simon-game/"
  },
  {
    title: "Zomato Clone",
    image: project2,
    description:
      "The Zomato front page clone replicates the original's search bar, trending restaurants, cuisine categories, and promotions. It offers users a condensed version of the Zomato experience for seamless browsing.",
    technologies: ["HTML", "CSS"],
    link: "https://arpitrautela.github.io/Zomato-clone/"
  },
];

export const CONTACT = {
  address: "Delhi,India ",
  phoneNo: "+91 9891009447 ",
  email: "arpitrautela40@gmail.com",
};
