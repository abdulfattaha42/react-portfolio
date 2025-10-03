import flashcards from "../assets/projects/flashcards.jpg";
import whatsapp from "../assets/projects/whatsapp.jpg";
import portfolio from "../assets/projects/portfolio.jpg";
import nfl from "../assets/projects/nfl.jpg";

export const HERO_CONTENT = `I am a junior Computer Science student at George Mason University with a strong foundation in full-stack development and a passion for building intuitive, user-focused applications. Through coursework and personal projects, I have gained hands-on experience with front-end technologies like React and Next.js as well as back-end development using Node.js, MySQL, PostgreSQL, and MongoDB. Beyond technical skills, I bring a strong focus on usability and accessibility, ensuring that the solutions I create not only function well but also provide exceptional user experiences. I am eager to apply my problem-solving skills and creativity to develop innovative, impactful, and user-centered solutions.`;

export const ABOUT_TEXT = `I’m a curious problem-solver who thrives on learning and pushing myself to grow. I approach challenges with an open mind and enjoy figuring out creative solutions that make an impact. Collaboration and continuous improvement are big parts of how I work; I believe the best ideas come from sharing perspectives and building together.
Outside of tech, I like to keep active. You’ll often find me playing basketball, training at the gym, or exploring new interests that keep me sharp both mentally and physically. Whether on the court or in front of a screen, I’m driven by the same mindset: stay disciplined, keep improving, and enjoy the process.`;

export const EXPERIENCES = [
  {
    year: "May 2025 - Present",
    role: "Software Engineering Fellowship",
    company: "Management Leadership for Tomorrow",
    description: `Accepted into a selective 18-month professional development program for high-achieving diverse talent. 
    Completed technical case studies and assignments to grow leadership and technical skills.`,
    technologies: [
      "Professional Development",
      "Collaboration",
      "Problem Solving",
    ],
  },
  {
    year: "Jan 2025 - Present",
    role: "Software Engineering Fellow",
    company: "Colorstack",
    description: `Accepted into an exclusive software engineering fellowship designed for black and latin-x students. Collaborated with a cohort of 100+ peers through weekly events and mentorship programs`,
    technologies: [
      "Python",
      "Teamwork",
      "Javascript",
      "React",
      "GitHub",
      "Agile Practices",
    ],
  },
  {
    year: "June 2025 - Aug 2025",
    role: "Technical Interview Prep Lead",
    company: "Codepath",
    description: `Enhanced algorithmic proficiency by completing 100+ problems in 8-week intensive program, reducing average
solution time from 30 to 15 minutes. Led 10+ pair-programming and mock interview sessions, improving debugging speed by 15% and receiving 10+
positive peer evaluations`,
    technologies: [
      "Python",
      "Data Structure & Algorithms",
      "Time Complexity Analysis",
    ],
  },
  {
    year: "Sep 2022 - May 2023",
    role: "Information Technology Help Desk",
    company: "NVCC",
    description: `Resolved an average of 25+ support tickets per day, achieving a 98% customer satisfaction rating through prompt
and effective troubleshooting and issue resolution`,
    technologies: [
      "Problem Resolution",
      "Windows & MacOS Troubleshooting",
      "Ticketing Systems",
    ],
  },
];

export const PROJECTS = [
  {
    title: "AI-Powered Study Pal",
    image: flashcards,
    description: "AI automated generation of study materials.",
    technologies: ["Node.js", "OpenAI", "Docker", "Auth", "Postgres"],
  },
  {
    title: "Real Time Chat Application",
    image: whatsapp,
    description:
      "An application that allows users to communicate in real-time.",
    technologies: ["Python", "Flask", "Socket.IO", "Tailwind CSS"],
  },
  {
    title: "Portfolio Website",
    image: portfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Javascript", "React", "Tailwind CSS"],
  },
  {
    title: "NFL Match Predictor",
    image: nfl,
    description: "Created an app to predict NFL match outcomes.",
    technologies: ["Python", "React", "AWS"],
  },
];

export const CONTACT = {
  address: "Fairfax, VA",
  phoneNo: "+1 703-397-7405",
  email: "abdulfattaha42@gmail.com",
};
