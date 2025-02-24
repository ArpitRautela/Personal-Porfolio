import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png"

export const HERO_CONTENT = `I’m a passionate software developer with a solid foundation in full-stack development and a drive for building innovative, real-time applications. Proficient in modern web technologies like React, Next.js, Node.js, and Spring Boot, I focus on crafting scalable solutions and seamless user experiences. Recently, I’ve delved into AI agent development using the Gemini API and Neon database, exploring how artificial intelligence can power smarter, adaptive systems. My goal is to create impactful digital products that blend functionality, performance, and intelligence — pushing the boundaries of technology every step of the way.`;

export const ABOUT_TEXT = `I’m a dedicated Software Developer pursuing a Bachelor of Technology in Computer Science and Engineering. With a strong grasp of full-stack development, I specialize in modern technologies like React, Next.js, Node.js, and Spring Boot. My technical toolkit includes languages like JavaScript, Java, and C++, alongside databases such as PostgreSQL and MongoDB. 

My passion extends to problem-solving — I’ve tackled over 350 Data Structures and Algorithms (DSA) questions, sharpening my analytical thinking and coding skills. Recently, I’ve ventured into AI agent development using the Gemini API and Neon database, exploring how intelligent systems can drive innovation and efficiency.

Beyond academics, I’m driven by curiosity and creativity, having built impactful projects like CodePair — a real-time code collaboration platform — and Real-Time Location Tracker — a live geolocation-sharing app optimized for seamless performance.

I’m always excited to embrace new challenges, push technological boundaries, and build solutions that leave a mark. Let’s connect and create something extraordinary!`;

export const EXPERIENCES = [
  {
    year: "MAY'24 - JULY'24",
    role: "Backend Developer Intern",
    company: "Airtel Digital",
    description: `During my internship at Airtel Digital, I worked on developing a real-time anomaly detection system for the Xtream app's payment processing. Using Spring Boot and data pipelines with cURL and REST APIs, I built a scalable solution capable of processing over 15,000 transactions per hour with 95% accuracy. I implemented an advanced detection algorithm based on historical trends, boosting payment reliability by 30%, and integrated an automated Slack-based alert system—cutting issue resolution time by 50%. This experience sharpened my backend development skills, reinforced my problem-solving mindset, and gave me hands-on exposure to building high-performance, data-driven systems.`,
    technologies: [
      "Java",
      "SpringBoot",
      "RestApis",
      "ElasticSearch",
      "JIRA",
      "GIT",
      "Slack",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Real-Time Location Tracker",
    image: project3,
    description:
      "Real-Time Location Tracker enables precise live geolocation sharing. The app utilizes WebSockets to push location updates with 40% lower latency, ensuring smooth and accurate real-time tracking. Map rendering was optimized with Leaflet.js, reducing load times by 20%, making the platform efficient even with large data sets — perfect for time-sensitive tracking needs.",
    technologies: [
      "Node.js",
      "Express",
      "Socket.IO",
      "Leaflet.js",
      "HTML",
      "CSS",
      "JavaScript",
    ],
    link: "https://realtime-location-tracker-igdv.onrender.com",
  },
  {
    title: "CodePair - Real-Time Code Collaboration",
    image: project4,
    description:
      "CodePair, a real-time code collaboration platform. It empowers multiple users to write, edit, and debug code simultaneously in a shared environment, boosting team productivity by 40%. The platform features advanced syntax highlighting and responsive UI, ensuring smooth collaboration across devices. With optimized API calls and a scalable backend, CodePair reduces latency by 25%, providing a seamless, high-performance experience for developers working together in real time.",
    technologies: [
      "React",
      "Tailwind CSS",
      "CodeMirror",
      "Express",
      "Node.js",
      "JavaScript",
    ],
    link: "https://real-time-code-collaboration-space.onrender.com",
  },  
  {
    title: "Simon Game",
    image: project1,
    description:
      "The Simon game is a memory challenge where players replicate increasingly long sequences of colored lights and sounds. Each successful attempt extends the sequence, testing the player’s memory and reaction skills.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://arpitrautela.github.io/simon-game/",
  },
  {
    title: "Zomato Clone",
    image: project2,
    description:
      "The Zomato front page clone replicates the original's search bar, trending restaurants, cuisine categories, and promotions. It offers users a condensed version of the Zomato experience for seamless browsing.",
    technologies: ["HTML", "CSS"],
    link: "https://arpitrautela.github.io/Zomato-clone/",
  },
];

export const CONTACT = {
  address: "Delhi,India ",
  phoneNo: "+91 9891009447 ",
  email: "arpitrautelax@gmail.com",
};
