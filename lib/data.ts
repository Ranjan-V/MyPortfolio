import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import { FaRobot } from "react-icons/fa";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import lungImg from "@/public/lung.jpg";
import faceImg from "@/public/face.jpg";
import chatImg from "@/public/chatApp.jpg";
import cartoonizerImg from "@/public/cartoonizer.jpg";
import sahayaImg from "@/public/sahaya.jpg";
import farmerImg from "@/public/farmer.jpg";
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
      "I completed my schooling from Jawahar Navodaya Vidyalaya, Tumkur. I was a student of Science stream actively engaging in Research.",
    icon: React.createElement(LuGraduationCap),
    date: "2016-2023",
  },
  {
    title: "Vellore Institute of Technology-AP",
    location: "Amaravati, Andhra Pradesh, India",
    description:
      "Currently pursuing my B.Tech in Computer Science and Engineering. Actively exploring real-world applications of Competitive Programming, AI/ML, Software Development and App Development.",
    icon: React.createElement(LuGraduationCap),
    date: "2023-2027",
  },
]

export const experiencesData = [
 
  {
    title: "Competitive Programming Question Designer",
    location: "Navigate Labs(Remote)",
    description:
      "Designing and developing challenging competitive programming questions, focusing on diverse algorithms and data structures, with optimized solutions and multiple approaches for quality and reliability.",
    icon: React.createElement(FaLaptopCode),
    date: "2025 - 2025",
  },
  {
    title:"AI Model Reviewer Intern",
    location:"Examdojo(Remote)",
    description:"Contributing to Examdojo EdTech platform by reviewing and solving AI-generated questions in subjects like math and physics. Helping improve the accuracy and reliability of their educational AI systems.",
    icon: React.createElement(FaRobot),
    date:"2025-2025"
  },
  {
    title:"Software Development Engineer Intern",
    location:"Bluestock Fintech(Remote)",
    description:"Contributing to the development of fintech solutions at Bluestock Fintech as a SDE Intern, focusing on building scalable and efficient software in a dynamic, real-world environment.",
    icon: React.createElement(FaLaptopCode),
    date:"2025-2025"
    }
] as const;

export const projectsData = [
  {
    title: "Lung Cancer Detection System",
    description:
      "Created an ML model to detect lung cancer from images with 89% accuracy, identifying different stages using classification algorithms.",
    tags: ["Python", "TensorFlow", "Scikit-learn"," OpenCV", "Flask"],
    imageUrl: lungImg,
  },
  {
    title: "Swasta – A 360° Farmer App",
    description:
      "Built a full-stack platform with AI-powered crop quality and disease detection, enabling direct farmer-consumer interaction.",
    tags: ["Python", "TensorFlow", "Flutter", "Dart", "Firebase","Kaggle","NumPy"],
    imageUrl: farmerImg,
  },
  {
    title: "Real-Time Chat Application",
    description:
      "Developed a real-time chat app with Flutter and Firebase, featuring user authentication, dynamic UI updates, and responsive design.",
    tags: ["Flutter", "Firebase", "Dart"],
    imageUrl: chatImg,
  },
  {
    title: "Face Recognition Attendance System",
    description:
      "Built a facial recognition attendance system using Python, OpenCV, and ML, with SQL integration for secure record-keeping.",
    tags: ["Python", "OpenCV", "Scikit-learn","SQL"],
    imageUrl: faceImg,
  },
  
  {
    title: "Image Cartoonizer",
    description:
      "Created a cartoon-style image converter using edge detection and color quantization, with image optimization in MATLAB for improved visuals.",
    tags: ["Python", "OpenCV", "Matplotlib","MATLAB"],
    imageUrl: cartoonizerImg,
  },
  {
    title: "Project Sahayya (Catalyst)",
    description:
      "Designed a voice-activated surveillance system that detects distress signals and sends instant alerts to enhance safety in shared spaces.",
    tags: ["Arduino", "C++"],
    imageUrl: sahayaImg,
  },
  
] as const;

export const skillsData = [
  "Python", "Java", "SQL","C++", "Flutter", "Firebase", "TensorFlow", "Data Analysis", "Scikit-learn",  "Algorithmic Trading", "Quantitative Analysis", "Risk Management"," MATLAB", "Git", "GitHub", "SQL", "Firebase", "Image Optimization Techniques", "Team Leadership", "Problem-Solving"
] as const;
