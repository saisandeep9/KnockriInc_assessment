import React, { Component } from "react";
import Comment from "./comment";

import axios from "axios";
import Player from "react-player";

class CandidateDetails extends Component {
  state = {
    questions: [],
    Question: [],
    comment: "",
  };

  async componentDidMount() {
    const { data: questions } = await axios.get(
      " http://localhost:3010/questions"
    );
    this.setState({ questions });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit :-", this.state.comment);
  };
  handleChange = (e) => {
    let comment = this.state.comment;
    comment = e.currentTarget.value;
    console.log("change :-", e.currentTarget.value);
    this.setState({ comment });
  };

  render() {
    const { candidatedetails } = this.props;

    return (
      <div className="p-3 ">
        {candidatedetails.map((Candidate) => (
          <div key={Candidate.id} className="card   float-left m-2 ">
            {console.log("consuled:-", 1)}
            {Candidate.videos.map((video) => (
              <div key={video.questionId} className=" card p-3 m-2">
                <Player
                  url={video.src}
                  type="video/mp4"
                  width="320px"
                  height="240px"
                  controls
                />

                <h3 className=" card-body box m-2 p-3 ">{video.questionId}</h3>

                <Comment
                  value={this.state.comment}
                  handleSubmit={this.handleSubmit}
                  handleChange={this.handleChange}
                />
              </div>
            ))}

            {/* {this.getvideos(Candidate)} */}
            {/* {console.log(
              "data:-",
              Candidate.videos.map((video) => video.src)
            )} */}
            {/* <h2>{a.videos[0]}</h2> */}
            {/* {console.log("data:-", a.videos[0].questionId)}
            {console.log("data:-", a.videos[0].src)} */}
            {/* <Player
              ref={a.id}
              url={a.videos[0].src}
              type="video/mp4"
              width="320px"
              height="240px"
              controls
            ></Player> */}
          </div>
        ))}
      </div>
    );
  }
}

export default CandidateDetails;
