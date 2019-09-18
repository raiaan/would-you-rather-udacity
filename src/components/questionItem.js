import React, { Component } from "react";
import { connect } from "react-redux";
import { timeConverter } from "../utils/helpers";
import { TiHeartOutline } from "react-icons/ti/index";
import { TiHeartFullOutline } from "react-icons/ti/index";
import { _saveQuestionAnswer } from "../utils/_DATA";
import { answerQuestion } from "../actions/questions";
import { NavLink } from "react-router-dom";

class Question extends Component {
  handleAnswer = (qid, answer, authedUser) => {
    this.props.dispatch(answerQuestion(qid, answer, authedUser));
  };
  saveAnswer = (id, answer, authedUser) => {
    if (!this.props.answered) this.handleAnswer(id, answer, authedUser);
    _saveQuestionAnswer({ authedUser, qid: id, answer });
  };
  render() {
    const questionInfo = this.props;
    const { question } = questionInfo;
    if (question === null) {
      return (
        <div>
          <h1>404 error</h1>
          <h2>this page doesn't exist</h2>
        </div>
      );
    }
    return (
      <div className="question-item">
        <img
          src={questionInfo.avatar}
          alt={`avatar of ${questionInfo.name}`}
          className="avatar"
        />
        <div className="question-info">
          <span>{questionInfo.name}</span>
          <div>{timeConverter(question.timestamp)}</div>
          <table>
            <tbody>
              <tr>
                <td>
                  <p>{question.optionOne.text}</p>
                  <button
                    className="heart-button"
                    onClick={() => {
                      this.saveAnswer(
                        question.id,
                        "optionOne",
                        questionInfo.authedUser
                      );
                    }}
                  >
                    {questionInfo.answered === false ? (
                      <TiHeartOutline className="question-icon" />
                    ) : questionInfo.choosedOption === "optionOne" ? (
                      <TiHeartFullOutline
                        color="#e0245e"
                        className="question-icon"
                      />
                    ) : null}
                  </button>
                </td>
                {questionInfo.answered === true ? (
                  <td>
                    <p>
                      <strong>votes : </strong>{" "}
                      <span>
                        {question.optionOne.votes.length !== 0 &&
                          question.optionOne.votes.length}
                      </span>
                      <strong>as</strong> %
                      <span>
                        {Math.floor(
                          (question.optionOne.votes.length /
                            (question.optionOne.votes.length +
                              question.optionTwo.votes.length)) *
                            100
                        )}
                      </span>{" "}
                      of total votes
                    </p>
                  </td>
                ) : null}
              </tr>
              <tr>
                <td>
                  <p>
                    {question.optionTwo.text}
                    <button
                      className="heart-button"
                      onClick={() => {
                        this.saveAnswer(
                          question.id,
                          "optionTwo",
                          questionInfo.authedUser
                        );
                      }}
                    >
                      {questionInfo.answered === false ? (
                        <TiHeartOutline className="question-icon" />
                      ) : questionInfo.choosedOption === "optionTwo" ? (
                        <TiHeartFullOutline
                          color="#e0245e"
                          className="question-icon"
                        />
                      ) : null}
                    </button>
                  </p>
                </td>
                {questionInfo.answered === true ? (
                  <td>
                    <p>
                      <strong>votes : </strong>{" "}
                      <span>
                        {question.optionTwo.votes.length !== 0 &&
                          question.optionTwo.votes.length}
                      </span>
                      <strong>as </strong> %
                      <span>
                        {Math.floor(
                          (question.optionTwo.votes.length /
                            (question.optionOne.votes.length +
                              question.optionTwo.votes.length)) *
                            100
                        )}
                      </span>{" "}
                      of total votes
                    </p>
                  </td>
                ) : null}
              </tr>
            </tbody>
          </table>
          {!this.props.details ? (
            <NavLink to={`question/${question.id}`}>
              go to question detail
            </NavLink>
          ) : null}
        </div>
      </div>
    );
  }
}

function mapStateToProps({ questions, users, authedUser }, { id }) {
  if (!questions[id]) {
    return {
      question: null
    };
  }
  return {
    authedUser,
    answered: users[authedUser]["answers"].hasOwnProperty(id),
    choosedOption: users[authedUser]["answers"].hasOwnProperty(id)
      ? users[authedUser]["answers"][id]
      : null,
    name: users[questions[id]["author"]]["name"],
    avatar: users[questions[id]["author"]]["avatarURL"],
    question: questions[id]
  };
}
export default connect(mapStateToProps)(Question);
