import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons";
import Photography from "./Photography"
import MyForm from "./myform.js";
import ocean from "../videos/ocean_tall.mp4";
import {
  FaAngleDoubleDown,
  FaBootstrap,
  FaCode,
  FaCss3Alt,
  FaDatabase,
  FaGem,
  FaGitAlt,
  FaRegHeart,
  FaHistory,
  FaHtml5,
  FaJsSquare,
  FaLaptopCode,
  FaLeaf,
  FaNode,
  FaReact,
  FaCcStripe,
  FaSms,
  FaLinkedin,
  FaFileAlt
} from "react-icons/fa";

export default function Home() {
  const [video, showVideo] = useState("video-hide");
  const [image, showImage] = useState("hero-image");
  const [skills, updateSkills] = useState("hide");
  const [project, updateProject] = useState({
    js: "off",
    ruby: "off",
    html: "off",
    css: "off",
    bootStrap: "off",
    react: "off",
    postgres: "off",
    mongo: "off",
    git: "off",
    node: "off",
    stripe: "off",
    twilio: "off"
  });

  const mouseEnter = function(project) {
    if (project === "xstitch") {
      updateProject({
        js: "on",
        ruby: "on",
        html: "on",
        css: "on",
        bootStrap: "on",
        react: "on",
        postgres: "on",
        mongo: "off",
        git: "on",
        node: "off",
        stripe: "off",
        twilio: "off"
      });
    } else if (project === "hungry") {
      updateProject({
        js: "on",
        ruby: "off",
        html: "on",
        css: "on",
        bootStrap: "on",
        react: "off",
        postgres: "on",
        mongo: "off",
        git: "on",
        node: "on",
        stripe: "off",
        twilio: "on"
      });
    } else if (project === "tweeter") {
      updateProject({
        js: "on",
        ruby: "off",
        html: "on",
        css: "on",
        bootStrap: "off",
        react: "off",
        postgres: "off",
        mongo: "on",
        git: "on",
        node: "on",
        stripe: "off",
        twilio: "off"
      });
    } else if (project === "jungle") {
      updateProject({
        js: "on",
        ruby: "on",
        html: "on",
        css: "on",
        bootStrap: "on",
        react: "off",
        postgres: "on",
        mongo: "off",
        git: "on",
        node: "off",
        stripe: "on",
        twilio: "off"
      });
    } else if (project === "scheduler") {
      updateProject({
        js: "on",
        ruby: "off",
        html: "on",
        css: "on",
        bootStrap: "off",
        react: "on",
        postgres: "off",
        mongo: "off",
        git: "on",
        node: "off",
        stripe: "off",
        twilio: "off"
      });
    }
  };

  const skillsShow = function() {
    updateSkills("show");
  };

  const skillsHide = function() {
    updateSkills("hide");
  };

  const hideImage = function() {
    showVideo("video-show");
    showImage("hero-image-hide");
  };

  return (
    <div className="App">
      <Parallax pages={5.2} style={{ background: "#1e1354" }}>
        <ParallaxLayer offset={0} speed={0}>
          <div className="hero-vid-container">
            <div className={video}>
              <video
                className="hero-vid"
                autoPlay
                loop
                muted
                onCanPlayThrough={hideImage}
              >
                <source src={ocean} type="video/mp4" />
              </video>
            </div>
            <img
              className={image}
              src={require("../images/ocean_still.png")}
              alt="blue ocean with pink sun"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.5} speed={1}>
          <div className="container">
            <h1 className="glowOn">Hey</h1>
            <FaAngleDoubleDown className="bounce" size={30} color="white" />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1.4} speed={0}>
          <div className={video}>
            <video className="upside-down" autoPlay loop muted>
              <source src={ocean} type="video/mp4" />
            </video>
            <img
              className={image}
              src={require("../images/ocean_still.png")}
              alt="blue ocean with pink sun"
            />
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={0.99} speed={0.3}>
          <div className="angle">
            <h2>
              I'm Charlotte. I'm a full stack web developer based in Vancouver,
              BC.
            </h2>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={1} speed={0.2}>
          <div className="info">
            <div className="summary">
              <div className="summary-icons">
                <FaHistory size={38} />
                <div className="vl"></div>
                <FaLaptopCode size={40} />
                <div className="vl"></div>
                <FaRegHeart size={40} />
              </div>
              <div className="summary-text">
                <div>
                  <p>
                    I’m a McGill University psychology grad with a past life in
                    Human Resources.
                    <br />
                    Seeking new and more interesting challenges, I took the leap
                    into programming and web development.
                  </p>
                </div>
                <div>
                  <p>
                    I love making beautiful, robust UIs for broad audiences,
                    solving tricky problems, and seeing my applications come to
                    life.
                    <br />
                  </p>
                </div>
                <div>
                  <p>
                    Aside from coding, I enjoy cross stitching, creating 3D
                    images and animations in Blender, and reading sci-fi novels.
                    <br />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        <ParallaxLayer offset={2} speed={0.3}>
          <div className="projects-divider">
            <div
              className="projects"
              onMouseEnter={() => skillsShow()}
              onMouseLeave={() => skillsHide()}
            >
          <h2 className="projects-header">Projects</h2>
              <div
                className="project-card"
                onMouseEnter={() => mouseEnter("xstitch")}
              >
                <div className="project-title-gif">
                  <img
                    src={require("../gifs/edit.gif")}
                    alt="gif of editing a pixel art pattern"
                  />
                </div>
                <div className="project-description">
                  <h2>XStitch</h2>
                  <h3>
                    A cross-stitch pattern creating app with version history
                  </h3>
                  <p>
                    Users can create patterns, return to previous saved
                    versions, and generate pdfs to print out their patterns.
                    Built with React, Ruby on Rails, PostgreSQL, and Axios.
                  </p>
                </div>
              </div>
              <div
                className="project-card"
                onMouseEnter={() => mouseEnter("hungry")}
              >
                <div className="project-title-gif">
                  <img
                    src={require("../gifs/hungry_heroes_checkout.gif")}
                    alt="loading..."
                  />
                </div>
                <div className="project-description">
                  <h2>Hungry Heroes</h2>
                  <h3>
                    A food pick-up ordering app
                  </h3>
                  <p>
                    Users can place orders, which notifies the restaurant via
                    text message.
                    The restaurant can respond with estimated wait
                    time and notify the user when the order is ready for pickup.
                    <br />
                    Front-end built using HTML/CSS/Bootstrap, Javascript, AJAX.
                    <br />
                    Back-end was built using Node.js, Express, and PostreSQL.
                    <br />
                    Twilio API was used for sending text messages.
                  </p>
                </div>
              </div>
              <div
                className="project-card"
                onMouseEnter={() => mouseEnter("tweeter")}
              >
                <div className="project-title-gif">
                  <img
                    src={require("../gifs/tweet.gif")}
                    alt="gif of creating a tweet"
                  />
                </div>
                <div className="project-description">
                  <h2>Tweeter</h2>
                  <h3>A simple, single-page Twitter clone</h3>
                  <p>
                    Front end was built with HTML, CSS, JS, jQuery and AJAX.
                    Back end was built using Node and Express.
                  </p>
                </div>
              </div>
              <div
                className="project-card"
                onMouseEnter={() => mouseEnter("jungle")}
              >
                <div className="project-title-gif">
                  <img
                    src={require("../gifs/jungle_checkout.gif")}
                    alt="git of user checking out"
                  />
                </div>
                <div className="project-description">
                  <h2>Jungle</h2>
                  <h3>A mini e-commerce application</h3>
                  <p>
                    Built with Rails 4.2, PostgreSQL, Stripe, and Bootstrap
                  </p>
                </div>
              </div>
              <div
                className="project-card"
                onMouseEnter={() => mouseEnter("scheduler")}
              >
                <div className="project-title-gif">
                  <img
                    src={require("../gifs/editAppt.gif")}
                    alt="git of editing an appointment"
                  />
                </div>
                <div className="project-description">
                  <h2>Scheduler</h2>
                  <h3>A single page interview scheduling app</h3>
                  <p>
                    Built with React. Storybook, Jest tests, and Cypress were used in
                    the development of the project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ParallaxLayer>
        {/* <ParallaxLayer offset={4} speed={0}>
          <Photography />
        </ParallaxLayer> */}
        <ParallaxLayer offset={4.4} speed={0}>
          <div className="contact-container">
            <MyForm />
            <div className="social">
              <a
                href="https://github.com/charcharmasonjar"
                rel="noopener noreferrer"
                target="_blank"
                className="social-link"
              >
                <FaGitAlt size={35} />
                <p>Github</p>
              </a>
              <a
                href="https://www.linkedin.com/in/dibb/"
                rel="noopener noreferrer"
                target="_blank"
                className="social-link"
              >
                <FaLinkedin size={35} />
                <p>LinkedIn</p>
              </a>
              <Link to="/resume">
                <FaFileAlt size={30} />
                <p>Resume</p>
              </Link>
            </div>
          </div>
        </ParallaxLayer>
      </Parallax>
      <div className={`skills ${skills}`} onMouseEnter={() => skillsShow()}>
        <h2>Skills</h2>
        <div className={`skill-container ${project.js}`}>
          <FaJsSquare size={30} />
          JavaScript
        </div>
        <div className={`skill-container ${project.ruby}`}>
          <FaGem size={30} />
          Ruby
        </div>
        <div className={`skill-container ${project.html}`}>
          <FaHtml5 size={30} />
          HTML
        </div>
        <div className={`skill-container ${project.css}`}>
          <FaCss3Alt size={30} />
          CSS
        </div>
        <div className={`skill-container ${project.bootStrap}`}>
          <FaBootstrap size={30} />
          Bootstrap
        </div>
        <div className={`skill-container ${project.react}`}>
          <FaReact size={30} />
          ReactJs
        </div>
        <div className={`skill-container ${project.postgres}`}>
          <FaDatabase size={30} />
          PostgreSQL
        </div>
        <div className={`skill-container ${project.mongo}`}>
          <FaLeaf size={30} />
          MongoDB
        </div>
        <div className={`skill-container ${project.git}`}>
          <FaGitAlt size={30} />
          Git
        </div>
        <div className={`skill-container ${project.node}`}>
          <FaNode size={30} />
          NodeJs
        </div>
        <div className={`skill-container ${project.stripe}`}>
          <FaCcStripe size={30} />
          Stripe
        </div>
        <div className={`skill-container ${project.twilio}`}>
          <FaSms size={30} />
          Twilio
        </div>
      </div>
    </div>
  );
}
