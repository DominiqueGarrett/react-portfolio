import React from "react";
import homeBrewImage from "../../assets/small/HomeBrew.png";
import summerPunchImage from "../../assets/small/Summer_Punch.png";
import weatherDashImage from "../../assets/small/Weather_Dash.png";
import noteTakerImage from "../../assets/small/NoteTaker.png";
import twilightImage from "../../assets/small/Twilight_Ristorante.png";
import flowerImage from "../../assets/small/Sweet-Pea-Flowers.png";
import sphereImage from "../../assets/small/Sphere.png";

function Portfolio() {
  return (
    <div>
      <section id="work" className="jobs">
        <div className="flex-row">
          <h2 className="section-title secondary-border">Work</h2>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://module14-blog.herokuapp.com">
                {" "}
                <img
                  src={sphereImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Girls Who Code Tech Blog</h4>
              <p>
              This is a full-stack CMS-style blog site where users can publish
              posts and comment on other users' blog posts. With login authentication, 
              logged-in users have access to the dashboard where they can also edit or 
              delete their posts and or comments. Additionallly, this application is 
              MVC structured and makes use of multiple packages such as handlebars, 
              bcrypt, express.sessions, sequelize and more to ensure the most optimized 
              experience.
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://momentum100.herokuapp.com">
                {" "}
                <img
                  src={flowerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Sweet-Pea-Flowers"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Momentum</h4>
              <p>
              Momentum is a full-stack site where users can drop pushpin location
              markers in the major hub cities in Texas. With login authentication, 
              logged-in users have access to the dashboard where they can save a location 
              and write a description. Additionallly, this application is MVC structured
              and makes use of multiple packages such as handlebars, bcrypt, 
              express.sessions, sequelize and more to ensure the most optimized 
              experience..{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://adinair007.github.io/My-Favorite_Crypto/">
                {" "}
                <img
                  src={twilightImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Twilight_Ristorante"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>My-Favorite_Crypto</h4>
              <p>
              My Favorite Crypto is an interactive web application that allows
              users to view and compare different cryptocurrencies. Investors 
              can save their different cryptocurrencies, view coin names, 
              check the price of various crypto coins, and so much more. 
              Investing has never been easier.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://note-taker111.herokuapp.com">
                {" "}
                <img
                  src={noteTakerImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Note_Taker"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Note Taker</h4>
              <p>
              A note taker application that allows users to write, 
              save, and delete notes. This application uses an 
              express backend and saves and retrieves note data 
              from a JSON file.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dominiquegarrett.github.io/weatherdashboard/">
                {" "}
                <img
                  src={weatherDashImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="Weather_Dashboard"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Weather Dashboard</h4>
              <p>
                A website that allows the user see the weather outlook for
                multiple cities. The user can enter a city and see a 5-Day
                Forecast. The user can see the temperature, humidity levels,
                wind speed as well as the UV index.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://text-editor1111.herokuapp.com">
                {" "}
                <img
                  src={summerPunchImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="SummerPunch"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Text Editor</h4>
              <p>
              A text editor that meets the PWA criteria and feature a number 
              of data persistence techniques that serve as redundancy in case 
              of the options is not supported by the browser. The application 
              will also function offline.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="job">
          <div className="job-info">
            <div className="job-img">
              <a href="https://dominiquegarrett.github.io/codequiz/">
                {" "}
                <img
                  src={homeBrewImage}
                  className="my-2"
                  style={{ width: "100%" }}
                  alt="HomeBrew"
                />
              </a>
            </div>
            <div className="job-text">
              <h4>Code Quiz</h4>
              <p>
              This timed code quiz features multiple-choice questions about 
              javascript. This app will run in the browser, and will feature 
              dynamically updated HTML and CSS powered by JavaScript code. 
              Students will begin the timed quiz. If answered incorrectly, 
              time is deducted. When quiz is completed users can input their 
              initials and score.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
