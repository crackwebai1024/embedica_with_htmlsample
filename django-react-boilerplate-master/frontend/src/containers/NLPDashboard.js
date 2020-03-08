import React, { Component } from "react";
import "./Container.css"
import { connect } from "react-redux";
import { usermove_nlp } from "../store/actions/user";
import Category from "./Category"
import WorkBoard from "./WorkBoard";
class NlpDashboard extends Component {

    move_to_nlpprocessing = e => {
        var titleid = e.target.id;
        var categoryid = e.currentTarget.value;
        var page = "nlpprocessing";
        this.props.move_nlp(page, titleid, categoryid);
    }

    render() {
        const { page, titleid, categoryid } = this.props;
        return (
            <div>
                <div className="row" style={{ height: 50 }}></div>
                <div className="row">
                    <div className="col-md-2">
                        <div className="picsidemenubar">
                            <img src="embecia.png" alt="" width="80%" style={{ margintop: -14 }} />
                        </div>
                        <Category />
                    </div>
                    <div className="col-md-10">
                        <div style={{ height: 50 }}></div>
                        <WorkBoard />
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        page: state.user.page,
        titleid: state.user.titleid,
        categoryid: state.user.categoryid
    };
};

const mapDispatchToProps = dispatch => {
    return {
        move_nlp: (page, titleid, categoryid) => dispatch(usermove_nlp(page, titleid, categoryid))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NlpDashboard);