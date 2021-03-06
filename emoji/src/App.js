import React, { PureComponent } from "react";
import Header from "./Header";
import SearchInput from "./SearchInput";
import EmojiResults from "./EmojiResults";
import filterEmoji from "./filterEmoji";
import { BrowserRouter, Route } from "react-router-dom";
import {Emoji}   from './emoji';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      filteredEmoji: filterEmoji("", 20)
    };
  }

  handleSearchChange = event => {
    this.setState({
      filteredEmoji: filterEmoji(event.target.value, 20)
    });
  };

  render() {
    return (
      <div className="container">
      <BrowserRouter>
        <Route path="/" exact>
          <div>  
            <Header />
            <SearchInput textChange={this.handleSearchChange} />
            <EmojiResults emojiData={this.state.filteredEmoji} />
          </div>
        </Route>
        <Route path="/:title">
          <Emoji />
        </Route>
      </BrowserRouter>
      </div>
    );
  }
}

