"use client";

import React, { useState } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  // State to manage the loading state
  const [isLoading, setIsLoading] = useState(false);

  interface FormElements extends HTMLFormControlsCollection {
    senderEmail: HTMLInputElement;
    message: HTMLTextAreaElement;
  }

  interface ContactFormElement extends HTMLFormElement {
    readonly elements: FormElements;
  }

  const handleSubmit = async (event: React.FormEvent<ContactFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const formData = new FormData(event.currentTarget);
    const name= formData.get("name") as string;
    const senderEmail = formData.get("senderEmail") as string;
    const message = formData.get("message") as string;

    try{
      const response = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({name:name,email:senderEmail,message:message}),
      });
      if (!response.ok) {
        throw new Error("Failed to send message")
      }
      console.log("I reached here");
      toast.success("Message sent successfully!");
      
    }catch(error){
      console.error(error);
      toast.error("Failed to send message");
      setIsLoading(false);
      return;
    }
    

    setIsLoading(false);
  };

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:example@gmail.com">
          ranjanvswamyjnv2005@gmail.com
        </a>{" "}
        or through this form.
      </p>

      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={handleSubmit}
      >
        <input
          className="h-14 px-4 my-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="name"
          type="text"
          required
          maxLength={500}
          placeholder="Your Name"
        />
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="mt-4 py-2 px-6 rounded-lg bg-blue-600 text-white disabled:bg-gray-400"
        >
          {isLoading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </motion.section>
  );
}
