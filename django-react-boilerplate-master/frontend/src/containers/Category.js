import React, { Component } from "react";
import $ from "jquery";
import Script from "react-load-script";

class Category extends Component {
    state = {
        categories: [
            { name: "Recommendation System", items: ["Article Recommender"] },
            { name: "Classification", items: ["Sentiment Analysis", "Topic Detection", "Language Detection"] },
            { name: "Extraction", items: ["Text Summarization", "Entity Extraction", "Keyword Extraction", "Article Extraction"] },
            { name: "Text Pre-processing", items: ["Lemmatization", "Tokenize", "Convert Uppercase to Lower", "Remove Numbers", "Remove Puntuation", "Remove White Space", "Remove Stopwords"] },
            { name: "Plagarism", items: ["Plagarism"] },
        ],
        open: "this"
    }

    componentDidMount() {
        $('#main-wrapper').addClass('show');
        $('body').attr('data-sidebar-style') === "mini" ? $(".hamburger").addClass('is-active') : $(".hamburger").removeClass('is-active');
        console.log("this is good")
    }

    render() {
        return (
            <div>
                <div className="nk-sidebar" id="good">

                    <div className="nk-nav-scroll">
                        <ul className="metismenu" id="menu">
                            <li>
                                <a className="has-arrow" href="javascript:void()" aria-expanded="false" onClick={this.createEvent}>
                                    <i className="icon-speedometer menu-icon"></i><span className="nav-text">Recommendation
        System</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void()">Article Recommender</a></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                                    <i className="icon-globe-alt menu-icon"></i><span className="nav-text">Classification</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void()">Sentiment Analysis</a></li>
                                    <li><a href="javascript:void()">Topic Detection</a></li>
                                    <li><a href="javascript:void()">Language Detection</a></li>
                                </ul>
                            </li>
                            <li className="mega-menu mega-menu-sm">
                                <a className="has-arrow" href="javascript:void()" aria-expanded="false">
                                    <i className="icon-globe-alt menu-icon"></i><span class="nav-text">Extration</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void()">Text Summarization</a></li>
                                    <li><a href="javascript:void()">Entity Extraction</a></li>
                                    <li><a href="javascript:void()">Keyword Extraction</a></li>
                                    <li><a href="javascript:void()">Aricle Extraction</a></li>
                                </ul>
                            </li>
                            <li class="mega-menu mega-menu-sm">
                                <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                                    <i class="icon-globe-alt menu-icon"></i><span class="nav-text">Text Pre-Processing</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void()">Lemmatization</a></li>
                                    <li><a href="javascript:void()">Tokenize</a></li>
                                    <li><a href="javascript:void()">Convert Uppercase to Lover</a></li>
                                    <li><a href="javascript:void()">Remove Numbers</a></li>
                                    <li><a href="javascript:void()">Remove Punctuation</a></li>
                                    <li><a href="javascript:void()">Remove White Spaces</a></li>
                                    <li><a href="javascript:void()">Remove Stopwords</a></li>
                                </ul>
                            </li>
                            <li class="mega-menu mega-menu-sm">
                                <a class="has-arrow" href="javascript:void()" aria-expanded="false">
                                    <i class="icon-globe-alt menu-icon"></i><span class="nav-text">Plagarism</span>
                                </a>
                                <ul aria-expanded="false" className="collapse">
                                    <li><a href="javascript:void()">Plagarism</a></li>
                                </ul>
                            </li>

                        </ul>
                    </div>
                    {/* <h1>TEST</h1> */}

                    {/* <h1>TEST</h1> */}
                </div>
                <Script url="plugins/common/common.min.js" />
                <Script url="js/custom.min.js" />
                <Script url="js/settings.js" />
                <h1>TEST</h1>
            </div >
        )
    }
}

export default Category;