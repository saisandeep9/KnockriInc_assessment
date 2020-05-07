import React, { Component } from "react";
import axios from "axios";

class Questions extends Component {
  state = {
    questions: [],
  };

  async componentDidMount() {
    const { data: questions } = await axios.get(
      "http://localhost:3010/questions"
    );

    this.setState({ questions });
  }

  render() {
    console.log("candidates", this.state.questions);
    return (
      <div>
        <table className="table  ">
          <thead className="App-nav  ">
            <tr>
              <th>Id</th>
              <th>Questions</th>
            </tr>
          </thead>
          <tbody className="text-color">
            {this.state.questions.map((question) => (
              <tr key={question.id}>
                <td>{question.id}</td>
                <td>{question.question}</td>
                <td>{/* <button>select</button> */}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Questions;
