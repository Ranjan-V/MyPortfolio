"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-justify leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I'm Ranjan, a passionate tech enthusiast from Tumkur, Karnataka.{" "}
        <span className="font-medium">Currently pursuing my 2nd year of B.Tech at Vellore Institute of Technology-AP</span>.  I thrive at the intersection of development and problem-solving, with a strong interest in competitive programming, AI/ML and app development.{" "}
        <span className="font-medium"> I’ve worked extensively with languages like  Python, Java, Dart and SQL and I enjoy building meaningful solutions using modern technologies and tools.</span>{" "}
        <span className="italic">Whether it’s optimizing algorithms or exploring the latest in AI, I’m always driven by a deep curiosity and the urge to innovate.</span>
      </p>

      <p>
        <span className="italic">Beyond coding, I love playing chess and badminton. I also run two YouTube channels — one dedicated to teaching coding(Code With Ranjan) and the other focused on chess content(Gambit Craze).</span> It's my way of sharing what I love and staying connected with a broader community.{" "}
      </p>
    </motion.section>
  );
}
