/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Comment } from "./Comment/Comment";

import "./Feed.scss";

export class Feed extends React.Component {
  constructor() {
    super();
    this.state = {
      tagIconSrc: "images/main/nav_menu_tag_icon.png",
      tagIconClassName: "feed-action-tag",
      isLiked: false,
      isSaved: false,
    };
  }

  changeHeartColor = () => {
    const { isLiked } = this.state;
    this.setState(!isLiked ? { isLiked: true } : { isLiked: false });
  };

  changeTagColor = () => {
    const { isSaved } = this.state;
    this.setState(!isSaved ? { isSaved: true } : { isSaved: false });
  };

  render() {
    const { isLiked, isSaved } = this.state;
    const feedActionItems = [
      {
        divClassName: "feed-action feed-comment",
        imgClassName: "feed-action-comment",
        src: "images/main/nav_menu_comment.png",
        alt: "see comment icon",
      },
      {
        divClassName: "feed-action feed-dm",
        imgClassName: "feed-action-dm",
        src: "images/main/nav_menu_dm_icon.png",
        alt: "dm icon",
      },
    ];
    return (
      <div className="Feed">
        <div className="feed-header">
          <div className="feed-profile-pic-outer-glow">
            <div className="feed-profile-pic-mid-white">
              <div className="feed-profile-pic">
                <a href="#" className="feed-profile-pic">
                  <img
                    className="feed-profile-pic"
                    src={
                      "images/main/user_followers/" +
                      this.props.postedByProfilePic
                    }
                    alt="story user profile"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="feed-profile-id-n-place">
            <a href="" className="feed-profile-id">
              {this.props.postedById}
            </a>
            <p className="feed-place">{this.props.place}</p>
          </div>
          <div className="feed-option">
            <img
              className="feed-option"
              src="images/main/three_dots_horizontal.png"
              alt="feed option button"
            />
          </div>
        </div>
        <div className="feed-main">
          <img
            className="feed-main-pic"
            src={"images/main/feed_pics/" + this.props.pic}
            alt="feed"
          />
        </div>
        <div className="feed-actions">
          <div className="feed-action feed-like">
            <img
              className={
                isLiked ? "feed-action-heart liked" : "feed-action-heart"
              }
              src={
                isLiked
                  ? "images/main/onclick_icons/nav_menu_heart_icon_red.png"
                  : "images/main/nav_menu_heart_icon.png"
              }
              alt="feed like heart icon"
              onClick={this.changeHeartColor}
            />
          </div>
          {feedActionItems.map((el) => {
            return (
              <div className={el.divClassName}>
                <img className={el.imgClassName} src={el.src} alt={el.alt} />
              </div>
            );
          })}
          <div className="feed-action feed-tag">
            <img
              className={isSaved ? "feed-action-tag liked" : "feed-action-tag"}
              src={
                isSaved
                  ? "images/main/onclick_icons/nav_menu_tag_icon_black.png"
                  : "images/main/nav_menu_tag_icon.png"
              }
              alt="tag icon"
              onClick={this.changeTagColor}
            />
          </div>
        </div>
        <div className="feed-likes">
          <div className="focused-liker-img">
            <img
              className="focused-liker-img"
              src={
                "images/main/user_followers/" + this.props.mainLikerProfilePic
              }
              alt="profile of the focused person who liked the feed"
            />
          </div>
          <p className="likes-count">
            Liked by <span>{this.props.mainLikerId}</span> and{" "}
            <span>{this.props.numLikers}</span>
          </p>
        </div>
        <div className="feed-exp-box">
          <a href="" className="feed-profile-id">
            {this.props.postedById}
          </a>
          <p className="feed-exp">{this.props.explanation}</p>
        </div>
        <Comment
          postedTime={this.props.postedTime}
          currentAccountUserId={this.props.currentAccountUserId}
        />
      </div>
    );
  }
}
