import * as React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoDocumentText } from "react-icons/io5";
import { Works } from "../components/works";

const IndexPage = () => {
  return (
    <div className="dark:bg-black dark:text-gray-100">
    <section className="flex p-5 justify-center align-center flex-col h-screen w-full">
      <div className="lg:w-5/12 self-center">
        <div className="lg:text-4xl text-2xl text-gray-700 dark:text-gray-200">Hi! I am Hemraj Rana</div>
        <p className="mt-5 lg:text-xl text-lg text-gray-800 dark:text-gray-100">
          I am interested in machine learning and artificial intelligence.<br/>
          Currently, I am pursuing a Master's in IT in Kyoto, Japan.<br/>
          Before coming here, I worked as a software engineer for two years in India.
        </p>
        <div className="flex flex-row justify-end mt-4 pr-5 text-2xl space-x-3">
          <a href="#" target="_blank"><IoDocumentText className="cursor-pointer" /></a>
          <a href="https://www.linkedin.com/in/itshrr/" target="_blank"><FaLinkedin className="cursor-pointer" /></a>
          <a href="https://github.com/hrr817" target="_blank"><FaGithub className="cursor-pointer" /></a>
        </div>
      </div>
    </section>
    <Works />
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Hemraj Rana | Portfolio</title>
