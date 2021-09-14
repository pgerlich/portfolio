import React from "react";
import TypeIt from "typeit-react";


// TODO: Parameterize skills, blog URL, Jobs, etc.
function Profile(props) {
  const {linkedInProfile, githubProfile, name, title, otherTitles, lastTitle} = props;

    let linkedInAddress = "https://www.linkedin.com/in/" + linkedInProfile;
    let githubAddress = "https://www.github.com/" + githubProfile;

    return (
      <header id="isg-header">
          <div className="isg-intro">
              <div className="isg-mobile-logo">
                  <img src='http://gerlich.io/assets/images/photos/profile.jpg' alt={name}/>
              </div>
            <div style={{marginLeft: '80px'}}>
              <ul className="isg-header-icons">
                  <li className="isg-logo">
                      <img src='http://gerlich.io/assets/images/photos/profile.jpg' alt="profile picture"/>
                  </li>
                  <li className="isg-social">
                      <a href={linkedInAddress} className="fa fa-linkedin" target="_BLANK">Linkedin</a>
                  </li>
                  <li className="isg-social">
                      <a href={githubAddress} className="fa fa-github" target="_BLANK">Github</a>
                  </li>
              </ul>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <h1>{name}</h1>
            </div>
            <div style={{display: 'flex', justifyContent: 'center'}}>
              <p className="isg-subtitle">
                <TypeIt
                  getBeforeInit={(instance) => {
                    const allTitles = [].concat(title).concat(otherTitles);

                    allTitles.forEach((t) => {
                      instance.type(t).pause(1500);

                      for(let i = 0; i < t.length; i++){
                        instance.delete(1).pause(35);
                      }
                    });

                    instance.type(lastTitle);

                    // Remember to return it!
                    return instance;
                  }}

                  getAfterInit={(instance) => {
                    instance.destroy();

                    return instance;
                  }}

                  options={{
                    speed: 5,
                    waitUntilVisible: true,
                  }}
                />
              </p>
            </div>
          </div>
      </header>
    );
}


function ContentCard(props){
  const {titleText, icon, color, extenalLink} = props;
    let iconClass = "fa " + icon + " isg-box-icon";
    let linkText = "#" + titleText;
    let linkId = titleText + '-link';

    let linkHref = extenalLink ? extenalLink : linkText;
    let target = extenalLink ?   "_BLANK" : "";
    let className = extenalLink ? "" : "isg-panel-open";

    return (
      <div className="isg-box half" data-bgcolor={color}>
          <a id={linkId} href={linkHref} className={className} target={target}>
              <div className="isg-box-content">
                  <h2>{titleText.toUpperCase()}</h2>
                  <b>VIEW MORE</b>
                  <i className={iconClass} />
                  <div className="isg-rotated-text"><span className="isg-rotated-text-inner">{titleText.toUpperCase()}</span></div>
              </div>
          </a>
      </div>
    );
}

function Loading(props){
  const {name, title} = props;

    const nameUpper = name.toUpperCase();

    return (
      <>
          <div id="isg-page-loading" key='loading'>,
          <div className="isg-loading-table">
              <div className="isg-loading-cell">
                  <div className="isg-loading-text" data-content={nameUpper}>{nameUpper}</div>
                  <div className="isg-loading-sub-text">{title}</div>
              </div>
          </div>

          <div className="isg-loading-bar" />
      </div>
      <div id="isg-overlay" key='overlay' />
      </>
    )
}

function Skill(props){
  const {skill, percent} = props;

	const percentStr = `${percent}%`;

	return (
		<div className="isg-skillbar" data-percent={percentStr}>
			<div className="isg-skillbar-title"><span>{skill}</span>
			</div>
			<div className="isg-skillbar-bar" />
			<div className="isg-skill-bar-percent">{percentStr}</div>
		</div>
	)
}

function Footer(props){
  const {name, email} = props;

    return (
      <footer id="isg-footer">
          <div className="isg-footer-inner">
              <p>{name} | <a href={`mailto:${email}`}>{email}</a></p>
          </div>
      </footer>
    )
}

export default class HomepageLayout extends React.Component {

    componentDidMount(){
        this._createAndInjectScript("assets/js/isg-panel.min.js");
        this._createAndInjectScript("assets/js/slick.min.js");
        this._createAndInjectScript("assets/js/lightgallery.min.js");
        this._createAndInjectScript("assets/js/portfolio-filter.js");
        this._createAndInjectScript("assets/js/galleries.js");
        this._createAndInjectScript("assets/js/home.js");
        this._createAndInjectScript("assets/js/custom.js");
    }

    render() {
        const {
          name,
          title,
          otherTitles,
          lastTitle,
          linkedInProfile,
          githubProfile,
          email,
        } = this.props;

        return (
            <div>
                <Loading name={name} title={title} />
                <div id="isg-main">
                    <Profile
                        linkedInProfile={linkedInProfile}
                        githubProfile={githubProfile}
                        name={name}
                        title={title}
                        otherTitles={otherTitles}
                        lastTitle={lastTitle}
                    />
                    <div id="isg-boxes">
                        <ContentCard titleText='resume' icon='fa-graduation-cap' color='#888888' />
                        <ContentCard titleText='portfolio' icon='fa-briefcase' color='#598c7a' />
                    </div>
                    <Footer name={name} email={email} />
                </div>
                {this.renderPanels()}
            </div>
        );
    }

