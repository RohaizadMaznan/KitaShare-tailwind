import React from "react";
import { Link } from "react-router-dom";
import UsefulLikes from "../../components/documentation/UsefulLikes";
import Meta from "../../components/layout/meta/Meta";

export default function Documentation() {
  return (
    <div data-aos="fade-up" data-aos-delay="100">
    <Meta title="About KitaShare &mdash; Documentation | KitaShare Web Application and OCR" />
      <div className="text-gray-900" >
        {/* <a
          href="/"
          className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
        >
          Back Link
        </a> */}
        <div className="justify-end flex">
          <div>
            
            <Link
              to="/documentation/agreement-of-privacy"
              className="text-base md:text-sm text-blue-500 font-bold no-underline hover:underline"
            >
              Agreement of Privacy{" "}
            </Link>
            <span className="text-base text-blue-500 font-bold">&raquo;</span>
          </div>
        </div>
        <h1 className="break-normal font-bold pt-6 pb-2 text-xl">
          About KitaShare
        </h1>
        <hr className="border-b border-gray-400" />
      </div>

      <p className="py-6">
        {/* <span role="img" aria-label="img">👋</span> Welcome fellow{" "}
        <a
          className="text-blue-500 no-underline hover:underline"
          href="https://www.tailwindcss.com"
        >
          Tailwind CSS
        </a>{" "}
        fan. This starter template provides a starting point to create your own
        helpdesk / faq / knowledgebase articles using Tailwind CSS and vanilla
        Javascript. */}
        KitaShare is a web application system which is able to contribute to
        students in their learning experiences to obtain with no limitation to
        get the learning materials for themselves while studying through Online
        Distance Learning (ODL).
      </p>
      <h1 className="py-2 font-bold">Problem Background</h1>
      <hr className="border-b border-gray-200" />
      {/* <p className="py-6"></p> */}
      <ol>
        <li className="pt-6 pb-3">
          In general, learning materials would be utilized by anybody who needs
          it for their works or reference. As the circumstance is not the same
          as the most recent decade, learning materials are necessary to keep on
          learning through an online platform. Every course has its materials
          shared among students in the class while available on the online
          platform. The custom is the students typically print out the materials
          and scribble down notes as they sit in for the lessons. These notes
          are typically passed down and shared as they often contain valuable
          information which is not explicitly present on the slides. However,
          right now, take UTM, for instance, more than half of students UTM are
          not on campus. As a result, education has changed significantly, with
          the phenomenal rise in e-learning, through instruction on web
          platforms and remotely. This shows that fully online learning is the
          new method in continuing classes through web platforms. As a result,
          every student must obtain relevant learning materials through an
          online platform that can be challenging to find and download.
          Furthermore, students taking a programming course need support by
          getting suitable and understandable learning materials with a
          programming answer.
        </li>
        <li className="py-3">
          Most of the students also have a difficulty to contact their seniors
          to obtain related materials such as hand notes, books and other
          printed reference. Moreover, some of them can be found online on some
          website that provided the materials but with some fees. Not everybody
          can afford the fees to get the learning materials, as the fees might
          be too pricey and overpriced.
        </li>
        <li className="py-3">
          The technology keeps moving forward and changing web application
          trends the most widely used platform around the world because of
          usable in multi-platform. The web application can be viewed using a
          web browser from desktop and smartphone, which is easy and compatible
          on any smartphone devices. Hence, it is good to develop a web
          application that can deliver the maximum usability to the user by
          using the web application.
        </li>
      </ol>
      <hr className="border-b border-gray-100" />

      <h1 className="py-2 mt-10 font-bold">Project Objective</h1>
      <hr className="border-b border-gray-200" />
      <p className="py-6">
        This project aims to develop a repository to store any documents and
        hand note by and for students web application system named “KitaShare”.
        The system utilises and applies the latest technology to enhance the
        experience of students further. The objectives of the project are:
      </p>
      <div className="py-3 mx-5 leading-7">
        <ol class="list-decimal">
          <li>
            To{" "}
            <span className="text-blue-500 underline">
              engineer requirements
            </span>{" "}
            of system for learning materials repository used by students in
            School of Computing, UTM
          </li>
          <li>
            To{" "}
            <span className="text-blue-500 underline">design the system</span>{" "}
            for learning materials repository used by students in School of
            Computing, UTM.
          </li>
          <li>
            To{" "}
            <span className="text-blue-500 underline">develop the system</span>{" "}
            for learning materials repository used by students in School of
            Computing, UTM.
          </li>
          <li>
            To <span className="text-blue-500 underline">test the system</span>{" "}
            for learning materials repository used by students in School of
            Computing, UTM.
          </li>
        </ol>
      </div>

      {/* <blockquote className="border-l-4 border-blue-500 italic my-8 pl-8 md:pl-12">
        Example of blockquote - Lorem ipsum dolor sit amet, consectetur
        adipiscing elit. Aliquam at ipsum eu nunc commodo posuere et sit amet
        ligula.
      </blockquote>
      <p className="py-6">Example code block:</p>
      <pre className="bg-gray-900 rounded text-white font-mono text-base p-2 md:p-4">
        <code className="break-words whitespace-pre-wrap">
          &lt;header className="site-header outer"&gt; &lt;div
          className="inner"&gt; &lt;/div&gt; &lt;/header&gt;
        </code>
      </pre> */}

      <UsefulLikes />
    </div>
  );
}
