import React from "react";
import profileImage from "../../assets/large/Profile/Profile_Pic.png";
function About() {
  return (
    <section id="about-me" className="my-5 intro">
      <div class="flex-row">
        <h1 id="about" className="section-title primary-border">
          About Me
        </h1>
      </div>
      <div className="flex-row">
        <div class="intro-info">
          <div class="intro-img">
            <img src={profileImage} style={{ width: "100%" }} alt="profile" />
          </div>
          <p>
            Hello, my name is Dominique Garrett. I am a self-motivated Entry-level
            Full Stack Web Developer with knowledge and proficiency in computer 
            science and coding. I earned a certificate in Full Stack Development 
            from Southern Methodist University. I am an individual with enhanced 
            skills in problem solving and a strong ability to execute user friendly 
            applications. With each project, my goal is to engage my audience with 
            an effective, smooth and problem free user-experience. Recently I applied 
            my creative skills in a project where I worked with my team to develop a 
            web application centered around cryptocurrency. Excited to further enhance 
            my skills in the future as part of a fast-paced, quality-driven team in order 
            to build better experiences for users on the web.
            
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