    renderPanels() {
        return (
            <div id="isg-panels">
                {this.renderResumePanel()}
                {this.renderPortfolioPanel()}
            </div>
        );
    }

    renderExperienceItem(title, dateRange, date, description) {
        return (
          <div className="isg-resume-box">
              <div className="isg-resume-title">
                  <div className="isg-title-container">
                      <h6>{title}</h6>
                      <p><strong>{dateRange}</strong></p>
                  </div>
                  <div className="isg-resume-date">{date}</div>
              </div>
              <div className="isg-resume-content">
                  <p>
                      {description}
                  </p>
              </div>
          </div>
        )
    }

    renderTechnicalProficiencies(){
        return (<>
              <h2>TECHNICAL PROFICIENCIES</h2>
              <p>
                  I have experience with many different languages and frameworks.
                  With that said, I can quickly pick up any stack we need to solve the problem at hand.
              </p>
              <div className="isg-skills">
                  <Skill skill="Seeing the big picture" percent="100"/>
                  <Skill skill="Technical leadership" percent="100"/>
                  <Skill skill="Building up my team" percent="100"/>
                  <Skill skill="REST API development" percent="95"/>
                  <Skill skill="Javascript + React/Redux" percent="90" />
                  <Skill skill="Python + Tornado/FastAPI" percent="90"/>
                  <Skill skill="Dart" percent="85"/>
                  <Skill skill="Docker" percent="85"/>
                  <Skill skill="Thrift/Frugal" percent="80"/>
                  <Skill skill="AWS Infrastructure" percent="70"/>
                  <Skill skill="K8s" percent="70"/>
                  <Skill skill="Kotlin + Spring Boot" percent="75"/>
              </div>
            </>
        )
    }

    renderEduction(){
        return (
          <>
              <h2>EDUCATION</h2>
              <div className="isg-resume-box">
                  <div className="isg-resume-title">
                      <div className="isg-title-container">
                          <h6>Master of Computer Science - University of Illinois Champaign-Urbana</h6>
                          <p><strong>2018 to 2020</strong></p>
                      </div>
                      <div className="isg-resume-date">2018</div>
                  </div>
                  <div className="isg-resume-content">
                      <ul>
                          <li>GPA: 3.7</li>
                          <li>Emphasis on Data Science & AI/ML</li>
                      </ul>
                  </div>
              </div>
              <div className="isg-resume-box">
                  <div className="isg-resume-title">
                      <div className="isg-title-container">
                          <h6>B.S Software Engineering - Iowa State University</h6>
                          <p><strong>2012 to 2016</strong></p>
                      </div>
                      <div className="isg-resume-date">2016</div>
                  </div>
                  <div className="isg-resume-content">
                      <ul>
                          <li>GPA: 3.52</li>
                          <li>2x President, NORML ISU</li>
                          <li>1x Scholarship Director, Alpha Sigma Phi</li>
                          <li>1x Webmaster, Government Student Body</li>
                      </ul>
                  </div>
              </div>
          </>
        )
    }

    renderExperience(){
        return (
          <>
              <h2>EXPERIENCE</h2>
              {this.renderExperienceItem(
                "Workiva - Senior Software Engineer, Technical Lead",
                "January 2019 to September 2019",
                "2017",
                `
                  At Workiva I was a full stack developer in Dart/React/Flux and Python.
                  I spent my time split between proofing out and developing APIs and working on their microservice oriented back end and developing scaleable graph-database backed UI components.
                  `
              )}
              {this.renderExperienceItem(
                "Founder, Software Engineer - G&G Software",
                "January 2016 to July 2017",
                "2016",
                `
                   A friend and I started a software consulting firm to develop web and mobile applications for startups.
                            This is the origin of Waterless Buddys (see my portfolio).
                  `
              )}
          </>
        )
    }

    renderResumePanel(){
        return (
            <article id="resume" className="isg-panel">
            <div className="isg-panel-inner" data-bordercolor="#888888">
                <div className="isg-panel-close">
                    <span className="fa fa-times-circle-o"/>
                </div>
                <div className="isg-panel-rotated-text">
                    <span className="isg-panel-rotated-text-inner">RESUME</span>
                </div>
                <div className="isg-panel-up">
                    <span className="fa fa-arrow-circle-o-up"/>
                </div>
                <div>
                    <a target='_BLANK' href="./assets/files/resume.pdf" className="isg-button primary resume">Download Resume</a>
                </div>
                {this.renderTechnicalProficiencies()}
                <hr/>
                {this.renderEduction()}
                <hr/>
                {this.renderExperience()}
            </div>
        </article>
        );
    }

