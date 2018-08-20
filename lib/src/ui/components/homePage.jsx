import React from "react";
import $ from 'jquery';
  

// TODO: Parameterize skills, blog URL, Jobs, etc.

export default class HomepageLayout extends React.Component {
    constructor(){
        super();

        this.renderBoxes = this.renderBoxes.bind(this);
    }

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
        return (
            <div>
                {this.renderTransition()}
                <div id="isg-main">
                    {this.renderHeader()}
                    {this.renderBoxes()}
                    {this.renderFooter()}
                </div>
                {this.renderPanels()}
            </div>
        );
    }

    renderTransition(){
        return (
            [<div id="isg-page-loading" key='loading'>,
                <div className="isg-loading-table">
                    <div className="isg-loading-cell">
                        <div className="isg-loading-text" data-content="PAUL GERLICH">PAUL GERLICH</div>
                        <div className="isg-loading-sub-text">Software Engineer</div>
                    </div>
                </div>
            
                <div className="isg-loading-bar"></div>
            </div>,
            <div id="isg-overlay" key='overlay'></div>]
        );
    }

    renderHeader(){
        let linkedInAddress = "https://www.linkedin.com/in/" + this.props.linkedin;
        let githubAddress = "https://www.github.com/" + this.props.github;

    
        return (
            <header id="isg-header">
                <div className="isg-intro">
                    <div className="isg-mobile-logo">
                        <img src="assets/images/photos/profile.jpg" alt=""/>
                    </div>
                    <ul className="isg-header-icons">
                        <li className="isg-logo">
                            <img src="assets/images/photos/profile.jpg" alt="profile picture"/>
                        </li>
                        <li className="isg-social">
                            <a href={linkedInAddress} className="fa fa-linkedin" target="_BLANK">Linkedin</a>
                        </li>
                        <li className="isg-social">
                            <a href={githubAddress} className="fa fa-github" target="_BLANK">Github</a>
                        </li>
                    </ul>
                    <h1>{this.props.name}</h1>
                    <p className="isg-subtitle">Software Engineer</p>
                </div>
            </header>
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

    renderResumePanel(){
        return (
            <article id="resume" className="isg-panel">
            <div className="isg-panel-inner" data-bordercolor="#888888">
                <div className="isg-panel-close">
                    <span className="fa fa-times-circle-o"></span>
                </div>
                <div className="isg-panel-rotated-text">
                    <span className="isg-panel-rotated-text-inner">RESUME</span>
                </div>
                <div className="isg-panel-up">
                    <span className="fa fa-arrow-circle-o-up"></span>
                </div>
                <div>
                    <a href="assets/files/resume.pdf" className="isg-button primary resume">Download Resume</a>
                </div>
                <h2>TECHNICAL PROFICIENCIES</h2>
                <p>
                    I am a diversely skilled and highly experienced engineer with a focus on web development.
                    Check out my portfolio to see some of my many personal projects.
                </p>
                <div className="isg-skills">
                    <div className="isg-skillbar" data-percent="100%">
                        <div className="isg-skillbar-title"><span>Dart</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">100%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="100%">
                        <div className="isg-skillbar-title"><span>Python</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">100%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="95%">
                        <div className="isg-skillbar-title"><span>React / Flux / Redux</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">95%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="90%">
                        <div className="isg-skillbar-title"><span>Javascript/ES6</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">90%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="90%">
                        <div className="isg-skillbar-title"><span>Thrift/Frugal/Rest - API Development</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">90%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="85%">
                        <div className="isg-skillbar-title"><span>HTML/CSS/SASS</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">85%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="85%">
                        <div className="isg-skillbar-title"><span>AWS Platform</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">85%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="70%">
                        <div className="isg-skillbar-title"><span>Java</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">70%</div>
                    </div>
                    <div className="isg-skillbar" data-percent="60%">
                        <div className="isg-skillbar-title"><span>ANDRIOD SDK</span>
                        </div>
                        <div className="isg-skillbar-bar"></div>
                        <div className="isg-skill-bar-percent">60%</div>
                    </div>
                </div>
                <hr/>
                <h2>EDUCATION</h2>
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
                <hr/>
                <h2>EXPERIENCE</h2>
                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Softare Engineer - Workiva</h6>
                            <p><strong>January 2016 to Present</strong></p>
                        </div>
                        <div className="isg-resume-date">2017</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            At Workiva I do full stack web development in Dart/React/Flux and Python.
                            I spend my time split between proofing out and developing APIs and working on our microservice oriented back end and developing scaleable graph-database backed UI components.
                        </p>
                    </div>
                </div>

                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Founder - TabSaver, LLC</h6>
                            <p><strong>January 2016 to July 2017</strong></p>
                        </div>
                        <div className="isg-resume-date">2016</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            I founded a mobile app company in college to help people find drink deals in their area.
                            We achieved 5000+ downloads between iPhone and Android and extended into 5 states.
                            We proofed out a business intelligence platform to sell deal success metrics back to the bars.
                            This venture ended as the real world began, but it was very valuable experience. 
                            You can find all of my code in my portfolio.
                        </p>
                    </div>
                </div>

                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Founder, Software Engineer - G&G Software</h6>
                            <p><strong>January 2016 to July 2017</strong></p>
                        </div>
                        <div className="isg-resume-date">2016</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            A friend and I started a software consulting firm to develop web and mobile applications for startups.
                            This is the origin of Waterless Buddys (see my portfolio).
                        </p>
                    </div>
                </div>

                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Research Assistant- Iowa State University</h6>
                            <p><strong>August 2015 to May 2016</strong></p>
                        </div>
                        <div className="isg-resume-date">2016</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            I spent time mining and analyzing large data sets.
                            The two major datasets we analyzed were USPTO applications/issued patents, and tripadvisor reviews.
                            We used various machine learning algorithms to experiment with text analysis.
                        </p>
                    </div>
                </div>

                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Teaching Assistant- Iowa State University</h6>
                            <p><strong>August 2015 to December 2016</strong></p>
                        </div>
                        <div className="isg-resume-date">2015</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            I led lab session for our Android development class (Embedded Systems II).
                            I also led 1 (of 3) weekly classes of 60+ students demonstrating various portions of the Android SDK to assist with hands on learning.
                        </p>
                    </div>
                </div>

                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Application Development Intern - General Mills</h6>
                            <p><strong>May 2015 to August 2015</strong></p>
                        </div>
                        <div className="isg-resume-date">2015</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            At General Mills I worked in Angular and C# to build out a parts tracking system for their machinery.
                            I also expanded an SSRS report saving/sharing application to make it more scaleable.
                        </p>
                    </div>
                </div>

                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Software Engineering Intern - Kingland Systems</h6>
                            <p><strong>May 2014 to May 2015</strong></p>
                        </div>
                        <div className="isg-resume-date">2014</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            At Kingland Systems I created an end-to-end newhire portal to collect newhire data. 
                            This saved hundreds of HR man hours and interfaced with the Active Directory and Dynamics GP to automate
                            the creation of new hire accounts.
                        </p>
                    </div>
                </div>
            </div>
        </article>
        );
    }

    renderPortfolioPanel(){
        return (
            <article id="portfolio" className="isg-panel">
            <div className="isg-panel-inner" data-bordercolor="#598c7a">
                <div className="isg-panel-close">
                    <span className="fa fa-times-circle-o"></span>
                </div>
                <div className="isg-panel-rotated-text">
                    <span className="isg-panel-rotated-text-inner">PORTFOLIO</span>
                </div>
                <div className="isg-panel-up">
                    <span className="fa fa-arrow-circle-o-up"></span>
                </div>
                <h2>PORTFOLIO</h2>
                <p>
                    Check out how I spend my free time. <br/>
                </p>
                <div className="isg-filter-menu-icon"><i className="fa fa-bars"></i> FILTERS</div>
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
                        <a href="http://ethanalysis.info" target="_BLANK"></a>
                        <img src="assets/images/portfolio/eth.gif" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>Ethereum Wallet Analysis</h4>
                            <p>
                                Website used to analyze inbound and outbound transactions from an Ethereum Wallet.
                                Built to be used in analyzing token sale velocity and viability for VC and other investors in the 
                                cryptocurrency space. Available free of charge!
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa ma">
                        <a href="https://github.com/pgerlich/TabSaverAndroid" target="_BLANK"></a>
                        <img src="assets/images/portfolio/tabsaver.jpeg" alt=""/>
                        <i className="fa fa-search"></i>
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
                        <a href="https://github.com/pgerlich/buddies_web" target="_BLANK"></a>
                        <img src="assets/images/portfolio/buddies.png" alt=""/>
                        <i className="fa fa-search"></i>
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
                        <a href="http://law-gineer.net" target="_BLANK"></a>
                        <img src="assets/images/portfolio/lawgineer.png" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>LawGineer</h4>
                            <p>
                                Highly SEO optimized website made for a friend that is a patent law student.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="dm">
                        <a href="https://github.com/pgerlich/craigNotifier" target="_BLANK"></a>
                        <img src="assets/images/portfolio/craigNotifier.png" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>Craigslist Notifier</h4>
                            <p>
                                Python script with an in memory cache used to find and report on free stuff meeting various search terms.
                                 Made me over $1000!
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/GerlichWedding" target="_BLANK"></a>
                        <img src="assets/images/portfolio/gerlichwedding.png" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>Gerlich Wedding</h4>
                            <p>
                                Website for my wedding!
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa ml">
                        <a href="https://github.com/mrparkers/CyDriver"></a>
                        <img src="assets/images/portfolio/cydriver.jpg" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>Cy Driver</h4>
                            <p>TensorFlow/Convolution Neural Network powered RC car made from a raspberry pi.</p>
                        </figcaption>
                    </figure>

                    
                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/interview" target="_BLANK"></a>
                        <img src="assets/images/portfolio/prep4tech.png" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>Prep 4 Tech</h4>
                            <p>Cloud based p2p interview preperation site.
                                Queue up and join live coding interviews with your peer.
                                Contains video & audio feed with real time code editor. 
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/portfolio" target="_BLANK"></a>
                        <img src="assets/images/portfolio/homepage.png" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>My Personal Site</h4>
                            <p>Semi react-ified personal website.
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="ml">
                        <a href="https://github.com/chinmayhegde/retinopathy-detection" target="_BLANK"></a>
                        <img src="assets/images/portfolio/retinopathy.jpg" alt=""/>
                        <i className="fa fa-search"></i>
                        <figcaption>
                            <h4>Retinopathy Detection</h4>
                            <p>
                                Experiment with various machine learning algorithms (CNN/DNN/SVM/KNN) to identify Diabetic
                                Retinopathy. (Course Work)
                            </p>
                        </figcaption>
                    </figure>

                    <figure className="isg-portfolio-item" data-filter="es">
                        <a href="https://github.com/pgerlich/MarsRover" target="_BLANK"></a>
                        <img src="assets/images/portfolio/marsRover.jpg" alt=""/>
                        <i className="fa fa-search"></i>
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

    renderBlogPanel(){
        return (
            <article id="blog" className="isg-panel">
                <div className="isg-panel-inner" data-bordercolor="#2080ab">
                    <div className="isg-panel-close">
                        <span className="fa fa-times-circle-o"></span>
                    </div>
                    <div className="isg-panel-rotated-text">
                        <span className="isg-panel-rotated-text-inner">BLOG</span>
                    </div>
                    <div className="isg-panel-up">
                        <span className="fa fa-arrow-circle-o-up"></span>
                    </div>
                    <div className="isg-resume-box">
                        <div className="isg-resume-title">
                            <div className="isg-title-container">
                                <h6>Founder, Software Engineer - G&G Software</h6>
                                <p><strong>January 2016 to July 2017</strong></p>
                            </div>
                            <div className="isg-resume-date">2016</div>
                        </div>
                        <div className="isg-resume-content">
                            <p>
                                TODO
                            </p>
                        </div>
                    </div>

                </div>
            </article>);
    }

    renderBoxes(){
        return (
            <div id="isg-boxes">
                {this.renderBox('resume', 'fa-graduation-cap', '#888888', null)}
                {this.renderBox('portfolio', 'fa-briefcase', '#598c7a', null)}
                {this.renderBox('blog', 'fa-medium', '#2080ab', "https://medium.com/@paul_98854")}
            </div>
        );
    }

    renderBox(titleText, icon, color, extenalLink){
        let iconClass = "fa " + icon + " isg-box-icon";
        let linkText = "#" + titleText;
        let linkId = titleText + '-link';

        let linkHref = extenalLink ? extenalLink : linkText;
        let target = extenalLink ?   "_BLANK" : "";
        let className = extenalLink ? "" : "isg-panel-open";

        return (
            <div className="isg-box one-third" data-bgcolor={color}>
                <a id={linkId} href={linkHref} className={className} target={target}>
                    <div className="isg-box-content">
                        <h2>{titleText.toUpperCase()}</h2>
                        <b>VIEW MORE</b>
                        <i className={iconClass}></i>
                        <div className="isg-rotated-text"><span className="isg-rotated-text-inner">{titleText.toUpperCase()}</span></div>
                    </div>
                </a>
            </div>  
        );
    }

    renderFooter(){
        return (
            <footer id="isg-footer">
                <div className="isg-footer-inner">
                    <p>{this.props.name} | {this.props.email}</p>
                </div>
            </footer>  
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