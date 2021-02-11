/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { CommentItems } from "./CommentItems/CommentItems";
import { commentData } from "../../../Data/RandomData";

import "./Comment.scss";

export class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      commentItems: [],
      commentInput: "",
    };
  }

  componentDidMount = () => {
    const randomIndexFrom = Math.floor(Math.random() * commentData.length);
    const randomCommentNums = Math.floor(Math.random() * 3 + 1);
    const randomIndexTo =
      randomIndexFrom + randomCommentNums > commentData.length
        ? randomIndexFrom
        : randomIndexFrom + randomCommentNums;
    this.setState({
      commentItems: commentData.slice(randomIndexFrom, randomIndexTo),
    });
  };

  handleCommentInput = (e) => {
    this.setState({
      commentInput: e.target.value,
    });
  };

  postComment = (e) => {
    const { commentItems, commentInput } = this.state;
    if (commentInput.length > 0) {
      this.setState({
        commentItems: commentItems.concat({
          id: commentItems.length + 1,
          postedById: this.props.currentAccountUserId,
          content: commentInput,
          isLiked: false,
        }),
        commentInput: "",
      });
    }
  };

  postCommentOnEnter = (e) => {
    if (e.key === "Enter") {
      this.postComment();
    }
  };

  render() {
    const { commentItems, commentInput } = this.state;
    const isCommentPostButtonActive = commentInput.length > 0;
    return (
      <div className="Comment">
        <ul className="feed-comments">
          {commentItems.map((comment) => {
            return (
              <CommentItems
                id={comment.id}
                postedById={comment.postedById}
                content={comment.content}
                isLiked={comment.isLiked}
                key={comment.id}
              />
            );
          })}
        </ul>
        <p className="feed-posted-time">{this.props.postedTime}</p>
        <div className="feed-post-comment">
          <input
            className="post-comment-box"
            type="text"
            placeholder="Add a comment..."
            onChange={this.handleCommentInput}
            onKeyPress={this.postCommentOnEnter}
            value={commentInput}
          />
          <div
            className={
              isCommentPostButtonActive ? "post-button active" : "post-button"
            }
            onClick={this.postComment}
          >
            Post
          </div>
        </div>
      </div>
    );
  }
}