    renderPortfolioPanel(){
        return (
            <article id="portfolio" className="isg-panel">
            <div className="isg-panel-inner" data-bordercolor="#598c7a">
                <div className="isg-panel-close">
                    <span className="fa fa-times-circle-o"/>
                </div>
                <div className="isg-panel-rotated-text">
                    <span className="isg-panel-rotated-text-inner">PORTFOLIO</span>
                </div>
                <div className="isg-panel-up">
                    <span className="fa fa-arrow-circle-o-up"/>
                </div>
                <h2>PORTFOLIO</h2>
                <p>
                    Check out how I spend my free time. <br/>
                </p>
                <div className="isg-filter-menu-icon"><i className="fa fa-bars"/> FILTERS</div>
                <ul id="isg-portfolio-filter" className="isg-portfolio-filter">
                    <li data-filter="all" className="isg-filter-active">All</li>
                    <li data-filter="wa">Web Applications</li>
                    <li data-filter="ml">Machine Learning</li>
                    <li data-filter="dm">Data Mining / Collection</li>
                    <li data-filter="ma">Mobile Applications</li>
                    <li data-filter="es">Embedded Systems</li>
                </ul>
                <div id="isg-portfolio-container" className="isg-portfolio-container">

                  <figure className="isg-portfolio-item" data-filter="wa ma">
                    <a href="http://www.creatra.io" target="_BLANK"/>
                    <img src="http://gerlich.io/assets/images/portfolio/creatra.png" alt=""/>
                    <i className="fa fa-search"/>
                    <figcaption>
                      <h4>Creatra</h4>
                      <p>
                        Exploration of the application of blockchain, machine learning, and natural language processing to streamline the patent prosecution process.
                        Returning the power of innovation back to the inventor.
                      </p>
                    </figcaption>
                  </figure>

                    <figure className="isg-portfolio-item" data-filter="wa ma">
                        <a href="http://ethanalysis.info" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/eth.gif" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Ethereum Wallet Analysis</h4>
                            <p>
                                Simple website used to analyze inbound and outbound transactions from an Ethereum Wallet.
                                Built to be used in analyzing token sale velocity and viability for VC and other investors in the
                                cryptocurrency space. Available free of charge!
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa ma">
                        <a href="https://github.com/pgerlich/TabSaverAndroid" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/tabsaver.jpeg" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>TabSaver</h4>
                            <p>
                                Mobile application used to find drink deals in your area.
                                Achieved 5000+ downloads.
                                Developed full Android application and dashboard for data management.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa ma">
                        <a href="https://github.com/pgerlich/buddies_web" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/buddies.png" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Buddys</h4>
                            <p>
                                Created a website and mobile applications for an on-demand car washing startup out of North Carolina.
                                Implemented complete peer 2 peer payment system similar to Uber.
                                Created full admin dashboard for viewing business intelligence data.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="http://law-gineer.net" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/lawgineer.png" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>LawGineer</h4>
                            <p>
                                Highly SEO optimized website made for a friend that is a patent law student.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="dm">
                        <a href="https://github.com/pgerlich/craigNotifier" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/craigNotifier.png" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Craigslist Notifier</h4>
                            <p>
                                Python script with an in memory cache used to find and report on free stuff meeting various search terms.
                                 Made me over $1000!
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/GerlichWedding" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/gerlichwedding.png" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Gerlich Wedding</h4>
                            <p>
                                Website for my wedding!
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa ml">
                        <a href="https://github.com/mrparkers/CyDriver"/>
                        <img src="http://gerlich.io/assets/images/portfolio/cydriver.jpg" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Cy Driver</h4>
                            <p>TensorFlow/Convolution Neural Network powered RC car made from a raspberry pi.</p>
                        </figcaption>
                    </figure>


                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/interview" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/prep4tech.png" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Prep 4 Tech</h4>
                            <p>Cloud based p2p interview preperation site.
                                Queue up and join live coding interviews with your peer.
                                Contains video & audio feed with real time code editor.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/portfolio" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/homepage.png" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>My Personal Site</h4>
                            <p>Semi react-ified personal website.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="ml">
                        <a href="https://github.com/chinmayhegde/retinopathy-detection" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/retinopathy.jpg" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Retinopathy Detection</h4>
                            <p>
                                Experiment with various machine learning algorithms (CNN/DNN/SVM/KNN) to identify Diabetic
                                Retinopathy. (Course Work)
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="es">
                        <a href="https://github.com/pgerlich/MarsRover" target="_BLANK"/>
                        <img src="http://gerlich.io/assets/images/portfolio/marsRover.jpg" alt=""/>
                        <i className="fa fa-search"/>
                        <figcaption>
                            <h4>Mars Rover</h4>
                            <p>
                                Bootstrapped Roomba with external sensors programmed to autonomously solve an obstacle course in C. (Course Work)
                            </p>
                        </figcaption>
                    </figure>
                </div>
            </div>
        </article>
        );
    }

    /**
     * Used to inject scripts into the DOM
     * @param {*} source
     */
    _createAndInjectScript(source){
        let script = document.createElement("script");
        script.src = source;
        document.body.appendChild(script);
    }
};
