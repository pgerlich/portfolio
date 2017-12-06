import React from "react";
import $ from 'jquery';
  
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
                <h2>EDUCATION</h2>
                <div className="isg-resume-box">
                    <div className="isg-resume-title">
                        <div className="isg-title-container">
                            <h6>Iowa State University</h6>
                            <p><strong>2012 to 2016</strong></p>
                            <p><strong>B.S, Software Engineering</strong></p>
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
                            <h6>React Nanodegree Mentor - Udacity</h6>
                            <p><strong>September 2017 to Present</strong></p>
                        </div>
                        <div className="isg-resume-date">2017</div>
                    </div>
                    <div className="isg-resume-content">
                        <p>
                            For this newly acquired position, I will provide meaningful guidance to students
                            enrolled in the React Nanodegree program by reviewing their course projects. This
                            position allows me to build on ReactJS expertise and gain valuable leadership experience.
                        </p>
                    </div>
                </div>
    
                <hr/>
                <h2>TECHNICAL PROFICIENCIES</h2>
                <p>
                    I am a diversely skilled engineer with a focus on web development.
                    I have tried to assign a skill ranking to each language and framework.
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
                    Check out some neat things I've done. <br/>
                </p>
                <div className="isg-filter-menu-icon"><i className="fa fa-bars"></i> FILTERS</div>
                <ul id="isg-portfolio-filter" className="isg-portfolio-filter">
                    <li data-filter="all" className="isg-filter-active">All</li>
                    <li data-filter="wa">Web Applications</li>
                    <li data-filter="ml">Machine Learning</li>
                    <li data-filter="dm">Data Mining</li>
                    <li data-filter="mb">Mobile Applications</li>
                </ul>
                <div id="isg-portfolio-container" className="isg-portfolio-container">

                    
                    <figure className="isg-portfolio-item" data-filter="wa">
                        <a href="https://github.com/pgerlich/interview" target="_BLANK"></a>
                        <img src="assets/images/prep4tech/homescreen.png" alt=""/>
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
                </div>
            </div>
        </article>  
        );
    }

    renderBoxes(){
        return (
            <div id="isg-boxes">
                {this.renderBox('resume', 'fa-graduation-cap', '#888888')}
                {this.renderBox('portfolio', 'fa-briefcase', '#598c7a')}
                {this.renderBox('blog', 'fa-medium', '#2080ab')}
            </div>
        );
    }

    renderBox(titleText, icon, color){
        let iconClass = "fa " + icon + " isg-box-icon";
        let linkText = "#" + titleText;
        let linkId = titleText + '-link';

        return (
            <div className="isg-box one-third" data-bgcolor={color}>
                <a id={linkId} href={linkText} className="isg-panel-open">
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