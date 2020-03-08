import React, { Component } from "react";

class WorkBoard extends Component {
    state = {
        clickhappen: false
    }

    onButtonClick = (e) => {
        this.setState({ clickhappen: !this.state.clickhappen });
    }

    onsubButtonClick = (e) => {
        this.setState({ clickhappen: true })
    }
    render() {
        return (
            <div class="container-fluid">
                <div class="row workboard">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-body">
                                <h4 class="card-title">Topic Detection</h4>
                                <div class="basic-form">
                                    <form>
                                        <div class="form-group">
                                            <textarea class="form-control h-150px" rows="6" id="comment"></textarea>
                                        </div>
                                        <div class="form-group">
                                            <button type="submit" class="btn btn-dark mb-2">Detect</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div style={{ height: 30 }}></div>
                        <div class="card">
                            <div class="card-body">
                                <div class="card-title">
                                    <h4>Result</h4>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default WorkBoard;