import React from "react";

function Home(props) {
  const [showContent, setShowContent] = React.useState(true);
  const { theme } = props;
  return (
    <>
      <div className={theme ? "homeContainer" : "homeContainerDark"}>
        <section className="aboutMe">
          <img
            className="facePic"
            src="../images/face-pic.jpeg"
            alt="facePic"
          />
          <div className="socialMediaDisplayer">
            <p onClick={() => setShowContent(!showContent)}>
              Check my social media
            </p>
            <i className="arrow" onClick={() => setShowContent(!showContent)}>
              <iconify-icon icon="dashicons:arrow-down-alt2"></iconify-icon>
            </i>
          </div>
          {showContent && (
            <div className="socialMediaContainer">
              <div className="socialIcons">
                <i>
                  <a href="https://www.facebook.com" target="blank">
                    <iconify-icon icon="ant-design:facebook-filled"></iconify-icon>
                  </a>
                </i>
                <i>
                  <a href="https://www.youtube.com" target="blank">
                    <iconify-icon icon="ant-design:youtube-filled"></iconify-icon>
                  </a>
                </i>
                <i>
                  <a href="https://www.twitter.com" target="blank">
                    <iconify-icon icon="akar-icons:twitter-fill"></iconify-icon>
                  </a>
                </i>
                <i>
                  <a href="https://www.pinterest.com" target="blank">
                    <iconify-icon icon="akar-icons:pinterest-fill"></iconify-icon>
                  </a>
                </i>
                <i>
                  <a href="https://www.instagram.com" target="blank">
                    <iconify-icon icon="akar-icons:instagram-fill"></iconify-icon>
                  </a>
                </i>
              </div>
            </div>
          )}
          <div className="holaSoyJose">
            <p>Hi, my name is Jose Gabriel.</p>
            <p>
              I´m a junior developer with experience in Front-End development. I
              am passionate about learning and improving everyday my coding
              skills and development knowledge, I love to create and learn with
              technologies.
            </p>
          </div>
          <img
            className="bachelorPic"
            src="../images/bachelor.jpeg"
            alt="facePic"
          />
          <div className="jobLinks">
            <a href="https://github.com/Joga50" target="blank">
              <iconify-icon icon="codicon:github-alt"></iconify-icon>
            </a>
            <a
              href="https://www.linkedin.com/in/jose-gabriel-alvarez-b7973723a/"
              target="blank"
            >
              <iconify-icon icon="ant-design:linkedin-outlined"></iconify-icon>
            </a>
          </div>
        </section>
        <section className="skills">
          <p>Knowledge</p>
          <p>
            I believe that no one is an ended product, so as a part of my dily
            basis Im always studying, reading, coding, and learning new things,
            in order to get better everyday as a developer
          </p>
          <p>Skills</p>
          <div className="tech">
            <div className="Development">
              <i>
                <iconify-icon icon="bx:code-alt"></iconify-icon>
                <span className="skillsTittle">Front-End </span>
              </i>

              <i>
                <iconify-icon icon="vscode-icons:file-type-html"></iconify-icon>
                <span className="firstI">HTML</span>
              </i>
              <i>
                <iconify-icon icon="vscode-icons:file-type-css"></iconify-icon>
                <span>CSS</span>
              </i>
              <i>
                <iconify-icon icon="logos:javascript"></iconify-icon>
                <span>JavaScript</span>
              </i>

              <i>
                <iconify-icon icon="logos:react"></iconify-icon>
                <span>React</span>
              </i>
            </div>
            <div className="WorkingTools">
              <i>
                <iconify-icon icon="fluent:window-dev-tools-16-regular"></iconify-icon>
                <span className="skillsTittle">Tools</span>
              </i>
              <i>
                <iconify-icon icon="fontisto:github"></iconify-icon>
                <span>GitHub</span>
              </i>
              <i>
                <iconify-icon icon="simple-icons:jirasoftware"></iconify-icon>
                <span>Jira</span>
              </i>
              <i>
                <iconify-icon icon="ic:outline-view-kanban"></iconify-icon>
                <span>Kanban</span>
              </i>
            </div>
          </div>
        </section>

        <section className="education">
          <p>Education</p>
          <p>
            Every person should educate themselves through their lives, in order
            to grow as a human being and develop the best version on yourself.
          </p>
          <p>Learning is a lifelong process</p>
          <div className="educationContainer">
            <div className="career">
              <img
                className="bachelorPic"
                src="../images/bachelor.jpeg"
                alt="facePic"
              />
              <i>
                <iconify-icon icon="nimbus:university"></iconify-icon>
                <span className="skillsTittle"> University of Medellín</span>
              </i>
              <i>
                <iconify-icon icon="ic:outline-psychology"></iconify-icon>
                <span>Psychologist</span>
              </i>
              <i>
                <iconify-icon icon="icon-park:english"></iconify-icon>
                <span>English B2</span>
              </i>
            </div>
            <div className="techCareer">
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <i className="carouselSlideInfo">
                      <iconify-icon icon="logos:udemy"></iconify-icon>

                      <ul>
                        <li>
                          The Complete JavaScript Course 2022: From Zero to
                          Expert!
                        </li>
                        <li>The Complete 2022 Web Development Bootcamp</li>
                      </ul>
                    </i>
                  </div>
                  <div class="carousel-item">
                    <i>
                      <img src="../images/Digital-House.png" alt="DHLogo" />

                      <ul>
                        <li>Fullstack developer course</li>
                      </ul>
                    </i>
                  </div>
                  <div class="carousel-item">
                    <i>
                      <img src="../images/acamicaLogo.png" alt="acamicaLogo" />
                      <ul>
                        <li>Advanced Front End course in React</li>
                      </ul>
                    </i>
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="jobExperience">
          <p>Experience</p>
          <p>
            In order to grow as a fully working person. It´s always good so have
            experience in some fields.
          </p>

          <div className="jobExperienceContainer">
            <span className="skillsTittle">Other Companies</span>

            <div className="companies">
              <div>
                <span>Teleperformance - Customer servcie, Bilingual agent</span>
                <h6 className="jobDescription">
                  I worked at Teleperformance, a 100% english call center, were
                  I could improve my english and customer services skills.
                </h6>
              </div>
              <div class="vr"></div>
              <div>
                <span>ASEAR S.A ESP - Human resources</span>
                <h6 className="jobDescription">
                  I worked as a Psychologist, at a company called ASEAR S.A ESP.
                  This company is located in Medellin, and I had to make
                  interviews to the people who was applying for a job at this
                  company.
                </h6>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="insivibleFooter"></div>
    </>
  );
}

export default Home;
