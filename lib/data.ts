import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import faceImg from "@/public/face.jpg";
import cartoonizerImg from "@/public/cartoonizer.jpg";
import sahayaImg from "@/public/sahaya.jpg";
import farmerImg from "@/public/farmer.jpg";
import lobImg from "@/public/lob.png";
import legalImg from "@/public/legal.png";
import ofiImg from "@/public/ofi.png";
import { FaLaptopCode } from "react-icons/fa";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name:"Education",
    hash:"#education"
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;
export const educationData=[
  {
    title: "Jawahar Navodaya Vidyalaya",
    location: "Tumkur, Karnataka, India",
    description:
      "I completed my schooling from Jawahar Navodaya Vidyalaya, Tumkur. I was a student of Science stream actively engaging in Research, having a government certified research project.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2023",
  },
  {
    title: "Vellore Institute of Technology-AP",
    location: "Amaravati, Andhra Pradesh, India",
    description:
      "Currently pursuing my B.Tech in Computer Science and Engineering. Actively exploring real-world applications of Competitive Programming, Quantitative Finance, AI/ML and Software Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023 - Current",
  },
]

export const experiencesData = [
  {
    title:"Machine Learning Intern",
    location:"Alignerr (Remote)",
    description:"Optimizing multilingual LLM reliability by architecting logical reasoning workflows and Chain-of-Thought (CoT) prompting to orchestrate sophisticated tool-use via LangChain and API agent frameworks.",
    icon: React.createElement(FaRobot),
    date:"Dec 2025 - Current"
  },
 
  {
    title:"AI Model Trainer",
    location:"Invisible Technologies (Remote)",
    description:"Optimized a multilingual LLM to achieve a 32% accuracy gain through large-scale data curation and iterative algorithm refinement.",
    icon: React.createElement(FaRobot),
    date:"Oct 2025 - Dec 2025"
  },
  {
    title:"Software Development Engineer Intern",
    location:"Bluestock Fintech (Remote)",
    description:"Contributing to the development of fintech solutions at Bluestock Fintech as a SDE Intern, focusing on building scalable and efficient software in a dynamic, real-world environment.",
    icon: React.createElement(FaLaptopCode),
    date:"Apr 2025- May 2025"
    }
] as const;

export const projectsData = [
  {
    title: "Microstructure Alpha: Order Flow Imbalance",
    description:
      " Developed a Level-2 order book system achieving an IC of 0.12 on 100GB+ of tick data, maintaining profitability after 5bps fees.",    
    tags: ["Python", "Asyncio", "XG Boost", "Scikit-learn", "Flask","Pandas", "Market Microstructure"],
    imageUrl: ofiImg,
    githubUrl: "https://github.com/Ranjan-V/MicrostructureAlphaEngine-Order_Flow_Imbalance_Strategy",
  },
  {
    title: "Quantitative Market Simulation Engine",
    description:
      "Engineered a Python LOB engine achieving a 1460% annualized return and 80.8% win rate on BTC via dynamic market making.",
    tags: ["Python", "Backtesting", "Quant Finance", "Plotly", "Numpy", "Flask","Pandas"],
    imageUrl: lobImg,
    githubUrl: "https://github.com/Ranjan-V/LOB-Trading-Engine",
  },
  {
    title: "Legal Analyser",
    description:
      "Developed a generative AI browser extension achieving 91% risk detection accuracy and a 65% boost in reading efficiency via real-time context-aware Q&A.",
    tags: ["Python", "Generative AI", "NLP", "JavaScript"],
    imageUrl: legalImg,
    githubUrl: "https://github.com/likhith-b-a/Legal-analyser",
  },
  {
    title: "Swasta - A 360° Farmer App",
    description:
      "Built a full-stack platform with AI-powered crop quality and disease detection, enabling direct farmer-consumer interaction.",
    tags: ["Python", "TensorFlow", "Flutter", "Dart", "Firebase", "Kaggle", "NumPy"],
    imageUrl: farmerImg,
    githubUrl: "https://github.com/Ranjan-V/SWASTHA",
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Built a facial recognition attendance system using Python, OpenCV, and ML, with SQL integration for secure record-keeping.",
    tags: ["Python", "OpenCV", "Scikit-learn", "SQL"],
    imageUrl: faceImg,
    githubUrl: "https://github.com/Ranjan-V/Face-Recognition-Attendance",
  },
  {
    title: "Image Cartoonizer",
    description:
      "Created a cartoon-style image converter using edge detection and color quantization, with image optimization in MATLAB for improved visuals.",
    tags: ["Python", "OpenCV", "Matplotlib", "MATLAB"],
    imageUrl: cartoonizerImg,
    githubUrl: "https://github.com/Ranjan-V/cartoonizer",
  },
  {
    title: "Project Sahayya (Catalyst)",
    description:
      "Designed a voice-activated surveillance system that detects distress signals and sends instant alerts to enhance safety in shared spaces.",
    tags: ["Arduino", "C++"],
    imageUrl: sahayaImg,
    githubUrl: "https://github.com/Ranjan-V/Project-Sahaya",
  },
] as const;

export const skillsData = [
  // Quant Trading & Finance (Priority 1)
  "C++",
  "Python",
  "Competitive Programming",
  "Algorithms",
  "Data Structures",
  "Quantitative Analysis",
  "Algorithmic Trading", 
  "Risk Management",
  "Statistics",
  "Probability Theory",
  "Mathematical Modeling",
  "Stochastic Calculus",
  "Financial Mathematics",
  
  // Core Programming & Algorithms (Priority 2 - Essential for Quant)
  "Java",
  "Dynamic Programming",
  "Graph Theory",
  "Number Theory",
  
  // Machine Learning & AI (Priority 3)
  "Machine Learning",
  "Deep Learning",
  "TensorFlow",
  "Scikit-learn",
  "Natural Language Processing",
  "Data Analysis",
  
  // Software Engineering (Priority 4)
  "System Design",
  "SQL",
  "Git",
  "Problem-Solving",
  "Algorithm Design",
  "Code Optimization",
  
  // Tools & Platforms (Priority 5 - Only if you have projects)
  "MATLAB",
  "Linux",
  
  // Soft Skills (Priority 6 - Minimal on portfolio)
  "Leadership","Mentorship"
] as const;
