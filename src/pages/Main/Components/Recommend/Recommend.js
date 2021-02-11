/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import {
  followersIds,
  suggestedIds,
  suggestedProfilePics,
} from "./../Data/RawData";
import {
  generateOrderedArr,
  generateRandomOrderArr,
} from "./../Functions/RandomOrderArrGenerator/RandomOrderArrGenerator";

import "./Recommend.scss";

export class Recommend extends React.Component {
  generateSuggestions = (num) => {
    let maxFollowedBy = 19;
    let followedByStatementOptions = [
      `Followed by ${
        followersIds[Math.floor(Math.random() * followersIds.length)]
      }`,
      `Followed by ${
        followersIds[Math.floor(Math.random() * followersIds.length)]
      } + ${Math.floor(Math.random() * maxFollowedBy) + 1} more`,
      "Suggested for you",
    ];
    const suggestionItem = (
      <li className="suggestion-item" key={num}>
        <div className="suggested-profile-pic">
          <a href="#" className="suggested-profile-pic">
            <img
              className="suggested-profile-pic"
              src={"images/main/suggested/" + suggestedProfilePics[num]}
              alt="suggested user profile"
            />
          </a>
        </div>
        <div className="suggested-profile-id-n-followers">
          <a href="" className="suggested-profile-id">
            {suggestedIds[num]}
          </a>
          <p className="followed-by">
            {followedByStatementOptions[Math.floor(Math.random() * 3)]}
          </p>
        </div>
        <a href="#" className="follow">
          <p className="follow">Follow</p>
        </a>
      </li>
    );
    return suggestionItem;
  };
  render() {
    let suggestedNumArr = generateOrderedArr(0, suggestedIds.length);
    let suggestedRandNumArr = generateRandomOrderArr(suggestedNumArr);
    let suggestedRandNumArrTruncated = suggestedRandNumArr.slice(0, 5);
    let suggestedAccounts = suggestedRandNumArrTruncated.map((el) =>
      this.generateSuggestions(el)
    );
    return (
      <div className="Recommend">
        <div className="suggestions-header">
          <h5 className="suggestions-heading">Suggestions For You</h5>
          <a href="#" className="suggestions-see-all">
            See All
          </a>
        </div>
        <ul className="suggestions-list">{suggestedAccounts}</ul>
      </div>
    );
  }
}
