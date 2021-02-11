/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import "./CommentItems.scss";

export class CommentItems extends React.Component {
  constructor() {
    super();
    this.state = {
      isLiked: false,
    };
  }

  changeHeartColor = () => {
    const { isLiked } = this.state;
    this.setState(!isLiked ? { isLiked: true } : { isLiked: false });
  };

  render() {
    const { isLiked } = this.state;
    return (
      <li className="CommentItems" key={this.props.id}>
        <a href="" className="feed-profile-id">
          {this.props.postedById}
        </a>
        <p className="feed-comment">{this.props.content}</p>
        <div className="feed-comment-like">
          <img
            className={
              isLiked ? "feed-comment-heart liked" : "feed-comment-heart"
            }
            src={
              isLiked
                ? "images/main/onclick_icons/nav_menu_heart_icon_red.png"
                : "images/main/nav_menu_heart_icon.png"
            }
            alt="feed comment like heart icon"
            onClick={this.changeHeartColor}
          />
        </div>
      </li>
    );
  }
}
