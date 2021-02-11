import React from "react";
import {
  followersIds,
  suggestedIds,
  combinedData,
  combinedIds,
} from "./../../Data/RawData";
import "./NavSearch.scss";

export class NavSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: "",
      searchBoxSelected: false,
      searchBoxClassName: "nav-search-box",
      searchIconClassName: "nav-search-icon",
      searchClearIconClassName: "nav-search-clear-icon",
      searchSuggestionsBoxClassName: "nav-search-suggestions-box",
    };
  }

  handleSearchInput = (e) => {
    this.setState({ searchInput: e.target.value });
    this.setState({ searchBoxSelected: true });
  };

  searchBoxSelect = () => {
    this.setState({ searchBoxClassName: "nav-search-box selected" });
    this.setState({ searchIconClassName: "nav-search-icon selected" });
    this.setState({
      searchClearIconClassName: "nav-search-clear-icon selected",
    });
    this.setState({ searchBoxSelected: true });
  };

  searchBoxUnselect = () => {
    this.setState({ searchBoxClassName: "nav-search-box" });
    this.setState({ searchIconClassName: "nav-search-icon" });
    this.setState({ searchClearIconClassName: "nav-search-clear-icon" });
    this.setState({ searchBoxSelected: false });
  };

  clearSearch = () => {
    this.setState({ searchInput: "" });
    this.searchBoxUnselect();
  };

  renderSearchSuggestionItem = (suggestionId) => {
    const findIdPicPath = (suggestionId) => {
      if (followersIds.includes(suggestionId)) {
        return `images/main/user_followers/${combinedData[suggestionId].pic}`;
      } else if (suggestedIds.includes(suggestionId)) {
        return `images/main/suggested/${combinedData[suggestionId].pic}`;
      }
    };
    const searchSuggestionItem = (
      <li className="nav-search-suggestion-item" key={suggestionId}>
        <div className="search-suggested-profile-pic-outer-glow">
          <div className="search-suggested-profile-pic-mid-white">
            <div className="search-suggested-profile-pic">
              <img
                src={findIdPicPath(suggestionId)}
                alt="search suggested user profile"
                className="search-suggested-profile-pic"
              />
            </div>
          </div>
        </div>
        <div className="search-suggested-profile-id-n-detail">
          <p className="search-suggested-profile-id">{suggestionId}</p>
          <p className="search-suggested-profile-detail">
            {combinedData[suggestionId].detail}
          </p>
        </div>
      </li>
    );
    return searchSuggestionItem;
  };

  render() {
    let searchSuggestionCondition =
      this.state.searchInput.length > 0 &&
      this.state.searchBoxSelected === true;
    let searchSuggestionsArr = searchSuggestionCondition
      ? combinedIds.sort().filter((id) => id.includes(this.state.searchInput))
      : [];
    const searchSuggestionItems = searchSuggestionsArr.map((el) =>
      this.renderSearchSuggestionItem(el)
    );
    let suggestionsBoxClassName =
      searchSuggestionsArr.length > 0
        ? "nav-search-suggestions-box active"
        : "nav-search-suggestions-box";
    return (
      <div className="NavSearch">
        <div
          className="nav-search-box-container"
          tabIndex={0}
          onFocus={this.searchBoxSelect}
          onBlur={this.searchBoxUnselect}
        >
          <input
            className={this.state.searchBoxClassName}
            type="text"
            placeholder="Search"
            value={this.state.searchInput}
            onChange={this.handleSearchInput}
          />
          <img
            className={this.state.searchIconClassName}
            src="images/main/nav_search_icon.png"
            alt="search icon"
          />
          <img
            className={this.state.searchClearIconClassName}
            src="images/main/nav_search_clear_icon.png"
            alt="search close icon"
            onClick={this.clearSearch}
          />
        </div>
        <div className={suggestionsBoxClassName}>
          <ul className="nav-search-suggestions">{searchSuggestionItems}</ul>
          <div className="nav-search-suggestions-connector-figure"></div>
        </div>
      </div>
    );
  }
}
