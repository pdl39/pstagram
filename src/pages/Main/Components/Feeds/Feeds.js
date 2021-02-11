/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

import { Feed } from "./Feed/Feed";
import { randomFeedData } from "../Data/RandomData";

import "./Feeds.scss";

export class Feeds extends React.Component {
  constructor() {
    super();
    this.state = {
      feedItems: [],
    };
  }

  componentDidMount = () => {
    this.setState({
      feedItems: randomFeedData,
    });
  };

  render() {
    const { feedItems } = this.state;
    return (
      <div className="Feeds">
        {feedItems.map((feed) => {
          return (
            <Feed
              id={feed.id}
              postedByProfilePic={feed.postedByProfilePic}
              postedById={feed.postedById}
              place={feed.place}
              pic={feed.pic}
              mainLikerProfilePic={feed.mainLikerProfilePic}
              mainLikerId={feed.mainLikerId}
              numLikers={feed.numLikers}
              explanation={feed.explanation}
              postedTime={feed.postedTime}
              isLiked={feed.isLiked}
              isSaved={feed.isSaved}
              currentAccountUserId={this.props.currentAccountUserId}
              currentAccountUser={this.props.currentAccountUser}
            />
          );
        })}
      </div>
    );
  }
}
