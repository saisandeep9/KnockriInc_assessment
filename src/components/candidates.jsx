import React, { Component } from "react";
import CandidateDetails from "./candidateDetails";
import { Link } from "react-router-dom";
import axios from "axios";

class Candidates extends Component {
  state = {
    Candidates: [],
    CandidateDetails: [],
    application: [],
  };

  async componentDidMount() {
    const { data: Candidates } = await axios.get(
      "http://localhost:3010/candidates"
    );

    this.setState({ Candidates });
  }

  onclick = async (candidate) => {
    const id = candidate.applicationId;
    const { data: CandidateDetails } = await axios.get(
      ` http://localhost:3010/applications/${id}`
    );
    this.setState({ CandidateDetails: [CandidateDetails] });
  };

  handealcandiateDetails = () => {
    // this.state.CandidateDetails.length = 0;
    console.log("handealcandiateDetails");
    // this.setState({ CandidateDetails: CandidateDetails.length === 0 });
    // console.log("handealcandiateDetails", CandidateDetails.length);
  };

  render() {
    console.log("candidates", this.state.Candidates);
    console.log(" CandidateDetails", this.state.CandidateDetails.length);
    return (
      <div className="  ">
        <div className="row">
          {this.state.Candidates.map((candidate) => (
            <div
              key={candidate.id}
              className=" card   float-left m-2  "
              style={{ width: "350px", hight: "0" }}
            >
              <h4 className=" card-body box m-2 p-3 ">
                {candidate.name}
                <br />
                {candidate.applicationId ? (
                  <button
                    className="mt-2 btn btn-primary "
                    onClick={() => this.onclick(candidate)}
                  >
                    Select
                  </button>
                ) : (
                  <h5>No Application Id </h5>
                )}
                <br />

                {/* <Link className="nav-link " to="/CandidateDetails"> */}

                {/* </Link> */}
              </h4>
            </div>
          ))}
        </div>
        {this.state.CandidateDetails.length === 1 && (
          <CandidateDetails
            candidatedetails={this.state.CandidateDetails}
            handealcandiateDetails={this.handealcandiateDetails()}
          />
        )}
      </div>
    );
  }
}

export default Candidates;
