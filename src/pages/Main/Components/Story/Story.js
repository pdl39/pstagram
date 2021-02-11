/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { followersIds, followersProfilePics } from "../Data/RawData";
import {
  generateOrderedArr,
  generateRandomOrderArr,
} from "../Functions/RandomOrderArrGenerator/RandomOrderArrGenerator";

import "./Story.scss";

export class Story extends React.Component {
  constructor() {
    super();
    this.state = {
      followersRandNumArr: generateRandomOrderArr(
        generateOrderedArr(0, followersIds.length)
      ),
      storyElements: [],
      storySectionWidth: 610,
      storyItemWidth: 80,
      storyLastItemRightMargin: 14,
      storyArrowButtonRightClassName: "story-arrow-button right",
      storyArrowButtonLeftClassName: "story-arrow-button left hide",
      storyXcoordinate: 0,
    };
  }

  slideStoryLeft = () => {
    const storyTotalWidth =
      ((this.state.storyItemWidth * followersIds.length +
        this.state.storyLastItemRightMargin) /
        this.state.storySectionWidth) *
      100;
    const xIncrement =
      ((this.state.storyItemWidth * 4) / this.state.storySectionWidth) * 100;
    const isMaxReached =
      this.state.storyXcoordinate * -1 + xIncrement >= storyTotalWidth - 100;
    isMaxReached
      ? this.setState((state) => {
          return { storyXcoordinate: (storyTotalWidth - 100) * -1 };
        })
      : this.setState((state) => {
          return { storyXcoordinate: state.storyXcoordinate - xIncrement };
        });
    isMaxReached
      ? this.setState((state) => {
          return {
            storyArrowButtonRightClassName: "story-arrow-button right hide",
          };
        })
      : this.setState((state) => {
          return { storyArrowButtonRightClassName: "story-arrow-button right" };
        });
    this.setState({ storyArrowButtonLeftClassName: "story-arrow-button left" });
  };

  slideStoryRight = () => {
    const storyTotalWidth =
      ((this.state.storyItemWidth * followersIds.length +
        this.state.storyLastItemRightMargin) /
        this.state.storySectionWidth) *
      100;
    const xIncrement =
      ((this.state.storyItemWidth * 4) / this.state.storySectionWidth) * 100;
    const xRemainder = 100 - xIncrement;
    const wasMaxReached =
      this.state.storyXcoordinate * -1 + (xIncrement - xRemainder) >=
      storyTotalWidth - 100;
    const isMinReached = this.state.storyXcoordinate * -1 - xIncrement <= 0;
    wasMaxReached
      ? this.setState((state) => {
          return { storyXcoordinate: state.storyXcoordinate + xRemainder };
        })
      : this.setState((state) => {
          return { storyXcoordinate: state.storyXcoordinate + xIncrement };
        });
    if (isMinReached) {
      this.setState({ storyXcoordinate: 0 });
    }
    isMinReached
      ? this.setState((state) => {
          return {
            storyArrowButtonLeftClassName: "story-arrow-button left hide",
          };
        })
      : this.setState((state) => {
          return { storyArrowButtonLeftClassName: "story-arrow-button left" };
        });
    this.setState({
      storyArrowButtonRightClassName: "story-arrow-button right",
    });
  };

  generateStory = (num) => {
    const storyElement = (
      <li className="story-element" key={num}>
        <a href="#" className="story-element-link">
          <div className="story-profile-pic-outer-glow">
            <div className="story-profile-pic-mid-white">
              <div className="story-profile-pic">
                <img
                  className="story-profile-pic"
                  src={
                    "images/main/user_followers/" + followersProfilePics[num]
                  }
                  alt="story user profile"
                />
              </div>
            </div>
          </div>
          <p className="story-profile-id">{followersIds[num]}</p>
        </a>
      </li>
    );
    return storyElement;
  };

  render() {
    let storyTransformStyle = {
      transform: "translate(" + this.state.storyXcoordinate + "%, 0)",
    };
    return (
      <div className="Story">
        <div
          className={this.state.storyArrowButtonLeftClassName}
          onClick={this.slideStoryRight}
        >
          <img
            className="story-arrow-img left"
            src="images/main/story_left_arrow.png"
            alt="story right arrow button"
          />
        </div>
        <div
          className={this.state.storyArrowButtonRightClassName}
          onClick={this.slideStoryLeft}
        >
          <img
            className="story-arrow-img right"
            src="images/main/story_right_arrow.png"
            alt="story right arrow button"
          />
        </div>
        <ul className="story" style={storyTransformStyle}>
          {this.state.followersRandNumArr.map((el) => this.generateStory(el))}
        </ul>
      </div>
    );
  }
}
