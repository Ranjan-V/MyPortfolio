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
  I am a <span className="font-medium">Quantitative Developer and Competitive Programmer</span> currently pursuing my B.Tech at <span className="font-medium">Vellore Institute of Technology-AP</span>. 
  With a <span className="font-medium">global rank of 389 (Top 0.1%) on CodeChef</span> and <span className="font-medium">Expert status on Codeforces</span>, I specialize in architecting high-performance systems where mathematical rigor meets scalable engineering. 
  My technical expertise spans <span className="font-medium">low-latency simulation engines, LLM optimization, and sophisticated algorithmic research</span>.
</p>

<p className="mb-3">
  I have a proven track record of delivering impact, from building a <span className="font-medium">Market Simulation Engine yielding 1460% annualized returns</span> to enhancing <span className="font-medium">multilingual LLM accuracy by 32%</span> during my tenure at Invisible Technologies. 
  I am deeply driven by <span className="italic">microstructure alpha, stochastic processes, and the challenge of engineering order out of complex data</span>. 
  Outside of development, I lead the <span className="font-medium">CodeCrux VITAP club</span> and have mentored over 500 students in their journey towards technical excellence.
</p>

      <p>
        <span className="italic">Beyond coding, I love playing chess and badminton. I also run two YouTube channels — one dedicated to teaching coding(Code With Ranjan) and the other focused on chess content(Gambit Craze).</span> It's my way of sharing what I love and staying connected with a broader community.{" "}
      </p>
    </motion.section>
  );
}
